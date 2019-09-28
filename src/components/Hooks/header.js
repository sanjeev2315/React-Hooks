import React, { useContext } from 'react'
import { ContactContext } from './contactList'

const HeaderComponent = ({ }) => {
	const length = useContext(ContactContext)
	return (
		<h5> You have {length ? length : 0} contact in your contact book </h5>
	)
}

HeaderComponent.displayName = 'HeaderComponent'


export default HeaderComponent
