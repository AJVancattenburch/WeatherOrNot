export class WeatherHour {
  constructor(data) {
    this.datetime = data.datetime
    this.datetimeEpoch = data.datetimeEpoch
    this.temp = data.temp
    this.feelslike = data.feelslike
    this.humidity = data.humidity
    this.dew = data.dew
    this.precip = data.precip
    this.precipprob = data.precipprob
    this.snow = data.snow
    this.snowdepth = data.snowdepth
    this.preciptype = data.preciptype
    this.windgust = data.windgust
    this.windspeed = data.windspeed
    this.winddir = data.winddir
    this.pressure = data.pressure
    this.visibility = data.visibility
    this.cloudcover = data.cloudcover
    this.solarradiation = data.solarradiation
    this.solarenergy = data.solarenergy
    this.uvindex = data.uvindex
    this.severerisk = data.severerisk
    this.conditions = data.conditions
    this.icon = data.icon
    this.stations = data.stations || []
    this.source = data.source
    // TODO add additional properties if needed
  }
}