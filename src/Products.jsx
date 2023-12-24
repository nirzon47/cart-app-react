import ProductItem from './ProductItem'

const Products = () => {
	return (
		<div className='flex flex-col gap-8'>
			<ProductItem
				name='Apple iPhone 15 Pro Max'
				src='https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg'
				price='$1,399'
			/>
			<ProductItem
				name='Samsung Galaxy S23 Ultra'
				src='https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg'
				price='$1,299'
			/>
			<ProductItem
				name='Nothing Phone 2'
				src='https://fdn2.gsmarena.com/vv/pics/nothing/nothing-phone2-1_.jpg'
				price='$699'
			/>
			<ProductItem
				name='Google Pixel 8 Pro'
				src='https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg'
				price='$799'
			/>
		</div>
	)
}
export default Products
