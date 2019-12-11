import { IProductItem } from "../../../typings/product/product";

export const productFilter = (filter: string,  products: IProductItem[]) => {
  let sortedProducts: IProductItem[] = [];
  if(products.length > 0) {
    switch(filter) {
      case 'price_high': 
        sortedProducts = products.sort((a: IProductItem, b: IProductItem) => {
          return b.price - a.price 
        })
      return sortedProducts

      case 'price_low':
          sortedProducts = products.sort((a: IProductItem, b: IProductItem) => {
            return a.price - b.price
          })
      return sortedProducts

      case 'default':
        sortedProducts = products
      return sortedProducts

      case 'news':
        sortedProducts = products.sort((a: IProductItem, b: IProductItem) => {
          const f = new Date(a.dataCreated).getTime()
          const s = new Date(b.dataCreated).getTime()
          return  s - f
        })
      return sortedProducts
    }
  }
  return sortedProducts
}