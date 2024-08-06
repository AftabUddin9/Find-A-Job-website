import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faDatabase, faBuilding, faRocket, faPiggyBank, faHospital, faUserTie, faCode, faBullhorn, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const jobCategories = [
    { type: 'Fresher', icon: faHome },
    { type: 'Remote', icon: faBriefcase },
    { type: 'MNC', icon: faBuilding },
    { type: 'Startup', icon: faRocket },
    { type: 'Banking & Finance', icon: faPiggyBank },
    { type: 'Hospital', icon: faHospital },
    { type: 'Software & IT', icon: faCode },
    { type: 'Marketing', icon: faBullhorn }
    // { type: 'HR', icon: faUserTie },
    // { type: 'Data Science', icon: faDatabase },
];

const CategoryTags = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 md:mx-24 max-w-[1920px]">
            {jobCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-2 md:p-4 bg-white border-[1px] rounded-lg cursor-pointer">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 border-2 bg-[#FEFBEF] border-[#FEFBEF] rounded-full mr-2 md:mr-4">
                            <FontAwesomeIcon icon={category.icon} className="text-gray-700 text-md" />
                        </div>
                        <span className="text-sm md:text-lg font-medium">{category.type}</span>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                </div>
            ))}
        </div>
    );
};

export default CategoryTags;
