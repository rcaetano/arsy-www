---
layout: default
title: Data Integrity, Proof of Process
path: /archives/pop/data-integrity
---
import StaticImage from "../../src/components/static-image"

# Data Integrity

In information security systems, data integrity implies the maintenance and assurance of the accuracy and completeness of data over the system’s life cycle. This means that the users should be able to prove that data has not been modified in an unauthorized or undetected manner. The most common tool to accomplish this is the cryptographic digest.

<StaticImage src="pop-figure-3" alt=""  className="pop-image"/>

Fig. 3: Cryptographic Digests. A cryptographic digest process takes plain text and generates a string unique to that input text, which acts as a digital fingerprint.

Let’s return to our Battleship game. Let’s say the first move by Alice is “D10”.

To create a digest of Alice’s first move, we will pass the string “D10” through a cryptographic hashing algorithm such as SHA-256 to generate a digest and then store the digest in the step1 of the process graph. Alice can record her actual guess separately as it does not need to be part of the proof of process; we only need to store the document digest. She gets to keep her guesses secret — or at least between her and her opponent1.

As the digest will be unique for that specific guess, we can then use it to prove that the guess is legitimate, or that this indeed is the correct guess that we are looking for. If the veracity of a digest in a step were challenged, Alice could use her secret guess to re-generate the digest, thus demonstrating that there is a match between the generated digest and the digest within the step recorded in the process graph. In this way, Alice can demonstrate proof of the factual element of what has happened.

