import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
	return (
		<header className='h-[10vh] bg-primary flex justify-between items-center px-56'>
			<h2 className='text-2xl font-bold text-white'>Your Shopping Cart</h2>
			<FaShoppingCart className='text-3xl text-white ' />
		</header>
	)
}

export default Header
