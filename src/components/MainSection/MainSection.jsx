import './MainSection.scss'

const MainSection = () => {
return (
<section className='mainSection'>
	<div className="container">
		<div className="mainSection__wrapper">
			<section className='mainSection__left'>
				<h1 className="mainSection__left-title">Зарабатывайте больше<br /><span className='mainSection__gradient-text'>с WELBEX</span></h1>
				<p className="mainSection__left-text">Развиваем и контролируем продажи за вас</p>
			</section>
			<section className='mainSection__right'>
				<h2 className="mainSection__right-title">Вместе с <span className='mainSection__gradient-text'>бесплатной</span> <span className='mainSection__gradient-text'>консультацией</span> мы дарим:</h2>
				<div className="mainSection__right-menu">
					<div className="mainSection__right-menu-itemMobil">
						<div className="mainSection__right-menu-line"></div>
						<p className="mainSection__right-menu-text">Skype аудит</p>
					</div>
					<div className="mainSection__right-menu-itemMobil">
						<div className="mainSection__right-menu-line"></div>
						<p className="mainSection__right-menu-text">30 виджетов</p>
					</div>
					<div className="mainSection__right-menu-itemMobil">
						<div className="mainSection__right-menu-line"></div>
						<p className="mainSection__right-menu-text">Dashboard</p>
					</div>
					<div className="mainSection__right-menu-itemMobil">
						<div className="mainSection__right-menu-line"></div>
						<p className="mainSection__right-menu-text">Месяц аmoCRM</p>
					</div>
					<div className="mainSection__right-menu-itemDesk">
						<h3 className="mainSection__right-menu-title">Виджеты</h3>
						<p className="mainSection__right-menu-text">30 готовых решений</p>
					</div>
					<div className="mainSection__right-menu-itemDesk">
						<h3 className="mainSection__right-menu-title">Dashboard</h3>
						<p className="mainSection__right-menu-text">с показателями вашего бизнеса</p>
					</div>
					<div className="mainSection__right-menu-itemDesk">
						<h3 className="mainSection__right-menu-title">Skype Аудит</h3>
						<p className="mainSection__right-menu-text">отдела продаж и CRM системы</p>
					</div>
					<div className="mainSection__right-menu-itemDesk">
						<h3 className="mainSection__right-menu-title">35 дней</h3>
						<p className="mainSection__right-menu-text">использования CRM</p>
					</div>
				</div>
				<button className="mainSection__right-btn">Получить консультацию</button>
			</section>
		</div>
	</div>
</section>
);
};

export default MainSection;