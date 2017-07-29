# react-atrament

A React wrapper for [atrament.js](https://github.com/jakubfiala/atrament.js)

## Usage

See the example folder for a simple, responsive sketch app.

## A note on resposiveness

As you may well know, the HTML canvas object kind of blows when it comes to creating a proper responsive experience.

One approach could be to use a fixed, high resolution for the canvas width and height properties and use a relative width and height for the CSS width and height properties of the canvas. This works quite well for static images. However, it is not such a good solution for drawing, since the cursor position and the point of drawing of the canvas can become noticeably different if the width and height and CSS width and height are significantly different.

Another approach (used for the responsive mode of this plugin) is to continuously scale the width and height of the canvas based on the current CSS width and height of the canvas. This will solve the problem of cursor position vs. drawing point previously mentioned. However, changing the width and height properties of a canvas erases its current content. A way around this is to save the canvas content to an image data string before the resize operation and load the image data string just after the resize operation has finished. This is still not a perfect solution though, since the repeated saving and loading for different screen sizes will degrade the quality of the image rapidly and you end up with a blurry end result. There is no easy way around this unfortunately. Resampling the image might help here, but this is a quite costly operation in general and not something you ideally want to do in the browser using JavaScript...
