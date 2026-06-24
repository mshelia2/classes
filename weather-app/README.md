# Weather App

A lightweight weather application that shows current conditions and forecast data for a chosen location.

## What this app does

- Displays current weather for a city or GPS location
- Shows temperature, humidity, wind, and conditions
- Includes a simple forecast view for the next days
- Uses a weather API to fetch live data

## Why build it

- Great beginner-friendly project for practicing frontend development
- Teaches API integration, state management, and user input handling
- Useful for learning responsive UI patterns and asynchronous data loading

## Getting started

### Prerequisites

- Node.js and npm installed
- A weather API key (for example, OpenWeatherMap, WeatherAPI, or similar)

### Install dependencies

```bash
npm install
```

### Configure the API key

Create a `.env` file in the project root and add your API key. Example:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

If your app uses a different environment variable format, adjust accordingly.

### Run the app

```bash
npm start
```

Then open the local development URL shown in the terminal.

## Project structure

- `src/` — application source code
- `public/` — static assets
- `README.md` — this file
- `.env` — local environment variables (not committed)

## Core features to build

- Search form for city name or postal code
- Current weather display card
- Weather details like humidity, pressure, wind, sunrise/sunset
- Optional forecast list or chart
- Error handling for invalid input and network issues

## Next improvements

- Add location detection using the browser Geolocation API
- Save recent searches in local storage
- Add unit switching between Celsius and Fahrenheit
- Improve UI with animated weather icons

## License

This project is open source. Add a license file if needed.
