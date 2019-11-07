import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as S from './styled'
import * as ROUTES from './routes/routes'
// components
import NavHeader from './components/shop/Header/Header'
import NavFooter from './components/shop/Footer/Footer'
// pages
import HomePage from './components/shop/Pages/Home/Home'
import ProductPage from './components/shop/Pages/Products/Products'
import LastestPage from './components/shop/Pages/Lastest/Lastest'
import AboutusPage from './components/shop/Pages/AboutUs/AboutUs'


const App = () => {
  return (
    <>
      <S.Site>
        <Router>
          <NavHeader />
          <Switch>
            <Route path={ROUTES.PRODUCTS.url} component={ProductPage} />
            <Route path={ROUTES.LASTEST.url} component={LastestPage} />
            <Route path={ROUTES.ABOUTUS.url} component={AboutusPage} />
            <Route path={ROUTES.LANDING.url} component={HomePage} />
          </Switch>
          <NavFooter />
        </Router>
      </S.Site>
      <S.GlobalStyle />
    </>
  )
}
export default App;
