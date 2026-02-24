---
title: Alert
description: Alert component used to prominently display important information to users.
---

**Alert component used to prominently display important information to users.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100" />

  
## Alert Usage
### 👍 Use this component for
- **System status messages.** 
An alert may be a notification that keeps people informed of the status of the system and may or may not require the user to respond. Such notifications may be errors, warnings, and general updates.
- **Validation messages.** 
An alert may be a validation message that informs a user they just took an action that needs to be corrected or a confirmation that a task was completed successfully.

### 👎 Consider something else for
- **Information call outs** Alerts should be reserved for messages that are timely, such as a notification or change on the page. Alerts should not be used for static content that will always be displayed on the page. 
Consider the [summary box](https://designsystem.digital.gov/components/summary-box/) or accordion for this. 
- **Long forms.** On long forms, always include in-line validation in addition to any error messages that appear at the top of the form.
- **Destructive actions.** If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this action is what they want.

### 🚫 What to avoid
- **Don’t overdo it.** Too many notifications will either overwhelm or annoy the user and are likely to be ignored.
- **Allow a user to dismiss a notification whenever appropriate.** USWDS is working on a way to help developers implement a dismissible alert. You can follow their progress on GitHub.
- **Understand the user’s context.**  Don’t include notifications that aren’t related to the user’s current goal.

## Alert Types

| Property | Value |
| ----------- | ----------- |
| type | standard, slim-icon, slim-no icon | Used to determine size and amount of information in the alert.| 

Tip: Slim-icon is the slimmest

### Primary buttons
**Use it as the main action that users will take on a page.** Also, use primary buttons to take the user to the next step in a process such as to trigger page transition or next step. There should only be one primary button per page. 
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100" />


🔗 [View primary button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
### Secondary buttons
**Use for non-primary, but still common, actions on a page.** There can be multiple on a page. Secondary buttons typically trigger actions that happen on the current page. 
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100" />


🔗 [View secondary button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--secondary-(light).html)

  | Type Variant Class | Description | 
| ----------- | ----------- |
| `usa-button-outline` | Used for secondary type |

### Tertiary/Link buttons
**Use for actions that are allowed but potentially discouraged or uncommon.** These actions are not the main focus of the page or component, and should not distract from the primary task the user is expected to complete.
<iframe title="Button preview" frameborder="0" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--tertiary&viewMode=story" width="100%" />


🔗 [View tertiary button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--tertiary-(light).html)


| Type Variant Class | Description | 
| ----------- | ----------- |
| `usa-button-unstyled` | Used for tertiary type |
  
❌ _**Not Supported:** NJWDS does not support select button types from USWDS including accent cool, accent warm, and big._


## Alert states

| Property | Value | Description | 
| ----------- | ----------- | ----------- | 
| state | default, error, info, success, warning, emergency | Used to determine alert color / role / level of severity. |





❌ _**Not Supported:** NJWDS does not support a disabled button states from USWDS._


## Button modes

| Property | Value |
| ----------- | ----------- |
| mode | (on) light, (on) dark, danger |

### Light mode
**This is the typical use case of buttons.** It should be used anytime a button is for a general use case and on a light background.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"/>

🔗 [View primary (on) light button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

| Light Variant Class | Description | 
| ----------- | ----------- |
|`usa-button-outline` | Used for secondary type |
| `usa-button-unstyled` | Used for tertiary type |

### Dark mode
**Use this for typical use cases when buttons appear on a dark background.**
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adark" width="100%" height="100"/>

🔗 [View primary (on) dark button in Storybook](https://pr-158.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/elements-button--docs&args=theme:dark)

| Dark Variant Class | Description | 
| ----------- | ----------- |
| `usa-button--inverse` | Used for dark mode |
| `nj-button--primary-dark` | [Custom NJWDS] Used for primary dark variant |
| `nj-button--unstyled-dark` | [Custom NJWDS] Used for tertiary dark variant |

### Danger mode
**These buttons should be used if the use case is destructive or irreversible.** This could include actions such as deleting an application.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100" />

🔗 [View primary danger button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(danger).html)

| Danger Variant Class | Description | 
| ----------- | ----------- |
| `usa-button--secondary` | Used for danger mode |
| `nj-button--outline-danger` | [Custom NJWDS] Used for secondary danger variant |
| `nj-button--unstyled-danger` | [Custom NJWDS] Used for tertiary danger variant |


## Icons in Buttons

| Property | Value |
| ----------- | ----------- |
| leading icon | true, false (default) |
| trailing icon | true, false (default) |
| icon | (instance swap) |

### Icon with text
Use to clarify the purpose of the button further, indicate directionality, etc.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--tertiary&viewMode=story&args=type%3Aprimary%3Bicon%3A!true" width="100%" height="100"/>

🔗 [View primary (on) light button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
ℹ️ **To use:** Toggle on the leading or trailing icon in the button component.

### Icon only
An icon can be used in place of text to demonstrate a button's meaning.

ℹ️ **To use:** Toggle on the leading or trailing icon in the button component and hide the button text from the layer panel.   

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

## Content guidelines
- **Use sentence-case** 
capitalization for button labels
- **Keep button text short:** 
Button text should be as short as possible with action words that clearly explain what will happen when the button is selected (for example, Download, View, or Sign up).
- **Lead with a verb:**
Make the first word of the button’s text a verb. For example, instead of Complaint filing, label the button File a complaint.
- **Icons can be helpful:**
Consider adding an icon to signal specific actions (Download, Open in a new window, etc).

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
