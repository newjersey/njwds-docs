---
title: Button
description: Documentation for button component.
---

**Button component, used for primary, secondary, and tertiary actions on a page.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View button in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/elements-button--docs&args=label:Button;type:tertiary;theme:danger;icon:!false)
  
## Button Usage
### 👍 Use this component for
- **Important actions.** Use buttons for the most important actions you want users to take on your site, such as Download, Sign up, or Log out.

### 👎 Consider something else for
- **Linking between a site’s pages.** Use regular links instead. Buttons can be used for navigation between pages within a form flow but otherwise use links.

### 🚫 What to avoid
- **Avoid using too many buttons on a page.** This can disrupt visual hierarchy. Some common component alternatives include: side navigation, icons, and in-page navigation.
- **Avoid disabling buttons.** Disabling buttons is strongly discouraged.


## Content guidelines
- **Use sentence-case** 
capitalization for button labels
- **Keep button text short:** 
Button text should be as short as possible with action words that clearly explain what will happen when the button is selected (for example, Download, View, or Sign up).
- **Lead with a verb:**
Make the first word of the button’s text a verb. For example, instead of Complaint filing, label the button File a complaint.
- **Icons can be helpful:**
Consider adding an icon to signal specific actions (Download, Open in a new window, etc).


## Button Types

### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| type | primary, secondary, tertiary |

### Primary buttons
**Use it as the main action that users will take on a page.** Also, use primary buttons to take the user to the next step in a process such as to trigger page transition or next step. There should only be one primary button per page. 
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>


🔗 [View primary button in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/story/elements-button--primary)

#### Code Primary Variants
| Type | Mode | Applied Variants |
| ----------- | ----------- | ----------- |
| primary | light | `usa-button` |
| primary | dark | `usa-button nj–button--primary-dark` |
| primary | danger | `usa-button usa-button--secondary` |
  
### Secondary buttons
**Use for non-primary, but still common, actions on a page.** There can be multiple on a page. Secondary buttons typically trigger actions that happen on the current page. 

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=type%3Asecondary" width="100%" height="100"></iframe>

🔗 [View secondary button in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/story/elements-button--secondary)


#### Code Secondary Variants
| Type | Mode | Applied Variants |
| ----------- | ----------- | ----------- |
| secondary | light | `usa-button usa-button--outline` |
| secondary | dark | `usa-button usa-button--outline usa-button--inverse` |
| secondary | danger | `usa-button usa-button--outline nj-button--outline-danger` |

### Tertiary buttons
**Use for actions that are allowed but potentially discouraged or uncommon.** These actions are not the main focus of the page or component, and should not distract from the primary task the user is expected to complete.

<iframe title="Button preview" frameborder="0.5" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=type%3Atertiary" width="100%"></iframe>

🔗 [View tertiary button in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/story/elements-button--tertiary)


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

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View button in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/elements-button--docs)

| Light Variant Class | Description | 
| ----------- | ----------- |
| `usa-button` | Used for primary type |
| `usa-button-outline` | Used for secondary type |
| `usa-button-unstyled` | Used for tertiary type |


### Dark mode
**Use this for typical use cases when buttons appear on a dark background.**
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adark" width="100%" height="100"></iframe>

🔗 [View button in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/elements-button--docs)

| Dark Variant Class | Description | 
| ----------- | ----------- |
| `usa-button--inverse` | Used for dark mode |
| `nj-button--primary-dark` | [Custom NJWDS] Used for primary dark variant |
| `usa-button usa-button--outline usa-button--inverse` | Used for secondary dark variant |
| `nj-button--unstyled-dark` | [Custom NJWDS] Used for tertiary dark variant |

### Danger mode
**These buttons should be used if the use case is destructive or irreversible.** This could include actions such as deleting an application.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100"></iframe>

🔗 [View button in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/elements-button--docs)

| Danger Variant Class | Description | 
| ----------- | ----------- |
| `usa-button--secondary` | Used for danger mode |
| `usa-button usa-button--secondary` | Used for primary danger variant |
| `nj-button--outline-danger` | [Custom NJWDS] Used for secondary danger variant |
| `nj-button--unstyled-danger` | [Custom NJWDS] Used for tertiary danger variant |


## Icons in Buttons

### Icon with text
Use to clarify the purpose of the button further, indicate directionality, etc.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=icon%3Atrue" width="100%" height="100"></iframe>

🔗 [View button in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/elements-button--docs)
  
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

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Button](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2-4297&p=f&t=bKnF73CGw0X7qNQv-0) | Using in designs |
| [Storybook: Button](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/elements-button--docs&args=icon:!true) | Interative examples, see code snippet, see variants |
| [Fractal: Button](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Button](https://designsystem.digital.gov/components/button/) | Reference for additional styles and functionalities  |
| [USWDS: Button utilities](https://designsystem.digital.gov/components/button/#using-the-button-component-2) | Utilities to be referenced in styling (may not all apply to NJWDS) |
| [USWDS: Button accessibility tests](https://designsystem.digital.gov/components/button/accessibility-tests/) | Accessibility tests to run for component |

