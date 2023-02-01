import React, { PureComponent, createRef } from 'react';
import Clear from './Clear';
import Form from './Form';
import Info from './Info';

class Weather extends PureComponent {
  state = {
    weatherInfo: null,
  };

  inputRef = createRef();

  filterWeather = async e => {
    e.preventDefault();

    const input = this.inputRef.current.value;

    if (input === '') {
      return;
    }
    const URL = `http://localhost:3000/weatherList?city=${input.charAt(0).toUpperCase() + input.slice(1)}`;
    const [res, error] = await this.tryCatchFetch(URL);
    if (error) {
      throw new Error(error);
    }
    if (res.length !== 0) {
      this.setState({
        weatherInfo: res[0],
      });
      this.inputRef.current.value = '';
      return;
    }
    alert('City does not exist!');
  };

  reset = () => {
    this.setState({ weatherInfo: null });
    this.inputRef.current.value = '';
  };

  tryCatchFetch = async (url, params = {}) => {
    try {
      const res = await fetch(url, params);
      if (res.ok) {
        return [await res.json(), null];
      }
      return [null, await res.json()];
    } catch (error) {
      return [null, error];
    }
  };

  render() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col min-w-[300px]">
          <Form search={this.filterWeather} ref={this.inputRef} />
          {this.state.weatherInfo !== null && <Info info={this.state.weatherInfo} />}
          <Clear reset={this.reset} />
        </div>
      </div>
    );
  }
}

export default Weather;
