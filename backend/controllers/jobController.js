const Job = require('../models/Job');


const createJob = async (req, res) => {
    try {
        const {
            companyName,
            jobRole,
            status,
            jobType,
            location,
            salary,
            appliedDate,
            jobLink,
            notes,
        } = req.body;

        // Validation
        if (!companyName || !jobRole || !appliedDate) {
            return res.status(400).json({
                message: 'Please provide company name, job role, and applied date',
            });
        }

        const job = await Job.create({
            companyName,
            jobRole,
            status: status || 'Applied',
            jobType: jobType || 'Full-time',
            location,
            salary,
            appliedDate,
            jobLink,
            notes,
            user: req.user._id,
        });

        res.status(201).json(job);
    } catch (error) {
        console.error('Create job error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const getJobs = async (req, res) => {
    try {
        const { search, status, jobType, sort } = req.query;

     
        const queryObject = { user: req.user._id };

        // Search by company name or job role
        if (search) {
            queryObject.$or = [
                { companyName: { $regex: search, $options: 'i' } },
                { jobRole: { $regex: search, $options: 'i' } },
            ];
        }

        // Filter by status
        if (status && status !== 'all') {
            queryObject.status = status;
        }

        // Filter by job type
        if (jobType && jobType !== 'all') {
            queryObject.jobType = jobType;
        }

        // Build sort
        let sortOption = { createdAt: -1 }; // Default: newest first

        if (sort === 'oldest') {
            sortOption = { createdAt: 1 };
        } else if (sort === 'a-z') {
            sortOption = { companyName: 1 };
        } else if (sort === 'z-a') {
            sortOption = { companyName: -1 };
        }

        const jobs = await Job.find(queryObject).sort(sortOption);

        // Get stats
        const stats = await Job.aggregate([
            { $match: { user: req.user._id } },
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 },
                },
            },
        ]);

        const statsObject = {
            total: 0,
            Applied: 0,
            Interview: 0,
            Offer: 0,
            Rejected: 0,
        };

        stats.forEach((item) => {
            statsObject[item._id] = item.count;
            statsObject.total += item.count;
        });

        res.json({ jobs, stats: statsObject });
    } catch (error) {
        console.error('Get jobs error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};



const getJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Check ownership
        if (job.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to access this job' });
        }

        res.json(job);
    } catch (error) {
        console.error('Get job error:', error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};



const updateJob = async (req, res) => {
    try {
        let job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Check ownership
        if (job.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to update this job' });
        }

        const {
            companyName,
            jobRole,
            status,
            jobType,
            location,
            salary,
            appliedDate,
            jobLink,
            notes,
        } = req.body;

        // Validation
        if (!companyName || !jobRole || !appliedDate) {
            return res.status(400).json({
                message: 'Please provide company name, job role, and applied date',
            });
        }

        job = await Job.findByIdAndUpdate(
            req.params.id,
            {
                companyName,
                jobRole,
                status,
                jobType,
                location,
                salary,
                appliedDate,
                jobLink,
                notes,
            },
            { new: true, runValidators: true }
        );

        res.json(job);
    } catch (error) {
        console.error('Update job error:', error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const deleteJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Check ownership
        if (job.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to delete this job' });
        }

        await Job.findByIdAndDelete(req.params.id);

        res.json({ message: 'Job removed successfully' });
    } catch (error) {
        console.error('Delete job error:', error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    createJob,
    getJobs,
    getJob,
    updateJob,
    deleteJob,
};
