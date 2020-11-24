---
layout: default
title: Actor Non-Repudiation, Proof of Process
path: /archives/pop/actor-non-repudiation
---
import StaticImage from "../../src/components/static-image"

# Actor Non-Repudiation

Non-repudiation implies that the sources of the information content of each step in a process should not be able to deny their involvement with the steps that represent their data through the digests. The tool we will use to address this is the digital signature.

<StaticImage src="pop-figure-4" alt=""  className="pop-image"/>

Fig. 4: Digital Signature Creation. First, one creates a split key pair – a private key with its corresponding public key – using a PKI system. Then one uses a signing algorithm to generate a signature from the private key and cryptographic digest.

<StaticImage src="pop-figure-5" alt=""  className="pop-image"/>

Fig. 5: Digital Signature Validation. The corresponding public key can then be used to verify if the signature matches the digest. However, the public key cannot be used to "sign" the digest, nor can it be used to recover the private key.

Both Alice and Bob need to be recorded as responsible for their guesses and replies in the game in such a way they they are accountable for their actions and thus the game’s result. The record of their identities can be established by having them digitally sign the digest of each guess and reply in the process, and then storing those signatures and their public keys along with the digest in the step. Anyone who has access to the proof can use public key verification methods to ascertain whether or not Alice or Bob is truly responsible for a step.

In this way we enable identity management and ownership to demonstrate the factual element of who.

