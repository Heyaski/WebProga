import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/AboutPage.js'
import Main from './Components/MainPage.js'
import Quiz from './Components/Quiz.js'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/quiz' element={<Quiz />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
