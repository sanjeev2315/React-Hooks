import React, { useState } from 'react';

const useCounter = (initialCount) => {
	const [count, setCount] = useState(initialCount)
	const increment = () => {
		setCount(prevCount => prevCount + 1)
	}

	const decrement = () => {
		setCount(prevCount => prevCount - 1)
	}

	const reset = () => {
		setCount(initialCount)
	}

	return [count, increment, decrement, reset]

}

export default useCounter
