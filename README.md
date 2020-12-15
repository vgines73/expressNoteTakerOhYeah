# Express Note Taker Oh Yeah

## Description:

To modify a starter code to create an application called Note Taker that can be used to write and save notes. Front end has already been created. Built the back end, connect the two, and then deploy the entire application to Heroku. In order for this app to run, I needed to install express. In the assignment, we needed to create a unique id for each note, and they suggested looking into another npm package. I ended up using nano id for creating the unique id so i also installed it as well.  After installation i created a basic local host server and then create javascript routes for the back and front end. With the help of Postman, I was able to connect the dots so to speak on creating routes to get the notes, make a new note, and delete a note all in the api route. As for the client route, I just had to make sure it followed the corrected path and connected index.js, style.css, and both HTML pages. Then pretty much working out the kinks, seeing a few bugs since it said we were only supposed to work on the back end. Noticed a few errors in the front end in the index.js. Click on Challenges on Table of Contents to see the issues. In the end, the user is able to create and save notes. The save note will appear on the left side of the page when they click the save icon. The user is also able to click on a saved note and see it append on the right side, the user can also click on the write icon and enter a new note, and the user is able to delete a saved note after clicking the trash can icon.

## Table of Contents:

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing) 

  * [Test Instructions](#Test-Instructions)

  * [Screenshots](#Screenshots)

  * [Questions](#Questions)

  * [Challenges](#Challenges)

  ## Installation:
Must install: express and nano id.

    npm install express
    npm install nanoid

  ## Usage:
HTML, CSS, BOOTSTRAP, Font Awesome, JS, Node, Postman, and Heroku.

  ## License:
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

  ## Contributing:
  Vincent Gines. Ask for a Pull Request from my Github profile below in the questions section if you would like to contribute to my generator.

  ## Test Instructions:
  First, go to my GitHub Profile and clone my express note taker repository onto your computer using gitbash. Then open up your terminal and install express by typing: npm install express. Then install nano id by typing: npm install nanoid. Once installed, type in your termial: node server.js. This will open up the note taker on local host and user will be able to enter notes, click on the save icon to save the note on the left side, able to click on previous notes to render on the right side of the page, click on the write icon to bring back a empty field to enter a new note title and the note’s text in the right-hand column, and delete any previous notes.

## Challenges:
The instructions, stated we would be only working on the back end, but there was a few bugs in the front end in index.js. line 58 and 59 were commented out in order for me to edit saved notes. Not only that, I could also now click on the write icon and can now write new notes after clicking the write icon. On line 62, noteText.value = activeNote.title, when it should've been noteText.value = activeNote.text; Doing this I was now able to see the actual saved note on the right side of the app. I'm not to big on doing the bonuses on the assigment, but because I finished early I decided to give it a shot. 



  ---
  ## Questions:

Link to my Github profile: https://github.com/vgines73

Link to my Express Note Taker: https://github.com/vgines73/expressNoteTakerOhYeah

You can reach me by email at: vgines73@gmail.com

© 2020 Vincent Gines. All rights reserved. 


