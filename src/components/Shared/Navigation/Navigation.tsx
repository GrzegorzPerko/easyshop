import * as React from 'react'
import * as S from './styled'
import ItemNav from '../ItemLink/ItemLink'
import * as ROUTES from '../../../routes/routes'
interface INavMain {
  props: any,
  type?: string
}
const NavMain = ({ props, type }: INavMain) => {
    const routes = Object.entries(ROUTES)
    const headlineText = props.header

    return (
        type === 'header' ?
          <S.NavWrapper props="header">
              <S.NavList props="header">
                {
                  routes.map((route)=> {
                    const isMenu = route[1].menu.some((item) => (item === 'header'))
                    return isMenu === true && (
                      <> 
                        <S.NavItem props="header"> 
                          <ItemNav route={route[1]}/>  
                        </S.NavItem> 
                      </>
                    )
                  })
                }
              </S.NavList>
          </S.NavWrapper> : 
          <S.NavWrapper>
            <S.NavHeadline>{headlineText}</S.NavHeadline>
              <S.NavList>
                {
                  Object.entries(ROUTES).map((route)=> {
                    const isMenu = route[1].menu.some((item) => (item === 'footer'))
                    return isMenu === true && (
                      <> 
                      <S.NavItem >
                        <ItemNav route={route[1]}/>
                    </S.NavItem>
                    </>
                    )
                  })
                }
                </S.NavList>
          </S.NavWrapper>
    )
}
export default NavMain 