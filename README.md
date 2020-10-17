# Happy

<p align="center">
   <img src=".github/happy.jpg" width="600" alt="logo from Happy"/>
</p>


This project is part of the [Next Level Week 3] course (https://rocketseat.com.br/) and consists of a website where we can search for orphanages that may receive some visits. Users can register orphanages as well. We have a map where it will be possible to see the registered orphanages.

We mainly use [React](https://reactjs.org), [React Native](https://reactnative.dev/) and [SQLite](https://www.sqlite.org). 

I did a 3D version from the children and did an option to change from 2 themes: Happy and Darkky.

<p align="center">
   <img src=".github/preview.gif" width="600" alt="logo from Happy"/>
</p>


# Guide

* [Features](#features)
* [Installation](#installation)
* [Using](#using)
* [Technologies](#technologies)
* [Future Implementations](#future-implementations)


# Features

*  Users search for orpahages.
*  Users can register new orphanages with fotos, using map to record position.
*  **PLUS**: Users can change theme style .



# Installation

**You will need install:**

 [Node.js](https://nodejs.org/en/download/) <br />
 [Yarn](https://yarnpkg.com/) 

**Cloning repository**

```git clone https://github.com/cledman/-nlw3```

**Install dependencies for Backend, on backend folder**

```yarn  install```

**Install dependencies for Web on frontend folder**

```yarn  install```

**Install dependencies for Mobile on mobile folder**

```yarn  install```

**Enviroment variables**

There´s an example from the enviroment variables available at ```.env.example```


**Now we have to create the database. Go to the Backend folder and:**

yarn typeorm migration:run


ATENTION: Before run "yarn" make sure the "base url" from api.ts (from SRC/SERVICES/  from mobile folder) is set on same port as the backend one.


# Using


**Go to the Backend folder and:**

```yarn dev```

**Go to the Web folder and:**

```yarn start```

**Go to the Mobile folder and:**

```yarn start```


# Technologies

* [NodeJS](https://nodejs.org/en/) to handle the server, 
* [React](https://reactjs.org) and [React Native](https://reactnative.dev/) to handle the rendering
* [SQLite](https://www.sqlite.org) to record data
* [KnexJS](http://knexjs.org/) to handle data,
* [Typescript](https://www.typescriptlang.org/)
* [ExpressJS](https://expressjs.com/), 
* [Typeorm](https://typeorm.io/#/),
* [Expo](https://expo.io/),
* [Leaflet](https://leafletjs.com/),
* [Axios](https://github.com/axios/axios)

# Future Implementations

We could create admin page to login and register users;
We could add some splash screen on mobile version;
The system could open on user´s location by default.

Thanks to [Diego Fernantes](https://github.com/diego3g) from [RocketSeat](https://rocketseat.com.br/).
##
