---
title: Required Fields
description: Documentation for required fields.
---

**Tell users what information is needed in order for them to complete a task.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_
  
## Required Fields Usage
### ✔️ What to do
- Always provide instructions that explain your required field formatting to users.
- Label optional fields as "optional".
- Use the required attribute for all required form elements.
- Skip required field indicators for single-input forms and login pages.

### ❌ What not to do
- Do not use symbols without explaining what they mean.
- Do not mix and match required field indicators in the same design.


## Usage Guidance

![Flow chart where user hits submit on a form and form validation error populates](../../../assets/errorvalidation1.png)

### 👍 Use an asterisk when..
[USWDS guidance on forms](https://designsystem.digital.gov/templates/form-templates/) recommends tagging required fields using a red asterisk. If you're working on a design that leans heavily on USWDS, it is recommended that you follow that pattern.

### 👎 Don't use an asterisk...
If cognitive accessibility or low-tech literacy are concerns for your project, the asterisk may not be a familiar symbol.

#### What to use instead
 Instead of an asterisk, it is helpful to spell out requirements in content:
- Example instructions: "All fields are required unless marked optional."
- Example label: "Name (required)".

While familiar to a lot of users, an asterisk is still a symbol that has implicit meaning. When considering cognitive accessibility, it is helpful to clearly explain implied content when possible.


## Resources
### Best Practice Guides 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Forms](https://designsystem.digital.gov/templates/form-templates/) | USWDS guidance on form templates. |
| [Indicating mandatory fields in an accessible way - TPGi](https://www.tpgi.com/doing-whats-required-indicating-mandatory-fields-in-an-accessible-way/l) | Guidance for accessible required fields. |
