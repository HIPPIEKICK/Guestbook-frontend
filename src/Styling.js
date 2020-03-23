import styled from "styled-components/macro"
import EdiText from "react-editext"

export const AppWrapper = styled.section`
/* background-color: #ecdfc8; */

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
/* background-color: #ecdfc8; */
/* background-color: #dee3e2; */
border-radius: 10px;
padding: 10px;
/* opacity: 0.5; */
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
/* font-weight: 700;
font-family: 'Quicksand', sans-serif; */
font-family: 'Montserrat', sans-serif;
font-size: 30px;
margin: 20px;
/* color: #d63447; */
/* color: #18314F; */
color: white;
letter-spacing: 5px;
text-transform: uppercase;
`

export const InfoText = styled.p`
/* margin: 0 0 10px 0; */
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 280px;
background-color: #fcf8e8;
padding: 8px;
margin: 5px 0;
border-radius: 10px;
/* padding: 10px; */
`

export const Label = styled.label`
`

export const NewMessage = styled.textarea`
border: 2px solid #ecdfc8;
width: 255px;
height: 80px;
resize: none;
padding: 5px;
font-size: 14px;
margin: 5px 0;
@media(min-width: 768px) {
  width: 500px;
  font-size: 16px;
}
`

export const Button = styled.button`
border: none;
/* background-color: #ecb390; */
background-color: #ecdfc8;
color: #283E51;
padding: 4px 8px;
font-family: 'Quicksand', sans-serif;
font-weight: bold;
width: 120px;
border-radius: 4px;
margin: 0;
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

export const Line = styled.hr`
border: 1px solid #ecdfc8;
margin: 10px 10px 0 10px;
`

export const BottomLine = styled(Line)`
margin: 0 10px 10px 10px;
`

export const LikesWrap = styled.div`
display: flex;
margin-left: 3px;
font-size: 14px;
`

export const LikeButton = styled.button`
background-color: transparent;
border: none;
width: 30px;
font-size: 16px;
margin-right: 2px;
`

export const LikeHeart = styled.img`
width: 20px;

`

export const EditButtons = styled.div`

`

export const ButtonGroup = styled.div`
display: flex;
justify-content: space-between;
margin-right: 10px;
`

export const PostedMessageCard = styled.div`

/* width: 260px; */
width: 280px;
background-color: #fcf8e8;
padding: 8px;
margin: 5px 0;
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
color: #283E51;
font-weight: bold;
margin: 10px 0 0 10px;
`

export const StyledEdiText = styled(EdiText)`
div[editext="view-container"], div[editext="edit-container"] {
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: flex-start;
    font-size: 14px;
    font-weight: 300;
    color: #283E51;
}
button[editext="edit-button"] {
    display:none;
  }
`