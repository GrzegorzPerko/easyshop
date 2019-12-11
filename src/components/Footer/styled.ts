import styled from 'styled-components'
export const FooterWrapper = styled.footer`
    background: #2c3740;
		color: #f4f3ee;
		padding: 30px 0;
    h2 {
        font-size: 18px;
        text-transform: uppercase;
				color: #fff;
    }
`
export const FooterContactBox = styled.div`
    max-width: 25%;
`
export const FooterSubmenu = styled.div`
  max-width: 25%;
`
export const FooterNewsLetter = styled.div`
  max-width: 50%;
`
export const Inner = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;

	& > nav {
		border-left: 1px solid #f4f3ee;
		padding-left: 30px;
	}
	& > section  {
		border-left: 1px solid #f4f3ee;
		padding-left: 30px;
		padding-right: 30px;
		&:first-child {
			border-left: 0 none;
			padding-left: 0;
		}
	}
`