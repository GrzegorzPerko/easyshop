import styled from 'styled-components'

interface IDropdown {
    visible: boolean
}
export const WrapperCart = styled.div`
    position: absolute;
    right: 0px;
    top: 135px;
    text-align: left;
    color: #1b1b1b;
    display: flex;
    vertical-align: middle;
`

export const IconCart = styled.i`
    width: 24px;
    color: #1b1b1b;
    margin-right: 10px;
`

export const TitleCart = styled.span`
    display: block;
    text-transform:uppercase;
    font-weight: bold;
    color: #8e8d8a;
`
export const LinkCart = styled.a`
    display: block;
    text-transform:uppercase;
    font-weight: bold;
    color: #8e8d8a;
`
export const DropdownCart = styled.div<IDropdown>`
    display: ${props => (props.visible === true ? 'block': 'none')};
    padding: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    background: #fff;
    position: absolute;
    width: 300px;
    right: 0;
    top: 25px;
    z-index: 4;
`
export const DropdownCloseBtnCart = styled.button`
    font-weight: bold;
    color: #8e8d8a;
    padding: 0;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    float: right;
    border: 3px solid #8e8d8a;
    background: none;
`
export const DropdownTitle = styled.strong`
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    float: left;
`
export const DropdownList = styled.ul`
    list-style: none;
    padding: 10px 0 4px;
    margin: 0;
    background: #f4f3ee;
    clear: both;
    max-height: 250px;
    overflow-y: auto;
`
export const DropdownListItem = styled.li`
    border-top: 1px solid #8e8d8a;
    font-weight: bold;
    color: #8e8d8a;
    font-size: 15px;
    text-transform: uppercase;
    display: block;
    padding: 0 10px 6px;
    &:first-child {
        border-top: 0 none;
    }
`
export const DropdownDoneButton = styled.button`
	background: #e85b50;
    color: #fff;
    border: 0;
    padding: 0 20px;
    text-transform: uppercase;
    margin-top: 12px;
    height: 40px;
    float: right;
    clear: both;
`