import styled from "styled-components";

export const Conteiner = styled.div`
    margin: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ProductsConteiner = styled.div`
    border: solid 2px black;
    border-radius: 10px;
    margin:10px;
    width: 250px;
    text-align: center;
    background-color: white;

    img{
        width: 150px;
    }

    button{
        background-color: wheat;
        border: solid 2px black;
        border-radius: 10px;
    }
`


export const DiscriptionConteiner = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px;
    button{
        width: 60px;
        height: 50px;
        margin-left: 5px;
    }
`
export const Diplay = styled.div`
    background-color: wheat;
    margin: 30px;
    .total{
        text-align: end;
    }
    .title{
        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
            margin: 10px 20px;
        }
        h3{
            margin: 0 20px;
        }
    }
`