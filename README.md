# Hangman Game

## About the Project

![picture of the mockup of the website](assets/img/website-mockup.PNG)

- Here I have re-created one of the classic games that I think everybody has either heard about or played, hangman. The idea of the game is quite simply, you are presented with a number of blank squares which represent the letters in the word that you need to guess. You then have to pick a letter and if the word contains the letter, then it will appear on the screen but be careful as if the letter is not included then you’ll be one step closer to loosing and the man being hung.

- To add in some extra level of complexity and to give the game more features and replability I have added in a number of features and extra elements which the user can interact with. To also improve the immersion sound tracks have been added to the site, that can be played as you are playing and that also play when you loose and win. There is also the visual aspect that have been created to make the game feel like an 80’s arcade game.

[Live Website Link](https://gmontaque.github.io/hangman-game/)

## Target Audience

**What was the idea behind building the product?**

- To allows user to be able to play hangman in a fun environment
- To allow users to play a relaxed game
- Allow users to unlock fun memories of playing hangman
- Make new memories and to allow them to play the game with others

**What is the customer**

- User can be someone of all ages
- User will be a gamer
- User is looking for an easy game which can be picked with little instruction needed

**What are the needs/wants of the users?**

- Game must be easy to navigate
- Game must have simple controls and so that all ages can use the site and play
- Game must be replayable
- Game must cater to different skills levels
- User is not looking for something technical

**What are the needs/wants of the business?**

- To create a game that users enjoy
- A game that users want to come back and play again and again
- A game that the users do not get bored or lose interest
- Game should feel fresh to users each time
- Game should be immersive for the user through sounds and images

**How does the site meet the needs of user and business**

- A person with an interest in classic games will find the site interesting and engaging due to the visual and sound cures
- The game has been made easy to play with simple buttons and icons
- A description/game rules have been included so that the business can easily and effectively describe the site and explain how to use it
- SEO has been included through the site to make it easier for users to find and allow the business to better describe the site
- The game has been created so that it can be played again and again helping to keep the user engaged
- Difficulty level has also been included to add a challenge for users and give them a goal

## Features

### Page Features

**Game rules**

- This is a feature which can be found on the initial webpage when the site loads, the purpose of this feature is to provide the users with a descrciption of the game and the game rules.
- As well as the text there is also an image included to give a visual aid as some user find it easier to absorb information when viewed in an image rather than reading it, the image is of a hangman.

![Game Rules](assets/img/game-rules.PNG)

**Game music**

- Include on both the index page and game page on the top left can be found the music button
- When pressed this will play the theme tune which I have added in for the game, the theme tune used is one from the 80’s innkeeping with the 80’s theme

![Game Music on](assets/img/game-music-on.PNG)
![Game Music Off](assets/img/game-music-off.PNG)

**Game page**

- Here you will find the main game the user can play
- They will buttons they an interact with and a range of features for their enjoyment

![Game Page](assets/img/gamepage.PNG)

**Game sounds**

- Included in the website are 3 different game sounds
- These sounds have been included to give the user an auditorial confirmation of how well they have done
- The sounds are also used to add immersion and to improvement enjoyment when playing
- one sounds is the game soundtrack which can be played as the user plays the game, the other two sound tracks are for when the user wins or looses

**Stop watch**

- The stop watch appears at the top of the game page
- This is activated when the user starts the game and provides an added level of complexity and challenge to the game
- The stop watch will run until the user either wins or loose and will show the user the length of time they took to guess the word

![Game Stopwatch](assets/img/stopwatch.PNG)

**Word length generator**

- I have created a drop down where the user can select the length of word that they wish to guess
- If the user does not make a selection, then there is a default word length which has been included
- The word length selector is linked to an API which when called will return a word of the length that was specified in the selector element

![Word Length Generator](assets/img/word-length-generator.PNG)

**Lives left**

- This function is linked to a letter checker function which checks if the letter selected is in the word to guess
- The value of lives left will reduce for every wrong guess that the user makes until zero
- Once lives left hits zero the game will end and a game over overlay will appear followed by a sound track to make it clear to the user they have lost
- The end game message also shows the user the word they were trying to guess

![Lives Left](assets/img/live-left-count.PNG)

**Game rules overlay**

- If a user needs to look up the rules again this can be done by clicking on the rules button
- When clicked the gear button will show an overlay which will contain the games rules
- To then close the rules overlay there is a included button which can be pressed
- The overlay allows users to check the rules without having to go back to the homepage

![Game Rules](assets/img/game-rules-button.PNG)
![Game Rules](assets/img/game-rules-overlay.PNG)

**Blank squares**

- When the user first loads onto the game page they will be greeted by a number of blank squares with question marks inside them
- These are auto generated when the page loads by calling the API and printing a blank square for each letter within the returned API word
- If the different length of word is selected from the selector element then the API is called again and the blank squares will update to the new word length to be guessed

![Blank Letter Squares](assets/img/blank-squares.PNG)

**Alphabet letters**

- When the page loads a function is called which prints all 26 letters to the screen
- These are the letters that the user will click to start the game
- When a user clicks a letter they will see that it changes colour and is disabled to visually show the user the letters they have left to guess
- An added feature is that the user can click a letter key on their keyboard and this will always work and the game will run

![Alphabet letters](assets/img/alphabet-letters.PNG)

**Restart game**

- This function will restart the entire game without the user having to refresh the page
- The function will reset all alphabet letters which currently are disabled and have an alterrtaive colour added,
- It will reset the cavanas area
- It will reset the stop watch and produce the blank squares

![Alphabet letters](assets/img/restart-game-button.PNG)

**Hangman canvas**

- The canvas area is a visual area which will show the hangman as it progresses to being fully hung
- Depending on if the user guesses a correct or wrong letter it will update the image

![Alphabet letters](assets/img/hangman-canvas.PNG)

**404 Page**

- This page has been added to improve user experince
- If the user in error types an incorrect web address they will be greeted with this page
- The page will re-direct the user back to the offical website page

![404 page](assets/img/page-404.PNG)

## Page Breakdown

### HOME Page

- Below you will an image of the inital page when the user loads up the site, which contains the follow features:
  - Contains the rules of the game
  - Contains the toggle game music button which plays the game tune
  - Contains a visdual image of the game to be played
  - Contains the game tile
  - Contains a button which will take the user to the game page

![Home Page](assets/img/homepage.PNG)

### Game Page

- The game page is what the user will see once they navigate from the home page, the page contains the follow features:
  - Includes the title of the game
  - There is a toggle game music button which plays the game tune
  - Includes is a stopwatch
  - Contains a selector drop down allowing user to choose word length
  - Contains a counter for the number of lives left
  - Contains a icon which shows the games rules
  - Contains a game reset button
  - Contains blank squares representing letters to guess
  - Contains 26 alphabet letters

![Game Page](assets/img/gamepage.PNG)

### 404 Page

- this is the 404 page which has been added in
  - purpose of the page is to direct user back to the main website

![Game Page](assets/img/gamepage.PNG)

## Technologies Section

- HTML5 – used to creat the content and structure of the website
- CSS – used to add styling to the html structure
- Javascript – used to provide functionality and make the sight dynamic
- Gitpod – used to deeply website
- Github – used to host and edit website
- Mockflow – used to create the wireframes
- VS Code Desktop – IDE used to code the website
- Google fonts – this was used to import and used for the website font
- Font awesome – this was used to add icons to the website

## Typography and Colour Scheme

**Font**

- For the font I have used Press Start 2P google font link [google font link](https://fonts.google.com/specimen/Press+Start+2P?preview.text=A%20B%20C%20D%20E)
  - I have used this font as I was looking for a style that would link with my 80’s game theme
  - I have also lookED to copy and mimic the background which has some text
  - I also wanted the text to add to the feeling of a classic game

![Game text example](assets/img/hangman-title.PNG)

**Colour Scheme**

- The theme of the website is 80s, arcade and classic gaming
- Following this theme I used colours and images which would display with
- For the main text colour I have used #fee086
- For the background colour I have used #240B67 and them in some areas added in opacity as well
- I have checked it against a colour contrast checker and it passed

![Colour Scheme test 1](assets/img/typography-test.PNG)

![Colour Scheme test 2](assets/img/typography-test-2.PNG)

## WIREFRAMES

### HOME PAGE

- The idea of the homepage was to make sure that the user was aware what website they had clicked on and what to expect
- It also included important information so the user was aware how to play the game and also what to expect
- The page was to contain the rules of the game, explain the game page and icons
- The homepage was to have a visual aspect to go with the written explanation
- The image below shows the different styling and orientation of the homepage depending on if the user is on molid or Deskstop or other device
- Image includes desktop and mobile wireframe exmaple

![homepage wireframe desktop and mobile](assets/img/homepage-wireframe.PNG)

### Game Page

- This is the page that the user will play the game on after going through the homepage and reading the rules
- next to the title can be found the home button to go back to the first page
- Going from top left to right there is first a music button allowing the user to play game music
- There is also a timer included for an added challenge to allow the user to time how long it takes them to solves a word
- Then far right there is a drop down where the user can select the word length
- The main game area contains the image of the hangman made using canvans, a lives left counter, gear button for games rules overlay and a reset button
- Next to the hangman image can be found a section of blank square which represent the letters to be guess
- There is also a full 26 letter keyboard the user can click to guess or then can click a letter on their keyboard
- Image includes desktop and mobile wireframe exmaple

![gamepage wireframe desktop and mobile](assets/img/gamepage-wireframe.PNG)

## Testing

### Browser Compatibility

- I have tested the website in different browsers such as google, firefox and Edge
- On each browser, I have gone into the dev tools and tested the website at different screen sizes, from mobile to full size. Examples below from Firefox and Edge:

![image test in edge](assets/img/edge-website-example.PNG)

![image test in firefox](assets/img/firebox-website-example.PNG)

![image test in chrome](assets/img/chrome-website-example.PNG)

### Detailed Testing

| Test                                       | Test Description                                                                                                                                                                                                                                                                                                     | Result |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Website loads                              | When the URL is entered the website should load the homepage and all its content correctly                                                                                                                                                                                                                           | Pass   |
| Homepage music button                      | When the button is click it should play the game sound track and it should also change the icon image. The button should toggle between off and on.                                                                                                                                                                  | Pass   |
| Homepage play game button                  | When the button is clicked it should take the user to the game page                                                                                                                                                                                                                                                  | Pass   |
| Homepage Responsiveness                    | When the screen size is changed the website should change and update with the site                                                                                                                                                                                                                                   | Pass   |
| Gamepage – music button                    | When the button is click it should play the game sound track and it should also change the icon image. The button should toggle between off and on.                                                                                                                                                                  | Pass   |
| Gamepage – home button                     | When the button is click it should take the user back to the home page                                                                                                                                                                                                                                               | Pass   |
| Gamepage - stopwatch                       | When the game is started the stop watch should start, it should then pause when the game ends and store the result. When the game is restarted it should reset to zero                                                                                                                                               | Pass   |
| Gamepage – word length                     | It should return a default value when the gamepage loads to be sued by the api, if updated by the user it should also update the return value.                                                                                                                                                                       | Pass   |
| Gamepage – lives left                      | This should track the number of wrong guess, if this value goes to zero the user should lose the game and an overlay should be displayed along with a loose sound played                                                                                                                                             | Pass   |
| Gamepage – game rules                      | When the user clicks on the button an overlay should appear with the game rules, and all the content should be styled and appear correctly                                                                                                                                                                           | Pass   |
| Gamepage – game rules overlay close button | When the game rules overlay is open you should be able to close this using the close button in the overlay                                                                                                                                                                                                           | Pass   |
| Gamepage – game restart button             | Click on the button should restart the game, this means resetting the stopwatch, resetting the alphabet letter buttons, the blank squares section, getting a new word to guess from the api, remove disable attribute from word length select element and resetting the canvas                                       | Pass   |
| Gamepage – canvas                          | When the user guesses a wrong letter the canvas image should update                                                                                                                                                                                                                                                  | Pass   |
| Gamepage – Blank Squares                   | When the game page loads it should load in an x number of blank square with a question mark inside depending on the value of the word length select element                                                                                                                                                          | Pass   |
| Gamepage – Alphabet letters                | When the game page loads it should load in the 26 alphabet letters                                                                                                                                                                                                                                                   | Pass   |
| Gamepage – Alphabet letters function       | When a letter is pressed it should be checked to see if the letter is contained in the word to guess, if it is the blank squares should be updated with the letter. If an incorrect guess is made the canvas image should be updated and lives left reduced. It should also disable the word length selector element | Pass   |
| Gamepage – keyboard letter press           | When a keyboard alphabet letter is pressed the game should work the same and start just as if one of the onscreen button letters had been pressed                                                                                                                                                                    | Pass   |
| Gamepage responsiveness                    | When the screen size is changed the website should change and update with the site                                                                                                                                                                                                                                   | Pass   |
| 404 page                                   | When the incorrect web address is entered the user should be re-directed to the 404 page                                                                                                                                                                                                                             | Pass   |
| 404 page – home button                     | When clicked the user should be return to the homepage of the website                                                                                                                                                                                                                                                | Pass   |
| Gamepage responsiveness                    | When the screen size is changed the website should change and update with the site                                                                                                                                                                                                                                   | Pass   |

### Lighthouse Test

- I have used lighthouse to test the website as per the image below:

**Home Page**

![image showing page speed report pc result](assets/img/lighthouse-desktop-homepage.PNG)

![image showing page speed report mobile  result](assets/img/lighthouse-mobile-homepage.PNG)

**Game Page**

![image showing page speed report pc result](assets/img/lighthouse-desktop-gamepage.PNG)

![image showing page speed report mobile  result](assets/img/lighthouse-mobile-gamepage.PNG)

**404 Page**

![image showing page speed report pc result](assets/img/lighthouse-desktop-404page.PNG)

![image showing page speed report mobile  result](assets/img/lighthouse-mobile-404page.PNG)

### Validator Testing

- I have tested all HTML pages on the HTML validator and there are no errors

- When building the website I have used an extension called pritter which has resulted in the warnings that you can see on each screenshot below:

  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)

  ![prettier validator results](assets/img/prettier-warning.PNG)

  **Home Page**
  ![homepage validator results](assets/img/homepage-validator-html.PNG)

  **Game Page**
  ![homepage validator results](assets/img/gamepage-validator-html.PNG)

  **404 Page**
  ![homepage validator results](assets/img/page404-validator-html.PNG)

- When testing the CSS on ym webiste there are no errors

  - Result from the CSS validator [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

  ![CSS validator results](assets/img/css-validator-result.PNG)

- When testing the website on different devices i have used the pre-defined dimensions that come with the developer tools on Google Chrome
- I have also researched several websites which have described the most common screen size for devices in 2023 for desktop and mobile - https://www.designrush.com/agency/web-development-companies/trends/website-dimensions

![Media Page wireframe](assets/img/most-common-screen-resolutions-worldwide-content.jpg)

### Game Testing

- When testing the website to confirm the correct answer and also confirm the letter that the user pressed the following code can be added to the `checkLetterGuess` function inside the try statment.

  ```
  console.log("Word to guess is:",wordToGuess,",","User Letter guess is:",uGuess);
  ```

## Performance Improvements

- When testing the website on Pagespeed I found there was a reduction in performance, to resolve this I updated all images to webp
- The reason for this is that there is a signification reduction in the size of the image without a loss of quality which results in a faster website loading time
- Other benefits include reduced bandwidth
- Another performance imrpovement I made was with the sound files, all sound files were compresed in size to improve performance.

## SEO

- To improve the SEO side of the webiste i have included the follow code below.

  - I have added a meta section which includes certain keywords, meaning that when a user searches these words there is a higher chance that my site will appear in the search results
  - There is also a title included which will be picked up by Google when a search is completed

  ```
  <!-- title and tab icon -->
  	<link
  		rel="icon"
  		type="images/x-icon"
  		href="assets/img/hangman-placeholder-img.webp"
  	/>
  	<title>Hangman</title>
  	<!-- Meta tags for search engines -->
  	<meta
  		name="description"
  		content="hangman, classic games, 80s games, fun games, quick games"/>
  	<meta
  		name="keywords"
  		content="80's, classic games, hangman, single platyer"/>
  ```

## Issues and Bugs

**Error 1**

- When the user plays the game there is a counter that records the number of correct letters that the user has guessed and this is compared against the word length to be guessed. When they match it confirms that the user has guessed the full word and for the counter to increase by one the letter the user selected must be within the word to guess.
  The issue that was being faced was that the could would run and the user could get the full word but once the user had guessed all the letters the game would keep running and would not show the winner screen.

**Error 2**

- Included in the website is an API, the purpose of the API is to return a word that the user then has to attempt to guess within the hangman game. If the user then lost the game the word the user was trying to guess was meant to be shown within the website, but when the value was printed to the screen it would show as an array, but when checked using “typeof” it stated that the value was a string.
- I had initial tried to turn the value to a string but as it was already a string it did not change the output value. Instead the solution came when I used the splice function on the initial value to remove the first to element in the printed result with was the square bracket and the quotation mark which resolved the issue.

**Error 3**

- When the user finsihed the game the stopwatch is meant to pause and show the current length of time that has elapised since the suer started playing tyhe game. the idea being that tehy can see how long it took for them to solve the word guess and add a level of competivence about them if they trry again. The issue i was having is that when the user finished the game and then wanted to restart the stop watch would also restart and would not store the value.
- to solve this issue i had to add in some code into the win or loose function, the code would take the current value of each set of numbers i.e minutes, seconds and miliseconds and would update the stop watch with those static figures. then when the user wants to restart the game it will reset to zero.

## Website Deployment

### Deploying the Website to GitHub Pages

- The website was deployed to GitHub Pages using the following steps:
- In the GitHub repository, go to the "Settings" tab.
- From the left-side menu, select 'Pages.'
- In the source section drop-down menu, choose the 'main' branch.
- Click 'Save.'
- Upon successful publishing, a live link will be displayed in a green banner.

### Cloning the Repository

- Click on the "Code" button located near the top right corner of the page.
- Copy the HTTPS or SSH URL displayed.
- Open your terminal (or Git Bash on Windows) and navigate to your desired directory.
- Enter "git clone" followed by a space, and paste the copied URL.
- Press enter to execute the command, creating a local copy of the GitHub repository.
- You now have the GitHub repository cloned to your local machine.

### Forking the Repository

- Click the "Fork" button found near the top right corner of the page. This duplicates the repository into your GitHub account.
- After forking, you will be redirected to your forked repository.
- If not already done, clone the forked repository to your local machine, using the instructions mentioned earlier.
- Make any desired changes or additions to the code in your local copy of the repository.
- Commit your changes to your local repository using the "git commit" command.
- Push your changes to the forked repository on GitHub with the "git push" command.
- If you intend to contribute your changes back to the original repository, initiate a pull request. You can do this by going to the original repository's page and selecting the "New pull request" button. From there, you can compare your changes to the original repository and request a merge.
- You now have a forked copy of the GitHub repository in your account, allowing you to make changes and contribute back to the original repository if desired.

## Credit and content

### Icons

- All icons used in the website were taken from Fontawesome [Font Awesome](https://fontawesome.com/)

### Sound tracks

- Main game music - https://www.fesliyanstudios.com/royalty-free-music/download/retro-platforming/454
- The loosing sound track - https://pixabay.com/sound-effects/wah-wah-sad-trombone-6347/
- Winning sounds track - https://pixabay.com/sound-effects/tadaa-47995/

### Stop watch

- For the stop watch I took inspiration from the following code example - https://codepen.io/cathydutton/pen/xxpOOw

### button style

- https://codepen.io/reulison/pen/WNNVPZq?editors=1100

### random word api generator

- https://random-word-api.herokuapp.com/home

### Media and Images

- The background image as sourced from FREEPik - https://www.freepik.com/free-vector/gradient-video-game-background_40128350.htm#query=80s%20video%20game&position=2&from_view=search&track=ais&uuid=18d90939-c56b-4bc6-b376-af915d897243
- The hangman canvas image - https://codepen.io/xavier_bs/pen/MMNGyG
- Homepage hangman image - https://board-game-art.fandom.com/wiki/Hangman?file=Hangmanlogo.png
