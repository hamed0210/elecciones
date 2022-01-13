import { Routes, Route } from 'react-router-dom'

import Styles from './main.module.css'
import Busqueda from 'componentes/busqueda'

const Main = () => {
	return (
		<section className={Styles.container}>
			<Routes>
				<Route exact path='/' element={<Busqueda />} />
			</Routes>
		</section>
	)
}

export default Main
