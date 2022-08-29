import styled from "styled-components";
import EastIcon from "@mui/icons-material/East";

const Container = styled.section`
  height: 22rem;
  display: flex;
  margin: 3rem 0rem;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
  font-family: Slack-Larsseit, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma,
    Arial, sans-serif;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  padding: 0rem 2rem;
  flex-grow: 1;
  @media (max-width: 1365px){
    padding: 0rem 4rem;
  }
  @media (max-width: 1024px) {
    padding: 0rem 4rem;
    margin: 0rem 4rem;
  }
`;

const Heading = styled.h1`
  font-weight: bolder;
  font-size: 3rem;
  line-height: 3.3rem;
  color: black;
  margin: 1rem 0rem;
`;

const Text = styled.p`
  line-height: 1.4444rem;
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: -0.2px;
`;

const ReadMore = styled.a`
  color: #1264a3;
  text-decoration: none;
  font-size: 1.125rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    top: 1.5rem;
    background-color: #1264a3;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    visibility: visible;
    width: 100%;
  }
`;

const RightIcon = styled(EastIcon)`
  && {
    font-size: 2rem;
    padding-left: 1rem;
  }
`;

const Video = styled.video`
  width: 70%;
  height: 100%;
  @media (max-width: 1024px){
    width: 80%;
  }
`;

const VideoTexter = (props) => {
  const show = props.show;

  return (
    <Container>
      {!show && <Video autoPlay loop src={props.src}></Video>}
      <TextContainer>
        <Heading>{props.heading}</Heading>
        <Text>{props.text}</Text>
        <ReadMore>
          {props.read}
          <RightIcon />
        </ReadMore>
      </TextContainer>
      {show && <Video autoPlay loop src={props.src}></Video>}
    </Container>
  );
};

export default VideoTexter;
