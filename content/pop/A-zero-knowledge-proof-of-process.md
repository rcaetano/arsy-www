---
layout: default
title: Zero Knowledge Proof of Process, Proof of Process
path: /archives/pop/zero-knowledge-proof-of-process
---
import StaticImage from "../../src/components/static-image"

# Zero Knowledge Proof of Process

Now that we have the proof of process (demonstrating Alice’s victory) decoupled from the actual process (the private record of Alice’s guesses and responses), there remains a need to publish the process graph of cumulative proofs in a way that the proof can be publicly verifiable — without revealing the source data behind the proofs. This way, everyone can credibly believe Alice’s refined taste and skill in gaming without any knowledge of her unique ship placements and guessing strategies that secured her victories.

To enable this hypothetical reputation network of gamers with taste, we need to enable a shareable record of winnings and scores for each gamer. We can start by using the proof of process to verify the integrity of each game being played. However, to make sure that any set of two players do not make up fake games for reputation, or that gamers don’t make up fake players to set up easy victories, we need to introduce referees sitting in each game. These could be professional Battleship referees, or simply gamers not currently playing who want to earn good karma and get a foot in the door of the competitive Battleship scene.

If there is a referee attesting each move of a game, and thus each step of a process graph, then we can use a "two out of three signings" approach to establish the truthfulness of a step. The three in this case would be: Alice, Bob and the referee. Alice can now present the proof of process to anyone else for verification, and they can just check the "two out of three signings" for verification that a neutral 3rd party attested the game’s events.

For a peer-to-peer system of interaction like that of Alice and Bob, we need a third person to act as an arbitrator. However, for a system in which the parties are hierarchically organized, we do not always need a third party.

##### KYC - KNOW YOUR CUSTOMER

Let’s imagine that Alice has been so successful at playing Battleship that she now must open a bank account because she is running out of space to store her winnings in her Manhattan studio apartment. She naturally chooses the bank that has been running a campaign advertising their implementation of Proof of Process.

Before she can deposit her winnings, however, she must first go through a mandatory "Know Your Customer" (KYC) process. As part of this government-mandated process, Alice must share her private documents (e.g. birth certificate) with the bank to prove her identity and financial well-being. In this situation the bank acts as the arbiter of Alice’s identity, financial health, and other pieces of information. Therefore the bank is also the source of trust.

Thus, just two parties — Alice and the bank — are sufficient to generate a proof of process in the context of a process within a hierarchical system.

<StaticImage src="pop-figure-8" alt="" className="pop-image"/>

Fig. 8: Hierarchical and Peer-to-Peer Systems. Most organizations function through hierarchical structures in which multiple parties are grouped under the same head, whereas in peer-to-peer systems, information is shared sideways and directly between its members, making the exchange often considerably faster. However, in peer-to-peer systems, trust becomes more challenging to ascertain without a single source of trust like that of the head a hierarchical system.

The bank validates each of Alice’s documents and attests them through steps in the proof of process graph with its signature, and then adds one more step: Alice’s customer status is verified and her bank account is open.

Finally, Alice can deposit her winnings — and additionally, she receives a special token from the bank! It contains the digest of the final step of her KYC proof of process graph. And it’s a good thing too, because this bank has a monthly deposit limit and she can only deposit half of her cash from the Battleship winnings. She’s asked her friend Bob to take care of her plants in her apartment this month while she’s out of town and is not sure it’s a good idea to keep all that cash around. Bob’s new career as a gardener hasn’t yielded the riches of the Battleship game, and she thinks he might be tempted pad his gardening fees.

Luckily, there’s another Proof of Process-enabled bank around the corner, and she is able to skip the time consuming KYC process and immediately open an account with them just by presenting the token — the digest from the first bank. She is able to deposit the rest of her winnings and confidently give Bob the keys to her apartment while she is away for the international Battleship championship. She can rest easy knowing her money and plants are in good hands.

<StaticImage src="pop-figure-9" alt="" className="pop-image"/>

Fig. 9: Zero-Knowledge Proof. If we do not store any secret behind the proof, but only the key factual elements to enable the proof (those being the digest, signature, public key and the trusted timestamp) while still ensuring that the proof can be demonstrated to any verifier, then we have a zero-knowledge proof of process.

With this example, Alice is able to prove her integrity established in the first bank’s KYC process to the second bank without having to reveal her private documents again, and with the “two of three signings” Battleship example, she is able to prove the results of her games without having to reveal her secret guesses and ship positions. These are examples of zero-knowledge proofs of process in a hierarchical and peer-to-peer system, respectively.

Proof of process does not necessitate, but it does provide a framework to enable zero-knowledge proof. In this way, we can enable individual privacy on the protocol level.

Through Proof of Process, both peer-to-peer and hierarchical systems can interact and exchange information in a way that each system can utilize its own source(s) of trust, thus enabling a decoupled and modular trust network.
