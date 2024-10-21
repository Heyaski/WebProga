import { Link } from 'react-router-dom'
import './css/style.css'

function About() {
	return (
		<>
			<link
				href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
				rel='stylesheet'
			/>
			<header>
				<a href='index.html' class='logo'>
					<img src='../public/images/logo.png' alt='logo'></img>Сайт
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

			<main>
				<aside class='left'>
					<div class='info'>
						<p class='text'>
							В местном зоопарке сбежала рысь.<hr></hr>
						</p>
						<br />
						<p class='text'>
							В ДВФУ стартовал чемпионат по спортивному программированию.
							<hr></hr>
						</p>
						<br />
						<p class='text'>
							200 тысяч студентов в этом году поступили на бюджет.<hr></hr>
						</p>
						<br />
						<p class='text'>
							В Приморском крае ожидаются сильные осадки.<hr></hr>
						</p>
						<br />
						<p class='text'>
							Программирование улучшает умственные способности человека.
							<hr></hr>
						</p>
					</div>
				</aside>

				<section class='container'>
					<div class='about-author'>
						<h1 class='title'>Основная информация</h1>
						<p>
							<b>Имя: </b>Степан
						</p>
						<p>
							<b>Фамилия: </b>Руденко
						</p>
						<p>
							<b>Отчество: </b>Александрович
						</p>
						<p>
							<b>Дата рождения: </b>05.11.2005
						</p>
						<p>
							<b>Полных лет: </b>18
						</p>
						<p>
							<b>Статус: </b>Студент
						</p>
						<p>
							<b>Место обучения: </b>ДВФУ
						</p>
						<p>
							<b>Курс и группа: </b>2 курс Б9123-02.03.01сцт
						</p>
						<p>
							<b>Мечта: </b>Жить
						</p>
						<noscript>It's noscript tag</noscript>
					</div>
				</section>

				<footer>
					<p>2024 Все права защищены</p>
				</footer>
			</main>
		</>
	)
}

export default About
