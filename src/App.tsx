import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'

import './App.scss'

import { Navigation } from './components/Navigation'
import { Home } from './views/Home'
import { Tunes } from './views/Tunes'
import { About } from './views/About'

function App() {
	return (
		<div className="App">
			<header className="App">
				<Navigation />
			</header>
			<main className="content">
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/tunes" component={Tunes} />
					<Route path="/about" component={About} />
				</Switch>
			</main>
		</div>
	)
}

export default App
