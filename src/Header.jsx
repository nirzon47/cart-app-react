import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
	return (
		<header className='h-[10vh] bg-primary flex justify-between items-center md:px-56 w-screen px-4'>
			<h2 className='text-2xl font-bold text-white'>Your Shopping Cart</h2>
			<div className='indicator'>
				<span className='indicator-item badge badge-secondary' id='cart-count'>
					4
				</span>
				<FaShoppingCart className='text-3xl text-white ' />
			</div>
		</header>
	)
}

export default Header
