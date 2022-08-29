import styled from "styled-components";
import team from "../../assets/team.mp4";
import EastIcon from "@mui/icons-material/East";

const Container = styled.section`
  width: 100%;
  background-color: white;
`;

const TeamContainer = styled.section`
  width: 70%;
  margin: 7% 15%;
  text-align: center;
`;

const Heading = styled.h1`
  width: 100%;
  color: black;
  font-weight: bold;
  letter-spacing: 0.001rem;
`;

const Descrip = styled.p`
  width: 100%;
  color: black;
  font-weight: 500;
  font-size: 1.22rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin: 2.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FilledButton = styled.button`
  height: 3rem;
  padding: 0rem 1.5rem;
  background-color: #611f69;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
  border-radius: 4px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const OutlinedButton = styled.button`
  height: 3rem;
  padding: 0rem 1.5rem;
  background-color: transparent;
  color: #611f69;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
  border: 2px #611f69 solid;
  border-radius: 4px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const PercentageContainer = styled.div`
  width: 100%;
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  justify-self: center;
  flex-basis: 25%;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.001rem;
  @media (max-width: 900px) {
    place-self: center;
    text-align: center;
    width: 45%;
  }
`;

const Span = styled.span`
  color: #611f69;
  display: block;
  font-size: 3.5rem;
  font-weight: bold;
`;

const VideoContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const VideoPlayer = styled.div`
  align-self: center;
  flex-basis: 50%;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 0px 25px 25px 0px !important;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Italics = styled.div`
  text-align: left;
  flex-basis: 45%;
  flex-grow: 0;
  flex-shrink: 0;
  padding-right: 4rem;
  @media (max-width: 1100px) {
    width: 100%;
    padding: 2rem;
  }
`;

const Italic = styled.p`
  font-style: italic;
  font-size: 1.5rem;
`;

const Mark = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 0.4rem;
`;

const Post = styled.p`
  font-size: 0.9rem;
  line-height: 0.4rem;
`;

const Read = styled.p`
  color: #1264a3;
  font-size: 1.125rem;
`;

const RightIcon = styled(EastIcon)`
  && {
    font-size: 2rem;
    padding-left: 1rem;
  }
`;

const FootText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #696969;
  margin: 3rem 2rem;
`;

const Third = () => {
  return (
    <Container>
      <TeamContainer>
        <Heading>Teams large and small rely on Slack</Heading>
        <Descrip>
          Slack securely scales up to support collaboration at the world’s
          biggest companies.
        </Descrip>
        <ButtonContainer>
          <FilledButton>Meet Slack for enterprise</FilledButton>
          <OutlinedButton>Talk to sales</OutlinedButton>
        </ButtonContainer>
        <PercentageContainer>
          <Text>
            <Span>85%</Span> of users say Slack has improved communication*
          </Text>
          <Text>
            <Span>86%</Span> feel their ability to work remotely has improved*
          </Text>
          <Text>
            <Span>88%</Span> feel more connected to their teams*
          </Text>
        </PercentageContainer>
      </TeamContainer>
      <VideoContainer>
        <VideoPlayer>
          <Video autoPlay={true} loop={true} playsInline>
            <source src={team} type="video/mp4" />
          </Video>
        </VideoPlayer>
        <Italics>
          <Italic>
            ‘We were able to create a large virtual network of employees that
            can communicate as though they are together. There was a lot of
            disruption in terms of where we worked, but in terms of how we
            worked – very little disruption.’
          </Italic>
          <Mark>Mark Smith</Mark>
          <Post>Senior Technical Product Manager, T-Mobile</Post>
          <Read>
            See more customer stories <RightIcon />
          </Read>
        </Italics>
      </VideoContainer>
      <FootText>
        * Weighted average. Based on 2,707 survey responses from weekly Slack
        users in the US, UK, Australia and Canada with a ± 2% margin of error at
        95% CI (December 2021).
      </FootText>
    </Container>
  );
};

export default Third;
