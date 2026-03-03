---
title: Breadcrumb
description: Documentation for breadcrumb component.
---

**Breadcrumbs provide secondary navigation to help users understand where they are in a website.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="breadcrumb preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View breadcrumb in Storybook](https://newjersey.github.io/njwds/components/preview/button--primary-(light).html)


## Breadcrumb Usage

### 👍 Use this component for
- **When orientation matters.** Breadcrumbs show where the current page is located in the website hierarchy. Use a breadcrumb when it’s likely that a user will arrive at an interior page from search or from an outside link.
- **To facilitate navigation.** Breadcrumbs make it easier to understand complex sites. Use breadcrumbs to reinforce your site’s structure.

### 👎 Consider something else for
- **Simple sites.** If the website is not very deep and the context for the current page is clear from the main navigation.
- **Landing pages.** Omit breadcrumbs on the homepage of a site. Breadcrumbs could also be omitted from section landing pages. Breadcrumbs are most useful when the hierarchy is not immediately apparent from the main navigation.
- **Redundant side navigation.** When side navigation is used in combination with main navigation, it may be redundant to include breadcrumbs.
- **Step-by-step processes.** Use breadcrumbs for hierarchical relationships, not linear relationships (like individual steps in a multi-step process).

## 🚫 What to ensure / avoid
- **Consider alternatives to wrapping.** In general, rely on truncating the title of the current page over wrapping breadcrumb text. But usability comes first. Consider alternative approaches if the title of the current page is completely truncated. For example, a mobile-friendly breadcrumb may show only a page’s direct parent. Sites with very long breadcrumb trails might ultimately need to wrap breadcrumbs, or consider flattening the information architecture of the site.
- **Consider size of tap targets on small widths.** Although breadcrumbs are frequently displayed using smaller text, make sure the text is not too small to select at small widths.

## Content guidelines
- **Use complete page titles.** Use the same wording in breadcrumb text as in the page title.
- **Start with the word “Home”**. Rather than using a house icon, spell out the word “Home” as the first link in the breadcrumbs.
- **Optimize for search engines.** To be eligible for rich results display in search engine results, mark up your site’s breadcrumbs using JSON-LD (recommended) or RDFa.

## Breadcrumb Variants

### Default Breadcrumb
<iframe title="breadcrumb preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View default breadcrumb in Storybook](https://newjersey.github.io/njwds/components/preview/button--primary-(light).html)

#### Figma proporties
| Property | Value |
| ----------- | ----------- |
| type | default |

| Style | Applied Variants | 
| ----------- | ----------- |
| Default | `usa-breadcrumb` |

### Wrapping Breadcrumb
<iframe title="breadcrumb preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View wrapping breadcrumb in Storybook](https://newjersey.github.io/njwds/components/preview/button--primary-(light).html)

#### Figma proporties
| Property | Value |
| ----------- | ----------- |
| type | wrapping |

| Style | Applied Variants | 
| ----------- | ----------- |
| Wrapping | `usa-breadcrumb usa-breadcrumb--wrap` |


### Mobile Breadcrumb
<iframe title="breadcrumb preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View mobile breadcrumb in Storybook](https://newjersey.github.io/njwds/components/preview/button--primary-(light).html)



## Accessibility guidance
Use the [USWDS breadcrumb accessibility tests](https://designsystem.digital.gov/components/breadcrumb/accessibility-tests/) to test breadcrumb implementation.
- **Use the `nav` element.** This allows assistive technology to present the breadcrumbs in context as a navigational element on the page.
- **Treat separators as text when it comes to contrast.** Use separators that have AA contrast against their background.
- **Use ordered lists and list items.** Use an `ol` for breadcrumbs and an `li` for each item. This allows assistive technology to enumerate the items in the breadcrumbs and allows shortcuts between list items.
- **Use ARIA markup for additional context.** `Use aria-label="Breadcrumbs"` on the main element and `aria-current="page"` on the current page.
- **Hide separators from screen readers.** The separators between links in the breadcrumbs should not be read by screen readers.

## Figma properties 

### Breadcrumb
| Property | Value |
| ----------- | ----------- |
| type | default, wrapping |
| depth | 1, 2, 3, 4, 5 |
| mode | on-light, on-dark |
| current-page | [text input] |
| text-level-1 | [text input] |
| text-level-2 | [text input] |
| text-level-3 | [text input] |

### Mobile Breadcrumb
| Property | Value |
| ----------- | ----------- |
| depth | 1, 2, 3, 4, 5 |
| mode | on-light, on-dark |

## Code  

### Breadcrumb variants 
| Style | Applied Variants | 
| ----------- | ----------- |
| Wrapping | `usa-breadcrumb usa-breadcrumb--wrap` | 

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Breadcrumb](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2788-628&t=p48LIM8AA1I9QJOL-0) | Using breadcrumb in designs, documentation and best practices on breadcrumb usage |
| [Fractal: Breadcrumb](https://newjersey.github.io/njwds/components/detail/breadcrumb--default.html) | Preview breadcrumb styles, see breadcrumb code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Breadcrumb](https://designsystem.digital.gov/components/breadcrumb/) | Reference for additional breadcrumb styles and functionalities  |
| [USWDS: Breadcrumb utilities](https://designsystem.digital.gov/components/breadcrumb/#using-the-breadcrumb-component-2) | Utilities to be referenced in breadcrumb styling (may not all apply to NJWDS) |
| [USWDS: Breadcrumb accessibility tests](https://designsystem.digital.gov/components/breadcrumb/accessibility-tests) | Accessibility tests to run for breadcrumb component |

