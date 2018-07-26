const { JobSearch } = require('../models/jobSearch');
const axios = require('axios');

const searchAll = (req, res) => {
    let searchParams = new JobSearch(req.query.jobTitle, req.query.location, req.query.distance, req.query.jobType)
    
    axios.get(process.env.INDEED_API, {
        params: searchParams
    })
    .then(({data}) => res.send(formatResponse(data.results)))
    .catch(error => console.log(error))
}

const formatResponse = (data) => {
    let formattedJobs = []
    data.forEach(job => {
        formattedJobs.push(
            {
                jobTitle: job.jobtitle,
                company: job.company,
                jobKey: job.jobkey,
                latitude: job.latitude,
                longitude: job.longitude,
                url: job.url,
                location: job.formattedLocation,
                posted: job.formattedRelativeTime
            }
        )
    })
    return formattedJobs
}

module.exports = {
    searchAll,
}


// job title, Company, latitude, longitude, jobkey, url, formattedLocation, formattedRelativeTime