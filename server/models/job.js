class Job {
  constructor(title, company, job_key, longitude, latitude, url){
    this.title = title;
    this.company = company;
    this.job_key = job_key;
    this.longitude = longitude;
    this.latitude = latitude;
    this.url = url
  }

  get longAndLat() {
    return {
      lon: this.longitude,
      lat: this.latitude,
    }
  }
}

module.exports = {
  Job
}
