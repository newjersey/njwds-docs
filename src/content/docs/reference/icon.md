---
title: Icon
description: Documentation for icon component.
---

**Icons help communicate meaning, actions, status, or feedback.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View icon in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)


## Icon Usage

### 👍 Use this component for
- **Draw attention to actions.** Icons, when paired with text, grab attention and show actions to take. Make sure each icon directly relates to any text it accompanies.
- **Help readers find key information.** Use icons as scannable, easy-to-understand visual cues for key information, like a phone number or email address.
- **Enhance an actionable target.** Icons make great touch or click targets. Use an icon for common actions, like opening a menu or sharing an article.

### 👎 Consider something else for
- **Meaning is ambiguous.** Use icons only in a common or conventional way. Icon utility hinges on people quickly recognizing what each icon means. If you suspect that an icon’s intent isn’t perfectly clear, consider removing it or adding accompanying text.
- **Compensating for page structure.** Don’t rely on an icon to help draw attention to something important that’s otherwise hard to find. Icons don’t fix unclear page hierarchy or confusing content organization.
- **You need illustrative artwork.** Icons have a specific, functional meaning. Avoid using icons for illustrative purposes. For example, don’t use the “visibility” eye icon () to illustrate an actual eye. If you want to enhance the appearance of your content or visually explain a concept, use an illustration instead of an icon.

### 🚫 What to ensure / avoid
- **Combine icons with text.** Only a few icons are consistently understood across the digital-using public of the world, among them home, print, and search. Combine icons with text to improve clarity, and test your icons for recognition and memorability with your particular audience.
- **Be consistent with icon meaning.** Icons used more than once in an application or site must be used to represent the same thing, and have the same text description in every instance. For example, if an icon of a blank piece of paper means “new document” on most screens, choose a different icon to communicate “reformat document.” Consistency helps people with some cognitive disabilities, helps people who might be distracted or scanning, and creates a better user experience for all.
- **Combine interactive icons with other components.** If the icon is part of an interactive element, it should be implemented within another functional component. For example, make an icon part of a button or list.

## Content guidelines
- **Combine icons with text.** Only a few icons are consistently understood across the digital-using public of the world, among them home, print, and search. Combine icons with text to improve clarity, and test your icons for recognition and memorability with your particular audience.
- **Be consistent with icon meaning.** Icons used more than once in an application or site must be used to represent the same thing, and have the same text description in every instance. For example, if an icon of a blank piece of paper means “new document” on most screens, choose a different icon to communicate “reformat document.” Consistency helps people with some cognitive disabilities, helps people who might be distracted or scanning, and creates a better user experience for all.


## Figma properties
| Property | Value |
| ----------- | ----------- |
| size | 12, 16, 20, 24, 32, 40, 48, 56, 64 |
| icon | [icon swap] |

## Code utilities
### Icon size variants 
CSS classes can be used to manipulate icon size. By default, icons with the `.usa-icon class` will be `20px` by `20px` in size.
| Variant | Description |
| ----------- | ----------- |
| `nj-icon--size-scale` | [Custom NJWDS] The height and width of the icon will be `1em`. As font size changes, the icon size will scale accordingly. |
| `usa-icon--size-3` | The height and width of the icon will be `1.5rem`. |
| `usa-icon--size-4` | The height and width of the icon will be `2rem`. |
| `usa-icon--size-5` | The height and width of the icon will be `2.5rem`. |
| `usa-icon--size-6` | The height and width of the icon will be `3rem`. |
| `usa-icon--size-7` | The height and width of the icon will be `3.5rem`. |
| `usa-icon--size-8` | The height and width of the icon will be `4rem`. |
| `usa-icon--size-9` | The height and width of the icon will be `4.5rem`. |


## Accessibility guidance
Use the [USWDS icon accessibility tests](https://designsystem.digital.gov/components/icon/accessibility-tests) to test button implementation.
- **Hide decorative icons from screen readers.** Icons are decorative if they don’t provide meaningful information to the user. Usually, decorative icons are accompanied by text. Announcing a decorative icon is redundant and can be annoying. Use the aria-hidden="true" and role="img", as in the following code:

`<a href="https://twitter.com/uswds">
  <svg class="usa-icon" aria-hidden="true" role="img">
    <use href="/assets/img/sprite.svg#arrow_forward"></use>
  </svg>
  USWDS' Twitter account
</a>`

- **Provide descriptive text if a standalone icon has meaning or provides functionality.** If an icon provides information or functionality that people cannot understand from accompanying text, you need to make the icon perceivable to people who use screen readers. Remove the aria-hidden="true" attribute and add an aria-labelledby attribute with a value that matches the id of a <title> element added inside the SVG, as in the following code:

`<a href="https://twitter.com/uswds">
  <svg aria-labelledby="twitter-title" role="img">
    <title id="twitter-title">USWDS' Twitter account</title>
    <use href="/path/to/sprite.svg#twitter"></use>
  </svg>
</a>`

- **Check for good color contrast.** Make sure that the icon has a minimum contrast ratio of 3:1 against its background. See the USWDS color and accessibility page as well as WCAG 2.1 Techniques: Ensuring that a contrast ratio of 3:1 is provided for icons for more information.
- **Place icons inside links.** If icons accompany a text link, place the icon inside the link to prevent screen readers from announcing the link twice.


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Icon](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2588-22&p=f&t=p48LIM8AA1I9QJOL-0) | Using in designs |
| [Fractal: Icon](https://newjersey.github.io/njwds/components/detail/icon.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Icon](https://designsystem.digital.gov/components/icon/) | Reference for additional styles and functionalities  |
| [USWDS: Icon](https://designsystem.digital.gov/components/icon/#using-the-icon-component-2) | Utilities to be referenced in styling (may not all apply to NJWDS) |
| [USWDS: Icon](https://designsystem.digital.gov/components/icon/accessibility-tests/) | Accessibility tests to run for icon component |

