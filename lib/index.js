var React = require('react')

var ScrollClassAssign = React.createClass ({
  componentWillMount: function() {
    window.addEventListener('scroll', this.scrollThis)
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.scrollThis)
  },
  getInitialState: function() {
    return {
      newClassName: this.props.className
    }
  },
  scrollThis: function(evt) {
    var activeClass = this.props.activeClass ? this.props.activeClass : 'active'
    var defaultClass = this.props.className ? this.props.className : 'scroll_class_default'
    if ((window.pageYOffset >= this.props.top) && (window.pageYOffset <= this.props.bottom)) {
      if (!/active/i.test(defaultClass)) {
        this.setState({
          newClassName: defaultClass + ' ' + activeClass
        })
      }
    } else {
      this.setState({
        newClassName: defaultClass
      })
    }
  },
  render: function() {
    return React.createElement(
      'div',
      { className: this.state.newClassName },
      this.props.children
    )
  }
});

module.exports = ScrollClassAssign;