import { WeatherHour } from './WeatherHour'

export class WeatherDay {
  constructor(data) {
    this.datetime = data.datetime
    this.datetimeEpoch = data.datetimeEpoch
    this.tempmax = data.tempmax
    this.tempmin = data.tempmin
    this.temp = data.temp
    this.feelslikemax = data.feelslikemax
    this.feelslikemin = data.feelslikemin
    this.feelslike = data.feelslike
    this.dew = data.dew
    this.humidity = data.humidity
    this.precip = data.precip
    this.precipprob = data.precipprob
    this.precipcover = data.precipcover
    this.preciptype = data.preciptype
    this.snow = data.snow
    this.snowdepth = data.snowdepth
    this.windgust = data.windgust
    this.windspeed = data.windspeed
    this.winddir = data.winddir
    this.pressure = data.pressure
    this.cloudcover = data.cloudcover
    this.visibility = data.visibility
    this.solarradiation = data.solarradiation
    this.solarenergy = data.solarenergy
    this.uvindex = data.uvindex
    this.severerisk = data.severerisk
    this.sunrise = data.sunrise
    this.sunriseEpoch = data.sunriseEpoch
    this.sunset = data.sunset
    this.sunsetEpoch = data.sunsetEpoch
    this.moonphase = data.moonphase
    this.conditions = data.conditions
    this.description = data.description
    this.icon = data.icon
    this.stations = data.stations
    this.source = data.source
    this.hours = data.hours ? data.hours.map(hour => new WeatherHour(hour)) : []
    // TODO add additional properties if needed
  }
}