import * as React from 'react'
import * as S from './styled'
import { useState, useEffect } from 'react'

// firebase
import { firebaseService } from '../../../services/firebase/firebase'

interface IProps {
  props: any,
  type?: string
}

const NewsletterBox = ({props, type}: IProps) => {
	const [email, setEmail] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent) => {
    const responseFirebase = firebaseService.postNewsletterEmail(email)
    console.log(responseFirebase)
    event.preventDefault();
  }
  return (
    <S.NewsletterWrapper>
      <S.NewsletterHeadline>{props.header}</S.NewsletterHeadline>
      <S.NewsletterText>{props.content}</S.NewsletterText>
      <S.NewsletterField onSubmit={handleSubmit}>
        <S.NewsletterLabel>E-mail</S.NewsletterLabel>
        <S.NewsletterInput onChange={handleChange} type="email" name="newsletterEmail" placeholder="ex. yourname@domain.com"></S.NewsletterInput>
        <S.NewsletterButton type="submit">Zatwierdź</S.NewsletterButton>
      </S.NewsletterField>
    </S.NewsletterWrapper>
  )
}

export default NewsletterBox