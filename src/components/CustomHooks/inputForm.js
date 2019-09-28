import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import useInput from './useInput'
const InputFormComponent = () => {
	const [firstName, bindFirstName, resetFirstName] = useInput('')
	const [lastName, bindLastName, resetLastName] = useInput('')



	const submitHandler = (e) => {
		e.preventDefault()
		resetFirstName('')
		resetLastName('')
		// eslint-disable-next-line no-alert
		alert('Hello ' + firstName + ' ' + lastName)
	}

	return (
		<Container>
			<form onSubmit={submitHandler}>
				<Row>
					<Col md={3}>
						<label> First Name </label>
					</Col>
					<Col>
						<input
							{...bindFirstName} />
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<label> Last Name </label>
					</Col>
					<Col>
						<input {...bindLastName} />
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={{ span: 3, offset: 4 }}>
						<Button variant='primary' type='submit' >Submit</Button>
					</Col>
				</Row>
			</form>

		</Container>
	)
}

export default InputFormComponent
