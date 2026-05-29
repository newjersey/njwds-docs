---
title: Banner 🚧
description: Documentation for custom Grove banner.
---

A banner is an official signifier of a website created by the State of New Jersey government, as well as a form of navigation.

{% linkbutton href="https://www.figma.com/design/z8CI77qQvbffkCslHANatK/Grove--Garden-State-Design-System?node-id=198-798&t=sh8zRmraTY7zBxeu-1" variant="secondary" icon="figma" iconPlacement="start" %}
Figma
{% /linkbutton %}

{% linkbutton href="https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-banner--docs&args=label:;icon:!true" variant="primary" icon="storybook" iconPlacement="start" %}
View in Storybook
{% /linkbutton %}

🚧 Mobile version differences between Figma and Storybook 🚧

<iframe title="Banner" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=components-banner--default&viewMode=story" width="100%" height="100"></iframe>

{% linkbutton href="https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-banner--docs&args=label:;icon:!true" variant="secondary" icon="storybook" iconPlacement="start" %}
View in Storybook
{% /linkbutton %}

## Banner Usage
### 👍 Use this component for
- **OOI-built websites and web pages**. Whenever we are building an entire page or app that links to NJ gov sites, but is standalone.

### 👎 Consider something else for
- **Embedded solutions.** Use existing page navigation and site headers when embedding solutions in NJ gov agency pages.

### 🚫 What to ensure / avoid
- **Use the provided text without customization.** The banner is most effective as an identifier and a learning tool when its message is consistent across government sites. With only a few exceptions, sites should use the text provided, unaltered.
- **Keep the text up to date.** Use the most current version of the banner.


## Content guidelines
- **Use the provided text without customization**. The banner is most effective as an identifier and a learning tool when its message is consistent across government sites. With only a few exceptions, sites should use the text provided, unaltered. 
- **Keep the text up to date**. Use the most current version of the banner.


## Figma Type properties
| Property | Value |
| ----------- | ----------- |
| screen size | mobile, mobile-lg, tablet, tablet-lg, desktop, desktop-lg, widescreen |
| state | closed, open (relevant only for tablet/mobile) |
| language | true, false (⚠️**not implemented in code**) |


## Code
**Note:** While the NJ Site Banner is currently composed of an editable set of elements, we _**strongly**_ encourage you to copy code directly from Fractal when setting up the banner on your page. Because the purpose of the banner is to provide assurance in the reliability of the site, it is important that it remain consistent across official NJ web pages. 

#### Banner / Site Header Components
Grove provides a number of CSS classes that can be applied to various elements within the NJ Site Banner to help achieve a more standardized styling and layout.
| Name | Class | Description |
| ----------- | ----------- | ----------- |
| Banner Header | `nj-banner__header` | Apply this class to a `<header>` element within the banner to apply standardized padding and colors to all content within the banner. |
| Banner Inner div | `nj-banner__inner` | Apply this class to a `<div>` element within the banner header to apply a flexbox layout to all content within the div. This can include logos, links, and other important text. |
| Banner Seal | `nj-banner__header-seal` | Apply this class to an `<img>` element containing the state seal within the banner to apply standardized sizing and padding to the seal. |
  
## Accessibility guidance
- TBD

## Resources
### Grove links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma Grove: Banner](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=198-798&p=f&t=p48LIM8AA1I9QJOL-0) | Using in designs |
| [Storybook: Banner](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-banner--docs&args=label:;icon:!true) | Interactive example, code snippets, variants |
| [Fractal: Banner](https://newjersey.github.io/Grove/components/detail/banner.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Banner](https://designsystem.digital.gov/components/banner/) | USWDS' version of a banner. A totally different component, but has a similar function in giving credibility to a site.  |
| [USWDS: Side navigation](https://designsystem.digital.gov/components/side-navigation/) | Used in the mobile version of the NJ banner / site header |

