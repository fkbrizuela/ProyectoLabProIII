import { useEffect, useState } from "react"

const CountriesContainer = () => {

	const countriesList = ['Argentina', 'Mexico', 'Venezuela', 'Colombia']

	const [countries, setCountries] =  useState([])

	useEffect(() => {
		console.log('[CountriesContainer] Mountig...')
		console.log('Lista de paises:', countries)

		const promesa = new Promise((resolve, reject) => {
			const rand = Math.random()
			console.log('random number', rand)

			setTimeout(()=>{
			if (rand >= 0.5) {
				resolve(countriesList)
			} else {
				reject('Rechazada!')
			}
			},5000)
		})
		promesa
			.then((result) => {
				console.log('La promesa fue satisfecha', result);
				setCountries(result)
			})
			.catch((err) => {
				console.log('La promesa fue rechazada', err);
			})
		/*return()=>{
		} */
		console.log('se termino de ejecutar useEffect, sincronicamente antes de la promesa que es asincrona');
	}, [])


	return (
		<div style={{ border: 'solid green 2px' }}>
			<h1>CountriesContainer - promesas y asincronia</h1>
			{countries.map( (c,i) => <li key={i}>{c}</li>)}
		</div>
	)
}
export default CountriesContainer