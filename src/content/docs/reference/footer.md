---
title: Footer
description: Documentation for ifooter component.
---

**A footer serves site visitors who arrive at the bottom of a page without finding what they want.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View footer in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## Footer Use
### 👍 Use this component for
- **Big footer.** Use the big footer when you want to replicate your site’s navigation scheme in the footer and offer newsletter signups.
- **Medium footer.** Use the medium footer when you want to offer only a few footer links (for disclaimers, terms of service, etc.), social media icons, and contact information.
- **Slim footer.** Use the slim footer when you only want to offer a few footer links and nothing else.
- **Medium and slim footers.** Use the big footer when your footer has more than five links.

### 👎 Consider something else for
- TBD

### 🚫 What to avoid / ensure

- **Curate your footer.** Footer links should point to popular content that might answer a visitor’s remaining questions. Links to disclaimers and legal content sometimes need to be in the footer, but try to minimize “disclaimer bloat” wherever possible.
- **The footer doesn’t need to mirror the header.** Link grouping in the footer does not have to mirror link grouping in top level header navigation (especially if the navigation offers many more links than the footer can).
- **Include newsletter signup.** Include the newsletter signup if one of your website’s goals is getting visitors to sign up for a newsletter.
- **Avoid stale social media accounts.** Link only to social media your agency updates frequently or uses to communicate with customers.
- **Limit contact information to email and phone.** Important contact information should be limited to general email or phone numbers, which should be clickable links to dial from a mobile phone. Physical addresses should live on contact pages users can navigate to from the accordion links.



## Content guidelines
- ?


## Identifier States

### Figma Type properties
| Property | Value |
| ----------- | ----------- |
| screen size | mobile, tablet, desktop |
| langauge | es, en|
| hide nj.gov | true, false |
| taxpayer disclaimer | true, false |
| show logos | true, false |
| multiple agencies | true, false |
| masthead text | text field |
| domain address | text field |

### Language
- **Use the Spanish version for Spanish-language sites.** If you have an official Spanish-language website, use the Spanish version of the identifier.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View spanish identifier in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)


### Agency Logos
- **Use an SVG logo if possible.** Ensure the logo is high resolution. We recommend using the SVG version of any logo if you have one. Otherwise, use an image that’s at least 120 pixels tall.
- **Use logos intended for dark backgrounds if possible.** The identifier has a dark background. If your agency has a version of its logo intended for dark backgrounds, use that version.
- **Duplicate the logo element if using multiple logos.** If you’re using multiple logos, duplicate the `usa-identifier__logo` element and link the image to your image source.
  
### Hiding Taxpayer Disclaimer or NJ.gov
- **If applicable, include any taxpayer disclaimer after the standard text.** If the organization must provide a taxpayer expense disclaimer, include it following the “Official website” text, as a separate sentence. For example, “An official website of [Department]. Produced and published at taxpayer expense.”

### Screen Size

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View screen sizes of identifier in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)


## Accessibility guidance
Use the [USWDS identifier accessibility tests](https://designsystem.digital.gov/components/identifier/accessibility-tests) to test identifier implementation.
- **Use proper landmarks for each identifier section.** Each identifier section should be either a `section` or a `nav`, and include an appropriate `aria-label` property.
- **Add an `alt` attribute to each logo image.** Use `[Agency shortname] logo` as the alt text for each logo image you add.
- **Use image role for any SVG images.** Use `role="img"` with any SVG logo image.

## Code utilities

### Checkbox components
| Name |	Class	| Description |
| ---------- | ---------- | ---------- |
| identifier | `usa-identifier` | Use for identifier |
| section |  `usa-identifier__section` | Use for section in identifier |
| masthead | `usa-identifier__section--masthead` | Use for masthead in identifier |
| container | `usa-identifier__container` | use for container |
| logo | `usa-identifier__logos` | Use for agency logos |
| identity | `usa-identifier__identity` | Use for agency identification section |
| domain | `usa-identifier__identity-domain` | Use for domain |
| disclaimer | `usa-identifier__identity-disclaimer` | Use for disclaimer |
| links | `usa-identifier__section--required-links` | Use for required links section |
| link list | `usa-identifier__required-links-list` | Use for link list |
| link item | `usa-identifier__required-links-item` | Use for link item |


Demos of these variants can be found on the [Fractal: Identifier page](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html).

## Resources

### NJWDS links 

| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Identifier](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2905-151&p=f&t=Yx31eAZO0ULNN6UA-0) | Using identifier in designs, documentation and best practices on identifier usage |
| [Fractal: Identifier](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html) | Preview identifier styles, see identifier code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Identifier](https://designsystem.digital.gov/components/identifier/) | Reference for additional button styles and functionalities  
| [USWDS: Identifier accessibility tests](https://designsystem.digital.gov/components/identifier/accessibility-tests) | Accessibility tests to run for identifier component |
