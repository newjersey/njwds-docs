---
title: Footer
description: Documentation for footer component.
---

**A footer serves site visitors who arrive at the bottom of a page without finding what they want.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Footer" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=components-footer--default&viewMode=story" width="100%" height="100"></iframe>

🔗 [View footer in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-footer--docs)
  
## Footer Use
### 👍 Use this component for
- **Big footer.** Use the big footer when you want to replicate your site’s navigation scheme in the footer and offer newsletter signups.
- **Medium footer.** Use the medium footer when you want to offer only a few footer links (for disclaimers, terms of service, etc.), social media icons, and contact information.
- **Slim footer.** Use the slim footer when you only want to offer a few footer links and nothing else.

### 👎 Consider something else for
- **Medium footer.** Use the big footer when your footer has more than five links.

### 🚫 What to avoid / ensure
- **Curate your footer.** Footer links should point to popular content that might answer a visitor’s remaining questions. Links to disclaimers and legal content sometimes need to be in the footer, but try to minimize “disclaimer bloat” wherever possible.
- **The footer doesn’t need to mirror the header.** Link grouping in the footer does not have to mirror link grouping in top level header navigation (especially if the navigation offers many more links than the footer can).
- **Include newsletter signup.** Include the newsletter signup if one of your website’s goals is getting visitors to sign up for a newsletter.
- **Avoid stale social media accounts.** Link only to social media your agency updates frequently or uses to communicate with customers.
- **Limit contact information to email and phone.** Important contact information should be limited to general email or phone numbers, which should be clickable links to dial from a mobile phone. Physical addresses should live on contact pages users can navigate to from the accordion links.


## Content guidelines
- TBD


## Identifier States

### Figma Type properties
| Property | Value | Description |
| ----------- | ----------- | ----------- |
| screen size | mobile, tablet, desktop | Breakpoint-based layout variations optimized for mobile, tablet, and desktop. |
| type | slim, default, big | Level of footer complexity, ranging from simple layouts to versions with contact and social information. |
| sign up form | true, false | Option to hide sign up form on complex footer type. |
| socials | true, false | Option to hide socials on with-contact and complex footer types. |

### Default (Contact Info) 

<iframe title="Footer" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=components-footer--default&viewMode=story" width="100%" height="100"></iframe>

🔗 [View footer in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-footer--docs)


### Slim (No Contact Info)

<iframe title="Footer" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=components-footer--default&viewMode=story&args=variant%3ASlim" width="100%" height="100"></iframe>

🔗 [View footer in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-footer--docs)


### Big (Contact Info + Links)

<iframe title="Footer" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://main.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=components-footer--default&viewMode=story&args=variant%3ABig" width="100%" height="100"></iframe>

🔗 [View footer in Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-footer--docs)


## Accessibility guidance
Use the [USWDS footer accessibility tests](https://designsystem.digital.gov/components/footer/accessibility-tests/) to test footer implementation.
- **Use tab focus.** Code the navigation so that pressing the tab key moves focus from link to link in the navigation, even when the navigation has collapsed into an accordion.
- **Use accessible accordions.** On small screens: when collapsed into an accordion, the navigation should also meet the accessibility requirements outlined in the “Accordion” section.

## Code utilities

### Footer components
Grove provides a number of CSS classes that can be applied to various elements within the footer to help achieve a more standardized styling and layout

| Name |	Class	| Description |
|-------------|--------------|--------------|
| Return to Top | `usa-footer__return-to-top` | Apply this class to a `<div>` element to designate a link that users can click to return to the top of the page. The element containing this class should have a link defined within it. |
| Primary section | `usa-footer__primary-section`| Apply this class to a `<div>` element to designate the primary section of the footer. This section may contain elements such as a nav menu and newsletter signup form. |
| Nav | `usa-footer__nav`| Apply this class to a `<nav>` element to designate a nav menu within a footer.                                                                                       |
| Primary content | `usa-footer__primary-content`| Apply this class to a `<section>` element to designate that the content should be styled consistently with the styling for the primary section.|
| Collapsible primary content | `usa-footer__primary-content--collapsible`| Apply this class to a `<section>` element that also has the `usa-footer__primary-content` class applied to designate that the content should collapse on mobile views. Note: This class should only be used within the `usa-footer--big` variant of the footer. |
| Primary link  | `usa-footer__primary-link`| Apply this class to header elements to create headings for lists of links within a nav menu. It should be contained within the primary content of the footer. Note: This class should only be used within the `usa-footer--big` variant of the footer. |
| Secondary link | `usa-footer__secondary-link`| Apply this class to elements to create links within a nav menu. If the primary link class is used, elements that have this class applied may be nested within a list element below the primary link. Note: This class should only be used within the `usa-footer--big` variant of the footer. |
| Secondary section | `usa-footer__primary-section`| Apply this class to a `<div>` element to designate the secondary section of the footer. This section may contain elements such as a logo, contact links, and social links. |
| Footer logo | `usa-footer__logo`| Apply this class to a `<div>` element containing the logo image and logo header to add an appropriate style and layout to these elements. |
| Footer logo image | `usa-footer__logo-img`| Apply this class to an `<img>` element containing the logo image. |
| Footer logo heading | `usa-footer__logo-heading`  | Apply this class to a header element containing the logo heading. The logo heading should describe the entity represented by the logo image (for example, "State of New Jersey" or "Office of Innovation"). |
| Footer contact links  | `usa-footer__contact-links` | Apply this class to a `<div>` element containing social and contact links.|
| Footer social links | `usa-footer__social-links`| Apply this class to a `<div>` element containing links to social media profiles. Social links can be added easily using elements styled using the `usa-social-link` class. |
| Footer contact heading | `usa-footer__contact-heading`| Apply this class to a header element containing the contact heading. The logo heading should describe the entity represented by any contact links used (for example, "[AGENCY] Call Center"). |
| Footer address| `usa-footer__address`| Apply this class to an `<address>` element containing contact links. |
| Footer contact info| `usa-footer__contact-info`| Apply this class to a `<div>` element containing contact links. |

### Footer size variants
The following classes can be added to the `<footer>` element to determine the styling of certain elements within the footer. This includes elements like logos (with the class `usa-footer__logo-img`) and contact links (with the class `usa-footer__contact-info` )
| Variant | Description |
|-------------|--------------|
| `usa-footer--slim` | Elements within the footer will be styled with a "slim" look: Logo images will be smaller, Nav menus will have less padding, and Contact links will have less padding |
| `usa-footer--big` | A multi-column footer that expands and collapses on mobile. Elements within the footer will be styled with a more spacious look: Nav menus will have more padding, Links within nav menus will have more padding, Nav menus may be sorted into vertical lists of "topics" that each contain a list of related links |


## Resources

### Grove links 

| File | Purpose | 
| ----------- | ----------- |
| [Figma Grove: Footer](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=512-174&t=iqL6YX4GteFnJQKf-1) | Figma component with variable styles applied |
| [Fractal: Storybook](https://main.d6umhtb6a6pvv.amplifyapp.com/?path=/docs/components-footer--docs) | Interactive example, code snippet, variants |
| [Fractal: Footer](https://newjersey.github.io/Grove/components/detail/footer--default.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Footer](https://designsystem.digital.gov/components/footer/) | Reference for additional footer styles and functionalities |
| [USWDS: Footer utilities](https://designsystem.digital.gov/components/footer/#using-the-footer-component-2) | Utilities to be referenced in footer styling (may not all apply to Grove) |
| [USWDS: Footer utilities](https://designsystem.digital.gov/components/footer/#using-the-footer-component-2) | Accessibility tests to run for footer component |
