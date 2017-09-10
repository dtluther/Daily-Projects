import React from "react";
import { API_WEATHER } from "./key";

class Weather extends React.Component {
  constructor() {
    super();

    this.latitude = 0;
    this.longitude = 0;

    this.state = {
      city: "",
      temperature: ""
    };

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log(this.latitude, this.longitude);
      this.fetchWeather();
    });
  }

  fetchWeather() {
    let apiWeather = API_WEATHER;
    let xmlhttp = new XMLHttpRequest();
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this
      .latitude}&lon=${this.longitude}&APPID=${apiWeather}`;

    xmlhttp.onreadystatechange = () => {
      if (
        xmlhttp.readyState === XMLHttpRequest.DONE &&
        xmlhttp.status === 200
      ) {
        const response = JSON.parse(xmlhttp.response);
        this.setState({
          city: response.name,
          temperature: Math.round(response.main.temp - 273.15)
        });
      }
    };

    xmlhttp.open("GET", url);
    xmlhttp.send();

    // const wReq = new XMLHttpRequest();
    //
    // const getResponse = () => {
    //   const response = JSON.parse(wReq.response);
    //
    //   this.setState({
    //     city: response.name,
    //     temperature: Math.round(response.main.temp - 273.15)
    //   });
    // };
    //
    // wReq.addEventListener("load", getResponse);
    // wReq.open(
    //   "GET",
    //   `http://api.openweathermap.org/data/2.5/weather?lat=${this
    //     .latitude}&lon=${this.longitude}&appid=9c6b279f1c36ece02e7dcff91eb6f67c`
    // );
    // wReq.send();
  }

  render() {
    const { city, temperature } = this.state;

    return (
      <div className="parent">
        <h1>Hi Dillon!</h1>
        <section className="citytemp">
          <span>
            <p>City:</p>
            <br />
            <p>Temperature:</p>
          </span>
          <span>
            <p>{city}</p>
            <br />
            <p>{temperature} °C</p>
          </span>
        </section>
      </div>
    );
  }
}

export default Weather;
