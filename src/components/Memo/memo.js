/* eslint-disable max-len */
import React, { memo, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

const YesComponent = props => <div> <h5>Votes for Yes -   {props.yesCount + ' ->' + new Date().getTime()}</h5></div>
const NoComponent = props => <div>  <h5>Votes for No -   {props.noCount + ' ->' + new Date().getTime()}  </h5></div>
const MemoComponent = memo(YesComponent)


export default function Memo() {
  const [yesCount, setYesCount] = useState(0)
  const [noCount, setNoCount] = useState(0)
  const borderStyle = { border: '1px solid blue' }
  const colStyle = { margin: '10px' }
  const handleYesClick = () => {
    setYesCount(yesCount + 1)
  }

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  return (
    <Container>
      <Row >
        <Col xs= {4} />
        <Col>
          <Badge variant='info'>Memo Components  Example</Badge>
        </Col>
      </Row>

      <br/>
      <br/>
      <Row >
        <Col xs = {4} style={borderStyle}>
          <Row>
            <Col style= {colStyle}>
              <Button
                variant='primary' size='lg'
                onClick={handleYesClick}>
              Click Me (Yes Component)
              </Button>
            </Col>
          </Row>
          <Row>
            <YesComponent yesCount = {yesCount}/>
          </Row>
        </Col>

        <Col xs= {4} style={borderStyle}>
          <Row>
            <Col style= {colStyle}>
              <h3><Badge variant='secondary'>Memo Yes Component</Badge></h3>
            </Col>
          </Row>
          <Row>
            <MemoComponent yesCount = {yesCount}/>
          </Row>
        </Col>
        <Col xs= {4} style={borderStyle}>
          <Row>
            <Col style= {colStyle}>
              <Button
                variant='success' size='lg'
                onClick={handleNoClick}>
    Click Me (No Component)
              </Button>
            </Col>
          </Row>
          <Row>
            <NoComponent noCount = {noCount}/>
          </Row>
        </Col>
      </Row>
      <br/>
      <Row>
        <center>
          <h6>Observe Memo Component, Renders only when Yes clicked because the part of props it uses is changing only when clicking Yes. If we see Yes/No Components they renders on clicking any of these even if they don't use the props they don't use.</h6>
        </center>
      </Row>
      <br/>
      <Link to = '/'><h5>Back To Home</h5></Link>
    </Container>
  )
}
