import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
    width:80vw;
    margin:0 auto;
    min-height:400px;
    display:flex;
    align-items:center;
    padding-left:4rem;
    border-radius:10px;
    position:relative;
    overflow:hidden;
`

export const AppContent = () => {
    return (
        <Card className="card">
            <h1>New <br/>Design <br/> Specifications...</h1>
            <img src = "https://ak.picdn.net/shutterstock/videos/9524807/thumb/8.jpg"/>
        </Card>
    )
}
