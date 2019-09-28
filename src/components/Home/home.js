/* eslint-disable max-len */
import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Badge } from 'react-bootstrap'


export default function Home() {
	return (
		<Container>
			<Row>
				<Col xs={5} />
				<Col>
					<Badge variant='success'>React Feature List</Badge>
				</Col>
			</Row>
			<br />
			<br />
			<Row>
				<Col xs={12} >
					<ListGroup>
						<ListGroup.Item variant='secondary'><h5><Link to='/memo'>React Memo Component with Routing </Link></h5></ListGroup.Item>
						<ListGroup.Item variant='success'><h5><Link to='/lazy'>React Lazy and Suspense</Link></h5></ListGroup.Item>
						<ListGroup.Item variant='primary'><h5><Link to='/generateError'> React Static getDerivedStateFromError</Link></h5></ListGroup.Item>
						<ListGroup.Item variant='secondary'><h5><Link to='/contacts'>React In Built Hooks</Link></h5></ListGroup.Item>
						<ListGroup.Item variant='secondary'><h5><Link to='/hooks'>React Custom Hooks</Link></h5></ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</Container>
	)
}
