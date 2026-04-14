---
title: NJ Feedback Widget
description: Documentation for NJWDS feedback widget component.
---

**Custom NJWDS footer component to collect quantitative and qualitative feedback on a website or web app.**

<iframe title="Feedback widget" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=components-feedback-widget--default&viewMode=story" width="100%" height="100"></iframe>

🔗 [View NJ feedback widget in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-feedback-widget--docs)


## Feedback Widget Usage

### 👍 Use this component for
- **NJIA-built websites and web apps.** Standalone OOI built websites and web apps can gather feedback using the feedback widget. Ex: UI Claim Status Portal, AI Assistant
- **NJ.gov sites where OOI has embedded a tool.** Ex: Maternity timeline tool
- **OIT-built OOI-designed information hubs** Ex: Disability Information hub

### 👎 Consider something else for
- **NJ.gov website of agencies we are not collaborating with.** Due to the nature of data storage within the feedback widget, it is not currently sustainable or recommended for NJ agencies to use the feedback widget without our collaboration.


## 🚫 What to ensure / avoid
- **Customize helper text in the feedback widget.** Make sure to update the topic and contact information in the helper text on step 2 of the feedback widget.
- **Test in context.** Ensure the feedback widget works well in context, at all relevant screen sizes. 


## Content guidelines
- **Customize helper text in the feedback widget.** Make sure to update the topic and contact information in the helper text on step 2 of the feedback widget.
- **Test in context.** Ensure the feedback widget works well in context, at all relevant screen sizes.


## Figma properties

| Property | Value |
| ----------- | ----------- |
| screen size | desktop, mobile |
| language | en (English), es (Spanish) |
| step | 1, 2-negative, 2-positive, 3-email, 4-thanks |
| helper | true, false |


## Accessibility guidance
- TBD

## Code guidance
See the [README for the feedback widget repository](https://github.com/newjersey/feedback-widget/blob/main/README.md) for documentation on feedback widget settings and other technical documentation.


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Feedback Widget](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2-21115&t=xEncjmi7erLwzVH8-0) | Using feedback widget in designs|
| [Storybook: Feedback widget](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-feedback-widget--docs) | Interactive example, code snippets, variants |
| [Fractal: Feedback widget](https://newjersey.github.io/njwds/components/detail/feedback-widget--success.html) | Preview styles, see code snippets |

