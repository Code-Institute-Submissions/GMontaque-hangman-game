# Hangman Game

## About the Project

![picture of the mockup of the website](assets/images/mockup.PNG)

o Here I have re-created one of the classic games that I think everybody has either heard about or played, hangman. The idea of the game is quite simply, you are presenting with a number of blank squares or lines which represent the letters in the word that you need to guess. You then have to pick a letter and if the word contains the letter, then it will appear on the screen but be careful as if the letter is not included then you’ll be one set closer to loosing and the man being hung.

To add in some extra level of complexity and to give the game more features and replay ability I have added in a number of features and extra elements which the user can interact with. To also improve the immersion sound tracks have been added to the site as well as the visual aspect has been created to feel like an 80’s arcade game.

[Live Website Link](https://gmontaque.github.io/hangman-game/)

## Target Audience

**What was the idea behind building the product?**

- To allows user to be able to play hangman in a fun environment
- To allow users to play a relax game
- Allow users to unlock fun memories of playing hangman
- Make new memories and to allow them to play the game with others

**What is the customer**

- User can be someone of all ages
- User will be a gamer
- User is looking for an easy game which can be picked with little instruction needed

**What are the needs/wants of the users?**

- Game must be easy to navigate
- Game must have simple controls and so that all ages can use the site and play
- Game must be replay able
- Game must cater to different skills levels
- User is not looking for something technical

**What are the needs/wants of the business?**

- To create a game that users enjoy
- A game that users want to come back and play again and again
- A game users do not get bored or lose interest
- Game should feel fresh to users each time
- Game should be immersive for the user through sounds and images

**How does the site meet the needs of user and business**

- A person with an interest in classic games will find the site interesting and engaging due to the visual and sound cures
- The game has been made easy to play with simple buttons and icons
- A decrepitation /game rules have been including so that the business can easily and effectively describe the site and explain how to use it
- SEO has been included through the site to make it easier for users to find and allow the business to better describe the site
- The game has been create so that it can be played again and again helping to keep the user engaged
- Difficulty level has also been included to add a challenge for users and give them a goal

## Features

### Page Features

![Nav Bar](assets/images/navbar-mockup.PNG)
![Mobile Nav Bar](assets/images/mobile-navbar-mockup.PNG)

**Game rules**

- this is a feature which can be found on the initial loading game, the purpose of this feature is to provide the users with a descrciption of the game and the game rules.
- As well as the text there is also an image included to give a visual aid as some user find it easier to absorb information when viewed in an image rather than reading it.

**Game music**

- Include on both the index page and game page on the top left can be found the music button
- When pressed this will play the theme tune which I have added in for the game, the theme tune used is one from the 80’s innkeeping with the 80’s theme

**Game page**

- Here you will find the main game the user can play
- They will buttons they an interact with and a range of features for their enjoyment

**Game sounds**

- Included in the website are 2 different game sounds
- These sounds have been included to give the user an auditorial confirmation of how well they have done
- The sounds are also used to add immersion and to improvement enjoyment when playing

**Stop watch**

- The stop watch appears at the top of the game page
- This is activated when the user starts the game as is there to add another level of complexity and challenge to the game
- The stop watch will run until the user either wins or loose and will show the user the length of time they took

**Word length generator**

- I have created here a drop down where the user can select the length of word that they wish to guess
- If the user does not make a selection, then the a default word length has been included
- The word length selector is links to an API which when called will return a word of the length that was specified in the selector element

**Lives left**

- This function is linked to a letter checker function which checks if the letter selected is in the word to guess
- The value of lives left will reduce for every wrong guess that the user makes until zero
- Once lives left his zero the game will end and a game over overlay will appear followed by a sound track

**Game rules gears button**

- If a user needs to look up the rules again this can be done by clicking on the gear button
- When clicked the gear button will show an overlay which will contain the games rules
- The gear button is a toggle button allowing the user to open and close with ease

**Blank squares**

- When the user first loads onto the game page they will be greeted by a number of blank squares with question marks inside them
- These are auto generated when the page loads by calling the API and printing a blank square for each letter within the returned API word
- If the different length of word is selected from the selector element then the API is called again and the blank squares will update to the new word length to be guessed

**Alphabet letters**

- When the page loads a function is called with prints all 26 letters
- These are the letters that the user will click to start the game
- When a user clicks a letter they will see that it changes colour and is disabled to visual show the user the letters that they have left to guess
- An added feature is that the user can click a letter key on their keyboard and this will always work and the game will run

**Restart game**

- This function will restart the entire game without the user having to refresh the page
- The function will reset all alphabet letters which currently are disabled and have an alterrtaive colour added,
- It will reset the cavanas area
- It will reset the stop watch and produce the blank squares

**Hangman canvas**

- The canvas area is a visual area which will show the hangman as it progresses to being fully hung
- Depending on if the user guesses a correct or wrong letter it will update the image

## Page Breakdown

#### HOME Page

- Below you will find a direct link to the page, which contains the follow features:
  - Contains the rules of the game
  - Contains the toggle game music button which plays the game tune
  - Contains a visdual image of the game to be played
  - Contains the game tile
  - Contains a button which will take the user to the game page

[St Nazaire Raid Homepage](https://gmontaque.github.io/project1-st-nazaire-raid/)
![battle information](assets/images/battle-information-timeline-mockup.PNG)

#### Game Page

- Below you will find a direct link to the page, which contains the follow features:
  - Include the title of the game
  - There is a toggle game music button which plays the game tune
  - Included is a stopwatch
  - Contains a selector drop down allowing user to choose word length
  - Contains a counter for the number of lives left
  - Contains a icon which shows the games rules
  - Contains a game reset button
  - Contains blank squares representing letters to guess
  - Contains 26 alphabet letters

[St Nazaire raid gallery page](https://gmontaque.github.io/project1-st-nazaire-raid/gallery.html)
![gallery snapshot](assets/images/gallery-mockup.PNG)

### technologies section

- HTML5 – used to creat the content and structure of the website
- CSS – used to add styling to the html structure
- Javascript – used to provide functionality and make the sight dynamic
- Gitpod – used to deeply website
- Github – used to host and edit website
- Mockflow – used to create the wireframes
- VS Code Desktop – IDE used to code the website
- Google fonts – this was used to import and used for the website font
- Font awesome – this was used to add icons to the website

### Typography and Colour Scheme

- • For the font i have used Press Start 2P google font link [google font link](https://fonts.google.com/specimen/Press+Start+2P?preview.text=A%20B%20C%20D%20E)

  - I have used this font as I was looking for a style that would link with my 80’s gaem theme
  - I have also look to copy and mimic the background which has some text
  - I also wanted the text to add to the feeling of a classic game
    [St Nazaire raid gallery page](https://gmontaque.github.io/project1-st-nazaire-raid/gallery.html)

- Colour Scheme
  - The theme of the website is 80s, arcade and classic gaming
  - Following this theme I used colours and images which would display with
  - For the main text colour I have used #fee086
  - For the background colour I have used #240B67 and them in some areas added in opacity as well
  - I have checked it against a colour contrast checker and it passed
    [St Nazaire raid gallery page](https://gmontaque.github.io/project1-st-nazaire-raid/gallery.html)
    [St Nazaire raid gallery page](https://gmontaque.github.io/project1-st-nazaire-raid/gallery.html)

### WIREFRAMES

#### HOME PAGE

- The idea of the homepage was to make sure that the user was aware what website they had clicked on and what to expect
- It also included important information so the user was aware how to play the game and also what to expect
- The page was to contain the rules of the game, explain the game page and icons
- Homepage was to have a visual aspect to go with the written explanation
- As you can see in the images depending on the screen size there were different styles to follow

![homepage wireframe](assets/images/homepage-wireframe.PNG)

#### Game Page

- This is the page that the user would actually play the game after going through the homepage and reading the rules
- Going from top left to right there is first a music button allowing the user to play game music
- There is also a timer included for an added challenge to allow the user to time how long it takes them to solves a word
- Then far right there is a drop down where the user can select the word length
- The main game area contains the image of the hangman made using canvans, a lives left counter, gear button for games rules overlay and a reset button
- Next to the hangman image can be found a section of blank square which represent the letters to be guess
- There is also a full 26 letter keyboard the user can click to guess or then can click a letter on their keyboard

![Gallery wireframe](assets/images/gallery-wireframe.PNG)

### Mobile Wireframe

- Here i have created the wireframe for how the website should look on mobile

![Mobile wireframe](assets/images/mobile-wireframe.PNG)

## Testing

#### Browser Compatibility

- I have tested the website in different broswers such as google, firefox and Edge
- On each browser, I have gone into the dev tools and tested the website at different screen sizes, from mobile to full size. Examples below from Firefox and Edge:

![image test in edge](assets/images/edge-website-test.PNG)
![image test in firefox](assets/images/firefox-website-test.PNG)
![image test in chrome](assets/images/firefox-website-test.PNG)

#### lighthouse test

- I have used lighthouse to test the website as per the image below:

![iamge showing page speed report pc result](assets/images/pagespeed-report-pc.PNG)
![iamge showing page speed report mobile  result](assets/images/pagespeed-report-mobile.PNG)

- lighthouse broswer test result for homepage
  ![iamge showing homepage result](assets/images/lighthouse-indexpage.PNG)

- lighthouse broswer test result for game page
  ![iamge showing gallery result](assets/images/lighthouse-gallerypage.PNG)

#### Validator Testing

- I have tested all HTML pages on the HTML validator and there are no errors

- When building the website I have used an extension called pritter which has resulted in the warnings that you can see on each screenshot below:

  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)

  ![html validator results](assets/images/html-validator.PNG)

- When testing my CSS as you can see from the below image there are no errors

  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

![CSS validator results](assets/images/css-validator.PNG)

- When testing the website on different devices i have used the pre-defined dimensions that come with the developer tools on Google Chrome
- I have also researched several websites which have described the most common screen size for devices in 2023 for desktop and mobile - https://www.designrush.com/agency/web-development-companies/trends/website-dimensions

![Media Page wireframe](assets/images/most-common-screen-resolutions-worldwide-content.jpg)

**performance improvements**

- To help with loading times and to improve the speed of the website all images have been converted to webp format

### SEO

- To improve the SEO side of the webiste i have included the follow code below.

  - I have added a meta section which includes certain keywords, meaning that when a user searches these words there is a higher chance that my site will appear in the search results
  - There is also a title included which will be picked up by Google when a search is completed

  ```
  <!-- title and tab icon -->

    <link
      rel="icon"
      type="images/x-icon"
      href="assets/images/commando-insignia.jpg" />

    <title>St Nazaire Raid</title>

    <!-- Meta tags for search engines -->

    <meta
      name="description"
      content="WW2, France, British, Germans, st nazaire, royal navy"  />
    <meta name="keywords" content="WW2, raid, British, Commando, Raid" />
  ```

![CSS validator results](assets/images/css-validator.PNG)

### Issues and Bugs

- Error 1

  - When the user plays the game there is a counter that records the number of correct letters that the user has guessed and this is compared against the word length to be guessed. When they match it confirms that the user has guessed the full word and for the counter to increase by one the letter the user selected must be within the word to guess.
    The issue that was being faced was that the could would run and the user could get the full word but once the user had guessed all the letters the game would keep running and would not show the winner screen.

- Error 2

  - Included in the website is an API, the purpose of the API is to return a word that the user then has to attempt to guess within the hangman game. If the user then lost the game the word the user was trying to guess was meant to be shown within the website, but when the value was printed to the screen it would show as an array, but when checked using “typeof” it stated that the value was a string.
  - I had initial tried to turn the value to a string but as it was already a string it did not change the output value. Instead the solution came when I used the splice function on the initial value to remove the first to element in the printed result with was the square bracket and the quotation mark which resolved the issue.

- Error 3
  - Issue with the stopwatch and pausing the time when the user finishes the game so they can see how long they took before the stopwatch resets

### Deploying the Website to GitHub Pages

• The website was deployed to GitHub Pages using the following steps:
• In the GitHub repository, go to the "Settings" tab.
• From the left-side menu, select 'Pages.'
• In the source section drop-down menu, choose the 'main' branch.
• Click 'Save.'
• Upon successful publishing, a live link will be displayed in a green banner.

### Cloning the Repository

• Click on the "Code" button located near the top right corner of the page.
• Copy the HTTPS or SSH URL displayed.
• Open your terminal (or Git Bash on Windows) and navigate to your desired directory.
• Enter "git clone" followed by a space, and paste the copied URL.
• Press enter to execute the command, creating a local copy of the GitHub repository.
• You now have the GitHub repository cloned to your local machine.

### Forking the Repository

• Click the "Fork" button found near the top right corner of the page. This duplicates the repository into your GitHub account.
• After forking, you will be redirected to your forked repository.
• If not already done, clone the forked repository to your local machine, using the instructions mentioned earlier.
• Make any desired changes or additions to the code in your local copy of the repository.
• Commit your changes to your local repository using the "git commit" command.
• Push your changes to the forked repository on GitHub with the "git push" command.
• If you intend to contribute your changes back to the original repository, initiate a pull request. You can do this by going to the original repository's page and selecting the "New pull request" button. From there, you can compare your changes to the original repository and request a merge.
• You now have a forked copy of the GitHub repository in your account, allowing you to make changes and contribute back to the original repository if desired.

## Credit and content

#### Icons

- All icons used in the website were taken from Fontawesome [Font Awesome](https://fontawesome.com/)

#### Sound tracks

- Main game music - https://www.fesliyanstudios.com/royalty-free-music/download/retro-platforming/454
- The loosing sound track - https://pixabay.com/sound-effects/wah-wah-sad-trombone-6347/
- Winning sounds track - https://pixabay.com/sound-effects/tadaa-47995/

#### Stop watch

- For the stop watch I took inspiration from the following code example - https://codepen.io/cathydutton/pen/xxpOOw

#### button style

-     https://codepen.io/reulison/pen/WNNVPZq?editors=1100

#### random word api generator

-     https://random-word-api.herokuapp.com/home

### Media and Images

- The background image as sourced from FREEPik - https://www.freepik.com/free-vector/gradient-video-game-background_40128350.htm#query=80s%20video%20game&position=2&from_view=search&track=ais&uuid=18d90939-c56b-4bc6-b376-af915d897243
- The hangman canvas image - https://codepen.io/xavier_bs/pen/MMNGyG
- Homepage hangman image - https://board-game-art.fandom.com/wiki/Hangman?file=Hangmanlogo.png
