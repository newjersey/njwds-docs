---
title: List
description: Documentation for List component.
---

**A list organizes information into discrete sequential sections.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View list in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## List Usage
### 👍 Use this component for
- **Ordered list: Use an ordered list when you need to display text in some ranking, hierarchy, or series of steps.
Unordered list: Use unordered lists to display text in no specific order.

### 👎 Consider something else for
- **If you need to communicate long lists of narrative text.**


## Content guidelines
- **Use sentence case and begin lists with a capital letter.**
- **Use punctuation appropriate to the text.** Do not leave sentences without periods.


## List Types

### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| type | ordered, unordered, unstyled |

### Ordered
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View ordered list in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Unordered
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View unordered list in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--secondary-(light).html)

### Unstyled
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View unstyled list in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--secondary-(light).html)

## Accessibility guidance
Use the [USWDS tag accessibility tests](https://designsystem.digital.gov/components/list/accessibility-tests) to test implementation.
- **Remove list styles with the unstyled variant.** For unstyled lists, either add the `.usa-list--unstyled` class or use the Sass mixin: `@include unstyled-list.`

## Code 

#### Code Variants
| Class | Description |  
| ----------- | ----------- |
| `.usa-list` | List |
| `.usa-list--unstyled` | Removed list style |

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Tag](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=1862-9015&t=p48LIM8AA1I9QJOL-0) | Using card in designs |
| [Fractal: Tag](https://newjersey.github.io/njwds/components/detail/labels--default.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: List](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2852-3585&p=f&t=Yx31eAZO0ULNN6UA-0) | Reference for additional styles and functionalities |
| [USWDS: List utilities](https://designsystem.digital.gov/components/list/#using-the-list-component-2) | Utilities to be referenced in styling (may not all apply to NJWDS) |
| [USWDS: List accessibility tests](https://designsystem.digital.gov/components/list/accessibility-tests) | Accessibility tests to run for card component |
