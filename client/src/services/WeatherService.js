import { api } from "./AxiosService.js"
/*
Getter from backend:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Boise%2C%20Idaho?unitGroup=us&key=CH6UVURTE5CUDX485B5TZ7TK7&contentType=json
*/
class WeatherService {
  async getWeather(city, state) {
    const res = await api.get(`weather/${city},%20${state}`)
    return res.data
  }
}

export const weatherService = new WeatherService()