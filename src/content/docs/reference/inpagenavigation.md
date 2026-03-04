---
title: In-Page navigation
description: Documentation for in-page navigation component.
---

**The in-page navigation allows navigation to specific sections on a lengthy content page.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View side panel in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## In=Page Navigation Usage
### 👍 Use this component for
- **Long pages.** In-page navigation can offer a substantial improvement to user experience for pages that include three or more distinct content sections or content that exceeds three or more viewport heights.

### 👎 Consider something else for
- **Short pages.** For pages that require little or no scrolling, in-page navigation is not necessary.
- **Unstructured content.** Pages that lack heading-based hierarchical structures cannot use the in-page navigation component.
- **Infinite scrolling.** For pages that feature infinite scrolling, in-page navigation is neither a practical nor feasible feature.

### 🚫 What to ensure / avoid
- **Display the in-page navigation to the side of the main content.** Visually, place the in-page navigation component after the main content in the language’s natural reading order. For example, for a left-to-right language like English, this component goes to the right of the main content.
- **Make it stand out.** Site visitors should be able to quickly and easily distinguish in-page navigation from other landmarks on the page. Include borders and well-defined link active states to clearly convey the utility and purpose of the section. Define a consistent width for the in-page navigation component that is sufficiently wide and does not change based on text length.
- **Use language that matches section headings.** The text of the links displayed within the in-page navigation `aside` should match the heading text of the target sections. By default, the component scans the page for `h2` and `h3` elements within the `main` element, automatically creates the in-page navigation block, and dynamically inserts the text to match the section headings.
- **Don’t include the page `h1` in the navigation.** Each page should have a single `h1` to describe its contents. It would be redundant to include this heading level in the in-page navigation.
- **In-page navigation heading.** Inform users that they will scroll down on the same page by including in-page navigation under a descriptive title such as “On this page,” “In this article,” or “Table of contents.”


## Content guidelines
- **Keep the navigation links short.** They can be shorter derivatives of section titles themselves.

___________________________
## Side Nav Item

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View side navigation item in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| level | 1, 2, 3 |
| active | inactive, active |
| mode | light, dark (dark mode only in Figma, not Fractal) |
| nav text | [text input] |

### Code components
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Side Navigation Item | `usa-sidenav__item` | Apply this class to a `<li>` element to designate an item within the side navigation panel. |
| Side Navigation Sublist | `usa-sidenav__sublist` | Apply this class to a `<ul>` element to designate a nested list of "child links" to be nested under a parent link within the sidenav. |


## Side Nav Panel
The panel appears by default when a site with side navigation is being used on mobile. 

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View side navigation panel in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| mode | light, dark (dark mode only in Figma, not Fractal) |
| nav text | true, false |
| nav | true, false |
| language | true, false |
| updates | true, false |

## Accessibility guidance
Use the [USWDS in-page navigation accessibility tests](https://designsystem.digital.gov/components/in-page-navigation/accessibility-tests/) to test implementation.
- **Allow keyboard navigation.** Users should be able to navigate between items by using the Tab key. They should also be able to activate a link when pressing Enter on their keyboard. Users should be able to activate hover and focus states with both a mouse and a keyboard.
- **Keyboard users should access the in-page navigation before the main content.** When a user tabs through a page that contains the in-page navigation component, they should find the in-page navigation before the main content. Since the in-page navigation appears after the main content in the reading order, this may seem like a tab-order error. However, tabbing through the entire page before getting to in-page navigation links is not logical, creates confusion, and diminishes the user experience.
- **Set focus state on section target for keyboard users.** When keyboard users follow an in-page anchor link set the focus state to the link target when the user presses the Enter key. When mouse users follow an in-page anchor link the focus should remain on the selected link.

## Code 

### Side Navigation Components
NJWDS provides a number of CSS classes that can be applied to various elements within the side navigation panel to help achieve a more standardized styling and layout.
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Side Navigation Item | `usa-sidenav__item` | Apply this class to a `<li>` element to designate an item within the side navigation panel. |
| Side Navigation Sublist | `usa-sidenav__sublist` | Apply this class to a `<ul>` element to designate a nested list of "child links" to be nested under a parent link within the sidenav. |


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Side navigation](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=196-330&p=f&t=5K6zTsl37oLtbvIT-0) | Using in designs |
| [Fractal: Side navigation](https://newjersey.github.io/njwds/components/detail/sidenav--default.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: In-Page navigation](https://designsystem.digital.gov/components/in-page-navigation/) | Reference for additional styles and functionalities  |
| [USWDS: In-Page navigation accessibility tests](https://designsystem.digital.gov/components/in-page-navigation/accessibility-tests/) | Accessibility tests to run for component |
