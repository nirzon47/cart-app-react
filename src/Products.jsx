import ProductItem from './ProductItem'
import productsList from './productsList.json'

const Products = () => {
	return (
		<div className='flex flex-col gap-8'>
			{productsList.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</div>
	)
}
export default Products
