import React from 'react';

const SearchBar = () => {
    return (
        <div className="bg-white shadow-violet rounded-full p-2 flex items-center space-x-4">
            {/* Keyword Input */}
            <div className="flex-grow">
                <input
                    type="text"
                    placeholder="Titles/Companies/Skills"
                    className="w-full px-4 py-2 text-[#785fbe] placeholder-[#785fbe] rounded focus:outline-none "
                />
            </div>
            <div>|</div>

            {/* Job Type Dropdown */}
            <div className="flex-grow">
                <select className="w-full px-4 py-2 text-[#785fbe] bg-white focus:outline-none">
                    <option value="">Job Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="freelance">Freelance</option>
                </select>
            </div>
            <div>|</div>

            {/* Location Dropdown */}
            <div className="flex-grow">
                <select className="w-full px-4 py-2 text-[#785fbe] bg-white focus:outline-none">
                    <option value="">Location</option>
                    <option value="new-york">Dhaka</option>
                    <option value="san-francisco">Chittagong</option>
                    <option value="los-angeles">Sylhet</option>
                    <option value="chicago">Rajshahi</option>
                    <option value="remote">Remote</option>
                </select>
            </div>

            {/* Search Button */}
            <div>
                <button className="font-bold bg-[#785fbe] text-white px-8 py-2 rounded-full focus:outline-none hover:bg-indigo-600">
                    Find Job
                </button>
            </div>
        </div>
    );
};

export default SearchBar;