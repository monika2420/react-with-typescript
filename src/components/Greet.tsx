import React from 'react'


type GreetProps = {
	name: string
	messagecount?: number
	isloggedIn: boolean
}



export const Greet = (props: GreetProps) => {
	const {messagecount = 0 } = props
	return (
		<div>
		 <h2>
		  {props.isloggedIn ? `Welcome ${props.name}! You have ${messagecount} unread messages` : 'Welcome Students'}
		  
		 </h2>
		</div>
		)
}