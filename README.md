# Memory Game

## Project Overview

### Description

This project is part of the Odin Project course on React Hooks located here:

https://www.theodinproject.com/courses/javascript/lessons/memory-card

A simple memory game in which you gain points by clicked on the characters. You need to remember which ones you've already clicked as selecting the same character twice will restart the game. Aim the for the top score of 35!

## Development

### Frameworks

- ReactJS

### Applied Skills

- React Hooks
- Higher array methods
- Fisher-Yates shuffle algorithm

### Notes

The original project brief was to show all the cards on the screen and shuffle each time one was clicked. However, I decided to make more challenging for both players and myself by only showing three cards at any time.

After some research I decided to implement the Fisher-Yates shuffling algorithm to deal with the shuffling of my assets. I could then slice three of them and display on the screen.

This then presented a problem. The longer a player played, the higher the chance the game would select 3 cards that were already chosen, therefore locking the player into defeat. I thought about implementing a reshuffle button for the player to use, however, this wouldn't have been the most practical solution and would result in, potentially, high amounts of reshuffling with no guarantee of a card the player needed showing up.

I decided that I needed to access the unclicked cards seperately and include it in the shown spread. This ensures that there is always at least one card on display that the player has not yet clicked.