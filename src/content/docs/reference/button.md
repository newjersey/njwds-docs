---
title: Button
description: A reference page in my new Starlight docs site.
---

### Button component, used for primary, secondary, and tertiary actions on a page.

✅ **Passed WCAG 2.1 AA (USWDS component)**

## Button Usage
### 👍 Use this component for
**Important actions** 
Use buttons for the most important actions you want users to take on your site, such as Download, Sign up, or Log out.

### 👎 Consider something else for
**Linking between a site’s pages**
Use regular links instead.

**If the action is less popular or less important**
Less popular or less important actions may be visually styled as links.

Avoid using too many buttons on a page, as this can disrupt visual hierarchy. Some common component alternatives include: side navigation, icons, and in-page navigation.

## Button Types and Use 
### Button types
<img width="1767" height="597" alt="Three buttons shown: a blue filled button labeled 'Primary', a darker blue outline button labelled 'Secondary', and a link style button labelled 'Tertiary' " src="https://github.com/user-attachments/assets/5f17c07e-9a12-4a07-92b3-a62e9003bd69" />
Button variants 

| Property | Value |
| ----------- | ----------- |
| type | primary, secondary, tertiary |

### Primary buttons
Use it as the main action that users will take on a page. There should only be one primary button per page. Primary buttons often trigger page transitions or next steps. 

### Secondary buttons
Use for non-primary, but still common, actions on a page. Can have multiple on a page. Secondary buttons typically trigger actions that happen on the current page. 

### Tertiary/Link buttons
Use for actions that are allowed but potentially discouraged or uncommon 

## Button states
<img width="2304" height="1064" alt="A matrix of buttons, states going across, variants going down" src="https://github.com/user-attachments/assets/a1a4e9ea-cdff-4d21-9c7d-1bdc5d2f165b" />
Button states 

| Property | Value |
| ----------- | ----------- |
| state | default, hover, active, focus |


Make sure buttons look selectable — the NJWDS button component currently supports the following states: 
- Default
- Hover
- Active
- Focus

Not supported: Disabled state, Secondary, Accent cool, Accent warm, Big, and Outline inverse.

## Button modes
<img width="2304" height="748" alt="A matrix of button styles, organized along the top by 'On light', 'On dark', and 'danger', and along the side by variant" src="https://github.com/user-attachments/assets/a3b8dcf2-19e8-4f52-acab-06087911c4f7" />
Button modes

| Property | Value |
| ----------- | ----------- |
| mode | (on) light, (on) dark, danger |

### Light mode
This is the typical use case of buttons. It should be used anytime a button is for a general use case and on a light background.

### Dark mode
Use this for typical use cases when buttons appear on a dark background.

### Danger mode
These buttons should be used if the use case is destructive or irreversible, such as deleting an application.

## Icons in Buttons
<img width="2304" height="578" alt="Three buttons displayed, primary, secondary, and tertiary, all with a paper clip icon inside them on the left side" src="https://github.com/user-attachments/assets/ec9ee447-3de0-42ac-99ee-51f330f637ab" />
Button variants with leading icons

| Property | Value |
| ----------- | ----------- |
| leading icon | true, false (default) |
| trailing icon | true, false (default) |
| icon | (instance swap) |

### Icon with text
Use to clarify the purpose of the button further, indicate directionality, etc.

To use: Toggle on the leading or trailing icon in the button component.

### Icon only
An icon can be used in place of text to demonstrate a button's meaning.

To use: Toggle on the leading or trailing icon in the button component and hide the button text from the layer panel.   

_**Note: Ensure the icon has a universal meaning and is properly labeled with alt text.**_

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
### Button settings 

**Button Variants**
Demos of these variants (including how they can be used with icon buttons) can be found on the [Fractal: Button page](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html).

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

**Button Variant CSS Classes**
| Variant | Description | 
| ----------- | ----------- |
| usa-button-outline | Used for secondary type |
| usa-button-unstyled | Used for tertiary type |
| usa-button--inverse | Used for dark mode |
| usa-button--secondary | Used for danger mode |
| nj-button--primary-dark | [Custom NJWDS] Used for primary dark variant |
| nj-button--outline-danger | [Custom NJWDS] Used for secondary danger variant |
| nj-button--unstyled-dark | [Custom NJWDS] Used for tertiary dark variant |
| nj-button--unstyled-danger | [Custom NJWDS] Used for tertiary danger variant |
| nj-button--icon | [Custom NJWDS] Used for buttons containing icons |

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Button](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2-4297&p=f&t=bKnF73CGw0X7qNQv-0) | Using button in designs, documentation and best practices on button usage |
| [Fractal: Button](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html) | Preview button styles, see button code snippet |

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
