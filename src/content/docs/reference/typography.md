---
title: Typography
description: Documentation of the Typography.
---

**Typographical selections intended to meet the highest standards of usability and accessibility, while setting a consistent look and feel in order to convey credibility.**
  

## Fonts
### Public Sans (.font-family-sans)
Public Sans is a strong, neutral, principles-driven, open source typeface for text or display.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100"></iframe>

### XYZ
Description
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100"></iframe>

## Usability Guidance 
- **Use a comfortable reading size for body text.** For most text, including body copy, use at least an effective size of 16px. Smaller and larger text can be used sparingly for special purposes (like headings, captions, photo credits, footnotes, data tables, or specialized UI elements).
- **Set type flush left.** Type set flush left provides the eye a constant starting point for each line, making text easier to read. While right-aligned, centered, and justified text have their place, most websites benefit from a consistent use of left-aligned text. Justified text, common in print, does not yet display well enough in a web browser to be considered a best practice.
- **Most lines of text should be 45–90 characters.** The current standard range for readable line length is 45 to 90 characters per line. A good target for long texts is 66 characters.
- **Longer texts require more line height.** Distinguishing between lines of text can be difficult when the eye has to travel from the end of one long line to the beginning of the next. Using more line height makes it easier for readers to distinguish individual lines.
- **Don’t indent paragraphs, use whitespace before.** While most longform print design uses indented lines to distinguish paragraphs, it’s more conventional on the web to use unindented paragraphs separated by whitespace.
- **Avoid long sections of italic, bold or uppercase text.** Both italic and bold text can degrade readability. Both are best used for limited sections of contrast. Consider replacing long sections of bold or italic text with a callout box, a section header, or some other technique that avoids extended stretches of styled text. Uppercase text has a serious negative effect on readability. Unless mandated by law, consider other type treatments for any uppercase text longer than just a few words.



## Styles

### Headers
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100"></iframe>

🔗 [View checkbox item in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(danger).html)

### Body

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--tertiary&viewMode=story&args=type%3Aprimary%3Bicon%3A!true" width="100%" height="100"></iframe>

🔗 [View checkbox list in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Figma properties
| Property | Value |
| ----------- | ----------- |
| list items | 2, 3, 4, 5, 6 |
| state | default, error |
| required | true, false |
| helper | true, false |
| helper text | [text input] |
| error text | [text input] |

#### Code variant
| Variant | Description |
| ----------- | ----------- |
| `usa-checkbox__input--tile` | Input tiles provide a larger interaction area and neatly group the label with the form control for readability. They’re useful in application forms and questionnaires, but may not be recommended when they create clutter on the page. |

## Accessibility Guidance
Use [USWDS alert accessibility tests](https://designsystem.digital.gov/components/alert/accessibility-tests/) to test button implementation.

- **Customize form controls accessibly.** If you customize this component, ensure that it continues to meet the [accessibility requirements that apply to all form controls](https://designsystem.digital.gov/components/form).
- **Use a fieldset and legend for a checkbox group.** Surround a related set of checkboxes with a `<fieldset>`. The `<legend>` provides context for the grouping. Don’t use fieldset and legend for a single check.
- **These custom checkboxes are accessible.** The custom checkboxes here are accessible to screen readers because the default checkboxes are moved off-screen with `position: absolute; left: -999em`.
- **Use semantic tags.** Each input should have a semantic tag for the id attribute, and its corresponding label should have the same value in its `for` attribute.


## Code utilities 
### Checkbox components 
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Form | `usa-form` | Use this for a form. |
| Fieldset | `usa-fieldset` | Use this for a set of questions in a form. |
| Legend | `usa-legend` | Use this for the title of a question. |
| Checkbox | `usa-checkbox` | Use this for checkbox |
| Checkbox input | `usa-checkbox__input` | Use this for checkbox input. |
| Checkbox label | `usa-checkbox__label` | Use this for checkbox label -- the text next to the checkbox. |
| Helper text label | `usa-checkbox__label-description` | Used only for checkbox tile. Optional helper text that can be used to describe the label in more detail. To use, put the class on a span and place it inside the label component. (See Fractal for an example). |
| Error message | `nj-error-message-container` | [Custom NJWDS] Used for error message, combines an icon and the USWDS error message. |


### Checkbox Variants
| Variant | Description | 
| ----------- | ----------- |
| `usa-checkbox__input--tile` | Input tiles provide a larger interaction area and neatly group the label with the form control for readability. They’re useful in application forms and questionnaires, but may not be recommended when they create clutter on the page. |


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Checkbox](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=33-1439&t=i4k26YohAESPvEsR-0) | Using button in designs, documentation and best practices on button usage |
| [Fractal: Checkbox](https://innovation.nj.gov/app/njwds/components/detail/checkboxes.html) | Preview button styles, see button code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Checkbox](https://designsystem.digital.gov/components/checkbox/) | Reference for additional checkbox styles and functionalities  |
| [USWDS: Checkbox utilities](https://designsystem.digital.gov/components/checkbox/#using-the-checkbox-component-2)  | Utilities to be referenced in checkbox styling (may not all apply to NJWDS) |
| [USWDS: Checkbox accessibility tests](https://designsystem.digital.gov/components/checkbox/accessibility-tests/) | Accessibility tests to run for checkbox component |
