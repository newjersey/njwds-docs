---
title: Button Group
description: Documentation for button group component.
---

**Button group component, used for the visual grouping of buttons for similar actions on a page.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button group" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=patterns-button-group--default&viewMode=story" width="100%" height="100"></iframe>

🔗 [View button group in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/patterns-button-group--docs)


## Default Button Group Usage


### 👍 Use this component for
- **Actions that have a contextual relationship.** For example, the default button group can be used when a form has both a primary and alternative action.
- **Stepping through linear content** Buttons in a button group can be used for directional navigation and actions (e.g., “Back,” “Next,” “Continue,” “Skip,” “Cancel.”).

### 👎 Consider something else for
- **If actions are not related.** Consider how placement and alternative structure of unrelated actions can improve usability over placing all actions in a group.
- **When mixing destructive and non-destructive actions.** This can lead to input mistakes.
- **Linking to content.** Buttons in button groups should not be used when text links would be simpler and more contextually appropriate. Grouped buttons such as “Next” and “Previous” are acceptable when content is organized sequentially.

## Segmented Button Group Usage
### 👍 Use this component for
- **Categorically related controls.** For example, segmented buttons can be used as a switch between different views.

### 👎 Consider something else for
- **No clear relationship.** Consider how placement and alternative structure of unrelated controls can improve usability over placing all actions in a group.
- **If there are more than three buttons.** Be mindful of how a long list of buttons might appear on small screens. An alternative type of control might be more suitable.

## 🚫 What to avoid
- Avoid burden of choice. Try not to present the user with too many options
- Avoid ambiguity of current state. Make sure current states are clearly communicated and understood.
- Avoid using more than one primary button per page.

## Content guidelines
- **Use sentence-case** 
capitalization for button labels
- **Keep button text short:** 
Button text should be as short as possible with action words that clearly explain what will happen when the button is selected (for example, Download, View, or Sign up).
- **Lead with a verb:**
Make the first word of the button’s text a verb. For example, instead of Complaint filing, label the button File a complaint.
- **Icons can be helpful:**
Consider adding an icon to signal specific actions (Download, Open in a new window, etc).


## Button Group Styles

| Property | Value |
| ----------- | ----------- |
| style | default, segmented, mobile |

### Default Button Group
**Use it as the main action that users will take on a page.** Also, use primary buttons to take the user to the next step in a process such as to trigger page transition or next step. There should only be one primary button per page. 

<iframe title="Button group" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=patterns-button-group--default&viewMode=story" width="100%" height="100"></iframe>

🔗 [View default button group in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/story/patterns-button-group--default)


| Style | Applied Variants | 
| ----------- | ----------- |
| Default | `usa-button-group` |


### Segmented Button Group buttons
**Use for non-primary, but still common, actions on a page.** There can be multiple on a page. Secondary buttons typically trigger actions that happen on the current page. 
<iframe title="Button group" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=patterns-button-group--default&viewMode=story&args=segmented%3Atrue" width="100%" height="100" ></iframe>


🔗 [View button group in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/patterns-button-group--docs)

| Style | Applied Variants | 
| ----------- | ----------- |
| Segmented | `usa-button-group usa-button-group--segmented` |


## Accessibility guidance
Use the [USWDS button group accessibility tests](https://designsystem.digital.gov/components/button-group/accessibility-tests) to test button group implementation.
- **Convey relationship.** If not using a list element, give the parent element `role="group"` in order to convey to screen readers that actions are part of a group. If using as part of a toolbar, use `role="toolbar"`.
- **Use aria-label to give the buttons a useful name.** Some contexts may require additional context provided to screen readers.
- **Use the `<button type="button">` element.** Don’t use `<a>` because it’s a link. Don’t use <span> because screen readers won’t know it’s a usable button.

## Code utilities 
### Button group variants 

| Style | Applied Variants | 
| ----------- | ----------- |
| Default | `usa-button-group` | 
| Segmented | `usa-button-group usa-button-group--segmented` | 


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Button Group](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=1600-3056&t=8Iz1cfQBJpns25JR-11) | Using in designs |
| [Storybook: Button Group](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/patterns-button-group--docs) | Interactive example, code snippet, variants |
| [Fractal: Button Group](https://newjersey.github.io/njwds/components/detail/button-groups--default.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Button Group](https://designsystem.digital.gov/components/button-group/) | Reference for additional styles and functionalities  |
| [USWDS: Button Group utilities](https://designsystem.digital.gov/components/button-group/#package) | Utilities to be referenced in styling (may not all apply to NJWDS) |
| [USWDS: Button Group accessibility tests](https://designsystem.digital.gov/components/button-group/#accessibility-test-status) | Accessibility tests to run for component |

