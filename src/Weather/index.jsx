import React, { PureComponent, createRef } from 'react';
import Fetch from '../global/TryCatchFetch';
import Clear from './Clear';
import Form from './Form';
import Info from './Info';

class Weather extends PureComponent {
  state = {
    weatherInfo: null,
    error: '',
  };

  inputRef = createRef();

  filterWeather = async e => {
    e.preventDefault();
    const input = this.inputRef.current.value;
    if (input === '') {
      return;
    }
    const URL = `http://localhost:3000/weatherList?city=${input.charAt(0).toUpperCase() + input.slice(1)}`;
    const [res, error] = await Fetch(URL);
    if (error) {
      this.setState({ error, weatherInfo: null });
      return;
    }
    if (res.length === 0) {
      this.setState({ error: 'No data found!', weatherInfo: null });
      return;
    }

    this.setState({
      weatherInfo: res[0],
      error: '',
    });
    this.inputRef.current.value = '';
  };

  reset = () => {
    this.setState({ weatherInfo: null, error: '' });
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col min-w-[300px]">
          <Form search={this.filterWeather} ref={this.inputRef} />
          {this.state.weatherInfo !== null && <Info info={this.state.weatherInfo} />}
          {this.state.error && <h1 className="self-center mt-3">{this.state.error}</h1>}
          <Clear reset={this.reset} />
        </div>
      </div>
    );
  }
}

export default Weather;
