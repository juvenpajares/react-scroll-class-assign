# React Scroll Class Assign for React.js
Component that assigns classnames on scroll

### Installation
```bash
  npm install react-scroll-assign
```

### Example
```js
var React = require('react');
var ScrollClassAssign = require('react-scroll-class-assign');

var SimpleApp = React.createClass({
  render: function () {
    return (
    <ScrollClassAssign top="10" bottom="10000" className="test" activeClass="active">
      ...
    </ScrollClassAssign>
    );
  }
});
```