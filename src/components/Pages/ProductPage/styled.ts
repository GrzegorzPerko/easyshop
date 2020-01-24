import styled from 'styled-components'
import SelectReact from 'react-select'

export const ProductSection = styled.section`
  position: relative;
  margin: 0 0 20px;
	overflow: hidden;
`

export const ProductHeader = styled.header`
	border-bottom: 1px solid #1b1b1b;
	margin-bottom: 30px;
	overflow: hidden;
	padding-bottom: 12px;
`

export const ProductHeadline = styled.h1`
	text-transform: uppercase;
	font-size: 50px;
	margin-bottom: 0;
	line-height: 60px;
`

export const ProductFigureImage = styled.figure`
	float: left;
	width: 55%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
	background: #FFF;
	margin: 0 0 20px;
`

export const ProductImage = styled.img`
	max-width: 100%;
`

export const ProductCaptionImage = styled.figcaption`
`

export const ProductPrice = styled.div`
	strong {
		font-size: 24px;
	}

	del {
		font-size: 15px;
		font-weight: normal;
		padding-left: 8px;
	}
`

export const ProductAvaiable = styled.strong`
	color: green;
	display: block;
	margin-bottom: 10px;
`

export const Select = styled(SelectReact)`
	margin-bottom: 20px;
`

export const ProductContent = styled.div`
	float: right;
	width: 40%;
`

export const ProductButtonAdd = styled.button`
	width: 200px;
	height: 60px;
	font-size: 18px;
	text-transform: uppercase;
	color: #fff;
	font-weight: bold;
	background: #e85b50;
	border: 0 none;
`

export const ProductMoreOptionLink = styled.a`
`

export const ProductDescription = styled.article`
	clear: both;
`

export const ProductAmount = styled.input`
`
