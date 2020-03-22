import styled from "styled-components/macro"
import EdiText from "react-editext"

export const AppWrapper = styled.section`
background-color: #ecdfc8;
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
@media(min-width: 768px) {
  margin: 20px 100px;
}
`

export const Wrapper = styled.div`
/* background-color: #fcf7bb; */
background-color: #ecdfc8;
font-family: 'Quicksand', sans-serif;
font-weight: 300;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media(min-width: 768px) {
  margin: 20px;
}
`

export const WelcomeBox = styled.section`
margin-bottom: 15px;
@media(min-width: 768px) {

  }
`

export const Image = styled.img`
width: 200px;
`

export const Header = styled.h1`
font-weight: 700;
margin: 20px 0 0 0;
color: #d63447;
`

export const InfoText = styled.p`
margin: 0 0 10px 0;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const Label = styled.label`
`

export const NewMessage = styled.textarea`
border: 2px solid #ecb390;
width: 260px;
height: 80px;
resize: none;
padding: 3px;
font-size: 14px;
margin: 5px 0;
@media(min-width: 768px) {
  width: 500px;
  font-size: 16px;
}
`

export const Button = styled.button`
border: none;
background-color: #ecb390;
padding: 4px 8px;
font-family: 'Quicksand', sans-serif;
font-weight: bold;
width: 120px;
border-radius: 4px;
margin: 0 0 10px 0;
@media(min-width: 768px) {
  font-size: 16px;
  width: 170px;
}
`

export const SmallButton = styled(Button)`
margin: 0 0 0 8px;
width: 65px;
@media(min-width: 768px) {
  width: 90px;
  margin-bottom: 20px;
}
`

export const PostedMessageCard = styled.div`
width: 260px;
background-color: #fcf8e8;
padding: 0 3px;
margin: 10px 0 10px 0;
border-radius: 10px;
@media(min-width: 768px) {
  font-size: 16px;
  width: 500px;
}
`

export const Message = styled.p`

`
export const TimeStamp = styled.p`
font-size: 12px;
color: grey;
margin: 0 0 0 10px;
`

export const Name = styled.p`
font-size: 16px;
color: black;
font-weight: bold;
margin: 10px 0 0 10px;
`

export const StyledEdiText = styled(EdiText)`
div[editext="view-container"], div[editext="edit-container"] {
    display: flex;
    flex-direction: column;
    margin: 10px 10px 20px 10px;
    align-items: flex-start;

}
button[editext="edit-button"] {
    display:none;
  }
`