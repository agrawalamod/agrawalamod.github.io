---
layout: page
title: Localization using Speech Angle of Arrival
description: "We explore a passive and infrastructure-light approach to indoor localization using arbitrary human speech captured by spatially distributed smart devices. As voice assistants become increasingly embedded in modern environments, the ability to localize speakers using only existing audio hardware presents a scalable and privacy-conscious alternative to vision or wearable-based tracking.<br><br>The system leverages time-of-arrival differences in speech signals recorded across multiple microphone-equipped devices, such as smart speakers, TVs, or home robots and estimate the Angle of Arrival (AoA) at each device. It builds upon the classical Generalized Cross-Correlation with Phase Transform (GCC-PHAT) method, introducing enhancements (GCC+) such as feature-space expansion and subsample interpolation for improved time-delay estimation and angular precision.<br><br>By combining AoA estimates through geometric triangulation, the system infers the speaker’s two-dimensional position in real time. Notably, this approach requires no prior calibration, no knowledge of the spoken content, and no active participation from the user, making it well-suited for ambient and context-aware applications in smart homes, offices, and assistive settings.<br><br>Evaluated in a real-world residential environment, the system achieves a median AoA estimation error of 2.2 degrees and a median localization error of 1.25 meters. This work demonstrates the feasibility of using passive audio signals to enable spatially aware interactions, while proposing extensions to coplanar arrays, fusion with RF-based localization, and speaker profiling to support multiple human speakers in the space."
img: assets/img/projects/aoa_1.png
img2: assets/img/projects/aoa_2.png
img3: assets/img/projects/aoa_3.png
importance: 3
organization: University of Illinois Urbana-Champaign, Amazon Lab126
category: Academia
redirect: https://envsensys.github.io/2025/
---
