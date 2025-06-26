import * as Tone from "tone";

let Synth = new Tone.Synth().toDestination()

Synth.triggerAttackRelease("C4", "8n")