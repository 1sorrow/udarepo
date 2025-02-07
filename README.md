# NASA Asteroid Tracker

A simple JavaScript application that fetches and analyzes asteroid data using NASA's Near Earth Object (NEO) API.

## Features
- Fetches real-time asteroid data from NASA's API.
- Displays key asteroid information (size, speed, closest approach date, etc.).
- Identifies potentially hazardous asteroids.
- Provides basic statistical analysis on recent asteroid activity.

## Technologies Used
- JavaScript (Vanilla JS, no frameworks)
- NASA's NEO API
- Fetch API for handling requests
- HTML & CSS (for visualization, if applicable)

## Setup & Installation
1. **Get a NASA API Key:**
   - Go to [NASA API Portal](https://api.nasa.gov/) and generate an API key.

2. **Clone this repository:**
   ```bash
   git clone https://github.com/1sorrow/udarepo.git
   cd udarepo
   ```

3. **Edit the API Key in the Code:**
   Open your JavaScript file and replace `YOUR_API_KEY_HERE` with your actual NASA API key.

## Usage
- The application automatically fetches asteroid data for the current date.
- You can modify the date range in the JavaScript file to fetch data for a different period.
- The console will log detailed asteroid data for further analysis.

## Example API Request
```js
fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD&api_key=YOUR_API_KEY_HERE')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
```

## Future Improvements
- Improved UI with charts and graphs.
- Sorting and filtering options for asteroid data.
- Historical asteroid impact analysis.

## License
This project is licensed under the MIT License.

---
Made with 🚀 by sorrow

