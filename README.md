## Project Overview

The aim of this project was to convert a static webpage lacking responsiveness and accessibility to a mobile-ready web application designed to be responsive on different sized displays and accessible for screen reader use. 
Responsiveness is achieved with plain CSS (CSS Grid), media queries and use of responsive images.
A service worker is used to cache requests to all of the site’s assets to create a seamless offline experience for the site's users.

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/) to display the maps.

### ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

## Run app locally
1. Clone the repo
```
git clone https://github.com/Wryhder/FEND-Restaurant-Reviews-App
```
2. Spin up a local server (as shown below, for example) or open index.html in a browser.

**Extra Note 1:**

In this repo's folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.
In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

With your server running, visit the site: http://localhost:8000

**Extra Note 2:**

For any issues with your local server accessing the restaurant data, `/data/restaurants.json`, make sure the database url and port, as specified in `/js/constants.js`, is modified to fit your local server configuration.

