---
layout: default
title: Proof of Anteriority, Proof of Process
path: /archives/pop/proof-of-anteriority
---
import StaticImage from "../../src/components/static-image"

# Proof of Anteriority

Proof of anteriority implies the ability to prove when a piece of information was certified or signed. To enable this, it is necessary to be able to prove when the signature occurred, as keys or the document behind the digest step could expire. Thus, the validity of a piece of information is dependent on time. So, we must introduce the parameter of time into our proof in a secure way.

To reflect the linear arrow of real time in our system, we must ensure that once a step is performed, it cannot be reverted back to its previous state that only new steps can be added and older steps are never removed. Steps must be immutable.

If the time the step occurred is included through a digital signature, it must reflect the real time. The recorded time must not be able to be changed at a later date — this should invalidate the signature of the step.

We can obtain the time from a trusted time source that uses digital signatures to attest the time before it is finally recorded in the step. Doing so makes the time neutral to all the actors within the process. This is referred to as trusted time-stamping. In this way, we are able to demonstrate the when of a step.

<StaticImage src="pop-figure-6" alt=""  className="pop-image"/>

Fig. 6: Trusted Time-Stamping. The proof system obtains the current time from a trusted source and uses that timestamp along with the plaintext document to generate a cryptographic digest, which is immediately signed by the trusted source (using its private key) to create a time-stamped signature.

