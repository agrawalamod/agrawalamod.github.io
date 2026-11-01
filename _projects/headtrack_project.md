---
layout: page
title: "HeadSense: Head Orientation Tracking for AI Wearables using Ultra-Wideband Ranging"
description: "AI wearables such as smart glasses, pins, pendants, and earbuds rely on head gestures for interaction, yet they lack a reliable, continuous measure of where the head points relative to the torso. That signal gives AI assistants temporal attention context: it lets them infer sustained visual attention, resolve spatial commands, and filter out incidental head movements. IMU-based tracking drifts over time, and magnetometer correction fails indoors near ferrous materials and the speaker magnets common in wearables.<br><br>HeadSense is a necklace-like wearable that uses ultra-wideband (UWB) radios to track head orientation relative to the torso with bounded, non-accumulating error. A wired reference path between chest-mounted transmitters and head-worn receivers enables relative time-of-flight measurements with sub-centimeter precision.<br><br>A four-stage signal processing pipeline combines channel impulse response (CIR) interpolation, template matching, phase refinement, and IMU-based ambiguity resolution. It reduces the typical 10 cm UWB ranging error to a median of 5 mm and reaches a median orientation error of 6.5°, validated against Vicon motion capture. HeadSense gives AI wearables an infrastructure-free, body-centric orientation signal without cameras or external tracking.<br><br>The work began as HeadTrack, my M.S. thesis at UIUC (2019), and was published as HeadSense at ACM HumanSys '26, co-located with MobiCom 2026."
img: assets/img/projects/headtrack.png
importance: 2
organization: University of Illinois at Urbana-Champaign
category: Academia
links:
  - name: Thesis
    url: https://hdl.handle.net/2142/105242
  - name: Paper
    url: https://doi.org/10.1145/3842436.3843787
---
