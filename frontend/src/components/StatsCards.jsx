const StatsCards = ({ stats }) => {
    const cards = [
        {
            label: 'Total Jobs',
            value: stats.total,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            gradient: 'from-indigo-500 to-purple-500',
            bgGlow: 'shadow-indigo-500/20',
        },
        {
            label: 'Applied',
            value: stats.Applied,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-500',
            bgGlow: 'shadow-blue-500/20',
        },
        {
            label: 'Interview',
            value: stats.Interview,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            gradient: 'from-amber-500 to-orange-500',
            bgGlow: 'shadow-amber-500/20',
        },
        {
            label: 'Offer',
            value: stats.Offer,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-emerald-500 to-green-500',
            bgGlow: 'shadow-emerald-500/20',
        },
        {
            label: 'Rejected',
            value: stats.Rejected,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-red-500 to-pink-500',
            bgGlow: 'shadow-red-500/20',
        },
    ];

    return (
        <div className="grid-stats">
            {cards.map((card) => (
                <div
                    key={card.label}
                    className={`stat-card ${card.bgGlow}`}
                >
                    <div className="stat-header">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${card.gradient}`}>
                            {card.icon}
                        </div>
                    </div>
                    <p className="stat-value">{card.value || 0}</p>
                    <p className="stat-label">{card.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
