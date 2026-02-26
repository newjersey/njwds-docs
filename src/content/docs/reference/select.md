---
title: Select
description: Documentation for select component.
---

**A select component allows users to choose one option from a temporary modal menu.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View select in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--secondary-(light).html)

## Select Usage

### 👍 Use this component for
- **⚠️Use sparingly.⚠️** Use the select component only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.

### 👎 Consider something else for
- **Fewer than seven options.** Use radio buttons instead.
- **More than 15 options.** If the list of options is very long, consider using a combo box.
- **Multi-select.** If you need to allow users to choose more than one option at once. Users often don’t understand how to choose multiple items from select elements. Use checkboxes instead.
- **Site navigation.** Use the navigation components instead.

## 🚫 What to ensure / avoid
- **Make sure to test.** Test select menus thoroughly with members of your target audience. Several usability experts suggest they should be the “UI of last resort.” Many users find them confusing and difficult to use.
- **Avoid dependent options.** Avoid making options in one select menu change based on the input to another. Users often don’t understand how choosing an item in one impacts another.
- **Use a good default.** When most users will (or should) pick a particular option, make it the default: `<option selected="selected">Default</option>`
- **Avoid auto-submission.** Don’t use JavaScript to automatically submit the form (or do anything else) when an option is chosen. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times. Auto-submission is also less accessible.


## Content guidelines
- **Always use a label.** Make sure your select element has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the menu read “Select a state” by default).
- **Make sure to test.** Test select menus thoroughly with members of your target audience. Several usability experts suggest they should be the “UI of last resort.” Many users find them confusing and difficult to use.
- **Use a good default.** When most users will (or should) pick a particular option, make it the default: `<option selected="selected">Default</option>`


## Figma properties

| Property | Value |
| ----------- | ----------- |
| state | default, options-displayed, option-selected, error |
| label text | [text input] |
| required | true, false |
| helper | true, false |
| helper text | [text input]  |
| error text | [text input]  |


## Accessibility guidance
Use [USWDS select accessibility tests](https://designsystem.digital.gov/components/select/accessibility-tests) to test implementation.
- **Customize form controls accessibly.** If you customize this component, ensure that it continues to meet the [accessibility requirements that apply to all form controls](https://designsystem.digital.gov/components/form).
- **Always use a label.** Make sure your select element has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the menu read “Select a state” by default).
- **Avoid auto-submission.** Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.
- **Avoid dependent options.** Avoid making options in one select menu change based on the input to another. Users often don’t understand how choosing an item in one impacts another.


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Select](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=28-26&p=f&t=ER1CI2PNGfstfiVR-0) | Using in designs |
| [Fractal: Select](https://newjersey.github.io/njwds/components/detail/dropdown.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Select](https://designsystem.digital.gov/components/select/) | Reference for additional styles and functionalities  |
| [USWDS: Select accessibility tests](https://designsystem.digital.gov/components/select/accessibility-tests) | Accessibility tests to run for component |

