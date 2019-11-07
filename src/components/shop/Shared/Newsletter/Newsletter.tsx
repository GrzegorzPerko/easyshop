import * as React from 'react'
import * as S from './styled'
interface INewsLetterProps {
  props: any,
  type?: string
}
const NewsletterBox = ({props, type}: INewsLetterProps) => {
    return (
      <S.NewsletterWrapper>
        <S.NewsletterHeadline>{props.header}</S.NewsletterHeadline>
        <S.NewsletterText>{props.content}</S.NewsletterText>
        <S.NewsletterField>
          <S.NewsletterLabel>E-mail</S.NewsletterLabel>
          <S.NewsletterInput type="email" name="newsletterEmail"></S.NewsletterInput>
          <S.NewsletterButton>Zatwierdź</S.NewsletterButton>
        </S.NewsletterField>
      </S.NewsletterWrapper>
    )
}

export default NewsletterBox