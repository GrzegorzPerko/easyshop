interface IProductItem {
  category: number
  description: string
  id: number
  image: string
  name: string
  dataCreated: string
  price: number
  pricePromo: number
  promo: number
}

interface IFilterOption {
	value: string,
	label: string
}


export const productFilter = (filter: string, options: IFilterOption[],  products: IProductItem[] | undefined) => {
  let sortedProducts;
  if(products !== undefined) {
    console.log(filter)
    switch(filter) {
      case 'price_high': 
        sortedProducts = products.sort((a: IProductItem, b: IProductItem) => {
          return a.price - b.price
        })
      return sortedProducts

      case 'price_low':
          sortedProducts = products.sort((a: IProductItem, b: IProductItem) => {
            return a.price + b.price
          })
      return sortedProducts

      case 'default':
        sortedProducts = products
      return sortedProducts

      case 'news':
        sortedProducts = products.sort((a: IProductItem, b: IProductItem) => {
          const f = new Date(a.dataCreated).getTime()
          const s = new Date(b.dataCreated).getTime()
          return f - s
        })
      return sortedProducts

    }
  }
  return sortedProducts
}