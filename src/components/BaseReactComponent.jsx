import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
	return {
		test: state.test
	}
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({}, dispatch);
};

/**
 * Component Description
 */
class BaseReactComponent extends Component {
	render() {
		return (
			<div className="base-react-component">
				<p>Base</p>
			</div>
		)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseReactComponent);