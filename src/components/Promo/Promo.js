import promoImage from '../../images/promo-image.png';
import './Promo.css';

function Promo() {
	return (
		<section className='promo'>
			<div className='promo__field'>
				<div className='promo__text'>
					<h1 className='promo__title'>
						Учебный проект студента факультета Веб-разработки.
					</h1>
					<p className='promo__subtitle'>
						Листайте ниже, чтобы узнать больше про этот проект и его создателя.
					</p>
					<a className='promo__navtab' href='#about-project'>
						Узнать больше
					</a>
				</div>
				<img className='promo__image' src={promoImage} alt='лого' />
			</div>
		</section>
	);
}

export default Promo;
