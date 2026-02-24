---
title: S-Alert
description: Documentation for alert component.
---

**Alert component used to prominently display timely information to users.**
  
✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100" />

  
## Alert Usage
### 👍 Use this component for
- **System status messages.** An alert may be a notification that keeps people informed of the status of the system and may or may not require the user to respond. Such notifications may be errors, warnings, and general updates.
- **Validation messages.** An alert may be a validation message that informs a user they just took an action that needs to be corrected or a confirmation that a task was completed successfully.

### 👎 Consider something else for
- **Information call outs.** Alerts should be reserved for messages that are timely, such as a notification or change on the page. Alerts should not be used for static content that will always be displayed on the page. Consider the summary box or accordion for this. 
- **Long forms.** On long forms, always include in-line validation in addition to any error messages that appear at the top of the form.
- **Destructive actions.** If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this action is what they want.


## Alert Variants

| Property | Value |
| ----------- | ----------- |
| state | info, warning, error, success, emergency |
| icon | true, false |
| heading | true, false |
| slim | false, true |
| dismissable | false, true |

### Size variants
[Type/size/modifiers] determine the size and amount of information in the alert. 
**Tip:** Slim-icon is the slimmest.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100" />
[iframe shows standard, slim-icon, slim-no icon info alerts] 

🔗 [View alert sizes in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)
  

### Alert states
Alert states determine alert color / role / level of severity. There are currently 5 alert states.  

| Property | Value |
| ----------- | ----------- |
| state | info, warning, error, success, emergency |
 
  🔗 [View alert states in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--secondary-(light).html)

**Information state** 
Give instant feedback about the tasks a user just performed. Its main objective is to confirm or notify tasks. (this seems like success state)

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100" />

**Success state** 
Confirm that a user’s action was effective, and can have a celebratory tone.

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100" />

**Warning state** 
Inform the user of risks or things to be aware of before taking action. 

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100" />

**Error state** 
Inform that something went wrong after an action. Learn about errors (link to error documentation)

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100" />

**Emergency state** 
Demand immediate action to prevent a serious threat or inform the user of an emergency happening in their context. 

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100" />

### Dismissable alerts
Dismissable alerts are used for timely notifications that do not need to remain on the page. 

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--secondary&viewMode=story" width="100%" height="100" />

## Usability Guidance
- **Don't overdo it.** Too many notifications will either overwhelm or annoy the user and are likely to be ignored.
- **Understand the user's context.** Don’t include notifications that aren’t related to the user’s current goal.

## Accessibility Guidance
Use [USWDS alert accessibility tests](https://designsystem.digital.gov/components/alert/accessibility-tests/) to test button implementation.

### Avoid using fading alerts
Since alerts are used to display important and often urgent messages to users, it is important for all users to get a chance to read through them. This means not having error alerts automatically fade out after a set amount of time.

See [WCAG 2.0 Success Criterion 2.2.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html) for more information on situations where having disappearing alerts may impede a user's ability to engage with information provided.

#### Alternatives to fading alerts:
- **Make alerts manually dismissible** — By adding an interactive "close" button to alerts and making them dismissible, users can remove alerts from the screen once they have had ample time to respond to the information provided. This option is especially helpful in situations where multiple alerts may be displayed at once and risk cluttering the screen.
- **Reduce the number of alerts shown onscreen at once** — It can be especially tempting to have alerts that fade automatically to reduce clutter when many alerts need to be shown onscreen at once. Instead of having alerts fade out automatically, consider if multiple of the alerts displayed can be condensed into a single alert or if there is another way to display the information within the alert.

### Additional guidance
- **Don’t visually hide alert messages and then make them visible when they are needed.** Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.
- **Use the proper ARIA role.** The ARIA `role` attribute can notify assistive technologies of time-sensitive and important messages. To elevate the importance of the alert, choose the appropriate `role` from the [ARIA roles table](https://designsystem.digital.gov/components/alert/#alert-aria-roles) and add it to the `.usa-alert` element.

### Alert ARIA roles
| Attribute | Use Case | 
| ----------- | ----------- |
| `role="alert"` | Important messages that demand the user's immediate attention. **Example:** Error alert |
| `role="status"` | Messages that provide advisory information but do not have the same urgency as alerts. **Example:** Success alert |
| `role="region"` | Messages that provide information the user would want to be able to easily find, but are not important enough to interrupt user workflow.
**Example:** Informative or warning alert
**Note:** you must add an appropriate `aria-label` or `aria-labelledby` attribute when using this role. |

### Danger mode
**These buttons should be used if the use case is destructive or irreversible.** This could include actions such as deleting an application.
<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story&args=theme%3Adanger" width="100%" height="100" />

🔗 [View primary danger button in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(danger).html)

| Danger Variant Class | Description | 
| ----------- | ----------- |
| `usa-button--secondary` | Used for danger mode |
| `nj-button--outline-danger` | [Custom NJWDS] Used for secondary danger variant |
| `nj-button--unstyled-danger` | [Custom NJWDS] Used for tertiary danger variant |



## Code 

### Button Variants

| Type | Mode | Applied Variants |
| ----------- | ----------- | ----------- |
| primary | light | `usa-button` |
| primary | dark | `usa-button nj–button--primary-dark` |
| primary | danger | `usa-button usa-button--secondary` |
| secondary | light | `usa-button usa-button--outline` |
| secondary | dark | `usa-button usa-button--outline usa-button--inverse` |
| secondary | danger | `usa-button usa-button--outline nj-button--outline-danger` |
| tertiary | light | `usa-button usa-button--unstyled` |
| tertiary | dark | `usa-button usa-button--unstyled nj-button--unstyled-dark` |
| tertiary | danger | `usa-button usa-button--unstyled nj-button--unstyled-danger` |

Demos of these variants (including how they can be used with icon buttons) can be found on the [Fractal: Button page](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html).

## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: Button](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=2-4297&p=f&t=bKnF73CGw0X7qNQv-0) | Using button in designs, documentation and best practices on button usage |
| [Fractal: Button](https://newjersey.github.io/njwds/components/detail/buttons--primary-(light).html) | Preview button styles, see button code snippet |
| [Button settings: variables and variants](https://office-of-innovation.gitbook.io/njwds/button#code)  | Utilities to use in button styling (NJWDS specific) |

### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: Button](https://designsystem.digital.gov/components/button/) | Reference for additional button styles and functionalities  |
| [USWDS: Button utilities](https://designsystem.digital.gov/components/button/#using-the-button-component-2) | Utilities to be referenced in button styling (may not all apply to NJWDS) |
| [USWDS: Button accessibility tests](https://designsystem.digital.gov/components/button/accessibility-tests/) | Accessibility tests to run for button component |
