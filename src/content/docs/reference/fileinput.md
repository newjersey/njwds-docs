---
title: File Input
description: Documentation for file input.
---

✅ _Passed WCAG 2.1 AA (USWDS component)_

<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="left"> </iframe>

🔗 [View file input in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

## File Input Usage

<iframe title="Button preview" frameborder="1" style="border: solid #c9c9c9; padding:20" src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" width="100%" height="100"></iframe>

### 👍 Use this component for
- **Documents are required.** Ask users to provide files when it’s necessary.
  
### 👎 Consider something else for
- **Documents are optional.** Avoid asking users to provide documents if you don’t require them.
- **Asynchronous upload.** The file input component doesn’t support asynchronous uploading. Files will `POST` only on form submission.
- **Asking for large files.** Be mindful that some users might have limited connectivity or data plans.

### 🚫 What to ensure / avoid
- **Allow multiple file formats.** Not everyone has access to the same software. Be flexible with file types to avoid unnecessary software requirements.
- **Prefer one file per input.** Some users might not know how to select multiple files in a file browser.
- **Use hint text to highlight input restrictions.** Create an element with the `usa-hint` class to explain any file restrictions, such as document types or file size.


## Content guidelines
- TBD


## Figma properties 

### Input File properties 
| Property | Values | 
| ----------- | ----------- |
| state | default, error |
| files | single, multiple|
| preview | true, false |
| number of files | [text input] |

### States
#### Default
<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="left"> </iframe>

🔗 [View file input in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Error
<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="left"> </iframe>

🔗 [View file input in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Amount of Files
#### Single
<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="left"> </iframe>

🔗 [View file input in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

#### Multiple
<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="left"> </iframe>

🔗 [View file input in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

### Preview Files
<iframe src="https://pr-158.d6umhtb6a6pvv.amplifyapp.com/iframe.html?id=elements-button--primary&viewMode=story" frameborder="1" scrolling="no" width="49%" height="100%" align="left"> </iframe>

🔗 [View file input in Storybook](https://newjersey.github.io/njwds/components/preview/buttons--primary-(light).html)

## Accessibility guidance
Use the [USWDS file input accessibility tests](https://designsystem.digital.gov/components/file-input/accessibility-tests) to test file input implementation.
- **Use Proper Labels and Attributes.** Each file input should have a `label` element.** Associate the `label` to your input by defining the value of the label’s `for` attribute with the input’s `id`.
- **Use as a Progressive Enhancement** The file input component should be a progressive enhancement of `<input type="file" />`. If the component doesn’t initialize, it should still work and appear like a standard file input.


## Code utilities 

### File input properties 
- **Initialization properties.** JavaScript will create most elements for file input. To get a file input to initialize, add the class name `usa-file-input` to `<input type="file" />`.
- **Interaction.** When a user selects or drags documents to the file input, the file name and a thumbnail preview are listed.
- **Limit accepted file types with the `accept` attribute.** Add the `accept` attribute to the `input` element when you want to limit the types of files your input can accept. If a user selects a file that does not match the specified type, the file will not be attached and the file input will display an error message. [Learn more about the `accept` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file#accept) [mozilla.org].
- **Internet Explorer and older versions of Edge.** These browsers do not support dragging items to a file input. Instructions to drag files are removed for these browsers.
- **Customizing the error message.** Add the data attribute `data-errorMessage` to `usa-file-input` to include a custom error message.
  
## Resources
### NJWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [Figma NJWDS: File input](https://www.figma.com/design/z8CI77qQvbffkCslHANatK/NJ-Web-Design-System?node-id=1560-480&p=f&t=Yx31eAZO0ULNN6UA-0) | Using file input in designs |
| [Fractal: File input](https://newjersey.github.io/njwds/components/detail/file-input.html) | Preview file picker styles, see code snippet |


### USWDS links 
| File | Purpose | 
| ----------- | ----------- |
| [USWDS: File input](https://designsystem.digital.gov/components/file-input/) | Documentation from USWDS |
| [USWDS: File input accessibilty](https://designsystem.digital.gov/components/file-input/accessibility-tests) | Accessibility check |
| [USWDS: File Input Utilities](https://designsystem.digital.gov/components/file-input/#using-the-file-input-component-2) | Find utilities |
