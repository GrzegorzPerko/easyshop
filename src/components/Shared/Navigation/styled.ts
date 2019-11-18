import styled from 'styled-components'

interface INavType {
    props?: string
}

export const NavWrapper = styled.nav<INavType>`
    display: block;
    border-bottom: ${props => (props.props !== 'header' ? '0 none' : '1px solid #8e8d8a')};
`
export const NavList = styled.ul<INavType>`
    display: ${props => (props.props !== 'header' ? 'block' : 'flex')};
    justify-content: center;
    list-style: none;
    border-top: ${props => (props.props !== 'header' ? '0 none' : '1px solid #8e8d8a')};
    margin: 0;
    padding: 0;
`
export const NavItem = styled.li<INavType>`
    display: block;
    a {
        display: block;
        padding: ${props => (props.props !== 'header' ? '0' : '18px 30px')};
        font-size: ${props => (props.props !== 'header' ? '13px' : '18px')};
        text-transform: ${props => (props.props !== 'header' ? 'none' : 'uppercase')};
        color: #8e8d8a;
        text-decoration: none;
        font-weight: ${props => (props.props !== 'header' ? 'normal' : 'bold')};
        transition: .3s ease-in-out all;
        &:hover {
            color: #1b1b1b;
        }
    }
`
export const NavHeadline = styled.h3`
    display: block;
`