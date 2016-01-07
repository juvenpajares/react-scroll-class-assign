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
    if ((window.pageYOffset >= this.props.top) && (window.pageYOffset < this.props.bottom)) {
      if (!/active/i.test(this.props.className)) {
        this.setState({
          newClassName: this.props.className + ' ' + this.props.activeClass
        })
      }
    } else {
      this.setState({
        newClassName: this.props.className
      })
    }
  },
  render: function() {
    return React.createElement(
      'div',
      { className: this.state.newClassName },
      this.props,
      this.props.children
    )
  }
});

module.exports = ScrollClassAssign;