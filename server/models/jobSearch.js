class JobSearch{
    constructor(jobTitle, location, radius, jobType){
        this.q = jobTitle,
        this.l = location,
        this.radius = radius,
        this.jt = jobType,
        this.format = "json",
        this.st = "jobsite",
        this.limit = 30,
        this.fromage = "any", 
        this.highlight = 1,
        this. latlong = 1, 
        this.v = 2,
        this.publisher = process.env.INDEED_PUBLISHER_KEY
    }
}

module.exports = {
    JobSearch
}