---
title: Header 🚧
description: Documentation for header component.
---

**A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## Header Usage
### 👍 Use this component for
- **Most websites require header navigation.** Most websites require some form of navigation to help users find the information they need. While a horizontal navigation bar is just one option for navigation design, it is one of the most visible and familiar ways of helping users navigate a site.

### 🚫 What to avoid / ensure
- **List all important website sections as links in the horizontal navigation.**
- **Dropdown menus help preview lower-level content.** For large websites, use dropdown menus to help users preview lower-level content. If lower-level sections are closely related and users will need to quickly jump between them, consider using a side navigation instead of — or in addition to — a dropdown.
- **Use short, clear link labels.** Don’t use jargon or unfamiliar terms.
- **Left-justify.** Left-justified link labels are more easily scannable.
- **Present links in priority order.** Higher-demand links should appear farther to the left, and lower-demand links should appear farther to the right.
- **Avoid org-structure navigation.** Don’t model your navigation after your agency’s org structure. Instead, structure it according to the tasks and information your users most frequently need to access.
- **Highlight the current section.** Show users where they are within the site by highlighting the current section.
- **Always research your navigation.** Conduct research with your users, and base decisions about your site’s information architecture and navigation structure on your findings. Continue researching to confirm that updates meet your users’ needs.


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

