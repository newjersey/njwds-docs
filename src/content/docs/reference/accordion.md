---
title: Accordion
description: Documentation for accordion component.
---

**An accordion is a list of headers that hide or reveal additional content when selected.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View accordion in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## Accordion Usage
### 👍 Use this component for
- **If users will only need a few specific pieces of content within a page.**
- **If you have only a small space to display a lot of content.**

### 👎 Consider something else for
- **If users need to see most or all of the information on a page.** Use well-formatted text instead.
- **If there is not enough content to warrant condensing.** Accordions increase cognitive load and interaction cost because users have to make decisions about what headers to click on.

### 🚫 What to ensure / avoid
- **Make the entire header selectable.** Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.
- **Give interactive elements enough space.** Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.)


## Content guidelines
- TBD


## Accordion Variants

### Borderless Accordions

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View borderless accordion in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| state | closed, open |
| type | borderless |
| title | [text input] |
| content | [text input] |

#### Code Variant
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Borderless Accordion | `usa-accordion` | Add to `div` class for borderless accordion |


### Bordered Accordions

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View bordered accordion in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| state | closed, open |
| type | bordered |
| title | [text input] |
| content | [text input] |

#### Code Variant
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Bordered Accordion | `usa-accordion usa-accordion--bordered` | Add to `div` class for bordered accordion |


### Multiselectable Accordions
Add the `data-allow-multiple attribute` to any usa-accordion to create a multiselectable accordion group.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View multiselectable accordion in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Code Variant
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Multiselectable | `aria-multiselectable="true"` | Add to `div` class for multiselectable accordion (can be added to bordered or borderless styles) |


## Accessibility guidance
Use the [USWDS accordion accessibility tests](https://designsystem.digital.gov/components/accordion/accessibility-tests) to test accordion implementation.
- **Code header areas in the accordion as buttons.** Using a `<button type="button">` assures accordions are usable with both screen readers and keyboards.
- **Use meaningful expansion button labels.** Aim for informative labels like “Explore federal compliance checklists” rather than vague ones like “Click here.”
- **Use `aria-controls` to associate an accordion button with its related content.** Connect an accordion button control with its appropriate content region by referencing the controlled element’s `id` in the button’s `aria-controls` attribute.
- **Use unique ids.** Each button has a unique name, `aria-controls="[id]"`, that associates the control with the appropriate region by referencing the controlled element’s `id`.
- **Accordions use javascript to set the `hidden` values of their content areas.** Each content area will have its `hidden` attribute set by the component, depending on its corresponding button’s `aria-expanded` attribute. To ensure your content is accessible in the event that the JavaScript does not load or is disabled, you should not manually set `hidden` on any of your content areas.
- **You do not need to add text alternatives for the collapsed and expanded accordion states.** These states are set programmatically with JavaScript.

## Code 

### Guidance 
- **Multiselectable accordion groups.** Add the `data-allow-multiple attribute` to any usa-accordion to create a multiselectable accordion group.
- **Default an accordion button to open.** Add the `aria-expanded="true"` attribute to any `usa-accordion__button` to have that section open by default at page load. When the accordion is initialized, the JavaScript will automatically add `aria-expanded="false"` attribute to all other accordion buttons.

### Accordion Variants 
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Borderless | `usa-accordion` | Add to `div` class for borderless accordion |
| Bordered | `usa-accordion usa-accordion--bordered` | Add to `div` class for bordered accordion |
| Multiselectable | `aria-multiselectable="true"` | Add to `div` class for multiselectable accordion (can be added to bordered or borderless styles) |

### Accordion Components
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Accordion Heading | `usa-accordion__heading` | Add to `h2` for accordion title |
| Accordion Button | `usa-accordion__button` | Add to `button` for accordion button |
| Accordion Content | `usa-accordion__content usa-prose` | Add to `div` for accordion content |

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Accordion](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=1519-637&p=f&t=EahLs7a5O0K1GABw-0) | Using in designs |
| [Fractal: Accordion](https://newjersey.github.io/njwds/components/detail/accordion--default.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Accordion](https://designsystem.digital.gov/components/accordion/) | Reference for additional styles and functionalities  |
| [USWDS: Accordion utilites](https://designsystem.digital.gov/components/accordion/#using-the-accordion-component-2) | Utilities to be referenced in styling (may not all apply to NJWDS) |
| [USWDS: Accordion accessibility tests](https://designsystem.digital.gov/components/accordion/accessibility-tests) | Accessibility tests to run for component |

