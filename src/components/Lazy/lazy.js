import React, { lazy, Suspense } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

const ChildComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() =>
    	resolve(import('./childComponent'), 3000)
    )
  })
})
const renderLoader = () => <p>Loading.....</p>

export default function Lazy() {
  return (
    <div>
      <Suspense fallback={renderLoader()}>
        <Container>
  		<Row >
    		<Col xs= {4} />
  			<Col>
     			<Badge variant='info'>Lazy Components Example</Badge>
     		</Col>
  		</Row>
  		<br/>
  		<Row>
   			<Col xs= {4} >
   				<h4 style = {{ color: 'blue' }}> I am Parent Component </h4>
      		</Col>
       		<Col xs= {8} >
    			<ChildComponent/>
			 </Col>
          </Row>
          <br/>
          <Link to = '/'><h5>Back To Home</h5></Link>
        </Container>
      </Suspense>
    </div>
  )
}
