---
layout: default
title: Battleship The Process, Proof of Process
path: /archives/pop/battleship-the-process
---
import StaticImage from "../../src/components/static-image"

# Battleship: The Process

Consider the board game Battleship. In this game, there are two players, who each have two 10x10 grids of cells representing 2D coordinates, along with five ships. One places his own ships on his primary grid, and uses a tracking grid to record the results of his attacks on the opposing player’s ships.

<StaticImage src="pop-figure-1" alt="" className="pop-image" />

Fig. 1: An example of how a Battleship game may appear after several turns.

The process of the game is as follows:

- First, each player places his ships on his primary grid.
- Each player then takes turns guessing the location of his opponent’s ships, and the opponent announces whether or not the location is occupied by a ship.
- If it matches one of the opposing player’s ships’ positions, then the opponent’s ship is “damaged”, which is indicated through red pins on the respective tracking and ship grids.
- If the guessed position does not match a ship, then a white pin is placed to denote a miss.
- Whoever is able to “sink” all of his opponent’s ships by guessing all the correct ship positions first wins the game.

Let’s say Alice and Bob are playing this game. Each Battleship match represents a process, while each move represents a step in that process.

In the first step, both Alice and Bob place their ships wherever they like. From then on, Alice and Bob alternate turns of play until a winner is established.

Thus every step includes the following parameters:

- What is being guessed (ship coordinates)
- Who is guessing
- When the guess is made
- Where this guess lies in the total sequence of guesses


##### IMPLICIT CONDITIONS

In each step, each player needs to be able to trust that the other player is not lying. Furthermore, each player should be able to prove their move so that they can be rewarded with points for scoring winning moves. And before we can declare the winner of a game in a meaningful way, we need to be able to objectively prove the validity of all the game’s steps.

Let’s say Alice wins the game. If Alice wants to use her score to establish reputation, there is no easy way to demonstrate her victory without publishing the record of the entire game along with attestations for each move by an objective witness.

We can resolve this situation by imprinting the trust from an objective witness into a signed receipt for the data in question, so that the data with its receipt can be treated as a fact: digital notarization. Therefore, we need a system underlying the game through which each player can establish their moves as objective fact.

One possible option is to notarize Alice’s moves as well as the game’s outcome (her victory) and to then share that notarized record as a standalone marker of trust. The game’s outcome could then be considered a fact.

Furthermore, we can demonstrate the veracity of the game’s outcome in a decoupled and modular way if we can share the trust established between Alice and Bob in their game-play through a package with the following con- ditions:

- Anyone can open the package to verify the outcome of the game
- No player must reveal their guesses or ship positions
- There is minimal involvement of the source of trust

Such an option is possible through the construction of a proof system, which we will discuss in the next section.

