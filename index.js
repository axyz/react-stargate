var React = require('react');

module.exports = React.createClass({
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
