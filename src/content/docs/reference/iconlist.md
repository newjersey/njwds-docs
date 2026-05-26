---
title: Icon list 
description: Documentation of the icon list component.
---

**An icon list reinforces the meaning and visibility of individual list items with a leading icon.**

✅ _Passed WCAG 2.1 AA (USWDS component)_

🔗 [View icon list in USWDS](https://designsystem.digital.gov/components/icon-list/)
  
## Icon List Usage
### 👍 Use this component for
- **Do-and-don’t lists.** Icon lists help reinforce the message of a list item using a visual cue as a progressive enhancement. This can be effective in a list, or pair of lists, that describe actions users should do or not do. A pair of icons with clear and opposite meaning, like `check_circle` and `cancel`, create an effective do-and-don’t list.
- **Features and metadata.** Use an icon list to enhance a list of features, like a campsite’s amenities or other lists where icons might help users understand content at a glance.
- **Important tasks or requirements.** Use an icon list to help users find, distinguish, and verify related steps or tasks that can be completed in any order, like a checklist of items to pack or documents to complete.
- **Printable checklists.** Users may wish to print a page and use it as a physical checklist. This kind of static checklist is not an interactive form. Use an icon like `check_box_outline_blank` to provide a space for physical checking.

### 👎 Consider something else for
- **Multi-step forms or wizards.** The step indicator is best for communicating progress through a form or process that spans several different pages.
- **Sequential steps.** Use a standard ordered list or process list if the items must be completed sequentially.
- **Using complex iconography or graphics.** Use the graphic list if you plan on using different large, complex, or multicolored images with each list item. The icon should only reinforce the text of the list item. If the image needs to convey unique meaning, this is a job for an illustration not an icon.
- **Improving readability of running text.** The standard unordered list is best for displaying simple lists that are part of running text. 

## Content Guidance
- **Use consistent headings.** Headings should be written with parallel structure. For example, start each with an action verb. When possible, keep headings short enough to fit on one or two lines.
- **Add rich content sparingly.** Each list item can display rich text content like HTML, images, and even other components. Be succinct. Too much complexity distracts from the impact of an icon list.
- **Use similar icons.** Use the same icon for each list item unless variation is meaningful, as with our check_circle icon () and cancel icon (). Icons should come from the same icon library and have a similar look and feel.

## Icon list items

### Rich content variant

#### Figma properties
| Property | Value |
| ----------- | ----------- |
| rich-content | false, true |

#### Code utilities
| Variant | Description | 
| ----------- | ----------- |
| `.usa-icon-list--[color]` | Change the color of all the list’s icons by updating [color] to any theme or state color token. |

### Icon list items size variants

#### Figma properties
| Property | Value |
| ----------- | ----------- |
| size | default, md, lg, xl, 2xl |

#### Code utilities
| Variant | Description | 
| ----------- | ----------- |
| `usa-icon-list--size-[size]` | Change the size of the text and icon by updating [size] to a font size token. |
| `[responsive_variant]:usa-icon-list--size-[size]` | Add a responsive breakpoint prefix separated with a `:` to target a utility at a responsive breakpoint and higher, following a mobile-first methodology. |

## Accessibility Guidance
Use [USWDS icon list accessibility tests](https://designsystem.digital.gov/components/icon-list/accessibility-tests) to test implementation.
- Don’t rely on the icons alone to convey meaning. Use text and context to establish the meaning of your list, and use the icon to reinforce that meaning as a progressive enhancement.
- Use colors with accessible contrast. While the icons in an icon list might be considered decorative progressive enhancement, aim for accessible AA contrast. This assures legibility on printed pages as well.
- Hide most icons from screen readers. This component uses the aria-hidden="true" and role=”img” attributes because the icons are used solely as a visual progressive enhancement. The icon’s meaning is redundant with the list content.
- If you wish to expose icons to screen readers:
  - Provide descriptive text for each icon.
  - Remove the `aria-hidden="true"` attribute and add a `aria-labelledby` attribute with a value that matches the `id` of a title element added inside the svg.
```
<a href="https://twitter.com/uswds">
<svg aria-labelledby="twitter-title" role="img">
  <title id="twitter-title">The USWDS Twitter account</title>
  <use href="/path/to/sprite.svg#twitter"></use>
</svg>
</a>
```

## Code utilities
### Icon list variants
| Variant | Description | 
| ----------- | ----------- |
| `.usa-icon-list--[color]` | Change the color of all the list’s icons by updating [color] to any theme or state color token. |
| `usa-icon-list--size-[size]` | Change the size of the text and icon by updating [size] to a font size token. |
| `[responsive_variant]:usa-icon-list--size-[size]` | Add a responsive breakpoint prefix separated with a `:` to target a utility at a responsive breakpoint and higher, following a mobile-first methodology. |


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Icon list](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2933-672&p=f&t=p48LIM8AA1I9QJOL-0) | Using in designs |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Icon list](https://designsystem.digital.gov/components/icon-list/) | Reference for additional styles and functionalities  |
| [USWDS: Icon list guidance](https://designsystem.digital.gov/components/icon-list/#using-the-icon-list-component-2)  | Guidance on how to use this component |
| [USWDS: Icon list accessibility tests](https://designsystem.digital.gov/components/icon-list/accessibility-tests) | Accessibility tests to run for component |
