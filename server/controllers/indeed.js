const { JobSearch } = require('../models/jobSearch');
const axios = require('axios');

const searchAll = (req, res) => {
    let searchParams = new JobSearch(req.query.jobTitle, req.query.location, req.query.distance, req.query.jobType)
    
    axios.get(process.env.INDEED_API, {
        params: searchParams
    })
    .then(({data}) => res.send(data))
    .catch(error => console.log(error))
}

module.exports = {
    searchAll,
}