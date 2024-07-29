import React from 'react'
import JobCategory from './JobCategory'
import ExploringBanner from './ExploringBanner'
import LocationJobBanner from './LocationJobBanner'
import TopCompanies from './TopCompanies'
import FeaturedJobs from './FeaturedJobs'
import LandingPage from './LandingPage'


const Body = () => {
    return (
        <div className='mx-8 my-8'>
            <LandingPage />
            <JobCategory />
            <ExploringBanner />
            <LocationJobBanner />
            <TopCompanies />
            <FeaturedJobs />
        </div>
    )
}

export default Body