import styled from "styled-components/macro"
import EdiText from "react-editext"


//App and login-page
export const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 768px) {
    margin: 20px 100px;
  }
`

export const Header = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  margin: 20px;
  color: white;
  letter-spacing: 5px;
  text-transform: uppercase;
`

export const Wrapper = styled.div`
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
  width: 230px;
  background-color: #fcf8e8;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 768px) {
    width: 500px;
  }
`

export const InfoText = styled.p`
  color: #283E51;
`

export const Footer = styled.footer`
  color: white;
  width: 230px;
  margin-top: 20px;
  font-size: 14px;
  @media(min-width: 768px) {
    width: 500px;
  }
`

//Guestbook - NewMessageForm
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  background-color: #fcf8e8;
  padding: 8px 8px 12px 8px;
  margin: 5px 0;
  border-radius: 10px;
  @media(min-width: 768px) {
    width: 500px;
  }
`

export const Label = styled.label`
`

export const NewMessage = styled.textarea`
  border: 2px solid #ecdfc8;
  border-radius: 3px;
  width: 255px;
  height: 80px;
  resize: none;
  padding: 5px;
  font-size: 14px;
  margin: 5px 0;
  @media(min-width: 768px) {
    width: 475px;
    font-size: 16px;
  }
`

export const Button = styled.button`
  border: none;
  background-color: #ecdfc8;
  color: #283E51;
  padding: 4px 8px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  width: 120px;
  border-radius: 4px;
  margin: 0 8px 0 0;
  align-self: flex-end;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  transition: 0.2s;
  &:hover {
    background-color: #d5c9b5;
  }
  @media(min-width: 768px) {
    font-size: 16px;
    width: 170px;
  }
`

//Guestbook - Searchfield
export const SearchForm = styled(Form)`
  flex-direction: row;
`

export const Input = styled.input`
  border: 2px solid #ecdfc8;
  border-radius: 3px;
  background-color: white;
  height: 25px;
  width: 95%;
  margin: 4px 6px;
  font-size: 14px;
  padding: 5px;
  @media(min-width: 768px) {
    height: 30px;
    font-size: 16px;
  }
`

export const SearchButton = styled.button`
font-size: 20px;
border: none;
background-color: transparent;
`

//Guestbook - PostedMessage

export const PostedMessageCard = styled.div`
  width: 280px;
  background-color: #fcf8e8;
  padding: 8px 8px 12px 8px;
  margin: 5px 0;
  border-radius: 10px;
  @media(min-width: 768px) {
    font-size: 16px;
    width: 500px;
  }
`

export const Name = styled.p`
  font-size: 16px;
  color: #283E51;
  font-weight: bold;
  margin: 10px 0 0 10px;
  @media(min-width: 768px) {
    font-size: 18px;
  }
`

export const TimeStamp = styled.p`
  font-size: 12px;
  color: grey;
  margin: 0 0 0 10px;
  @media(min-width: 768px) {
    font-size: 14px;
  }
`

export const Line = styled.hr`
  border: 1px solid #ecdfc8;
  margin: 10px 10px 0 10px;
`

export const BottomLine = styled(Line)`
  margin: 0 10px 10px 10px;
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
    @media(min-width: 768px) {
    font-size: 16px;
  }
  }
  textarea {
    border: 2px solid #ecdfc8;
    width: 245px;
    height: 80px;
    resize: none;
    padding: 5px;
    font-size: 14px;
    margin: 5px 0;
    @media(min-width: 768px) {
    width: 465px;
  }
  }
  button[editext="edit-button"] {
    display:none;
  }
  button[editext="save-button"], button[editext="cancel-button"] {
    border: none;
    background-color: #ecdfc8;
    color: #283E51;
    padding: 4px 8px;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    width: 50px;
    border-radius: 4px;
    margin: 0 8px 0 0;
    @media(min-width: 768px) {
    font-size: 16px;
    width: 65px;
  }
  }
`

//Guestbook - PostedMessage - Buttons
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`

export const EditButtons = styled.div`
`

export const SmallButton = styled(Button)`
  margin: 0 0 0 8px;
  width: 65px;
  @media(min-width: 768px) {
    width: 90px;
  }
`

//Guestbook - PostedMessage - Buttons - Likes
export const LikesWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  font-size: 14px;
  @media(min-width: 768px) {
    font-size: 16px;
  }
`

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  font-size: 16px;
  padding: 6px 0 0 4px;
  cursor: pointer;
  @media(min-width: 768px) {
    margin-right: 8px;
    padding: 8px 0 0 8px;
  }
`

export const LikeHeart = styled.div`
  svg {
    width: 20px;
  }
  .beige-heart:hover {
    fill: #d63347;
  }
  .red-heart:hover {
    fill: #ecdfc8;
  }
  @media(min-width: 768px) {
    svg {
      width: 25px;
  }
  }
`

//Guestbook - After search
export const NextButton = styled(Button)`
  background-color: #283E51;
  color: white;
  &:hover {
    background-color: #283E51;
  }
`
export const InfoMessage = styled.p`
  color: white;
`