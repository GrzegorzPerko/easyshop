import * as React from 'react'
import * as S from './styled'
import { useState } from 'react'

const CounterWithButtons = () => {
  const [ value, setValue] = useState(1)
  const handleChangeValue = (increase: boolean) => {
    increase? setValue(value + 1) : setValue(value - 1)
  }
  return (
    <>
      <S.Wrapper>
        <S.Title>Ilość:</S.Title>
        <S.Button onClick={() => {handleChangeValue(true)}}>+</S.Button>
        <S.Input defaultValue={'1'} value={value} />
        <S.Button onClick={() => {handleChangeValue(false)}}>-</S.Button>
      </S.Wrapper>
    </>
  )
}

export default CounterWithButtons;