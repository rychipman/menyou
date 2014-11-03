Menyou
======

###Ryan Chipman, Danielle Man, Harihar Subramanyam, Tawanda Zimuto

A menu for you.

##Directory Structure

The meat of the app is divided into two parts, the client and the server, each in the correspondingly named folders.

###Server

- **app/** - the folder containing the key server-side code
  - **controllers/** - the folder containing the controllers
  - **models/** - the folder containing the models
  - **config/** - the folder containing configurations for the server, db, etc.
  - **app.js** - the main file for the express app

- **tests** - the folder containing all tests for the server/API

- **bin/** - the folder for scripts/executables that may need to be run externally
  - **www** - node code for starting the server. 'node server/bin/www' will start the server
  - **test** - run all tests and output results

###Client

- **app/** - the folder containing the angular app's key components
  - **/shared** - the folder containing directives that will be reused throughout the app
  - **components/** - the folder containing the sections of the angular app, each section with its own views, controllers, and services. each component is like a little mini angular app in and of itself.
  - **app.module.js** - file handling the setup of the app, loading Angular dependencies, etc.
  - **app.routes.js** - file handling angular routes & route configurations
- **assets/** - folder containing all static assets used for front-end purposes
  - **js/** - folder containing javascript files not related to Angular code. This could be transitions, animations, etc.
  - **style/** - folder containing stylesheets
    - **stylus/** - folder containing the stylus sheets
      - **style.styl** - the main stylus file that will be compiled into css. Any other stylus files written outside of here should be imported into this.
    - **css/** - folder containing the css compiled from the stylus sheets
      - **style.css** - the compiled css version of style.styl
  - **img/** - folder containing images & other graphics
- **index.html** - the main file that gets rendered to display the angular app. primarily just loads in all the other angular elements that make up the app.

###Documentation

Documentation can be found in the **/doc** directory.

##Accessing

The app can be accessed at 104.236.61.65:8080

All routes matching 104.236.61.65:8080/api/\* are handled as API requests.
All other routes are handled as front-end requests.