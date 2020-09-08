import React, { useState, ChangeEvent, FormEvent } from 'react'

interface Props {}

export const Tunes = (props: Props) => {
	const [query, setQuery] = useState('')
	const [songs, setSongs] = useState([
		{ id: 1, artist: 'Test1', name: 'Name 1' },
		{ id: 2, artist: 'Test2', name: 'Name 2' },
		{ id: 3, artist: 'Test3', name: 'Name 3' }
	])

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newSong = {
			id: Math.max(...songs.map(s => s.id)) + 1,
			artist: query,
			name: query
		}
		setSongs([...songs, newSong])
	}

	return (
		<div className="tunes">
			<h1>Tunes</h1>

			<form onSubmit={handleSubmit}>
				<input type="text" value={query} onChange={handleInput} />
			</form>

			<ul>
				{songs.map(song => (
					<li key={song.id}>{JSON.stringify(song)}</li>
				))}
			</ul>
		</div>
	)
}
