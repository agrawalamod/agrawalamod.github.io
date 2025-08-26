// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-services",
          title: "services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Select projects across Industry and Academia (2016—2025)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-updates",
          title: "updates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/updates/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-project-hams-nominated-for-prime-minister-39-s-award-2020-amp-featured-by-the-govt-of-india",
          title: 'Project HAMS nominated for Prime Minister&amp;#39;s Award (2020) &amp;amp; featured by the Govt....',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-research-cited-by-organization-for-economic-co-operation-and-development-oecd",
          title: 'Research cited by Organization for Economic Co-operation and Development (OECD)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-realtor-com-expert-commentary-on-smart-home-security",
          title: 'Realtor.com – Expert Commentary on Smart Home Security',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/expert_commentary_1/";
            },},{id: "news-hackillinois-2025-judge",
          title: 'HackIllinois 2025 – Judge',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-connectivity-standards-alliance-csa-matter-member-meeting",
          title: 'Connectivity Standards Alliance (CSA) — Matter Member Meeting',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-ticker-news-expert-commentary-on-ai-advances-beyond-screens-with-ambient-sensing",
          title: 'Ticker News – Expert Commentary on AI Advances Beyond Screens With Ambient Sensing...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/expert_commentary_5/";
            },},{id: "news-product-space-hackathon-2025-mentor",
          title: 'Product Space Hackathon 2025 – Mentor',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-the-spruce-expert-commentary-on-smart-lighting-innovation-and-smart-home-adoption",
          title: 'The Spruce – Expert Commentary on Smart Lighting Innovation and Smart Home Adoption...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/expert_commentary_2/";
            },},{id: "news-acm-mobisys-2025-conference-amp-workshop-presentation",
          title: 'ACM MobiSys 2025 – Conference &amp;amp; Workshop Presentation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-ieee-senior-member-recognized-for-technical-contributions-and-professional-excellence",
          title: 'IEEE Senior Member – Recognized for technical contributions and professional excellence',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-forbes-expert-commentary-on-smart-hospitality-in-the-uae",
          title: 'Forbes – Expert Commentary on Smart Hospitality in the UAE',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/expert_commentary_3/";
            },},{id: "news-homes-amp-gardens-expert-commentary-on-ai-powered-smart-home-adaptation",
          title: 'Homes &amp;amp; Gardens – Expert Commentary on AI-Powered Smart Home Adaptation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/expert_commentary_4/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-indoor-localization-building-spatial-context-for-the-alexa-ecosystem",
          title: 'Indoor Localization—building spatial context for the Alexa ecosystem',
          description: "Indoor positioning using GPS is unreliable in enclosed environments, yet spatial context remains essential for enabling intelligent interactions with voice assistants and other connected devices. We introduced a foundational software framework for real-time spatial awareness in indoor environments, leveraging existing wireless infrastructure and devices&#39; sensing capabilities. By utilizing commodity radios such as Bluetooth Low Energy (BLE), Wi-Fi, Zigbee, and Ultra-Wideband (UWB), as well as other modalities including ultrasound and inertial tracking, the system performs distance estimation and positioning. It abstracts complex RF-based algorithms into a unified interface, supporting spatial use cases including proximity detection, device-to-device ranging, spatial presence, and user tracking. The framework has been developed through extensive real-world experimentation, systematically evaluating the performance, reliability, and limitations of each wireless modality under dynamic environmental conditions. To ensure scalability and robustness, the system integrates techniques from signal processing, machine learning, and edge computing. It supports multimodal sensor fusion to accommodate increasing heterogeneity in device form factors and sensing capabilities.While not directly exposed to end users, this platform acts as a core enabler for higher-layer applications that require spatial context, including room-aware assistance, presence sensing, and personalized user experiences. It integrates with LLM-based Alexa+, providing it with location context to facilitate more intelligent and adaptive behaviors. This work contributes to the broader vision of ambient computing by enabling distributed intelligence across smart devices, with applications spanning smart homes, automotive systems, and retail environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amazon_ils_project/";
            },},{id: "projects-localization-using-speech-angle-of-arrival",
          title: 'Localization using Speech Angle of Arrival',
          description: "We explore a passive and infrastructure-light approach to indoor localization using arbitrary human speech captured by spatially distributed smart devices. As voice assistants become increasingly embedded in modern environments, the ability to localize speakers using only existing audio hardware presents a scalable and privacy-conscious alternative to vision or wearable-based tracking.The system leverages time-of-arrival differences in speech signals recorded across multiple microphone-equipped devices, such as smart speakers, TVs, or home robots and estimate the Angle of Arrival (AoA) at each device. It builds upon the classical Generalized Cross-Correlation with Phase Transform (GCC-PHAT) method, introducing enhancements (GCC+) such as feature-space expansion and subsample interpolation for improved time-delay estimation and angular precision.By combining AoA estimates through geometric triangulation, the system infers the speaker’s two-dimensional position in real time. Notably, this approach requires no prior calibration, no knowledge of the spoken content, and no active participation from the user, making it well-suited for ambient and context-aware applications in smart homes, offices, and assistive settings.Evaluated in a real-world residential environment, the system achieves a median AoA estimation error of 2.2 degrees and a median localization error of 1.25 meters. This work demonstrates the feasibility of using passive audio signals to enable spatially aware interactions, while proposing extensions to coplanar arrays, fusion with RF-based localization, and speaker profiling to support multiple human speakers in the space.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aoa_project/";
            },},{id: "projects-collective-aspects-of-privacy-sensing-and-localization-in-online-networks",
          title: 'Collective Aspects of Privacy — Sensing and Localization in Online Networks',
          description: "We study how user attributes such as location and biography can be inferred in online networks through proxy social sensing—not from individuals themselves, but from their connections. Using only the information shared by contacts who joined the network earlier, we evaluate how accurately a user&#39;s location can be predicted without their direct participation. Our findings reveal that individuals can be localized with surprising precision (median error of ~68 km on the global map, versus ~6300 km in the null model), especially when many of their contacts have shared mobile data. This demonstrates that privacy in online networks is collectively determined, not individually controlled.We apply unsupervised techniques, including modal city prediction for location and vector similarity for biographical attributes, and benchmark against randomized baselines (null model). While biographical features are harder to infer, their predictability increases meaningfully as the number of disclosing connections grows. Our analysis also shows that broader disclosure behavior across the network systematically improves inference accuracy, highlighting how individual privacy is shaped by the behavior of others. This work introduces a new form of indirect localization, where network structure and peer behavior function as latent sensors for user attributes.This study provides the first empirical support for the shadow profile hypothesis, demonstrating that online networks can infer personal information about non-users or passive participants through the disclosures of others. It raises important questions about the nature of privacy in digital ecosystems, where user-level consent is insufficient to safeguard personal information in a socially connected world.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/collective_aspects_project/";
            },},{id: "projects-change-point-detection-using-edit-distance",
          title: 'Change Point Detection Using Edit Distance',
          description: "This project explores a novel method for detecting change points in time-series data using Edit Distance, enabling detection in both numerical and textual domains. Traditional change point detection techniques are limited to numerical inputs, but by quantizing data and representing it as symbolic sequences, this approach applies Levenshtein distance to identify structural deviations in system behavior. The algorithm scans for shifts in data patterns using a sliding buffer technique and flags points of semantic change—regardless of magnitude. Validated on diverse datasets such as weather records, eye movement, and stock prices, the method can support real-time monitoring of software systems, data centers, and network traffic to detect faults and anomalies early. This work opens pathways for more adaptive, domain-agnostic fault detection mechanisms in large-scale systems in real-time.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cpd_project/";
            },},{id: "projects-hey-disney-alexa-collaboration-enabling-wireless-sensing-use-cases-for-disney-resorts-and-parks",
          title: 'Hey Disney! — Alexa collaboration — Enabling wireless sensing use-cases for Disney resorts...',
          description: "As part of a collaboration between Amazon and Disney, this project enabled proximity-based guest experiences at scale by integrating the MagicBand+ wearable with Alexa-enabled devices. Deployed in over 28,000 rooms at Walt Disney World Resort, the system allows guests to seamlessly interact with in-room voice assistants by simply bringing their MagicBand+ near the device. These location-aware features, though subtle, enhance the overall guest experience by adding responsive, immersive touches that align with Disney’s emphasis on storytelling and magic. The underlying capabilities demonstrate how real-time localization and device awareness can be integrated into hospitality environments to create intuitive, personalized interactions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/disney_alexa_project/";
            },},{id: "projects-harnessing-automobiles-for-safety-hams",
          title: 'Harnessing AutoMobiles for Safety (HAMS)',
          description: "We explore the use of low-cost sensing solutions to enhance road safety and driving efficiency. By retrofitting off-the-shelf smartphones onto vehicle windshields, HAMS constructs a “virtual harness” that simultaneously monitors driver behavior, vehicle dynamics, and road context. The front camera observes the driver, the rear camera captures the road ahead, and onboard sensors such as GPS and accelerometers provide motion data. This multimodal sensing approach enables the system to detect complex events. For example, correlating hard braking with vehicle proximity and driver distraction—to provide actionable feedback for safer driving.The project addresses several real-world challenges, including variation in vehicle configurations, inconsistent road infrastructure (e.g., unmarked or variable-width lanes), and the need for efficient operation on resource-constrained mobile devices. HAMS employs a hybrid approach that combines lightweight computer vision techniques with deep learning models to ensure accuracy and scalability under these constraints.In addition to safety monitoring, my work extended to fuel efficiency analysis by integrating data from On-Board Diagnostics (OBD) interfaces. The system detects clutching, gear transitions, and aggressive driving behaviors, then quantifies their impact on fuel consumption. In urban traffic settings, the system revealed that up to 35% of fuel can be wasted during idle periods. Machine learning techniques, including regression models and unsupervised clustering, were used to model fuel usage patterns and identify geographic zones of inefficiency.HAMS has been piloted in driver training programs in collaboration with the Institute of Driving and Traffic Research (IDTR) and demonstrated potential use cases in fleet management and intelligent mapping services. The system offers a scalable framework for smart automotive diagnostics, context-aware fuel analytics, and automated driver coaching, with practical deployment potential in both developed and emerging markets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hams_project/";
            },},{id: "projects-headtrack-tracking-head-orientation-using-wireless-signals",
          title: 'HeadTrack: Tracking head orientation using wireless signals',
          description: "Head orientation tracking is critical for a range of mobile computing applications, including AR/VR, assistive technologies, and spatial interaction. Traditional solutions rely on infrastructure-based systems involving cameras, lasers, or high-end inertial sensors—limiting user mobility and constraining deployment to fixed environments.HeadTrack presents a wearable, infrastructure-free system that estimates a user’s head orientation using wireless signals. The system consists of a necklace-like wearable with a headset and chest-piece, each embedded with ultra-wideband (UWB) radios. By precisely estimating multiple distances between the headset and torso, HeadTrack infers the 3D orientation of the head relative to the body.To overcome the typical ~10 cm ranging limitation of UWB, the system introduces a reference-assisted design by splitting the transmitted signal across both wireless and wired paths. This approach reduces the ranging error to approximately 5 mm. Additionally, an onboard IMU is used to resolve phase ambiguities and ensure consistent tracking over time.Evaluated using ViCon ground truth data, HeadTrack achieves a head orientation tracking accuracy of 6.5°, offering a portable, occlusion-free, and cost-effective alternative to conventional motion capture systems. The system demonstrates how body-worn UWB sensing can enable fine-grained, infrastructure-free motion tracking in real-world settings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/headtrack_project/";
            },},{id: "projects-translator-an-intelligent-gesture-based-iot-communication-engine-for-the-deaf-and-mute",
          title: 'trAnSLator: An Intelligent Gesture-Based IoT Communication Engine for the Deaf and Mute',
          description: "trAnSLator is an intelligent communication system designed to facilitate natural interaction for individuals who are deaf or mute. It interprets sign language gestures into real-time, coherent spoken sentences, enabling users to engage in everyday conversations and even conduct phone calls using sign language. The system processes time-series gesture data through feature extraction and dynamic time warping algorithms, and assembles recognized gestures into meaningful sentences using a conversational bot framework. Built using a MYO armband, which captures electromyographic and inertial signals and integrated with an Android application, trAnSLator supports personalized gesture learning and incorporates contextual awareness to improve communication accuracy and fluency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/translator_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%6F%61%67%72%61%77@%61%6D%61%7A%6F%6E.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/agrawalamod", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/agrawalamod", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0001-9732-1024", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=FNpPnd0AAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2075308407# your Semantic Scholar ID", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'Cv',
        section: 'Socials',
        handler: () => {
          window.open("https://drive.google.com/file/d/1I-PNQ0fKvhJj9W1ejlYuwSacwYA90TSg/view?usp=sharing", "_blank");
        },
      },];
