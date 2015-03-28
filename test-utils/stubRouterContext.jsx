var React = require('react/addons');
var objectAssign = require('object-assign');
var func = React.PropTypes.func;

var stubRouterContext = (Component, props, stubs) => {
  return React.createClass({
    childContextTypes: {
      router: React.PropTypes.object
    },

    getChildContext () {
      return {
        router: objectAssign({
          makePath () {},
          makeHref () {},
          transitionTo () {},
          replaceWith () {},
          goBack () {},
          getCurrentPath () {},
          getCurrentRoutes () {},
          getCurrentPathname () {},
          getCurrentParams () {},
          getCurrentQuery () {},
          isActive () {},
        }, stubs)
      };
    },

    render () {
      return <Component { ...props } />
    }
  });
};

export default stubRouterContext;