---
title: Form Structure
description: Documentation for form structure.
---

**_This page is in-progress. Reach out to the platform teach if you need help with form structure._**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_
  
## Error Validation Usage
### ✔️ What to do
- Follow USWDS guidance for structuring complex forms
- Follow NJWDS guidance for multi-step forms
- Use semantic HTML to make forms accessible

### ❌ What not to do
- ?


## Usage Guidance

![Flow chart where user hits submit on a form and form validation error populates](src/assets/error validation 1.png)

### Complex Forms
Follow USWDS guidance for creating a complex form. The guidance is broken down across three patterns:

Help users understand expectations and establish trust.

Help users progress easily through form questions.

Help users keep a record of submitted information.

Some important points to remember are:

Guide the user from simple to more difficult questions.

Break questions into chunks, one topic at a time.

Show the user where they are in the process.

Show a summary of their answers before submission.

Add any next steps, time frames, or reference numbers.

Make sure to review the full guidance for details on trust, inclusion, and best practices. This list is not exhaustive.
___
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
| [Indicating mandatory fields in an accessible way - TPGi](https://www.tpgi.com/doing-whats-required-indicating-mandatory-fields-in-an-accessible-way/l) | Guidance for accessible required fields. |
