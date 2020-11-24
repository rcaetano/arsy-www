---
layout: default
title: Building the Proof of Process, Proof of Process
path: /archives/pop/building-the-proof-of-process
---
import StaticImage from "../../src/components/static-image"

# Building the Proof of Process

##### Step 1: Initial State
At the beginning of the game, we store the digest of the position of the player’s ships, both players' signatures, and the trusted timestamp. This is the first step of the process graph. The actual data behind the digest — the ship’s positions — can be stored by each player separately however they prefer.

##### Step 2: Alice Guesses
Alice makes her first guess: she calls out "D10.” We record the digest of the string "D10,” timestamp it, sign it, and link it to the first step. Thus the second step contains:

1. The digest of the string: ”D10"
2. Alice's timestamped signature of the digest 3. Alice's public key
3. The timestamp authority’s public key
4. The link hash of the first step

##### Step 3: Bob Responds
Bob responds “it’s a hit!” He puts a red pin on top of the ship at D10 of his primary grid, indicating that Alice scored a hit, and Alice places a pin in the same position on her tracking grid. We record the digest of the string "hit" along with the time when Bob responded, and obtain signatures from Bob for digest and the source of trust for the timestamp. Thus in the third step, we save:

1. The digest of the string "hit"
2. Bob's timestamped signature of the digest 3. Bob's public key
3. The timestamp authority’s public key
4. The link hash of the second step

##### Going Forward
The second and the third step form the first couplet of this instance of the proof of process graph. In the following couplet, they reverse their roles: Bob will guess and then Alice will respond, forming the fourth and the fifth steps, respectively. This goes on until one of the players has sunk all the other’s ships, making the survivor the winner.

In the final couplet, when Alice makes her winning move, Bob responds with “hit.” We store the details for that couplet, and additionally, we record an extra step as the final step which contains:

1. The digest of the string "endgame"
2. Both Alice and Bob's timestamped signatures of that digest
3. Alice’s public key
4. Bob’s public key
5. The timestamp authority’s public key
6. The link hash of the previous step (where Bob replied with “hit”)

The proof of process graph of all the steps must be recorded by a computing platform common to both the players in a way that each time a player guesses or responds, it can compute the proof. Computing the proof for each step involves hashing the guess/response, getting the players to sign their respective guesses/responses, time-stamping the guess/response, and connecting every new step in the graph with the link hash of the previous step.

The computing platform can publish the hash of the final step of "endgame,” which acts a proof for the entire game, without the need to share any other proof. Each step of the entire process graph can be uniquely referenced through the final link hash, so participants on a network of board game enthusiasts only need to share final hash with others as a proof of the game’s history.
