import React, { useEffect } from 'react'
import { FormGroup, Form, FormControl } from 'react-bootstrap'

function ContactAge(props) {
	useEffect(() => {
		return () => {
			console.log('Age component called on update')
		}
	})

	return (
		<div>
			Age is - {props.age}
			<Form >
				<FormGroup row>
					<FormControl
						placeholder='Age'
						aria-label='age'
						value={props.age}
						onChange={(e) => props.modifyAge(e.target.value)}
					/>
				</FormGroup>
			</Form>
		</div>
	)
}


export default React.memo(ContactAge)
