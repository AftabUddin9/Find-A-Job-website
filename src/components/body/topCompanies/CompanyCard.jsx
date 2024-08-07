import React from 'react'
import widget from '../../../assets/widget.jpg'


const CompanyCard = () => {
    const CardContent = [
        { title: "MNCs", status: "1.9K+" },
        { title: "Edtech", status: "151" },
        { title: "Healthcare", status: "559" },
        { title: "Unicorns", status: "100" },
        { title: "Internet", status: "194" },
    ];
    return (
        <div className='flex flex-row gap-5'>
            {CardContent.map((content, index) => {
                return (
                    <div key={index} className='border rounded-xl shadow-sm hover:shadow-xl p-4'>
                        <div className='pb-4'>
                            <div className='flex flex-row items-center'>
                                <div className='text-lg font-semibold'>{content.title}</div>
                                <svg
                                    className={`w-5 h-5 ml-2 fill-current text-gray-500`}
                                    viewBox="0 0 20 20">
                                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                                </svg>
                            </div>
                            <div className='text-gray-500 text-xs'>{content.status} are actively hiring</div>
                        </div>

                        {/* widgets */}
                        <div className='flex gap-3 p-1'>
                            <div className='border rounded p-1 h-10 w-10'>
                                <img src={widget} alt='company logo' />
                            </div>
                            <div className='border rounded p-1 h-10 w-10'>
                                <img src={widget} alt='company logo' />
                            </div>
                            <div className='border rounded p-1 h-10 w-10'>
                                <img src={widget} alt='company logo' />
                            </div>
                            <div className='border rounded p-1 h-10 w-10'>
                                <img src={widget} alt='company logo' />
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default CompanyCard