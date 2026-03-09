---
title: Identifier
description: Documentation for identifier component.
---

**The identifier communicates a site’s parent agency and displays agency links required by federal laws and policies.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View identifier in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  
## Button Usage
### 👍 Use this component for
- **To identify the highest-level agency** associated with a site or service. The identifier is a complement to the [USWDS banner](https://designsystem.digital.gov/components/identifier/). Use the identifier to tell users what parent agency is responsible for your website. Consider the parent agency the highest-level agency associated with a site or service. If your site is the primary site associated with an agency, you can still use the identifier.
- **To display links required by federal laws and policies.** The identifier includes [links required on all government sites](https://digital.gov/resources/required-web-content-and-links/).

### 👎 Consider something else for
- **Any time it would be misleading.** The identifier should be used to reduce confusion. Avoid using the identifier on any site meant only for testing or otherwise not meant to be identified as an official government website.
- **Redundant content.** Don’t add the identifier without removing any duplicate links from your existing site footer. Favor the common links and content in the identifier over any equivalent content in your site footer.

### 🚫 What to avoid / ensure

- **Use the identifier component for required links.** If your site already includes the federally required links in its site footer, remove them in favor of the links in the identifier. This assures that site visitors find the required links in a consistent location from site to site.
- **Consider the parent agency the highest-level agency** associated with a site or service. In some cases, your site may not have a parent agency. If your site is the primary site for your agency, use your agency name in place of \[Parent Agency\]. For example, "\[agency.gov\] An official website of \[Agency\]."
- **Display the parent agency logo, not the product logo.** The identifier is meant to identify a website’s parent agency as a complement to the site footer. Site-specific logos, like a product logo, should be in the site footer, not the identifier. You may omit the logo in the identifier if it is redundant with the agency logo in your site’s footer.
- **Display multiple parents and logos in hierarchical order.** If a site has more than one parent agency, you may display a reference and a logo for each parent in hierarchical order, highest first. For example, "An official website of \[Grandparent Department\] and \[Parent Agency\]."
- **Avoid distraction.** The identifier appears on every page of your site. Choose background colors that fit with your site theme and avoid color combinations that draw excessive attention to the identifier.
- **Keep the text up-to-date.** Use the most current version of the identifier.
- **Except where noted, use the entire component without deletions or additions.** With rare exceptions, if you use the identifier, include the entire identifier. That is, don’t delete sections or required links or change any link text beyond the customizations mentioned in the implementation section.



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

## Code 

### Identifier States

| code | description |
| ---------- | ---------- |
| `usa-identifier` |
| `usa-identifier__section` |
| `usa-identifier__section--masthead` |
| `usa-identifier__container` |
| `usa-identifier__logos` |
| `usa-identifier__identity` |
| `usa-identifier__identity-domain` |
| `usa-identifier__identity-disclaimer` |
| `usa-identifier__section` | 
| `usa-identifier__section--required-links` |
| `usa-identifier__required-links-list` |
| `usa-identifier__required-links-item` |


Demos of these variants (including how they can be used with icon buttons) can be found on the [Fractal: Button page](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html).

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
