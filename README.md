# windowBar.js
A jQuery plugin for chrome packaged apps that creates a simple, customizable and functional window bar. 

## Example
See [test](https://github.com/carlelieser/windowBar.js/tree/master/test) for a complete chrome packaged app showcasing windowBar.js

**Link CSS**
```html
<link type="text/css" rel="stylesheet" href="windowBar.css"/>
```
**Link Plugin**
```html
<!-- load jQuery first -->
<script src="jquery-2.2.1.min.js"></script>
<script src="windowBar.js"></script>
<script src="windowBarTest.js"></script>
```
**Initialize windowBar in app script**
```javascript
$('.example-wrapper').initializeWindowBar();
```
## Options
**Color**

Enter a hexadecimal value as a string to change the color of the window bar. If no hexadecimal is set, the color of the window bar will be set to `#FFFFFF`. The color of the icons will change accordingly.
```javascript
$('.example-wrapper').initializeWindowBar('#526262');
```

## License
Copyright (c) 2016 Carlos Santos. See the LICENSE file for license rights and limitations (MIT).
