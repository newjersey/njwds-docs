---
title: Tooltip 🚧
description: Documentation for tooltip component.
---

**A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View side panel in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## Tooltip Usage
### 👍 Use this component for
- **Helpful, non-critical information.** Use tooltips to strengthen an existing message.
- **Enhance confidence.** Use tooltips to increase certainty about an interaction.
- **Brief descriptions.** Tooltips perform best with succinct helper text.
- - **Icon only buttons.** Tooltips provide essential context to icon only buttons ensuring users understand the action. 
- **Lack of space.** Tooltips are useful as a last resort for space-constrained UI. Explore other options for keeping content visible without a tooltip.


### 👎 Consider something else for
- **Critical information.** Don’t hide information necessary for completing a task behind an tooltip interaction.
- **Lengthy descriptions.** Tooltips are microcopy, and should be brief. Don’t use a tooltip if you need a lot of text.
- **Redundant content.** Don’t use a tooltip when its content is repetitive or if usability is obvious.
- **Sufficient space.** If content can fit outside a tooltip, don’t use a tooltip.

### ✔️ What to ensure / avoid
- **Make tooltips discoverable.** A hidden tooltip is unusable. Use tooltips only on elements that appear interactive, like buttons or links.
- **Avoid collisions.** Be careful not introduce conflicting hover or focus events.
- **Use consistently.** If using tooltips in one context, use in all similar contexts.
- **Don’t block content.** Use the data-position attribute to prevent the tooltip from covering other page elements.


## Content guidelines
- **Keep the text short.** They should be brief.


## Tooltips

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View side navigation item in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| position | top, bottom, right, left |

### Code components
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Tooltip| `usa-tooltip` | Any element with the class name `usa-tooltip` and a title attribute will become a tooltip. |

## Accessibility guidance
Use the [USWDS in-page navigation accessibility tests](https://designsystem.digital.gov/components/in-page-navigation/accessibility-tests/) to test implementation.
- **Use as title attribute.** Tooltips are progressive enhancements for the title attribute, and will display as the title attribute if the component doesn’t initialize.
- **Keyboard accessibility.** Tooltips make title attributes keyboard accessible.

## Code 

### Tooltip Components

| Name | Class | Description |
| ----------- | ----------- | ----------- |
| X | X |


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Tooltip](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2781-1208&t=OWFjainTs6OfqOdE-0) | Using in designs |
| [Fractal: Tooltip](https://newjersey.github.io/njwds/components/detail/tooltip--default.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Tooltip](https://github.com/newjersey/njwds-sandbox/new/main/src/content/docs/reference) | Reference for additional styles and functionalities  |
| [USWDS: Tooltip accessibility tests](https://designsystem.digital.gov/components/tooltip/accessibility-tests/) | Accessibility tests to run for component |
