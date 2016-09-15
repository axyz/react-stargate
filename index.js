var React = require('react');

var StarGate = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
    },
    shouldComponentUpdate: function() {
        return false;
    },
    render: function() {
        return <div className={"starGate starGate_" + this.props.id} id={this.props.id} />;
    }
});

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = StarGate;
} else {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return StarGate;
        });
    } else {
        window.StarGate = StarGate;
    }
}
