---
title: Date Pickers
description: Documentation for date pickers.
---

**Date picker options**
- **Date Picker:** A date picker helps users select a single date. 
- **Memorable Date Picker:** A select for month followed by two text fields is the easiest way for users to enter most dates.
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

###

<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="left"> </iframe>
<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="right"></iframe>
<br>
<br>

## Date Picker Usage

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

### 👍 Use this component for
- **Scheduling.** When users need to schedule or record an event, and benefit from the context of a calendar.
- **When the day of the week is important.** When knowing the day of the week helps users choose a specific date.
- **Date ranges.** This component accommodates selecting date ranges.

### 👎 Consider something else for
- **Familiar dates.** When asking users for a date they know well, or can look up without using a calendar (like a birthday), use a memorable date picker.
- **When the day of the week is irrelevant.** If there’s no benefit to knowing the day of the week for a particular date, consider a memorable date picker.

### 🚫 What to ensure / avoid
- **Describe the date format.** Provide a hint of `mm/dd/yyyy` to help users enter the proper date format if they opt not to use the date picker.
- **Always allow a user to type in the date manually.** Usability testing suggests some people prefer manually typing the date rather than using the calendar picker. Whenever possible, keep the keyboard active so people can enter in the date information without having to use the picker.



## Memorable Date Picker Usage

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

### 👍 Use this component for
- **Appropriate for most dates.** This component is appropriate for most dates.

### 👎 Consider something else for
- **Consider a date picker for scheduling.** If users are trying to schedule something, the date picker might make more sense. Be sure to also provide an option for text entry as well.
- **Date ranges.** This component does not accommodate date ranges.

### 🚫 What to ensure / avoid
- **Label each field.** Be sure each field is properly labeled — some countries enter dates in day, month, year order.
- **Avoid select elements for day or year.** It may be tempting to switch all or some of these text fields to select elements, but these tend to be more difficult to use than text inputs.


## Content guidelines
- **Avoid placeholder text.** Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.
- **Avoid splitting numbers.** Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.


## Figma properties 

### Date Picker Figma properties 
| Property | Values | 
| ----------- | ----------- |
| state | default, focus, success, open, selected, error |
| label text | [text input] |
| required | true, false |
| helper | true, false |
| helper text | [text input] |
| input | true, false | 
| input text | [text input] |
| focus | false, true | 
| calendar | false, true | 
| error text | [text input] |

### Memborable Date Picker Figma properties 
| Property | Values | 
| ----------- | ----------- |
| state | default, focus, success, open, selected, error |
| label text | [text input] |
| required | true, false |
| helper | true, false |
| helper text | [text input] |
| error text | [text input] |


## Accessibility guidance
Use the [USWDS button accessibility tests](https://designsystem.digital.gov/components/button/accessibility-tests/) to test button implementation.
- **⚠️Known assistive technology issues.⚠️** Testing with people using assistive technology revealed [usability concerns](https://github.com/uswds/uswds-site/issues/1898) that require additional investigation. At this time, consider using a [Select component](https://designsystem.digital.gov/components/select) instead of a Combo box. More research and testing is planned to better understand and address these accessibility issues. If you would like to contribute to improving this component, please [join USWDS community](https://designsystem.digital.gov/about/community/) if you'd like to share your feedback.
- **Customize form controls accessibly.** If you customize this component, ensure that it continues to meet the accessibility requirements that apply to all form controls.
- **Always use a label.** Make sure your select element has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the menu read “Select a state” by default).
- **Avoid auto-submission.** Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.

## Code utilities 

### Date picker properties 
These properties take effect regardless of whether they are set or adjusted before or after initialization. Demos of these properties can be found on the [Fractal: Date picker](https://newjersey.github.io/njwds/components/detail/date-picker--default.html) page.
| Property | Element | Description | 
| ----------- | ----------- | ----------- |
| `data-min-date` | `.usa-date-picker` | The date picker will not allow a date selection before this date. The date should be in the format `YYYY-MM-DD`. Typing in an earlier date will cause native form validation error. A default min date or `0000-01-01` is used as a default. | 
| `data-max-date` | `.usa-date-picker` | The date picker will not allow a date selection after this date. The date should be in the format `YYYY-MM-DD`. Typing in a later date will cause native form validation error. There is no default maximum date. |
| `data-range-date` | `data-range-date` | The date picker will show a range selection from the range date. The date should be in the format `YYYY-MM-DD.` |

### Initialization properties 
These properties must be set before the component is initialized in order to have an effect. Demos of these properties can be found on the These properties must be set before the component is initialized in order to have an effect. Demos of these properties can be found on the Fractal: Date picker page. page.
| Property | Element | Description | 
| ----------- | ----------- | ----------- |
| `required` | `input` | The date picker component will be required in terms of native form validation. | 
| `data-default-value` | `.usa-date-picker` | The date picker input will set this value if it is a valid date. The date should be in the format `YYYY-MM-DD`. |

### Other notes on form validation behavior 
- Entering a correctly formatted but invalid date (e.g. February 29 on a non-leap year) will cause native form validation error.

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Date pickers](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=39-1651&p=f&t=9zBPMXiCmdIEadOE-0) | Using date pickers in designs |
| [Fractal: Date picker](https://newjersey.github.io/njwds/components/detail/date-picker--default.html) | Preview date picker styles, see code snippet |
| Fractal : Memorable date picker | Preview date picker styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Date picker](https://designsystem.digital.gov/components/date-picker/) | Additional resources: [Utilities](https://designsystem.digital.gov/components/date-picker/#using-the-date-picker-component-2) and [Accessibility tests](https://designsystem.digital.gov/components/date-picker/accessibility-tests)  |
| [USWDS: Memorable date picker](https://designsystem.digital.gov/components/memorable-date/) | Additional resources: [Utilities](https://designsystem.digital.gov/components/memorable-date/#using-the-memorable-date-component-2) and [Accessibility tests](https://designsystem.digital.gov/components/memorable-date/accessibility-tests) |
