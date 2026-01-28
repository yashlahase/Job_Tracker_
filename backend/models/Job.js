const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: [true, 'Please provide company name'],
            trim: true,
            maxlength: [100, 'Company name cannot be more than 100 characters'],
        },
        jobRole: {
            type: String,
            required: [true, 'Please provide job role'],
            trim: true,
            maxlength: [100, 'Job role cannot be more than 100 characters'],
        },
        status: {
            type: String,
            enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
            default: 'Applied',
        },
        jobType: {
            type: String,
            enum: ['Full-time', 'Internship', 'Remote', 'Contract'],
            default: 'Full-time',
        },
        location: {
            type: String,
            trim: true,
            maxlength: [100, 'Location cannot be more than 100 characters'],
        },
        salary: {
            type: String,
            trim: true,
        },
        appliedDate: {
            type: Date,
            required: [true, 'Please provide applied date'],
        },
        jobLink: {
            type: String,
            trim: true,
        },
        notes: {
            type: String,
            maxlength: [1000, 'Notes cannot be more than 1000 characters'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Index for faster queries
jobSchema.index({ user: 1, companyName: 1 });
jobSchema.index({ user: 1, status: 1 });
jobSchema.index({ user: 1, jobType: 1 });

module.exports = mongoose.model('Job', jobSchema);
