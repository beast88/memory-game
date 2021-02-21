# Memory Game

This project is part of the Odin Project course on React Hooks located here:

https://www.theodinproject.com/courses/javascript/lessons/memory-card

A simple memory game in which you gain points by clicked on the characters. You need to remember which ones you've already clicked as selecting the same character twice will restart the game. Aim the for the top score of 35!

### Dev Notes

This project is designed to give me some experience with working with Hooks in the React environment.

The original project brief called for laying out all the characters available to click on the page and shuffling them whenever a click happened. I wanted to change this up about. By only showing three characters at a single time I could use a lot more and make the game more challenging.

This presented me with a bit of a problem, I had to select 3 characters at random from my original Assets array.

At first I toyed with the idea of using a random number generator and link these numbers to the ID's in my objects. This proved a bit too verbose and unnecessary. It would be cleaner to simply select directly from the Assets array. This was not difficult, except that normal randomising methods had a chance of returning the same object more than once. Obviously I wanted all 3 displayed characters to be unique so this led me to the solution of using the Fisher-Yates shuffle algorithm to shuffle my original array. I could then slice out the 3 elements at the beginning of the array

Another problem presented itself when it became apparent that there was a chance that the randomly selected cards would all be cards the player has already selected. Obviously the longer a round lasted the higher the chance this would happen. This meant the game would be impossible to win. At first I thought I've be able to reshuffle the assets and then re-render them if they failed a condition to make sure an unpicked card was in the spread. This turned out unsuccessful as I realised that the cards that were being shown weren't saved in state. I refactored the code and then attached a value to the assets to indicate whether or not they had already been chosen by the player, instead of storing the ID's in an array and comparing them.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).