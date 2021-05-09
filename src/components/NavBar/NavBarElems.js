import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const Nav = styled.nav`
    display: flex;
    width: 80vw;
    height:80px;
    border-radius: 50px;
    justify-content: center;
    margin: 20px auto;
    align-items: center;
`
export const NavLink = styled(Link)`
`
export const NavBtn = styled.nav`
 align-items:center;
 display:flex;
`
export const NavBtnLink = styled(Link)`
 displa:flex;
 align-items:center;
 border:none;
 outline:none;
 cursor:pointer;
 background:purple;
 text-decoration:none;
`

