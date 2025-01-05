# eleventy-plugin-img-magnifier : zoom image to fullscreen

When hovering an img, the cursor is changed as a magnifying glass to indicates to the user that the img can be enlarged. A click and the img appears enlarger, through a fade-in animation and the background get darker. A click outside the image quit the enlarged view.

![[A user clicks on a blog image, the image appears fullscreen on a darker background in a fade-in animation, the user clicks outside and the image disappear](./showcase.webm)]

## Installation

```bash
npm install eleventy-plugin-img-magnifier
```

Place the `{% img-magnifier %}` shortcode on your desired pages/templates.

## How does it work ?

When the image is clicked, a js script loads and dynamically inserts a `<dialog>` HTML modal right before the image in its container. When the outside of the modal is clicked the `dialog` automatically disappears.
The overall is styled and transitioned via native CSS `@starting-style` rule and `<dialog>` targeting.