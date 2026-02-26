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


## Checkbox Variants

### Radio button 
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100"></iframe>

🔗 [View radio button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(danger).html)

#### Figma properties
| Property | Value |
| ----------- | ----------- |
| state | selected, selected-focused, unselected, unselected-focused, error |

### Radio button list
A radio button question with multiple options.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--tertiary&viewMode=story&args=type%3Aprimary%3Bicon%3A!true" width="100%" height="100"></iframe>

🔗 [View radio button list in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Figma properties
| Property | Value |
| ----------- | ----------- |
| list items | 2, 3, 4, 5, 6 |
| state | default, error |
| required | true, false |
| label text | [text input] |
| helper | true, false |
| helper text | [text input] |
| error text | [text input] |

### Radio button tile
Radio button surrounded in a clickable tile.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100"></iframe>

🔗 [View radio button tile in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(danger).html)

#### Figma properties
| Property | Value |
| ----------- | ----------- |
| state | selected, unselected, selected-focused, unselected-focused, error |
| helper | false, true | 
| helper text | [text input] |

#### Code variant
| Variant | Description |
| ----------- | ----------- |
| `usa-radio__input--tile` | Input tiles provide a larger interaction area and neatly group the label with the form control for readability. They’re useful in application forms and questionnaires, but may not be recommended when they create clutter on the page. |

### Radio button tile list
A multiple select question with checkbox tiles.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--tertiary&viewMode=story&args=type%3Aprimary%3Bicon%3A!true" width="100%" height="100"></iframe>

🔗 [View radio button tile list in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Figma properties
| Property | Value |
| ----------- | ----------- |
| list items | 2, 3, 4, 5, 6 |
| state | default, error |
| required | true, false |
| label text | [text input] |
| helper | true, false |
| helper text | [text input] |
| error text | [text input] |


## Accessibility Guidance
Use [USWDS radio button accessibility tests](https://designsystem.digital.gov/components/radio-buttons/accessibility-tests) to test implementation.

- **Customize form controls accessibly.** If you customize this component, ensure that it continues to meet the [accessibility requirements that apply to all form controls](https://designsystem.digital.gov/components/form).
- **Use fieldset and legend.** Group related radio buttons together with `<fieldset>` and describe the group with `<legend>`.
- **Use proper labels and attributes.** Each radio button should have a `<label>`. Associate the two by matching the `<label>`’s `for` attribute to the `<input>`’s `id` attribute.


## Code utilities 
### Radio button components 
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Form | `usa-form` | Use this for a form. |
| Fieldset | `usa-fieldset` | Use this for a set of questions in a form. |
| Legend | `usa-legend` | Use this for the title of a question. |
| Radio button | `usa-radio` | Use this for radio button |
| Radio button input | `usa-radio__input` | Use this for radio button input. |
| Radio button label | `usa-radio__label` | Use this for radio button label -- the text next to the checkbox. |
| Helper text label | `usa-radio__label-description` | Used only for radio button tile. Optional helper text that can be used to describe the label in more detail. To use, put the class on a span and place it inside the label component. (See Fractal for an example). |
| Error message | `nj-error-message-container` | [Custom NJWDS] Used for error message, combines an icon and the USWDS error message. |


### Radio button Variants
| Variant | Description | 
| ----------- | ----------- |
| `usa-radio__input--tile` | Input tiles provide a larger interaction area and neatly group the label with the form control for readability. They’re useful in application forms and questionnaires, but may not be recommended when they create clutter on the page. |


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Radio button / tile](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2-19547&p=f&t=l0u4S6aNVryWl3kQ-0) | Using in designs |
| [Fractal: Radio button](https://newjersey.github.io/njwds/components/detail/radio-buttons--default.html) | Preview styles, see code snippet |
| [Fractal: Radio button tile](https://newjersey.github.io/njwds/components/detail/radio-buttons--tile.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Radio button](https://designsystem.digital.gov/components/radio-buttons/) | Reference for additional radio button styles and functionalities  |
| [USWDS: Radio button utilities](https://designsystem.digital.gov/components/radio-buttons/#using-the-radio-buttons-component-2)  | Utilities to be referenced in radio button styling (may not all apply to NJWDS) |
| [USWDS: Radio button accessibility tests](https://designsystem.digital.gov/components/radio-buttons/accessibility-tests) | Accessibility tests to run for radio button component |
