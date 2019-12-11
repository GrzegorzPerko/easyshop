import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, RouteComponentProps } from "react-router-dom";
import * as S from '../styled'

import * as ROUTES from '../routes/routes'
import { Provider } from 'react-redux'

// components
import NavHeader from './Header/Header'
import NavFooter from './Footer/Footer'

// pages
import Cart from './Pages/Cart/Cart'
import Account from './Pages/Account/Account'
import Promotion from './Pages/Promotion/Promotion'
import Sitemap from './Pages/Sitemap/Sitemap'
import HomePage from './Pages/Home/Home'
import ProductsPage from './Pages/Products/Products'
import ProductPage from './Pages/ProductPage/ProductPage'
import AboutusPage from './Pages/AboutUs/AboutUs'


// providers


import { configureStore } from './redux/store'

const store = configureStore()

export const Shop = () => {
  return (
    <>
      <S.Site>
          <Provider store={store as any}>
            <Router>
              <NavHeader />
              <S.Main>
                <Switch>
                  <Route path={ROUTES.CART.url} component={Cart}  />
                  <Route path={ROUTES.ACCOUNT.url} component={Account}  />
                  <Route path={ROUTES.PROMOTION.url} component={Promotion}  />
                  <Route path={ROUTES.SITEMAP.url} component={Sitemap}  />
                  <Route path={ROUTES.PRODUCTS.url} component={ProductsPage} />
                  <Route path={ROUTES.ABOUTUS.url} component={AboutusPage} />
                  <Route path={ROUTES.PRODUCTPAGE.url} component={ProductPage} />
                  <Route path={ROUTES.LANDING.url} component={HomePage} />
                  <Route path={ROUTES.SITEMAP.url} component={Sitemap} />
                </Switch>
              </S.Main>
              <NavFooter />
            </Router>
          </Provider>
      </S.Site>
      <S.GlobalStyle />
    </>
  )
}
