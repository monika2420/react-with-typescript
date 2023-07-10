import { useReducer } from 'react'

type CounterState = {
	count: number
}

type UpdateAction = {
	type: 'increment' | 'decrement'
	payload: number
}

type ResetAction = {
	type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
	case 'increment':
		return { count: state.count + action.payload }
	case 'decrement':
		return { count: state.count - action.payload }
	default:
		return state
	}
}

export const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<>
		count: {state.count}
		<button onClick={() => dispatch({type: 'increment', payload: 10})}>
		</button>
		</>
		)
}