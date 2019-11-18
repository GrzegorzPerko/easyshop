import * as React from 'react'

// styles
import * as S from './styled'

interface IProps {
  error: string,
  message: string
}

const ErrorStatus = ({error, message }: IProps) => {
  return (
    <>
      <S.ErrorWrapper>
        <S.ErrorHeadline>{error}</S.ErrorHeadline>
        <S.ErrorMessage>{message}</S.ErrorMessage>
      </S.ErrorWrapper>
    </>
  )
}

export default ErrorStatus