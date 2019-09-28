import React, { Component, PropTypes } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

class GenerateErrorComponent extends Component {
	static propTypes = {

	};

	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	handleClick = () => {
		this.setState({
			count: this.state.count + 1

		})
	}

	render() {
		if (this.state.count > 0) {
			throw new Error('Crashed')
		}
		return (

			<Container>
				<Row >
					<Col xs={4} />
					<Col>
						<Badge variant='info'>Error Boundary Example</Badge>
					</Col>
				</Row>

				<br />
				<br />
				<h5 style={{
					color: 'blue'
				}}>This example is just to force generate an error to trigger Error boundary handler to catch and display the error</h5>
				<br />
				<Row>
					<Col xs={4}>
						<h6>Count (I will throw error if increased) - {this.state.count} </h6>
					</Col>
					<Col xs={1} />
					<Col>
						<Button
							variant='success' size='lg'
							onClick={this.handleClick}>
							Increment Counter to Crash Test
		 </Button>
					</Col>
				</Row>
				<br />
				<Link to='/'><h5>Back To Home</h5></Link>
			</Container>
		)
	}
}

export default GenerateErrorComponent
