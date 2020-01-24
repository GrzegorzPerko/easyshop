import { IProductItem } from "../../../typings/product/product";

export const filterProduct = (filter: string,  products: IProductItem[]) => {
  if(products.length > 0) {
    switch(filter) {
      case 'price_high': 
        return products.sort((a: IProductItem, b: IProductItem) => {
          return b.price - a.price 
        })

      case 'price_low':
        return  products.sort((a: IProductItem, b: IProductItem) => {
            return a.price - b.price
          })

      case 'default':
        return products
      case 'news':
        return  products.sort((a: IProductItem, b: IProductItem) => {
          const f = new Date(a.dataCreated).getTime()
          const s = new Date(b.dataCreated).getTime()
          return  s - f
        })
    }
  }
  return products
}

export const getImageProduct = () => {
  
} 