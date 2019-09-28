import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

function TimerComponent() {
	const timerRef = useRef()

	const [timer, setTimer] = useState(0)

	useEffect(
		() => {
			timerRef.current = setInterval(() => {
				setTimer(timer + 1)
			}, 1000)
			return () => {
				clearInterval(timerRef.current)
			}
		},
		[timer]
	)

	return (
		<div>

			Timer - {timer}
			<Button
				onClick={() => clearInterval(timerRef.current)}>
				Stop Timer
      </Button>
		</div>
	)
}

export default TimerComponent
