import { WeatherDay } from './WeatherDay'

export class WeatherLocation {
  constructor(data) {
    this.queryCost = data.queryCost
    this.latitude = data.latitude
    this.longitude = data.longitude
    this.resolvedAddress = data.resolvedAddress
    this.address = data.address
    this.timezone = data.timezone
    this.tzoffset = data.tzoffset
    this.description = data.description
    this.days = data.days ? data.days.map(day => new WeatherDay(day)) : []
    // TODO add additional properties if needed
  }
}