### Fonts

A sample project to help understand how the unit `rem` work.

Fonts are scaled according to the width of the page.
- < 768px, scaled by 0.7
- 768px - 992px, scaled by 0.8
- 992px - 1200px, scaled by 1
- > 1200px, scaled by 1.1

Base font is set to 62.5%.  This allows 16px to become 10px.  This is nice as it makes multiplying fonts easy.  See recommendation under [ems header](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).

The `rem` unit work solely off the root `html` tag.  [w3c doc](http://www.w3.org/Style/Examples/007/units.en.html).

It should be minded that the base font size (usually 16px) is determined by the user settings for fonts in the browser or device.  Also bare in mind the minimum font size is configurable.

### Installation & Deployment
- ```npm install .```
- ```grunt```
- Open browser and navigate to URL http://localhost:8080
