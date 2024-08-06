import React from 'react';
import MultipleChoiceDropdown from './MultipleChoiceDropdown';

const SearchBar = () => {
    const jobTypes = [
        { value: "full-time", label: "Full-time" },
        { value: "part-time", label: "Part-time" },
        { value: "contract", label: "Contract" },
        { value: "internship", label: "Internship" },
        { value: "freelance", label: "Freelance" },
    ];

    const locations = [
        { value: "Dhaka", label: "Dhaka" },
        { value: "Chittagong", label: "Chittagong" },
        { value: "Sylhet", label: "Sylhet" },
        { value: "Rajshahi", label: "Rajshahi" },
        { value: "Remote", label: "Remote" },
    ];

    return (
        <div className="bg-white shadow-violet rounded-full p-3 flex items-center space-x-4">
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
            <MultipleChoiceDropdown header="Job Type" items={jobTypes} />

            {/* option selection type
            <div className="flex-grow">
                <select className="w-full px-4 py-2 text-[#785fbe] bg-white focus:outline-none">
                    <option value="">Job Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="freelance">Freelance</option>
                </select>
            </div> */}

            <div>|</div>

            {/* Location Dropdown */}
            <MultipleChoiceDropdown header="Location" items={locations} />

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