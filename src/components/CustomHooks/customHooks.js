import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import AgeCounterComponent from './ageCounter'
import BookCounterComponent from './bookCounter'
import InputFormComponent from './inputForm'

const CustomHooksComponent = () => {
	return (
		<Container>
			<Row>
				<Col md={{ span: 4, offset: 4 }}><h3 style={{ 'color': 'green' }}>use Counter Hook</h3></Col>
			</Row>

			<Row>
				<Col>
					<AgeCounterComponent />
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<BookCounterComponent />
				</Col>
			</Row>
			<br />
			<Row>
				<Col md={{ span: 4, offset: 4 }}><h3 style={{ 'color': 'green' }}>useInput Hook</h3></Col>
			</Row>
			<br />
			<Row>
				<Col>
					<InputFormComponent />
				</Col>
			</Row>
			<br />
			<Link to='/'><h5>Back To Home</h5></Link>
		</Container >
	);
}

export default CustomHooksComponent;
