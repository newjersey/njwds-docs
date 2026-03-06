---
title: Card
description: Documentation for card component.
---

**Cards contain content and actions about a single subject.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## Card Usage
### 👍 Use this component for
- **Collections of related content.** Cards help present a collection of related groups of content, like articles or sections of a website.

### 👎 Consider something else for
- **Tabular data.** Don’t use a card as a substitute for a table row.
- **Simple calls to action.** Use a button instead.
- **Standalone content.** Consider an aside or another standalone element.
- **Sequential, continuous text.** Cards should be self-contained and modular. If the reader is meant to read from card to card, consider a list or simple body text and headings.

### 🚫 What to avoid / ensure
- **Make cards actionable.** Since cards are used as a summary of more detailed information, any individual card should link out to that information.
- **Don’t use the card component only for decoration.** Use the card component for cards, not for any type of content that’s designed to have a border around it.
- **Include non-redundant content.** Don’t repeat images or content common to all or most cards in a collection. Repeated information (like using the same image for each card in a collection) makes it more difficult to distinguish cards from one another.
- **Make sure images are properly sized.** Cards often change size depending on the device. Make sure you use an image that works well on any device at any size.
- **Use simple styling.** Avoid distracting skeumorphism. Don’t include any card styling that calls too much attention to the metaphor of a paper card, like folds, bent edges, or paper texture.


## Content guidelines
- **?**


## Card Types

### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| type | default, flag |

### Default Card
- **Mobile-first design.** They stack and adapt to mobile screens.
- **Visual-heavy content** Ideal for image-driven content.
- **Browsing and discovery.** When users are skimming through items.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View primary button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Flag Cards
- **Desktop/Wide Screens** Better for using horizontal space and reducing vertical scrolling.
- **Text-Heavy/Detailed Content.** Ideal when information needs to be read rather than just scanned.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100"></iframe>


🔗 [View secondary button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--secondary-(light).html)


## Card variants

### Figma variant properties
| Property | Value |
| ----------- | ----------- |
| media position | left,right |
| media extent | true,false |
| media-inset | true,false |
| button | true,false |
| media | true,false |

### Media
#### Left or Right Side Media
**?**
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View primary (on) light button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Inset Media Media
**?**
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View primary (on) light button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### No Media
**?**
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View primary (on) light button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)


## Accessibility guidance
Use the [USWDS card accessibility tests](https://designsystem.digital.gov/components/card/accessibility-tests) to test button implementation.
- **Use unordered lists and list items.** Use a `ul` for a card group and an `li` for each card. This formatting allows screen readers to enumerate the items in the card group and allows shortcuts between list items.
- **Use the appropriate heading level for your page.** Update heading level based on the content of your page to make sure card headings are in the correct, logical outline order.
- **Use CSS to order the media element.** Logically, the media element should follow the header element. Don’t re-organize the markup to reverse their order.

## Code 

#### Code Variants
| Class | Description |  
| ----------- | ----------- |
| `.usa-card--flag` | Display in a horizontal (“flag”) orientation at a specified width ($theme-card-flag-min-width).|
| `.usa-card--header-first`| Displays the header element before the media element.|
| `.usa-card--media-right`  | In combination with usa-card--flag, sets the media element on the right. (Flag cards display media on the left by default.) |
| `.usa-card__media--inset`| Indents the media element so it doesn’t extend to the edge of the card. |
| `.usa-card__body--exdent`| Extends the body element out over the card border. Useful for light-bordered cards. |
| `.usa-card__footer--exdent` | Extends the footer element out over the card border. Useful for light-bordered cards. |
| `.usa-card__header--exdent` | Extends the header element out over the card border. Useful for light-bordered cards. |
| `.usa-card__media--exdent`  | Extends the media element out over the card border. Useful for light-bordered cards. |

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Card]([https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2-4297&p=f&t=bKnF73CGw0X7qNQv-0](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=1625-667&p=f&t=OWFjainTs6OfqOdE-0)) | Using card in designs, documentation and best practices on button usage |
| [Fractal: Card](https://newjersey.github.io/njwds/components/detail/card--compare.html) | Preview card styles, see card code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Card accessibility tests](https://designsystem.digital.gov/components/card/accessibility-tests/) | Accessibility tests to run for card component |
