import React, { useEffect } from 'react'
import { FormGroup, Form, FormControl } from 'react-bootstrap'

function ContactAmount(props) {
	useEffect(() => {
		return () => {
			console.log('Amount component called on update')
		}
	})

	return (
		<div>
			Amount is - {props.amount}
			<Form >
				<FormGroup row>
					<     FormControl
						placeholder='Amount'
						aria-label='amount'
						value={props.amount}
						onChange={(e) => props.modifyAmount(e.target.value)}
					/>
				</FormGroup>
			</Form>
		</div>
	)
}

export default React.memo(ContactAmount)
