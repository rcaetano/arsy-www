---
layout: default
title: Contextual Proof, Proof of Process
path: /archives/pop/contextual-proof
---
import StaticImage from "../../src/components/static-image"

# Contextual Proof

So far, we have covered methods to establish the what (with a cryptographic digest), the who (a digital signature), the when (trusted timestamp) — now we need to establish the where, or the context of a step relative to the others.

We do this by establishing contextual (and cumulative) proof using a hash chain.

First, we create another digest for the entire step (the digest, signature, and timestamp, so far), which we can call a link hash.

Then we insert that link hash into the following step of the process along with the digests of the other key factual elements.

<StaticImage src="pop-figure-7" alt=""  className="pop-image"/>

Fig. 7: Contextual Proof via Hash Chain. The digest of the content of each step is included in the following step, cryptographically linking every step of the process. By including the link hash of the previous step, we establish a clear and provable step sequence, and thus proof of the context of all steps. With the exception of the first, a new step simply cannot be created if there is not a previous one to reference.

##### Cumulative Proof
By including the proof of its previous step, every step in effect contains the proof of all its previous steps, forming a cumulative proof. Thus, we have a chain of cumulative proofs to ensure the contextual proof.

By sharing a cumulative proof of a specific step, we share the proof of all its previous steps as well. Alice can just carry the digest of the final step — which is effectively proof of all the steps of her Battleship game.

Cumulative proofs are tamper-proof — to change the result of one, you would have to go all the way back to the first step to change the proofs in all previous steps, which would in turn invalidate the entire process.

In this way, we are able to demonstrate the where of a step.

##### Nested Proofs of Processes
As the proof of an entire process can be represented by the digest of the final step, we could include the proof of one process inside a step in another proof of process graph. The link hash of the final step of the outer process graph would thus demonstrate both proofs of its steps, as well as proof of the steps of the inner process graph.

In this way, we can seamlessly connect multiple processes. For example, the proof of Alice’s Battleship victory could be connected to the proof of her victory in a Backgammon game to establish a reputation profile in a network of board game enthusiasts who wish to assert their refined taste in an era of rapid-fire, deliberately addicting console and mobile games.

##### Defining Anteriority and Context: Common Time
In this paper we have used examples of individual sources of trust for timestamping. However, the factual element of when (and thus, where) can also be established through consensus on a common timeline.

A common timeline can be established through a blockchain network in which participants agree to contribute computational power through a clearly defined consensus logic for the acceptance of new blocks (process steps) of information that define the when and where of a proof of process graph.

Read more about blockchain consensus logic mechanisms: bitcoin whitepaper, proof of work, proof of stake.

