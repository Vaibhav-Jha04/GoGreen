# VoiceForge

A multi-character, batch text-to-speech tool built on top of [Fish-Speech](https://github.com/fishaudio/fish-speech). VoiceForge adds a workflow for cloning multiple voices, writing multi-speaker scripts in a simple text format, and generating a full set of stitched audio files in one batch — instead of clicking through Fish-Speech's UI one line at a time.

This started as a personal project to speed up producing narrated/voiced video content (e.g. dialogue between two recurring "characters") without manually generating and splicing dozens of clips per video.

## What it adds on top of Fish-Speech

Fish-Speech provides the underlying TTS model and voice cloning engine. VoiceForge wraps it with:

- **Voice Setup tab** — upload reference audio (and the matching transcript) to register a named voice. Multiple reference samples can be added per voice (`sample_01.wav`, `sample_02.wav`, …), which Fish-Speech's `reference_id` system then uses together for a more stable clone, rather than relying on a single short clip.
- **Script parser** (`tools/voiceforge/script_parser.py`) — reads a plain-text script in the format:
  ```
  === VIDEO 1 ===
  PETER: Hey Stewie, did you know...
  STEWIE: Wait, what?
  ```
  and splits it into per-video, per-line generation jobs, mapping each speaker name to a registered voice.
- **Batch processor** (`tools/voiceforge/batch_processor.py`) — runs generation for every line in a script back-to-back, inserts natural pauses between speakers, and stitches each video's lines into a single output WAV.
- **Gradio UI** (`tools/voiceforge/ui.py`, launched via `tools/voiceforge_app.py`) — three tabs: *Voice Setup*, *Generate*, and *Help*. Lets you preview the parsed script before committing to a full batch run, then download a ZIP of all generated audio.

## Project layout

```
fish_speech/             # Fish-Speech model & inference code (upstream)
tools/voiceforge/        # VoiceForge additions
  ├─ ui.py               # Gradio UI (Voice Setup / Generate / Help tabs)
  ├─ script_parser.py    # Parses "=== VIDEO N ===" / "SPEAKER: line" scripts
  └─ batch_processor.py  # Runs batch TTS + stitches per-video audio
tools/voiceforge_app.py  # Entry point — launches the VoiceForge UI
VOICEFORGE_SETUP.md      # Step-by-step local setup guide (Windows + WSL2 + RTX 4070 Ti)
```

## Getting started

VoiceForge runs on top of a normal Fish-Speech install. The short version:

1. Set up Fish-Speech (CUDA, Python env, model checkpoints) — see [VOICEFORGE_SETUP.md](VOICEFORGE_SETUP.md) for a full walkthrough on Windows/WSL2 with a 12GB GPU.
2. Launch VoiceForge instead of the stock Fish-Speech WebUI:
   ```bash
   python tools/voiceforge_app.py --half
   ```
3. Open `http://localhost:7860`, register your voices in **Voice Setup**, then paste/upload a script in **Generate** and run it.

## Usage notes

- **Voices** are stored as named folders containing one or more reference clips plus matching `.lab` transcript files (Fish-Speech's convention) — this is what lets multiple samples per voice work natively.
- **Scripts** are plain text; each video block starts with `=== VIDEO N ===` and each line is `SPEAKER: text`. Unknown speaker names are flagged at the "Parse & Preview" step before generation runs.
- Output is a ZIP containing one stitched WAV per video, in script order.

## Acknowledgements

VoiceForge is built directly on top of [Fish-Speech](https://github.com/fishaudio/fish-speech) by Fish Audio — all of the actual voice cloning and speech synthesis is done by their model and inference stack. This repo only adds the multi-character batch workflow and UI on top of it. See `fish_speech/` for the upstream code and its own license/attribution.
