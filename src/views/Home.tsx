import React, { useState } from 'react'

// styles
import './Home.scss'

// assets
import logo from '../assets/logo.svg'

const Home: React.FC = () => {
	const [title] = useState('React, whee!!')

	return (
		<div className="home">
			<img className="logo" src={logo} alt="react logo" />

			<h1>{title}</h1>

			<p>
				Lorem ipsum dolor sit amet <br />
				React.js.&nbsp;
				<a
					href="https://reactjs.org/docs"
					target="_blank"
					rel="noopener noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
	)
}

export default Home
