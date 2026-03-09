---
title: Links
description: Documentation for link component.
---

**A link connects users to a different page or further information.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

🔗 [View link in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)


## Link Usage

### 👍 Use this component for
- **Clearly identify external links.** The external link icon () is a good way to communicate that a link is external.
- **Notify users about non-federal links.** Review [this resource on Digital.gov](https://digital.gov/resources/required-web-content-and-links) for guidance on non-federal link requirements.

### 👎 Consider something else for
- TBD

### 🚫 What to ensure / avoid
- **Don’t rely on only color to distinguish links.** Site visitors should be able to distinguish text links from surrounding text. In most cases, include an underline or bottom border on text links, in addition to a consistent link color. Text links not distinguished with an underline need a contrast level of at least 3:1 with their surrounding text (the same as AA Large, or a USWDS magic number of 40) and should show an underline on hover.
- **Don’t block external links with disruptive notifications.** Allow users to follow external links without taking a separate action to acknowledge leaving your site. Roadblock notices, such as modals and dialog boxes, result in a poor user experience. Instead, communicate about a link’s destination through descriptive link text and external link indicators. Use your site’s policy and notices page to provide important information about non-government sites without disrupting the user experience.
- **Combine icons with text.** Only a few icons are consistently understood across the digital-using
    - **Use unique, meaningful link text.** Link text should explain the link’s purpose and help the user understand the link’s destination. Vague and repetitive text like “click here” or “read more” is unhelpful to those using screen-reading software. Screen-reading software collects all page links into a single list, and users typically start with that list. When they do so, they will not be able to tell the difference between links with similar wording.
- **Simplify link placement in body text.** A link requires mental effort, which affects readability. Reduce the number of links in a single sentence to simplify its message. Consider placing links at the beginning or end of sentences to improve readability.
- **Link directly to the most relevant page.** Avoid links to pages that require further user action to locate the intended information.
- **Indicate nonpublic links that require authentication.** Use text or an indicator like a lock icon to signal any link that is not available publicly. This includes links behind a login or other authentication like a paywall.

  - **Example 1:**  
    We’ve documented our research in the [raw research notes 🔒](javascript:void(0)) .

  - **Example 2:**  
    We’ve documented our research in the [raw research notes](javascript:void(0)) (requires login).

- **If you use an external link indicator, use it consistently for all text links.**  If users learn to associate an external link with the indicator, they will also appropriately expect that text links without an indicator are not external links. Icon- or image-only links like social share buttons or logos do not need the same treatment as text links.
- **Add `rel="noreferrer"` to external links.** Setting `noreferrer` on links prevents the browser from leaking information about the original web address.
- **Add a non-endorsement statement to your site.** Your “Policy and Notices” page should explain to users that your agency does not endorse the information on any linked non-federal site. See, for example, [USA.gov’s linking policy](https://www.usa.gov/linking-policy). In addition to this site-level notice, consider adding additional non-endorsement statements on individual pages with non-federal links.

## Content guidelines
- **Don’t use generic link text.** Vague text like “click here” and “read more” is confusing and repetitive, especially to people using screen readers. Link text should describe the destination and explain where users will go if they follow the link.
- **Don’t use the same link text for different URLs on the same page.** Differentiate between links by using unique text for each.
- **Provide text context for external links.** Following a link is a user decision. Users need enough information to make that decision - short links without context often don’t provide that. Plain, straightforward text can be the best way to communicate to users that a link will take them away from your site, which can be useful whether the external link is to either a government or a non-government site. When possible, use the content of the link text itself to indicate where it goes. By itself, an external link indicator (like an icon) can be ambiguous. Adding plain text can help make any link destination more clear.

  - **Example 1:**  
    To ensure food safety during an emergency, [the Red Cross recommends you do not open the refrigerator or freezer.](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/food-safety.html)

  - **Example 2:**  
    [Sun safety guidance [cdc.gov]](https://www.cdc.gov/skin-cancer/sun-safety/).  
- **Indicate file type and size for links to non-HTML content.** Whenever possible, create HTML pages instead of linking to files like PDFs. If you do link to a file, tell users ahead of time if the link may trigger a file download, and show the size and format of that file.  
  We recommend including this information at the end of the link, in the format \[FILE_TYPE, SIZE\]. We recommend using the file type rather than a product name. Use uppercase for the file type and a comma for the separator. For file size, use the number of pages in the document or the size in MB or KB if the document is not paginated.

  - **Example 1:**  
    GSA published a report, Transforming the American Digital Experience \[PDF, 18 pages\]

  - **Example 2:**  
    Download the Revised 508 Standards Applicability Checklist \[DOCX, 2 pages\]

  - **Example 3:**  
    Download the USWDS 2.11.2 Design Kit for Sketch \[ZIP, 13.3 MB\]

- **Identify jump links in body text.** Jump links (or in-page links) send the user to another part of the same page. This behavior can be unexpected in body text links. In these cases, use the link text like “jump to”, “above” or “below” to tell users that the destination is elsewhere on the same page.

  - **Example 1:**  
    Jump to video resources for more information about how to boil water.

  - **Example 2:**  
    For more information on how to boil water, see video resources, below.

- **Write out email and phone links.** For `mailto:` and `tel:` links, write out email addresses and phone numbers so users can read or copy this information without selecting the link.

  - **Example:**  
    Email us at uswds@gsa.gov

- **Encode email and phone links.** Some browsers don’t automatically display a clickable link for email addresses or phone numbers, so encode email and phone links with `mailto:` and `tel:`. Be sure to include the country code in phone numbers to support international users.

  - **Examples:**  
    `<a href="mailto:program-team@agency.gov">program-team@agency.gov</a>`  
    `<a href="tel:1-800-555-1234">1-800-555-1234</a>`

- **Check with your IT security department regarding email link best practices.** While displaying email addresses and phone numbers provides a better experience for users, it can also increase spam for the email recipient. One approach is to use a group email address to protect individuals. Another benefit of that approach is the email will remain the same even as staff and organizational structures change. You can also consider using a contact form instead of showing email addresses.

## Figma properties
| Property | Value |
| ----------- | ----------- |
| size | 12, 16, 20, 24, 32, 40, 48, 56, 64 |
| icon | [icon swap] |

## Code utilities
### Link variants 
| Variant | Description |
| ----------- | ----------- |
| `.usa-link--external` | Display an external link icon after the link. |


## Accessibility guidance
Use the [USWDS link accessibility tests](https://designsystem.digital.gov/components/link/accessibility-tests) to test link implementation.
- **Allow keyboard navigation of links.** Users should be able to navigate between links by using the “Tab” key. They should be able to activate a link by pressing the “Enter” key.
Link hover state should be visible on focus. Users should be able to activate hover and focus states with both a mouse and a keyboard.


## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Link](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2776-427&p=f&t=Yx31eAZO0ULNN6UA-0) | Using in designs |
| [Fractal: Link](https://newjersey.github.io/njwds/components/detail/icon.html) | Preview styles, see code snippet |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Link](https://designsystem.digital.gov/components/link/) | Reference for additional styles and functionalities  |
| [USWDS: Icon](https://designsystem.digital.gov/components/link/#using-the-link-component-2) | Utilities to be referenced in styling (may not all apply to NJWDS) |
| [USWDS: Link](https://designsystem.digital.gov/components/link/accessibility-tests) | Accessibility tests to run for icon component |
