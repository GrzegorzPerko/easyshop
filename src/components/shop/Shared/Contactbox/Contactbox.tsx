import * as React from 'react'
import * as S from './styled'
import ReactHtmlParser from 'react-html-parser';

interface INewsLetterProps {
  props: any,
  type?: string
}
const Contactbox = ({props, type}: INewsLetterProps) => {
    return (
      <>
        <S.ContactboxWrapper>
          <S.ContactboxHeadline>{props.header}</S.ContactboxHeadline>
          <S.ContactboxText>{ReactHtmlParser(props.content)}</S.ContactboxText>
        </S.ContactboxWrapper>
      </>
    )
}

export default Contactbox