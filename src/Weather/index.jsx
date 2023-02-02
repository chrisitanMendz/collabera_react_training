import React, { PureComponent, createRef } from 'react';
import Fetch from '../global/TryCatchFetch';
import Clear from './Clear';
import Form from './Form';
import Info from './Info';

class Weather extends PureComponent {
  state = {
    weatherInfo: null,
    error: '',
    isLoading: false, // I only use boolean since I only fetch data in server once.
  };

  inputRef = createRef();

  filterWeather = async e => {
    e.preventDefault();
    const input = this.inputRef.current.value;
    if (input === '') {
      this.setState({ error: 'Input field is required!' });
      return;
    }
    this.setState({ isLoading: true });
    const URL = `http://localhost:3000/weatherList?city=${input.charAt(0).toUpperCase() + input.slice(1)}`;
    const [res, error] = await Fetch(URL);
    if (error) {
      this.setState({ error, weatherInfo: null, isLoading: false });
      return;
    }
    if (res.length === 0) {
      this.setState({ error: 'No data found!', weatherInfo: null, isLoading: false });
      return;
    }

    this.setState({
      weatherInfo: res[0],
      error: '',
      isLoading: false,
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
          <Form search={this.filterWeather} ref={this.inputRef} isLoading={this.state.isLoading} />
          {this.state.weatherInfo !== null && <Info info={this.state.weatherInfo} />}
          {this.state.error && <h1 className="self-center mt-3">{this.state.error}</h1>}
          <Clear reset={this.reset} isLoading={this.state.isLoading} />
        </div>
      </div>
    );
  }
}

export default Weather;
