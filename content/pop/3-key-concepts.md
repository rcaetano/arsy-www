---
layout: default
title: Key Concepts, Proof of Process
path: /archives/pop/key-concepts
---
import StaticImage from "../../src/components/static-image"

# Key Concepts

##### TYPES OF FACTS

Before we begin to construct a decoupled, modular proof system, let us examine the nature of the facts with which we will be working.

Facts are statements that represent reality. In order to label a statement as a fact, an honest inquirer must carry out a fact-checking experiment to verify if the statement indeed represents reality accurately. If the experiment yields a positive result, then the statement is qualified to be labeled as a fact. These are known as a posteriori facts. Scientific and empirical facts with experimentation as their basis of fact-checking are also examples of a posteriori facts.

However, there is another type of fact: _a priori_.

A priori facts represent reality that cannot be experimentally tested, such as the mathematical fact of “2 + 2 = 4”. Indeed, a fact-checking procedure would represent a deductive logic following the rules of decimal computation.

Apart from a posteriori and a priori facts, we also need to establish facts in places and situations in which fact-checking cannot take place. In the inner world of feelings we have to depend on a source of trust, e.g. the person telling us how she feels, or a source of authority attesting a claim.

Another example includes the facts of who made which move and who won at the end of a game of Battleship. It is both computationally and experimentally impossible to fact-check if both players have conspired together to make up false moves in a logically consistent way. We refer to these kinds of facts as subjective facts.

##### FACTS IN DIGITAL SYSTEMS

In the context of digital systems, facts are either computationally verifiable datasets (a priori facts) or trusted datasets (a posteriori and subjective facts).

With a priori facts, digital systems can compute a fact-checking algorithm to establish if the statement is indeed a fact. For example, an algorithm can check if the number of coins going into a transaction equals the number coming out. Any kind of computation to verify an a priori fact will be deterministic in nature. However, for a posteriori and subjective facts, we must depend on some source of trust in place of experimental or computational fact-checking.

A posteriori facts, in digital systems, being models of reality, cannot be fact checked through experimentation. So, we need a source of trust to attest a dataset as a fact, in the same manner as subjective facts. Once a fact has been attested, a proof system can then be used to demonstrate the trust that was the origin of the attestation of the fact. The trust source could be a centralized authority, such as a governing body, or a decentralized network of consensus such as the authority of ancient traditions or that of a blockchain timestamp server.

In this paper, we do not seek to establish trust, which, as we have seen, can be done either through fact-checking, signed attestation from a source of trust, or decentralized consensus. We will instead focus on building a proof system which can be used after the establishment of facts to demonstrate the trust at their origin.

##### PROOF SYSTEMS

A proof system enables one party, called a prover, to exchange messages with another party, a verifier, in order to convince the verifier that the subject of the proof is true — within the context of their mutually agreed upon source of trust.

<StaticImage src="pop-figure-2" alt=""  className="pop-image"/>

Fig. 2: A Proof System

There can be two kinds of proof systems.

For a posteriori and subjective facts a proof system can be made to establish a protocol to capture enough information from a process in order to build a proof that can demonstrate the trust that established the process in the first place.

A priori facts, being computationally verifiable, can be validated through the execution of code. Thus, the validation logic acts as the proof system.

For the purpose of this paper, we will only focus on the former: proof systems for a posteriori and subjective facts. And we are not checking if the facts were established in an honest way.

That said, we enable a proof system that can demonstrate the key factual elements of each step in a process with established facts in a decoupled and modular way.

