import { Link } from 'react-router-dom'
import './css/style.css'

function Main() {
	return (
		<>
			<body>
				<header>
					<link
						href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
						rel='stylesheet'
					/>
					<a href='index.html' class='logo'>
						<img src='../images/logo.png' alt='logo'></img>Сайт
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
						<div class='site-info'>
							<h1 class='title'>Этот сайт создан при поддержке божьей</h1>
							<p class='info-text'>
								На этом сайте нет никакой полезной информации. Он создан
								исключительно с целью обучения и демонстрации навыков в
								верстании сайтов на HTML с использование CSS.
							</p>
						</div>
						<div className='about-page'>
							<h1 class='title'>Для чего нужна эта страница</h1>
							<p class='info-text'>
								Это главная страница, на которой в нормальных сайтах указывается
								основная информация о сайте, но так как данный сайт используется
								как учебное пособие, то в нем нет ничего такого. Чтобы изучить
								весь сайт, нужно понажимать кнопочки вверху.
							</p>
						</div>
					</section>

					<footer>
						<p>2024 Все права защищены</p>
					</footer>
				</main>
			</body>
		</>
	)
}

export default Main
