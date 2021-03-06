import React, { useState } from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import useCounter from './useCounter'
const AgeCounterComponent = () => {
	const [count, increment, decrement, reset] = useCounter(1)

	return (
		<Container>
			<br />
			<Row>
				<Col md={{ span: 3, offset: 4 }}>
					<h4>Age Count : {count}</h4>
				</Col>
			</Row>
			<br />

			<Row>
				<Col>
					<Button variant='primary' onClick={increment} >Increase Count</Button>
				</Col>
				<Col>
					<Button variant='secondary' onClick={decrement} >Decrease Count</Button>
				</Col>
				<Col>
					<Button variant='dark' onClick={reset}>Reset Count</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default AgeCounterComponent
