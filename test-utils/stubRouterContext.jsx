var React = require('react/addons');
var objectAssign = require('object-assign');
var func = React.PropTypes.func;

var stubRouterContext = function(Component, props, stubs){
  return React.createClass({
    childContextTypes: {
      makePath: func,
      makeHref: func,
      transitionTo: func,
      replaceWith: func,
      goBack: func,
      getCurrentPath: func,
      getCurrentRoutes: func,
      getCurrentPathname: func,
      getCurrentParams: func,
      getCurrentQuery: func,
      isActive: func,
    },

    getChildContext () {
      return objectAssign({
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
      }, stubs);
    },

    render () {
      return <Component { ...props } />
    }
  });
};

module.exports = stubRouterContext;