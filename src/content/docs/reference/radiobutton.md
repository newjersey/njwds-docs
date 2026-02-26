---
title: Radio button
description: Documentation for radio button component.
---

**Radio buttons allow users to select exactly one choice from a group.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View radio button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## Radio Button Usage
### 👍 Use this component for
- **To display a single selection.** When users need to select only one option from a set of mutually exclusive choices.

### 👎 Consider something else for
- **Multiple selections.** If users need to select more than one option or if there’s only one item to select, use checkboxes instead.
- **Limited space.** Consider a select component if you don’t have enough space to list out all available options
- **Selecting none.** If users should be able to select zero of the options or change their mind and unselect an option, consider using checkboxes. You can also choose to add a “none of the above” option to the radio button group instead.

### 🚫 What to ensure / avoid
- **Use the label as a target.** Users should be able to select either the text label or the radio button to select or deselect an option.
- **List items vertically.** Vertically-listed options are easier to read than those that are listed horizontally. A horizontal layout can make it difficult to tell which label belongs to which radio button.
- **Use adequate spacing.** Make sure selections are adequately spaced for touch screens. Consider using the tile variant for larger touch targets.
- **Set default values with caution.** Setting a default value can bias a decision, seem pushy, or alienate users who don’t fit your assumptions. Only use a default selection if you have data to back it up.
- **Don’t mix default and tile variants.** Pick one implementation and stick with it. When mixed, tiles can appear to indicate a bias or preference toward that option.
- **Use a logical order.** Make sure the selection options are organized in a meaningful way, like alphabetical or most-frequent to least-frequent. This helps users easily find the option they’re looking for.


## Content guidelines
- **Use a logical order.** Make sure the selection options are organized in a meaningful way, like alphabetical or most-frequent to least-frequent. This helps users easily find the option they’re looking for.


## Radio Button Types

### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| type | primary, secondary, tertiary |

### Primary buttons
**Use it as the main action that users will take on a page.** Also, use primary buttons to take the user to the next step in a process such as to trigger page transition or next step. There should only be one primary button per page. 
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>


🔗 [View primary button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Code Primary Variants
| Type | Mode | Applied Variants |
| ----------- | ----------- | ----------- |
| primary | light | `usa-button` |
| primary | dark | `usa-button nj–button--primary-dark` |
| primary | danger | `usa-button usa-button--secondary` |
  
### Secondary buttons
**Use for non-primary, but still common, actions on a page.** There can be multiple on a page. Secondary buttons typically trigger actions that happen on the current page. 
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100"></iframe>


🔗 [View secondary button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--secondary-(light).html)

#### Code Secondary Variants
| Type | Mode | Applied Variants |
| ----------- | ----------- | ----------- |
| secondary | light | `usa-button usa-button--outline` |
| secondary | dark | `usa-button usa-button--outline usa-button--inverse` |
| secondary | danger | `usa-button usa-button--outline nj-button--outline-danger` |

### Tertiary/Link buttons
**Use for actions that are allowed but potentially discouraged or uncommon.** These actions are not the main focus of the page or component, and should not distract from the primary task the user is expected to complete.
<iframe title="Button preview" frameborder="0.5" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--tertiary&viewMode=story" width="100%"></iframe>


🔗 [View tertiary button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--tertiary-(light).html)


#### Code Tertiary Variants
| Type | Mode | Applied Variants |
| ----------- | ----------- | ----------- |
| tertiary | light | `usa-button usa-button--unstyled` |
| tertiary | dark | `usa-button usa-button--unstyled nj-button--unstyled-dark` |
| tertiary | danger | `usa-button usa-button--unstyled nj-button--unstyled-danger` |
  
❌ _**Not Supported:** NJWDS does not support select button types from USWDS including accent cool, accent warm, and big._


## Button states

### Figma state properties
| Property | Value |
| ----------- | ----------- |
| state | default, hover, active, focus |

**Make sure buttons look selectable.** The NJWDS button component currently supports the following states: 
- Default
- Hover
- Active
- Focus

❌ _**Not Supported:** NJWDS does not support a disabled button states from USWDS._


## Button modes

### Figma mode properties
| Property | Value |
| ----------- | ----------- |
| mode | (on) light, (on) dark, danger |

### Light mode
**This is the typical use case of buttons.** It should be used anytime a button is for a general use case and on a light background.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View primary (on) light button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

| Light Variant Class | Description | 
| ----------- | ----------- |
| `usa-button` | Used for primary type |
| `usa-button-outline` | Used for secondary type |
| `usa-button-unstyled` | Used for tertiary type |

### Dark mode
**Use this for typical use cases when buttons appear on a dark background.**
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adark" width="100%" height="100"></iframe>

🔗 [View primary (on) dark button in Storybook](https://pr-158.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/elements-button--docs&args=theme:dark)

| Dark Variant Class | Description | 
| ----------- | ----------- |
| `usa-button--inverse` | Used for dark mode |
| `nj-button--primary-dark` | [Custom NJWDS] Used for primary dark variant |
| `usa-button usa-button--outline usa-button--inverse` | Used for secondary dark variant |
| `nj-button--unstyled-dark` | [Custom NJWDS] Used for tertiary dark variant |

### Danger mode
**These buttons should be used if the use case is destructive or irreversible.** This could include actions such as deleting an application.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100"></iframe>

🔗 [View primary danger button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(danger).html)

| Danger Variant Class | Description | 
| ----------- | ----------- |
| `usa-button--secondary` | Used for danger mode |
| `usa-button usa-button--secondary` | Used for primary danger variant |
| `nj-button--outline-danger` | [Custom NJWDS] Used for secondary danger variant |
| `nj-button--unstyled-danger` | [Custom NJWDS] Used for tertiary danger variant |


## Icons in Buttons
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100"></iframe>

🔗 [View icons in buttons in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(danger).html)

### Icon with text
Use to clarify the purpose of the button further, indicate directionality, etc.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--tertiary&viewMode=story&args=type%3Aprimary%3Bicon%3A!true" width="100%" height="100"></iframe>

🔗 [View primary (on) light button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
ℹ️ **To use:** Toggle on the leading or trailing icon in the button component.

### Icon only
An icon can be used in place of text to demonstrate a button's meaning.

ℹ️ **To use:** Toggle on the leading or trailing icon in the button component and hide the button text from the layer panel.   

### Figma properties
| Property | Value |
| ----------- | ----------- |
| leading icon | true, false (default) |
| trailing icon | true, false (default) |
| icon | (instance swap) |

### Code class
| Icon Variant Class | Description | 
| ----------- | ----------- |
| `nj-button--icon` | [Custom NJWDS] Used for buttons containing icons |

✅ _**Note: Ensure the icon has a universal meaning and is properly labeled with alt text.**_

## Accessibility guidance
Use the [USWDS button accessibility tests](https://designsystem.digital.gov/components/button/accessibility-tests/) to test button implementation.
- Buttons should display a **visible focus state** when users tab to them
- **Use standard markup:**
Avoid using `<div>` or `<img>` tags to create buttons. Screen readers don’t automatically know either is a usable button.
- **Screen readers handle buttons and links differently:**
When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.

## Code 

### Button Variants

| Type | Mode | Applied Variants |
| ----------- | ----------- | ----------- |
| primary | light | `usa-button` |
| primary | dark | `usa-button nj–button--primary-dark` |
| primary | danger | `usa-button usa-button--secondary` |
| secondary | light | `usa-button usa-button--outline` |
| secondary | dark | `usa-button usa-button--outline usa-button--inverse` |
| secondary | danger | `usa-button usa-button--outline nj-button--outline-danger` |
| tertiary | light | `usa-button usa-button--unstyled` |
| tertiary | dark | `usa-button usa-button--unstyled nj-button--unstyled-dark` |
| tertiary | danger | `usa-button usa-button--unstyled nj-button--unstyled-danger` |

Demos of these variants (including how they can be used with icon buttons) can be found on the [Fractal: Button page](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html).

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Button](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2-4297&p=f&t=bKnF73CGw0X7qNQv-0) | Using button in designs, documentation and best practices on button usage |
| [Fractal: Button](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html) | Preview button styles, see button code snippet |
| [Button settings: variables and variants](https://office-of-innovation.gitbook.io/njwds/button#code)  | Utilities to use in button styling (NJWDS specific) |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Button](https://designsystem.digital.gov/components/button/) | Reference for additional button styles and functionalities  |
| [USWDS: Button utilities](https://designsystem.digital.gov/components/button/#using-the-button-component-2) | Utilities to be referenced in button styling (may not all apply to NJWDS) |
| [USWDS: Button accessibility tests](https://designsystem.digital.gov/components/button/accessibility-tests/) | Accessibility tests to run for button component |

