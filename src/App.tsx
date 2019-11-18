import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, RouteComponentProps } from "react-router-dom";
import * as S from './styled'
import * as ROUTES from './routes/routes'
// components
import NavHeader from './components/Header/Header'
import NavFooter from './components/Footer/Footer'
// pages
import HomePage from './components/Pages/Home/Home'
import ProductsPage from './components/Pages/Products/Products'
import ProductPage from './components/Pages/ProductPage/ProductPage'
import LastestPage from './components/Pages/Lastest/Lastest'
import AboutusPage from './components/Pages/AboutUs/AboutUs'


interface IMatchProps {
  name: string;
}

const App = () => {
  return (
    <>
      <S.Site>
        <Router>
          <NavHeader />
          <Switch>
            <Route path={ROUTES.PRODUCTS.url} component={ProductsPage} />
            <Route path={ROUTES.LASTEST.url} component={LastestPage} />
            <Route path={ROUTES.ABOUTUS.url} component={AboutusPage} />
            <Route path={ROUTES.PRODUCTPAGE.url} component={ProductPage} />
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
