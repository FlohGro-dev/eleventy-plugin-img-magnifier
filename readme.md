# eleventy-plugin-img-magnifier : zoom image to fullscreen

Enlarge images and create a lightbox to view fullscreen.
When hovering an img, the cursor is changed as a magnifying glass to indicates to the user that the img can be enlarged. A click and the img appears enlarged, through a fade-in animation and the background get darker. A click outside the image quit the enlarged view.

[showcase.webm](https://github.com/user-attachments/assets/ee2c8c07-c4d7-4fe6-8b32-40afb5419713)

![[A user clicks on a blog image, the image appears fullscreen on a darker background in a fade-in animation, the user clicks outside and the image disappear](./showcase.webm)]

## Installation

```bash
npm install eleventy-plugin-img-magnifier
```

Then register it in your config .eleventy.js file :

```js
import imgMagnifier from "eleventy-plugin-img-magnifier"

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(imgMagnifier)
}
```

Place the `{% imgmagnifier %}` shortcode on your desired pages/templates just the before the closing `</body>`of your file

## How does it work ?

When the image is clicked, a js script loads and dynamically inserts a `<dialog>` HTML modal right before the image in its container. When the outside of the modal is clicked the `dialog` automatically disappears.
The overall is styled and transitioned via native CSS `@starting-style` rule and `<dialog>` targeting.

## Requirements

It's based on ESM so Eleventy 3.0 minimum is required.