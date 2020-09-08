import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'

import './Home.scss'

interface Props {}

export const Home = (props: Props) => {
	const [title, setTitle] = useState('React, is here!')

	useEffect(() => {
		document.title = title
	})

	return (
		<div className="home">
			<img src={logo} className="logo" alt="logo" />
			<h1>{title}</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Quidem nihil magnam dolore aliquam. &nbsp;
				<a
					href="https://reactjs.org/docs"
					target="_blank"
					rel="noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
	)
}
