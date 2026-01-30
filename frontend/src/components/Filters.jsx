const Filters = ({ filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

       return (
        <div className="filter-bar">
            <div className="grid-filters">
                {/* Search */}
                <div className="search-wrapper">
                    <input
                        type="text"
                        name="search"
                        value={filters.search}
                        onChange={handleChange}
                        placeholder="Search company or role..."
                        className="search-input"
                    />
                </div>

                {/* Status Filter */}
                <div>
                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleChange}
                        className="select-field"
                    >
                        <option value="all">All Statuses</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                {/* Job Type Filter */}
                <div>
                    <select
                        name="jobType"
                        value={filters.jobType}
                        onChange={handleChange}
                        className="select-field"
                    >
                        <option value="all">All Job Types</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>

            
                {/* Sort */}
                <div>
                    <select
                        name="sort"
                        value={filters.sort}
                        onChange={handleChange}
                        className="select-field"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="a-z">Company (A-Z)</option>
                        <option value="z-a">Company (Z-A)</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default Filters;