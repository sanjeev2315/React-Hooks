/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React, { useState, useCallback, useMemo } from 'react'
import { Row, Container, Col, ListGroup, ListGroupItem, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContactComponent from './contact'
import AddContactComponent from './addContact'
import HeaderComponent from './header'
import ContactAmountComponent from './contactAmount'
import ContactAgeComponent from './contactAge'
import TimerComponent from './timer'
export const ContactContext = React.createContext()


const ContactListComponent = () => {
	const [contacts, setContacts] = useState([])
	const [filteredContacts, setFilteredContacts] = useState([])
	const [show, toggleShow] = useState(false)
	const [filterText, setFilterText] = useState('')
	const [age, setAge] = useState(0)
	const [amount, setAmount] = useState(0)


	const handleChange = (searchText) => {
		setFilterText(searchText)
		if (searchText) {
			setFilteredContacts(filterContacts(searchText))
		} else {
			setFilteredContacts(contacts)
		}
	}

	const filterContacts = (searchText) => {
		let allContacts = contacts
		// eslint-disable-next-line consistent-return
		return allContacts.filter((c) => {
			if (c.firstName.includes(searchText)) {
				return c
			}
		})
	}

	const handleShow = () => {
		toggleShow(true)
	}

	const handleClose = () => {
		toggleShow(false)
	}

	// useCallback is a optimization thing here. Whenever we have any function getting passed
	// as prop to child components then on every render of parent a new copy of that function
	// is created and react assumes some change is done in that prop so it re renders the
	// child component even React memo also find new function as an update. So if we use
	// useCallback hook to wrap these functions, it don't create a new copy of that function
	// unless there is a change in the field this function uses otherwise
	// child component don't get any update and don't re-render and improves performance


	const modifyAge = useCallback((a) => {
		setAge(a)
	}, [age])

	const modifyAmount = useCallback((amt) => {
		setAmount(amt)
	}, [amount])


	/* const isOldAged = () => {
								  let i = 0
								  while(i<800000000){
								  i++
								  }
								  if(age>40){ return 'Old' }
									  else{
										  return 'Young'
									  }
					  }*/


	// Here if only age is changed then this function will be re executed else useMemo will cache the function
	// output if age is not changes so that this function don't get executed again
	const isOldAged = useMemo(() => {
		let i = 0
		while (i < 800000000) {
			i++
		}
		if (age > 40) {
			return 'Old'
		}

		return 'Young'
	}, [age])

	const addContact = useCallback((data) => {
		contacts.push(data)
		filteredContacts.push(data)
		setFilteredContacts(filteredContacts)
		setContacts(contacts)
		toggleShow(false)
	}, [])

	return (
		<Container>
			<Row>
				<Col>
					<h4>useState/useEffects/useReducer/useContext/useRef Hooks Example</h4>
				</Col>
			</Row>
			<ContactContext.Provider value={contacts.length}>
				<br />
				<HeaderComponent />
				<br />
				<Row>
					<Col xs={4}>
						<FormControl
							placeholder='Search Contacts'
							aria-label='contact'
							value={filterText}
							aria-describedby='basic-addon1'
							onChange={(e) => handleChange(e.target.value)}
						/>

					</Col>
					<Col xs={4}>
						<Button variant='primary' onClick={handleShow}>
							Add Contact
            </Button>
						<AddContactComponent addContact={addContact} show={show} onClose={handleClose} />
					</Col>
					<Col>
						<TimerComponent />
					</Col>
				</Row>
				<br />
				<Row>
					<Col offset={2} sm={4}>
						<h4 style={{ color: 'blue' }}> Contact List </h4>
						<br />
					</Col>
				</Row>
				<Row>
					<Col offset={2} sm={6}>
						<ListGroup>
							{filteredContacts.map((contact) => {
								return (<ListGroupItem>
									<ContactComponent contact={contact} />
								</ListGroupItem>)
							})}
						</ListGroup>
					</Col>
				</Row>
				<br />
				<h4>useCallback/ useMemo Example( Optimizing the performance ) </h4>
				<br />
				<Row>
					<Col>
						1. Observe the delay in deriving the age status from age text box on change (If we don't use useMemo with this field, every re-render despite of age is changed or not, will have a delay)
          </Col>
				</Row>
				<Row>
					<Col>
						2. Another thing is useCallback here enabling us to render only changed component rather than rendering all children on every render even if nothing is changed. Check console for see this
          </Col>
				</Row>
				<br />
				<Row>
					<Col>
						<div />
						<ContactAgeComponent age={age} modifyAge={modifyAge} />
					</Col>

					<Col>
						Person is {isOldAged}
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<ContactAmountComponent amount={amount} modifyAmount={modifyAmount} />
					</Col>
					<Col>
						Amount is {amount}
					</Col>
				</Row>
				<br />
				<Link to='/'><h5>Back To Home</h5></Link>
			</ContactContext.Provider>
		</Container>

	)
}


export default ContactListComponent
