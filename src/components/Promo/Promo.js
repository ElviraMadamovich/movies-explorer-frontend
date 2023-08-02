import promoImage from '../../images/promo-image.png';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
	return (
		<section className='promo'>
			<div className='promo__field'>
				<div className='promo__text'>
					<h1 className='promo__title'>
						Учебный проект студента факультета <br /> Веб-разработки.
					</h1>
					<h2 className='promo__subtitle'>
						Листайте ниже, чтобы узнать больше про этот проект и его создателя.
					</h2>
				</div>
				<img className='promo__image' src={promoImage} alt='лого' />
			</div>

			<NavTab />

		</section>
	);
}

export default Promo;
