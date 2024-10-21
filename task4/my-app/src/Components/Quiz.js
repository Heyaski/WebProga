import React from 'react'
import { Link } from 'react-router-dom'
import './css/style.css'

// Вопросы
const questions = [
	{
		title: 'Что такое HTML?',
		variants: [
			'Язык программирования',
			'Бессмысленный текст',
			'Язык гиппертекстовой разметки',
		],
		correct: 2,
	},
	{
		title: 'Что такое CSS?',
		variants: [
			'Марка машины',
			'Язык таблиц стилей',
			'то, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Сколько лет автору?',
		variants: ['5', '12', '18'],
		correct: 2,
	},
]

// Отображение результата
function Result({ correct }) {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
			<h2>
				Вы отгадали {correct} ответа из {questions.length}
			</h2>
			<Link to='/'>
				<button>Вернуться на главную</button>
			</Link>
		</div>
	)
}

// Блок с вопросами
function Game({ question, onClickVariant }) {
	return (
		<>
			<div className='questions'>
				<h1>{question.title}</h1>
				<ul>
					{question.variants.map((text, index) => (
						<li onClick={() => onClickVariant(index)} key={text}>
							{text}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

// Функция отображения
function Quiz() {
	const [step, setStep] = React.useState(0)
	const [correct, setCorrect] = React.useState(0)
	const question = questions[step]

	const onClickVariant = index => {
		console.log(step, index)
		setStep(step + 1)

		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}

	return (
		<>
			<header>
				<link
					href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
					rel='stylesheet'
				/>
				<a href='index.html' class='logo'>
					<img src='./images/logo.png' alt='logo'></img>Сайт
				</a>

				<input type='checkbox' id='check' />
				<label for='check' class='icons'>
					<i class='bx bx-menu' id='menu-icon'></i>
					<i class='bx bx-x' id='close-icon'></i>
				</label>

				<nav>
					<Link to='/'>Главная</Link>
					<Link to='/about'>Об Авторе</Link>
					<Link to='/quiz'>Квиз</Link>
				</nav>
			</header>
			<div className='App'>
				{step !== questions.length ? (
					<Game question={question} onClickVariant={onClickVariant} />
				) : (
					<Result correct={correct} />
				)}
			</div>
			<footer>
				<p>2024 Все права защищены</p>
			</footer>
		</>
	)
}

export default Quiz
