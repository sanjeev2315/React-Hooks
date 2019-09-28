import React from 'react'
import ErrorBoundary from './../ErrorHandler/errorBoundary'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Memo from './../Memo/memo'
import Lazy from './../Lazy/lazy'
import Home from './../Home/home'
import ContactListComponent from './../Hooks/contactList'
import GenerateErrorComponent from './../ErrorHandler/generateError'
import CustomHooksComponent from './../CustomHooks/customHooks'


export default function App() {
	return (

		<ErrorBoundary >
			<Router>
				<Route exact path='/' component={Home} />
				<Route path='/memo' component={Memo} />
				<Route path='/hooks' component={CustomHooksComponent} />
				<Route path='/contacts' component={ContactListComponent} />
				<Route path='/lazy' component={Lazy} />
				<Route path='/generateError' component={GenerateErrorComponent} />
			</Router>
		</ErrorBoundary>

	)
}
