<mark>**Note that this document order from FP4 -> FP1**</mark>

<mark>Please sign up for the study</mark> at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 


## Part 1: Website Description

Eat Shanghai is a digital recipe book that preserves and celebrates my family's Shanghainese culinary heritage. I have quite a few projects on my personal design portfolio, but none of them showcase my own personal style. Therefore, unlike the rest of my portfolio pieces showcasing corporate design work, I deliberately wanted this project to take a more personal approach through hand-drawn illustrations that bring warmth and authenticity to each recipe that I'm sharing.

There are two main purposes of this website: to create a lasting archive of my family recipes that can be passed down through generations, and to demonstrate my illustration abilities in a deeply meaningful context. While my portfolio features polished digital designs, Eat Shanghai shows more of my artistic voice through hand-drawn illustrations that capture the soul of Shanghainese home cooking. The target audience of Eat Shanghai is specifically my family members, making this an internal facing website that prioritizes personal connection. The target audience is not the general public, as there are personal images and stories of my family on the website.

What makes Eat Shanghai engaging is its blend of functionality and emotional resonance. The hand-drawn elements create an intimate, sketchbook-like feel that stands in refreshing contrast to typical digital cookbooks. There are hover interactions for these hand-drawn elements, and scroll interactions on all of the pages to further engage the user. On each recipe page, users can toggle the number of servings they want to make, and the quantity of ingredients required will update appropriately. The project showcases both technical web design skills and artistic abilities while serving as a meaningful preservation of my family's cultural heritage.

## Part 2: User Interaction

1. Scroll Animations
    - On the homepage, scroll down to see recipe cards fade in and slide up
    - On recipe pages, scroll to see ingredients and instructions sections animate in from the sides
    - On the about page, scroll to see paragraphs fade in and slide up smoothly
2. Recipe Thumbnail Hover Effects
    - On the homepage, hover over any recipe image to see an alternate, colorful view of the dish
    - This works for all five recipe thumbnails (egg rolls, pork wontons, egg dumplings, fish balls, sweet and sour pork)
3. Ingredient Quantity Toggle
    - On any recipe page, look for the 1x, 2x, 3x buttons above the ingredients list
    - Click these buttons to automatically recalculate all ingredient quantities
4. Recipe Audio Playback
    - On recipe pages with available recordings, find the audio player section
    - Press play to hear my mom share the recipe in her own words
    - Some recipes show a "Coming soon" placeholder for future recordings
5. Responsiveness
    - Homepage: Recipe cards center-align in a single column when screen width is below 1350px
    - Recipe pages: Side-by-side hero image and content layout for desktop screens, and stacked layout with image on top at mobile breakpoint (860px)
    - Ingredient quantity toggle and scroll animations work consistently across both layouts
    - All hover effects and scroll animations adjust to work with both layouts
## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. jQuery
    - I chose jQuery because it simplified DOM manipulation and event handling with cross-browser compatibility and shorter, cleaner syntax.
    - I used jQuery to implement image hover effects and ingredient quantity toggle functionality with event handlers and DOM updates.
    - jQuery adds smooth interactive features that enhance user experience like dynamic ingredient calculations and image swaps.
2. GSAP (GreenSock Animation Platform)
    - I chose GSAP because it offers high-performance animations with precise control and better browser support compared to CSS animations.
    - I used GSAP to create scroll-triggered animations for page elements using the ScrollTrigger plugin.
    - GSAP adds polished, professional animations that guide users through content and create a more engaging browsing experience.

## Part 4: Design Iteration

Based on feedback from multiple lab sessions, I made several key iterations to my design. I added dish labels to the homepage thumbnails and implemented a footer to improve navigation clarity. In the recipe pages, I enhanced visual consistency by incorporating hand-drawn illustrations, matching the homepage's design language. I also simplified my technical approach by using jQuery and GSAP for animations instead of more complex libraries. For user functionality, I added an ingredients quantity toggle feature and included audio recordings of my mom sharing recipes, making the experience more personal and interactive. Throughout development, I focused on maintaining the authentic, homemade feel of the site while improving usability and interaction design based on user feedback.
## Part 5: Implementation Challenge

The main implementation challenge was managing various animations and interactions across different pages while maintaining consistency. Specifically, I struggled with making GSAP animations work properly with jQuery, which required careful script loading order and proper initialization timing, and ensuring the animations enhanced rather than disrupted the user experience. Additionally, maintaining consistent hover effects and scroll animations across different layouts and screen sizes was also challenging.
## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | generate copy |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Claude | Usage | No | No | Yes | Yes | Yes |
| Claude | Productivity | 4 | 4 | 6 | 6 | 6 |

Note: I had initially stated in FP2 that I would use Microsoft Copilot to generate images, but I ended up hand-drawing illustrations and choosing photos from my family albums.

### Usage Reflection

> Impact on your design and plan 

* It matched my expectations and plan in that I used Claude primarily as a technical assistant and learning tool. For example,
    1. Claude helped me understand and implement GSAP animations effectively. It also generated concise dish descriptions that captured the essence of each recipe while maintaining consistency. Lastly, it helped me with audio CSS styling and with debugging errors.
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that I didn't expect to have so many tasks that would be automated. For example, 
  1. I used Claude more extensively for automating repetitive code tasks than initially planned, like generating HTML list elements and similar components across pages. Instead of using AI for full recipe instructions as planned, I kept my family's original instructions and only used AI for brief dish descriptions. 

* Claude influenced my implementation plan because it sped it up. For example, 
  1. Its ability to handle repetitive tasks efficiently allowed me to spend more time on visual design and personal content. Its help with repetitive coding tasks also helped standardize my site's structure.

> Use patterns

* I accepted the generations when:
    1. Claude suggested concise dish descriptions that effectively communicated the essence of each recipe. It generated efficient code for repetitive elements like list structures and animation patterns. I also made sure I fully understood all of the generated code before using it.

* I critiqued/evaluated the generated suggestions by:
    1. Testing all code suggestions thoroughly and modifying them to match my site's specific needs and ensuring generated descriptions maintained the personal, family-oriented tone while being clear and engaging.


> Pros and cons of using GenAI tools
* Pros
    1. Claude significantly reduced time spent on repetitive coding tasks.
    2. Claude helped maintain consistency in descriptions and code structure across pages.
    3. Claude provided helpful technical guidance for animations.


* Cons
    1. Sometimes generated overly complex solutions for simple problems.
    2. Required careful review to ensure generated content maintained the personal touch.
    3. Initial suggestions sometimes needed substantial modification to match the site's aesthetic.


### Usage Log

Generating dish descriptions
![Generating dish descriptions](img/dish-descriptions.png)

Help with styling audio
![Help with styling audio](img/audio.png)

Scroll animations
![Scroll animations](img/scroll.png)

Help with repetitive tasks
![Help with repetitive tasks](img/repetitive.png)

Example of debugging: Adding a space
![Example of debugging: Adding a space](img/debugging.png)

Example of debugging: Fixing aspect ratio problems
![Example of debugging: Fixing aspect ratio problems](img/aspect-ratio.png)

## Part 7: Appendix
### WAVE Accessibility Checker Screenshots
Home Page
![Home Page](img/wave-home.png)

About Page
![About Page](img/wave-about.png)

Egg Rolls Page
![Egg Rolls Page](img/wave-egg-rolls.png)

Pork Wontons Page
![Pork Wontons Page](img/wave-pork-wontons.png)

Egg Dumplings Page
![Egg Dumplings Page](img/wave-egg-dumplings.png)

Fish Balls Page
![Fish Balls Page](img/wave-fish-balls.png)

Sweet and Sour Pork Page
![Sweet and Sour Pork Page](img/wave-sweet-sour-pork.png)

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [x]  Week 9 Oct 28 - Nov 1:
    - [x]  FP1 due
- [x]  Week 10 Nov 4 - Nov 8:
    - [x]  FP2 due
    - [x]  Create hi-fi prototypes for the other 4 recipe pages, and for mobile
    - [x]  Complete basic HTML/CSS for home page, with a format that can be achieved with CSS flex boxes
        - [x]  Consider breakpoints and responsiveness for mobile
    - [x]  Familiarize with jQuery
- [x]  Week 11 Nov 11 - Nov 15:
    - [x]  Implement first recipe page (wontons)
        - [ ]  Consider breakpoints and responsiveness for mobile
    - [ ]  Implement sticky ingredients feature
- [ ]  Week 12 Nov 18 - Nov 22:
    - [ ]  Complete 2 more recipe pages
- [ ]  Week 13 Nov 25 - Nov 29:
    - [ ]  Complete final 2 recipe pages
    - [ ]  Add visual elements to homepage: Chopsticks animations, sparkle effects
    - [ ]  Thanksgiving
- [ ]  Week 14 Dec 2 - Dec 6:
    - [ ]  FP4 due
    - [ ]  Continue polishing homepage
    - [ ]  Gen AI documentation
    - [ ]  Final polish and submission

I have followed my implementation plan by creating hi-fi prototypes, completing basic HTML/CSS, and considering responsiveness for mobile for the homepage. In terms of what library I'll be using, I've decided to pivot away from using GSAP to animate, and instead, I'll be using jQuery to write all of my JS. To follow the rest of my plan, I'll work on responsiveness for mobile for the recipe pages and the sticky ingredients feature, and proceed with the rest of the plan.

## Generative AI Use Plan Updates

I have not yet used Generative AI in my project.

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

I’m creating Eat Shanghai, a digital preservation of my family recipes from Shanghai to make these recipes accessible and engaging for future generations in my family. I’ll incorporate elements of my family’s history, images from our home kitchen, and hand-drawn illustrations to add to the homemade charm.

## High-Fi Prototypes

### *Prototype 1: Home Page*

![Home Page](img/home.png)

This is the landing page for Eat Shanghai, which is the users' first impressions of the site and their access point for all of the different recipes available on the site. My evaluators gave me a few key recommendations, including adding a header to the recipe section, adding a footer to the site overall, and incorporating more interactive elements (like animated chopsticks and sparkling effects). They also wanted more obvious signaling for clickable areas and recommended that I achieve this through adding labels to each dish.

### *Prototype 2*

![Wontons Recipe Page](img/wontons.png)

This is the Pork Wontons Recipe Page, which shows images, ingredients, and instructions for the dish. The rest of the recipe pages will follow a similar format. My evaluators suggested both content and visual refinements for this page. One evaluator mentioned that the placement of the opening copy feels awkward. They also mentioned how the main image shouldn't cut off content. Additionally, they said the page lacks visual interest and suggested adding process photos and incorporating the hand-drawn illustration style from the homepage. Overall, the page needs more elements to maintain consistency with the homepage's design language.

## Usability Test

For the usability testing that I conducted, I had two evaluators use the think aloud protocol to give me feedback on my designs. I had each of my evaluators complete three tasks during their respective tests.

1. Browse the home screen and identify what actions you should be able to take here. Scroll and click around to explore the interactions.
2. Navigate to the Pork Wontons recipe page.
3. Browse the Pork Wontons recipe page and identify what actions you should be able to take here.

Through this protocol, I received really helpful feedback that I implemented into the second version of my designs. For better navigation and visual clarity, I lightened the color of the chopsticks and added labels to each of the dishes on the homepage. Additionally, I added a footer to help users better understand when there is no more page content and it's no longer scrollable.

On the recipe pages, my evaluators gave me some helpful feedback on the visual design, which is something I was struggling with when I was creating the design. For example, I made a few enhancements by incorporating step-by-step photos for the wonton-making process. Additionally, I adjusted image sizing and used custom cropping for better visual integration into the site. I also took their advice of adding hand-drawn illustrations to maintain consistent design language throughout the site. Another change I made was implementing a servings adjustment feature for ingredients to improve user functionality. Now, users can toggle through 1x, 2x, and 3x, ingredient options.

In the actual implementation of the site, I will add audio guidance for the process steps to add an additional layer of interactivity. I chose to implement these changes that they suggested to address my evaluator's concerns about navigation clarity, visual storytelling, and interactivity while preserving my site's visual design.

## Updated Designs

![Home Page](img/home_updated.png)

Homepage updated with labels for each dish and a footer.

![Wontons Recipe Page](img/wontons_updated.png)

Wontons recipe page updated with custom image cropping, hand drawn visuals, process images, and an ingredients serving size adjuster.

You can check out interactivity here: https://www.figma.com/proto/qwYALb1E8iYl4wPEdDBsxj/pui-fp?page-id=0%3A1&node-id=106-213&node-type=section&viewport=-2634%2C-369%2C0.25&t=tl2UGHHj8B31K4BO-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=106%3A213&show-proto-sidebar=1

## Feedback Summary

During lab today, I received more helpful feedback, and the following are the most helpful pieces of feedback that I will implement in my final designs. In terms of visual design and navigation, someone mentioned that the overall look and feel of the site authentically reflects my own style. They recommended that I should consider showing partial recipe content ("peek through") to indicate scrollable content. On the recipes page, someone said to explore different image shapes in the process images to maintain some visual interest, and to add in some hand drawn icons throughout the instructions as well. A key piece of feedback I got was to consider how people think while cooking and structure my content accordingly. For example, in terms of the recipe page layout and functionality, someone suggested that I should make the ingredients section sticky during scrolling so that people can easily reference the list when they are scrolling through the instructions. They also mentioned that I could make a better use of the white space under the ingredients section, and to improve readability by increasing the spacing between each process step in the instructions. I could also consider breaking down the steps into main steps with substeps, and use bold text for important phrases. This could help users with their ability to scan the instructions quickly.

In terms of technical recommendations, I was told to use WEBP format images for better web performance and accessibility. For heading hierarchy, I can use the text "Recipes by the Xuans" for my H1 text to make sure that it is accessible. I could also consider using overlapping rows using relative/absolute positioning, and using D3 for animations to achieve the visual designs I'm going for.
In general, I was advised to focus on the basic functionality of my site before adding too many animations so that I can stay on track with timing.

## Milestones

### *Implementation Plan*

- [x]  Week 9 Oct 28 - Nov 1:
    - [x]  FP1 due
- [ ]  Week 10 Nov 4 - Nov 8:
    - [x]  FP2 due
    - [ ]  Create hi-fi prototypes for the other 4 recipe pages, and for mobile
    - [ ]  Complete basic HTML/CSS for home page, with a format that can be achieved with CSS flex boxes
        - [ ]  Consider breakpoints and responsiveness for mobile
- [ ]  Week 11 Nov 11 - Nov 15:
    - [ ]  Implement first recipe page (wontons)
        - [ ]  Consider breakpoints and responsiveness for mobile
    - [ ]  Implement sticky ingredients feature
    - [ ]  Familiarize with GSAP
- [ ]  Week 12 Nov 18 - Nov 22:
    - [ ]  Complete 2 more recipe pages
    - [ ]  GSAP animations for homepage: Chopsticks animations, sparkle effects
- [ ]  Week 13 Nov 25 - Nov 29:
    - [ ]  Complete final 2 recipe pages
    - [ ]  Polish homepage to be more decorative
    - [ ]  Thanksgiving
- [ ]  Week 14 Dec 2 - Dec 6:
    - [ ]  FP4 due
    - [ ]  Continue polishing homepage
    - [ ]  Gen AI documentation
    - [ ]  Final polish and submission

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use. 
* GSAP animation library


## Generative AI Use Plan

I plan to leverage a different Generative AI tools strategically while maintaining the very personal nature of my project. 

### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

- Claude
    - I mainly use Claude in my workflow, and I think  Claude will be particularly helpful for two key aspects: writing copy and learning GSAP.
    - For copy, I'll use Claude to help refine recipe instructions to make sure they're clear and concise while maintaining my family's voice.
    - I'll also use it to help me with the About Page copy. Since I'm new to the GSAP animations library, Claude can provide code examples and explain implementation approaches for what I am trying to achieve.
- Microsoft Copilot can help me with generating placeholder images during development before I replace them with my own food photography.

There are crucial aspects where I will not rely on AI. The visual design elements - including illustrations, layout decisions, and overall aesthetic - need to remain deeply personal to reflect my family's story and my design style. These creative decisions will come from me to maintain the authentic connection to my family's culinary heritage.

### *Responsible Use*

How would you use Generative AI responsibly? 
To use AI responsibly, I will:

- Always review and understand generated code before implementation
- Use AI as a learning tool, not just a solution provider
- Maintain transparency about which parts were AI-assisted and document my chat history
- Verify technical suggestions against documentation and make sure I'm understanding them
- Keep the personal narrative and design vision driven by own personal style
- Use AI to enhance, not replace, my creative decision-making

The goal is to let AI handle more mechanical aspects (like writing copy and generating images) while I focus on the creative and personal elements that make Eat Shanghai unique. I think this approach will help me build a technically solid website while preserving the authentic, family-centered essence of the effect I am trying to achieve.


---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Personal Portfolio*

![Personal Portfolio](img/portfolio.jpg)

My goal is to create a personal portfolio that communicates who I am as a designer and a person. I want to convey my design approach, technical and soft skills, and personal interests and values. I will use P5 for features such as Alpha Mask to make my portfolio visually engaging. Additionally, I will make it interactive through project thumbnails that reveal details on hover, marquee animations, custom cursor interactions, and scrolling animations. I’ll make it accessible through clear navigation structure, alt text for images, high contrast color options, and more.

### *Shanghai Family Recipes*

![Shanghai Family Recipes](img/shanghai-recipes.jpg)

I want to create a digital preservation of family recipes from Shanghai to make these recipes accessible and engaging for future generations in my family. I’ll make it interactive through filtering options by ingredient, occasion, or difficulty, and a dynamic service size calculator. To make it accessible, I will ensure screen reader compatibility, clear typography, multiple language support, and clear alt text.

### *Personal Finance Tracker*

![Personal Finance Tracker](img/finance-tracker.jpg)

My goal is to create a customizable financial tracking system that combines spending tracking and categorization, credit card reward optimization, and yearly/monthly overviews in one dashboard. It will be interactive through dynamic spending visualizations, real-time category spending bars, and adding new transactions. I’ll make sure my data tables are accessible, the charts are color-blind friendly, and that there are consistent navigation patterns.

## Feedback Summary

In today’s lab critique session for FP1, I received many helpful pieces of feedback from my peers. I focused on getting feedback on my ideas of a Shanghai family recipe catalog and a personal finance tracker because those are the ideas I was the most excited about.

My Shanghai family recipe catalog received the most extensive feedback. Technical recommendations I received include implementing a filtering system that allows users to select more than one filter option at a time, and considering various ways to display measurement formats to accommodate the imprecise nature of family recipes. Design suggestions included emphasizing the homey, personal feel of family recipes through hand-drawn elements. Ideas for more interactivity included incorporating 3D icons with hover animations and process photos demonstrating important visual cues in cooking like the color and consistency of the food. A unique suggestion I received involved incorporating audio recording of family members to capture the word-of-mouth aspect of recipe sharing amongst my family. 

For my personal finance tracker concept, someone suggested that I make sure it is accessible through mobile so that I can log transactions on the go. Additionally, I was told that Vega-Lite would be better suited for my purposes as opposed to D3, because Vega-Lite is built upon D3. I could also consider using SQL for backend data management. Lastly, someone told me to make sure that I’m considering all of the use cases I want for my personal experience, so that I don’t run into any functionality blockers as I’m using it.

My third idea was for a personal portfolio, but my TA suggested that there are other platforms out there for portfolio building that would make this easier, so I have decided against the idea. The key piece of feedback I got for this idea was to avoid generic approaches and make sure my individual character shows through. Additionally, it would be important for me to consider mobile-friendly functionality because recruiters and hiring managers may be looking at my portfolio on their phones.

## Feedback Digestion

I’ll focus on my ideas of a Shanghai family recipe catalog and a personal finance tracker because I've narrowed down my ideas to those two.

In general, I received feedback to think about what I would gain from adding each of these projects to my portfolio. Someone got me thinking about how these are going to benefit me as a product designer, and what I want to convey to future employers. I think the Shanghai family recipes catalog would show more of my visual design skills, whereas the personal finance tracker would show more of my programming and data visualization skills. This piece of feedback will be critical in my selection.

In regards to my recipe catalog idea, I would incorporate the feedback to select just a few recipes to start with first, instead of trying to incorporate all of my ideas. This is because one of my main concerns was that I wouldn’t be able to achieve the visual design I wanted with the time constraints I have, so I think this is good advice. Another suggestion I would incorporate is to make the website feel homey using hand drawn illustrations and a well thought-out color scheme. Someone suggested that I should have 3D thumbnails for each dish, but I will deprioritize this as it could detract from the core functionality and extend development time significantly. An idea that I’ll consider based on feasibility with my family members’ time is to record their audio to incorporate into the recipes. I would record them in Chinese and then transcribe them and translate them to English.

For my personal finance tracker, I’ll incorporate the idea of using Vega-lite instead of D3 because it is better suited for my purposes. Additionally, I don’t think it’s completely necessary for me to have a complete SQL backend – for the initial version, a simpler data management system might be more appropriate. I will also consider scaling some of the widgets down to make sure I have enough time to complete the assignment.
