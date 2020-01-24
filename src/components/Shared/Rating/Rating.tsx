import * as React from 'react'
import * as S from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Regular from '@fortawesome/free-regular-svg-icons'
import * as Solid from '@fortawesome/free-solid-svg-icons'

interface IProps {
  rate: number
}


const Rating = ({ rate }: IProps) => {
  const ratingLimit = [1,2,3,4,5]

  return (
    <>
    <S.RatingList>
      {
        ratingLimit.map((value)=> (
          <S.RatingItem>
            <S.RatingLink data-value={value}>
              <FontAwesomeIcon icon={rate < value ? Regular.faStar : Solid.faStar} />
            </S.RatingLink>
          </S.RatingItem>
        ))
      }
    </S.RatingList>
    </>
  )
}

export default Rating;