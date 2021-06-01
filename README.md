# ISSTracker

A simple tracker for the International Space Station (which was not simple at all to make)

Refreshes given a set interval. In this case 5 seconds. Parameters can be adjusted in global variables.
Don't go below 1 or 2 seconds though, as the ISS doesn't even refresh that often so it's a waste of API calls.

If cloning be sure to replace the google maps javascript API key for yours:
**apiKey: process.env.REACT_APP_BOOM_CHACA_LACA, -> apiKey: newApiKeyNumberHere,**

---

**UPDATE:** unfortunately git pages wont allow cross domain references, meaning the Interntational Space Station API (which is hosted on an http domain, and not https) cannot be pulled by git pages.
This can still be run in a local server though
There's also code inside in APP.js in the constructor and fetchCoordinates() that can be uncommented and used to replace the original code, in order to allow CORS anywhere but you gotta go to their website and request temporary permissions first.

---

git clone, git branch, git checkout, npm install, npm start

---

## Libraries

# react

https://www.npmjs.com/package/react

# google-maps-react

https://www.npmjs.com/package/google-maps-react

# Material-UI

https://www.npmjs.com/package/@material-ui/core

# react-share

https://www.npmjs.com/package/react-share

---

## Google Maps Javascript API

https://developers.google.com/maps/documentation/javascript/overview

## ISS API

http://open-notify.org/Open-Notify-API/ISS-Location-Now/

## Basic maps functionallity adapted from "How to Integrate the Google Maps API into React Applications" By Rachael Njeri

https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications

(Fixed a couple issues with deprecated methods and integrated new funcionallity beyond the tutorial scope of course)

---

MIT License

# Acknowledgements

Special thanks to ZeroToMastery Angrei Neagoie whom I've never ever directed a single word to but whose class on Udemy has helped me out so much and my friend Vero who will probably never see this but thanks for helping me get started with that class too :)
