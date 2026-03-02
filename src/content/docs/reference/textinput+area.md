---
title: Text input + area
description: Documentation for text input + area component.
---

**A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

##

<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="left"> </iframe>
<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="right"> </iframe>

🔗 [View text area in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## Button Usage
### 👍 Use this component for
- **Unpredictable or freeform responses.** If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
- **Input simplicity.** When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a date picker.
- **Pasted content.** When users want to be able to paste in a response.

### 👎 Consider something else for
- **Predetermined input options.** When users are choosing from a specific set of options.

### 🚫 What to ensure / avoid
- **Use fields appropriate to the length of the input.** The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.
- **Consider the mobile context.** Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users.
- **Wait to validate.** Only show error validation messages or stylings after a user has interacted with a particular field.
- **Avoid placeholder text.** Avoid using placeholder text that appears within a text field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)


## Content guidelines
- **Avoid placeholder text.** Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.
- **Avoid splitting numbers.** Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.


## Text Input
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View text input in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Text Input Figma Type properties
| Property | Value |
| ----------- | ----------- |
| width | fill, 2xs, xs, sm, md, lg, xl, 2xl |
| state | default, focus, success, error |
| label text | [text input] |
| required | true, false |
| helper | true, false |
| helper text | [text input] |
| prefix | false, true |
| filled | false, true |
| suffix | false, true |
| suffix text | [text input] |
| character count | false, true |
| character count text | [text input] |

### Text Input Code 
#### Components
| Type | Mode | Applied Variants |
| ----------- | ----------- | ----------- |
| Error Message Container | `nj-error-message-container` | Apply this class to a `<div>` element below a text input displaying an error state to style a helpful, succinct error message. This container may include an error alert icon along with some text. |

#### Text Input State Variants
The following classes can be added to `input` elements with class `usa-input` to signal different states for the text input. These classes will adjust the outline of the input to indicate various states to the user and should be added and toggled on and off as needed.
| Variant | Description |
| ----------- | ----------- |
| `usa-input--success` | Success state for the input |
| `usa-input--error` | Error state |
| `usa-focus` | Focus state for the input |

#### Text Input Size Variants
The following classes can be added to input elements with class usa-input to adjust the size of the input.
| Variant | Description |
| ----------- | ----------- |
| `usa-input--2xs` | Displays a text input with width 5ex |
| `usa-input--xs` | Displays a text input with width 9ex |
| `usa-input--sm, usa-input--small` | Displays a text input with width 13ex |
| `usa-input--md, usa-input--medium` | Displays a text input with width 20ex |
| `usa-input--lg` | Displays a text input with width 30ex |
| `usa-input--xl` | Displays a text input with width 40ex |
| `usa-input--2xl` | Displays a text input with width 50ex |


## Text Area
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View text area in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Text Area Figma Type properties
| Property | Value |
| ----------- | ----------- |
| width | xl, 2xl, fill |
| state | default, focus, success, error |
| label text | [text input] |
| required | true, false |
| helper | true, false |
| helper text | [text input] |
| user input | false, true |
| user input text | [text input] }
| character count | false, true |
| character count text | [text input] |
| error text | [error text] |

### Text Area Code 
#### Components
| Variant | Description |
| ----------- | ----------- |
| `for="input-type-textarea"` | Applied to `label` element to use text area variant. |

#### Text Area State Variants
The following classes can be added to `input` elements with class `usa-input` to signal different states for the text input. These classes will adjust the outline of the input to indicate various states to the user and should be added and toggled on and off as needed.
| Variant | Description |
| ----------- | ----------- |
| `usa-input--success` | Success state for the input |
| `usa-input--error` | Error state |
| `usa-focus` | Focus state for the input |

#### Text Area Size Variants
The following classes can be added to `input` elements with class usa-input to adjust the size of the input.
| Variant | Description |
| ----------- | ----------- |
| `usa-input--xl` | Displays a text input with width 40ex |
| `usa-input--2xl` | Displays a text input with width 50ex |


## Accessibility guidance
Use the [USWDS text input / area accessibility tests](https://designsystem.digital.gov/components/text-input/accessibility-tests) to test implementation.
- **Customize form controls accessibly.** If you customize this component, ensure that it continues to meet the [accessibility requirements that apply to all form controls](https://designsystem.digital.gov/components/form).
- **Avoid placeholder text.** Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.
- **Avoid splitting numbers.** Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Text input / area](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2-19656&p=f&t=xEncjmi7erLwzVH8-0) | Using in designs |
| [Fractal: Text input / area](https://newjersey.github.io/njwds/components/detail/text-input.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Text input](https://designsystem.digital.gov/components/text-input/) | Reference for additional styles and functionalities  |
| [USWDS: Text input utilities](https://designsystem.digital.gov/components/text-input/#using-the-text-input-component-2) | Utilities to be referenced in styling (may not all apply to NJWDS) |
| [USWDS: Text input accessibility tests](https://designsystem.digital.gov/components/text-input/accessibility-tests)| Accessibility tests to run for component |

