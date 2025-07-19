---
layout: page
title: Harnessing AutoMobiles for Safety (HAMS)
description: "The HAMS project explores the use of low-cost sensing solutions to enhance road safety and driving efficiency. By retrofitting off-the-shelf smartphones onto vehicle windshields, HAMS constructs a “virtual harness” that simultaneously monitors driver behavior, vehicle dynamics, and road context. The front camera observes the driver, the rear camera captures the road ahead, and onboard sensors such as GPS and accelerometers provide motion data. This multimodal sensing approach enables the system to detect complex events. For example, correlating hard braking with vehicle proximity and driver distraction—to provide actionable feedback for safer driving.<br><br>The project addresses several real-world challenges, including variation in vehicle configurations, inconsistent road infrastructure (e.g., unmarked or variable-width lanes), and the need for efficient operation on resource-constrained mobile devices. HAMS employs a hybrid approach that combines lightweight computer vision techniques with deep learning models to ensure accuracy and scalability under these constraints.<br><br>In addition to safety monitoring, my work extended to fuel efficiency analysis by integrating data from On-Board Diagnostics (OBD) interfaces. The system detects clutching, gear transitions, and aggressive driving behaviors, then quantifies their impact on fuel consumption. In urban traffic settings, the system revealed that up to 35% of fuel can be wasted during idle periods. Machine learning techniques, including regression models and unsupervised clustering, were used to model fuel usage patterns and identify geographic zones of inefficiency.<br><br>HAMS has been piloted in driver training programs in collaboration with the Institute of Driving and Traffic Research (IDTR) and demonstrated potential use cases in fleet management and intelligent mapping services. The system offers a scalable framework for smart automotive diagnostics, context-aware fuel analytics, and automated driver coaching, with practical deployment potential in both developed and emerging markets."
img: assets/img/projects/hams_1.png
img2: assets/img/projects/hams_2.png
img3: assets/img/projects/hams_4.png
img4: assets/img/projects/hams_3.png
organization: Microsoft Research
redirect: https://www.microsoft.com/en-us/research/project/hams/
importance: 2
category: Industry
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
