import styled from "styled-components/macro"

export const Wrapper = styled.section`
background-color: wheat;
margin: 0;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`

export const Header = styled.h1`
`

export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const Label = styled.label`
`

export const NewMessage = styled.textarea`
border: 2px solid black;
width: 350px;
height: 80px;
resize: none;
padding: 3px;
`

export const Button = styled.button`

`

export const PostedMessageCard = styled.div`
width: 350px;
background-color: white;
padding: 5px;
margin: 10px 0 10px 0;
`

export const Message = styled.p`

`
export const TimeStamp = styled.p`
font-size: 12px;
color: grey;
`