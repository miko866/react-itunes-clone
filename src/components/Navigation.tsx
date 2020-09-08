import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Navigation.module.scss'

interface Props {}

export const Navigation = (props: Props) => {
	return (
		<nav className={style.navigation}>
			<NavLink to="/" activeClassName={style.active} exact>
				Home
			</NavLink>
			<NavLink to="/tunes" activeClassName={style.active}>
				Tunes
			</NavLink>
			<NavLink to="/about" activeClassName={style.active}>
				About
			</NavLink>
		</nav>
	)
}
