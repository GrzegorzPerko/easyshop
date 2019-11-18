import { BrowserRouter as Router, Link } from "react-router-dom";
import * as React from 'react'

// styles
import * as S from './styled'


const ItemNav = (route: any) => {
  return (
    <S.Item>
      <Link to={route.route.url}>{route.route.name}</Link>
    </S.Item>
  )
}

export default ItemNav