import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaUser, FaEnvelope, FaPhone, FaHome, FaUsers } from 'react-icons/fa'

const ContactComponent = ({ contact }) => {
	return (
		<Container fluid>
			<Row>
				<Col sm={3}>
					<FaUsers />
				</Col >
				<Col sm={9}>
					<h4>      <FaUser /> {contact.firstName}  {contact.lastName} </h4>
					<h4><FaPhone /> {contact.mobile}  </h4>
					<h4><FaEnvelope />  {contact.email}</h4>
					<h4><FaHome /> {contact.address} </h4>

				</Col>
			</Row>
		</Container>

	)
}


export default ContactComponent
