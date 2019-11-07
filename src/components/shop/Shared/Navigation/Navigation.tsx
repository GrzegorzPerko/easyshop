import * as React from 'react'
import * as S from './styled'
import ItemNav from '../ItemLink/ItemLink'
import * as ROUTES from '../../../../routes/routes'
interface INavMain {
  props: any,
  type?: string
}
const NavMain = ({ props, type }: INavMain) => {
    return (
        type === 'header' ?
          <S.NavWrapper props="header">
              <S.NavList props="header">
                {
                  Object.entries(ROUTES).map((route)=> (
                    <S.NavItem props="header">
                        <ItemNav route={route[1]}/>
                    </S.NavItem>
                  ))
                }
              </S.NavList>
          </S.NavWrapper> : 
          <S.NavWrapper>
            <S.NavHeadline>{props.header}</S.NavHeadline>
              <S.NavList>
                {
                  Object.entries(ROUTES).map((route)=> (
                    <S.NavItem >
                        <ItemNav route={route[1]}/>
                    </S.NavItem>
                  ))
                }
                </S.NavList>
          </S.NavWrapper>
    )
}
export default NavMain 