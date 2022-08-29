import styled from "styled-components";
import Header from "../bricks/Header";
import video from "../../assets/slackvideo.mp4";
import googleIcon from "../../assets/google.png";

const Container = styled.section`
  width: 100%;
  background: #541554;
`;

const TextVideo = styled.div`
  width: 100%;
  color: white;
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 5rem 0rem 5rem 8.7rem;
  @media (max-width: 1535px){
    padding-left: 5rem; 
  }
  @media (max-width: 1024px){
    flex-direction: column;
    padding: 5rem 5rem;
    text-align: center;
  }
`;

const TextCotainer = styled.div`
  width: 75%;
  flex-grow: 0;
  @media (max-width: 1024px){
    width: 100%;
    text-align: center;
  }
`;

const H1 = styled.p`
  font-weight: 700;
  font-size: 75px;
  line-height: 6rem;
  color: white;
`;

const H4 = styled.h4`
  padding: 2rem 0rem 1rem;
`;

const Span = styled.span`
  color: #ecb22e;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  @media (max-width: 1380px){
    flex-direction: column;
  }
`;

const EmailButton = styled.button`
  color: #611f69;
  height: 3rem;
  background-color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 5px;
  text-transform: uppercase;
  flex-grow: 1;
  @media (max-width: 1380px){
    width: 100%;
  }
`;

const GoogleButton = styled.button`
  background-color: #4285f4;
  color: white;
  height: 3rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9rem;
  @media (max-width: 1380px){
    width: 100%;
  }
`;

const GoogleContainer = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: #fff;
`;

const IconGoogle = styled.img`
  width: 18px;
  height: 18px;
`;

const Video = styled.video`
width: 100%;
height: 100%;
margin-top: 5rem;
overflow:hidden;
flex-grow: 0;
@media (max-width: 1200px){
  width: 85%;
}
@media (max-width: 1024px){
  width: 100%;
  text-align: center;
}
`;

const First = () => {
  return (
    <Container>
      <Header />
      <TextVideo>
        <TextCotainer>
          <H1>Great teamwork starts with a digital HQ</H1>
          <H4>
            <Span>Slack is free to try</Span> for as long as you like
          </H4>
          <ButtonContainer>
            <EmailButton>Sign up with email address</EmailButton>
            <GoogleButton>
              <GoogleContainer>
                <IconGoogle src={googleIcon} alt="google" />
              </GoogleContainer>
              Sign up with google
              <div></div>
            </GoogleButton>
          </ButtonContainer>
        </TextCotainer>
        <Video src={video} autoPlay loop />
      </TextVideo>
    </Container>
  );
};

export default First;
