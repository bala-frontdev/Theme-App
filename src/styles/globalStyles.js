import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
body{
    background-color:${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
}
.nav-bar{
    background-color:${({ theme }) => theme.navbar};
    display: flex;
    width: 80vw;
    height:80px;
    border-radius: 50px;
    justify-content: space-around;
    margin: 20px auto;
    align-items: center;
    border:2px solid ${({ theme }) => theme.borderTheme};
}
.nav-bar li{
    list-style:none;
}
.nav-bar li a{
    font-size:1.2rem;
    text-decoration:none;
    padding:2rem;
    color:${({ theme }) => theme.navColor};
}
.card{
    border:2px solid ${({ theme }) => theme.borderTheme};
}
.card h1{
    font-size: 5rem;
    color: ${({ theme }) => theme.cardColor};
}
.card img{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: calc( 100% - 50%);
    z-index:-1;
}
.btn-theme{
    min-width: 300px;
    padding: 1em;
    outline: none;
    border: none;
    font-size: 1.2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    margin: 40px auto;
    color:${({ theme }) => theme.navColor};
    background-color:${({ theme }) => theme.body};
    border:2px solid ${({ theme }) => theme.borderTheme};
}
`;

export const lightTheme = {
    body:'#fff',
    text:'green',
    navbar:'transparent',
    borderTheme:'#000',
    navColor:'#000',
    cardColor:'#000'
};

export const darkTheme = {
    body:'#000',
    text:'red',
    navbar:'#000',
    borderTheme:'#fff',
    navColor:'#fff',
    cardColor:'#fff'
};