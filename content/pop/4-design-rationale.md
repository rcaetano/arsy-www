---
layout: default
title: Design Rationale, Proof of Process
path: /archives/pop/design-rationale
---

# Design Rationale

In the example just described, there is the actual process (the game being played) where Alice and Bob each make their own guesses.

Then there is the proof of that process. This proof is derived by extracting just enough information from each step of the actual process, without including the actual guesses, in order to build cryptographic proofs that can be used to verify the integrity of each step by an objective party.

To build these proofs it is necessary to address key information security concerns by establishing key factual elements within the proofs.

##### KEY INFORMATION SECURITY CONCERNS AND FACTUAL ELEMENTS

1. **Data Integrity**
The information content of a step in the process must correspond exactly to its intended step in the recorded process in way that proves there has not been any corruption or data tampering. This demands a proof to demonstrate the factual element of what is in a step.

2. **Actor Non-Repudiation**
The actors responsible for a step in the process must be recorded in such a way that the source of the information content of a step cannot be repudiated. This demands a proof of the factual element of who acted in a step.

3. **Proof of Anteriority**
The time at which a step in a process occurs must be provable. This demands a proof to demonstrate the factual element of when a step happened.

4. **Proof of Context**
Where the step belongs relative to the context of all other steps in a process must be unquestionably demonstrable. This demands a proof to demonstrate the factual element of where a step happened.

It is possible to create a single proof for each step of the process by consolidating the individual proofs for each of the four information security concerns into a single proof for each step.

Once we have a single proof for each step, we can then consolidate these again into a single proof for the entire process.

