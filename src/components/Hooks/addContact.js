/* eslint-disable max-len */
import React, { useEffect, useReducer } from 'react'
import { FormControl } from 'react-bootstrap'
import {
	Row, Modal, Button, ModalBody, ModalTitle, Form, FormGroup, Col
} from 'react-bootstrap'

// Good example of using useReducer rather than useState as we have many
// fields and handling with useState is not that efficient

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	mobile: '',
	address: ''
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'handleFirstNameChange':
			return { ...state, firstName: action.value }
		case 'handleLastNameChange':
			return { ...state, lastName: action.value }
		case 'handleEmailChange':
			return { ...state, email: action.value }
		case 'handleMobileChange':
			return { ...state, mobile: action.value }
		case 'handleAddressChange':
			return { ...state, address: action.value }
		default:
			return state
	}
}

const AddContactComponent = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState)


	useEffect(() => {
		// Ideally use Effect called on every state update and mount
		// But we only want useEffect to be called only on modal open/close as everything else belongs to local state
		return () => {
			dispatch({ type: 'handleFirstNameChange', value: '' })
			dispatch({ type: 'handleLastNameChange', value: '' })
			dispatch({ type: 'handleMobileChange', value: '' })
			dispatch({ type: 'handleEmailChange', value: '' })
			dispatch({ type: 'handleAddressChange', value: '' })
		}
	}, [props.show])

	const addContact = () => {
		props.addContact(
			{
				firstName: state.firstName,
				lastName: state.lastName,
				mobile: state.mobile,
				email: state.email,
				address: state.address
			})
	}
	return (

		<Modal show={props.show} hide={props.onClose}>
			<ModalTitle>
				Add Contact
      </ModalTitle>
			<ModalBody>
				<Form>
					<FormGroup row>
						<FormControl
							placeholder='First Name'
							aria-label='firstName'
							value={state.firstName}
							onChange={(e) => dispatch({ type: 'handleFirstNameChange', value: e.target.value })}
							aria-describedby='basic-addon1'
						/>
					</FormGroup>
					<FormGroup row>
						<FormControl
							placeholder='Last Name'
							aria-label='lastName'
							value={state.lastName}
							onChange={(e) => dispatch({ type: 'handleLastNameChange', value: e.target.value })}
							aria-describedby='basic-addon1'
						/>

					</FormGroup>
					<FormGroup row>

						<FormControl
							type='email'
							placeholder='Email'
							aria-label='email'
							value={state.email}
							onChange={(e) => dispatch({ type: 'handleEmailChange', value: e.target.value })}
							aria-describedby='basic-addon1'
						/>

					</FormGroup>
					<FormGroup row>

						<FormControl
							placeholder='Mobile'
							aria-label='mobile'
							value={state.mobile}
							onChange={(e) => dispatch({ type: 'handleMobileChange', value: e.target.value })}
							aria-describedby='basic-addon1'
						/>

					</FormGroup>
					<FormGroup row>


						<FormControl
							type='textArea'
							placeholder='Address'
							aria-label='address'
							value={state.address}
							onChange={(e) => dispatch({ type: 'handleAddressChange', value: e.target.value })}
							aria-describedby='basic-addon1'
						/>

					</FormGroup>
					<Form.Group as={Row}>
						<Col offset={2} sm={3}>
							<Button color='success' type='button' onClick={addContact}> Save</Button>
						</Col>
						<Col sm={6}>
							<Button onClick={props.onClose}>Cancel</Button>
						</Col>
					</Form.Group>
				</Form>
			</ModalBody>
		</Modal>

	)
}

export default AddContactComponent
