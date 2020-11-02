# Weather-app
This is a Weather Application built using Node.js, Express, hbs is used as the templating engine to obtain weather information.

Check out the Live Demo -  https://ashish-weather-website.herokuapp.com/



## Getting Started

- Developed a web application where users can type in a street address, city name or zip code and get real-time weather data instantly displayed on their screen. 

- Integrated OpenWeatherMap API for fetching the location coordinates and weather data of the given location is determined using Map Box Api.

1. Firstly it calls Map Box Api for geo information of entering location.

2. Then it calls OpenWeatherMap Api with geo location information for weather information.

`Give Address -> Get Weather data address->Geocode(API)->OpenWeatherMapAPI->Output`

## Run locally

1. To Use: Clone the repository. CD to the repository folder and run the following command in your terminal:
git clone https://github.com/ashishshah1995/node-weather-website

2. Now you need to install the dependencies

  `npm install`

3. Now you can run it locally

  `node src/app.js`

4. Open ```http://localhost:3000``` to view it in the browser.










