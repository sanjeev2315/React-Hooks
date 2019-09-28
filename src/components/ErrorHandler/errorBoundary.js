import React, { Component } from 'react'


class ErrorBoundary extends Component {
	static getDerivedStateFromError() {
		return {
			hasError: true
		}
	}

	static
		propTypes = {

		};


	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	render() {
		if (this.state.hasError) {
			return (<div> <br /><h4 style={{ color: 'red' }}><center>Error Handler Caught some error,
      Check it Please </center></h4></div>)
		}
		return this.props.children
	}
}

export default ErrorBoundary
