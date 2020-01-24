import firebase from 'firebase'

interface IFooterItem {
  name: string
  header: string
  content: string
}

const getProducts = () => {
  const products = firebase.database().ref("products")
  return products.once('value').then((snapshot:any) => {
    return snapshot.val()
  });
}
const getFooterItems = () => {
  const settings = firebase.database().ref("footerSettings")
  return settings.once('value').then((snapshot:any) => {
    return snapshot.val().items as IFooterItem[]
  });
}

const postNewsletterEmail = (email: string) => {
  const newsletter = firebase.database().ref('newsletter')
  newsletter.push({ email }).then(data => data).catch(error => error)
}          

const getImageProduct = (path: string) => {
	const image = firebase.storage().ref('ProductImages').child(path)
  return image
}

                                                      
export const firebaseService = {
  getProducts,
  getFooterItems,
  getImageProduct,
  postNewsletterEmail
}