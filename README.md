# Harry Potter Spell Game

[Link to the live project here](https://breakellrz.github.io/Harry_Potter_Quiz/)

- Harry Potter's Spell Game is a game based on the Rock, Paper, Scissors, Lizard, Spock game. It is the same principle and has the same rules. Certain spells beat other spells. In this game, you are in a battle arena and are against Draco Malfoy the character in the Harry Potter movies. The background image is an AI image of Hogwarts. The website has three pages, 'Home', 'Rules', and 'Battle arena'. The 'Home' page consists of a start and rules button, along with an input field for users to put in their username. The 'Rules' page consists of all the rules for the game, along with a back button to the 'Home' page. The 'Game Arena' consists of pressable buttons for the user to choose which spell he is going to use against the computer (Draco), a score section to show the user who is winning the battle, and a 'Home' button to return the user to the main 'Home' screen. The game is completely random just like Rock, Paper, Scissors, Lizard, Spock. It is based of luck, but I hope the users have more fun with it because of the Harry Potter theme. To win the user has to reach a score of 10 before the computer (Draco) or else the user will lose and the scores will be reset. There is an audio button in the footer for users to get immersed in the game more with some magical music.

![AMiResponsive picture of the different webpages on different screen sizes ](documentation/am_i_responsive.png)


## Goals of this project

### Site onwer goals

- To make a fun easy to play game for the user.
- To really make the user feel like they are playing a Harry Potter game.
- To Proivde a clean and easy to navigate website.

### External user goals

- To enjoy a Harry Potter themed game
- To enjoy the music and get immersed in a fun game.
- To defeat Draco

## Design of the project 

### Strategy plane 

My overall strategy was to make a good looking website with a functioning game based on Harry Potter.

- The website was aimed towards Harry Potter fans of all ages.
- I wanted the content to be relevant to the theme (Harry Potter).
- My strategy was to get Harry Potter fans to enjoy a easy to play game with an immersive experience with the audio music in the background and a cool AI background of Hogwarts to set the scene.


### Scope plane

What's on and off the table? What features will be used?

- Functioning buttons that the user can click to bring them from one area to another. 'Home', 'Rules', 'Game Arena'
- A username input field, for the user to enter their username. The users username will then show in the score area. 
- A full background picture of Hogwarts
- An Audio track so the user can turn on and off the music. It starts of muted. This is placed in the footer.
- A header with large text indicating the website is a Harry Potter game.
- A rules page to explain which spell beats which spell and that the first to 10 points is the winner.
- The battle arena, where the user can click a selection of spells to use against the computer (Draco). These spells will be pressable buttons.
- Text that shows if the user won or lost that round.
- A scoreboard that shows the scores for both User and Draco.
- An alert with a message saying who won the game.


### Structure plane

The stucture is easy. It involves a header, and a footer, along with the main area which is covered in a nice looking border. The structure is the same for all sections. All styled using flexbox. It is conistent, predictable, learnable, and visible.



### Skeleton plane

To visualize the website, I used Wireframes for my ideas using Balsamiq. I created them on larger screens with the idea of smaller screens being very similar just a smaller screen.

1. **Home page Example.**
![Balsamiq Home page example](documentation/home_balsamiq_pp2.png)

1. **Rules page Example.**
![Balsamiq Rules page example](documentation/rules_balsamiq.png)

1. **Game Arena page Example.**
![Balsamiq Game Arena page example](documentation/arena_balsamiq.png)


### Surface plane




## Features



## Future Features




## Technologies used

Technologies used in this website were as follows:

- HTML
- CSS
- JAVASCRIPT
- GIT
- GITPOD
- BALSAMIQ WIREFRAMES
- GOOGLE DEV TOOLS
- GENCRAFT 
- FONTAWESOME
- GOOGLE FONTS
- IMAGE RESIZER
- W3C HTML Markup Validator
- W3C Jigsaw CSS Validator
- JS HINT JAVASCRIPT Validator



## Testing and Validation

### Manual testing

- I tested the live project on Google Chrome, Internet Explorer, and Firefox web browsers.
- I tested the website on iphone, laptop and monitor screen sizes.
- I played the game over and over to make sure it was working properly.
- I got to a score of 10, winning, and losing to make sure the alert popped up properly.
- I checked all the buttons to make sure they are all working and bringing me to the correct areas.

### Validation

- I used W3C Markup Validation service to make sure my code had no errors. After some fixes my code came out perfect with no errors found.
![HTML Validator](documentation/html_validator_pp2.png)

- I used the Jigsaw CSS Vlaidator to validate my CSS code.
![CSS Validator](documentation/css_validator_pp2.png) 

- I used JS HINT JavaScript Validator to validate my JavaScript code. It says "One unused variable" but this is because that variable is actually linked with the HTML file and is being used.
![JS Validator](documentation/js_validator.png)

- I used Lighthouse in dev tools to measure the Performance, Accessibility, Best Practices and SEO.
![LIGHTHOUSE testing for desktop](documentation/lighthouse_pp2_desktop.png)
![LIGHTHOUSE testing for phone](documentation/lighthouse_pp2_phone.png)


## Challenges/Bug fixes

- I had a couple of warnings and one error in my HTML validation. These included some "Trailing slashes", and  "a stray end tag <div>". These were easily fixed by taking out the stray div and getting rid of the unnecessary trailing slahses. ![HTML warnings and errors](documentation/html_validator_errors.png)

- Along side some HTML warnings and a error, my JavaScript validator said I had "One variable unused" which confused me because I knew that variable was being used within my HTML file but of course I did not have my html file inside of the JavaScript validator. ![JS Validator](documentation/js_validator.png)

- Lastly I have not been able to overcome this challenge due to time but one thing I noticed was when the user finishes the game, The scores both reset to 0 in the back-end which is what is intended but Draco's side does not show up as "0 in the front-end" It stays on Draco's previous games score until they win a round and then it will show up as "Dracos score is 1" which is correct because both have been reset to 0 after the previous game finished and Draco won a round, but I am trying to fix it so both Draco and the User are both reset to 0 on the front end after each game. The Users score on the front-end and back-end always returns to a score of 0. The game still runs as intended and does not interfere with the game. ![Game challenge](documentation/game_challenge.png) ![Game challenge](documentation/game_challenge2.png)

## Deployment

I deployed my website early, as this is recommended. The steps to deploying a website on GitHub pages are:

1. Open the repository and go to the Settings tab.
1. Navigate to the Pages tab in the left menu.
1. Choose Deploy from a branch and select the according branch, main.
1. Click save. Click code The link to the deployed website can be found on the right hand side under 'Deployments' and then under 'active deployments'
   The link to my live site is: [Link to the live project here](https://breakellrz.github.io/Harry_Potter_Quiz/)


## Credit




