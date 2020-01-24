export interface IProductItem {
	category: number
	description: string
	id: string
  dataCreated: string
	imagesUrl: string[]
	imageThumb?: string
	name: string
	price: number
	types: [
		{ 
			id: string
			label: boolean,
			amount: number
		}
	]
	pricePromo: number
	promo: number
}