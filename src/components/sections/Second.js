import styled from "styled-components";
import IconGrid from "../bricks/IconGrid";
import VideoTexter from "../reusables/VideoTexter";
import bring from "../../assets/bring.mp4";
import choose from "../../assets/choose.mp4";
import move from "../../assets/move.mp4";

const Container = styled.section`
  width: 100%;
  background-color: #f4ede4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerFluid = styled.div`
  width: 80%;
  @media (max-width: 1365px) {
    width: 100%;
  }
`;

const Heading = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
  margin-top: 3rem;
`;

const VideoContainer = styled.section`
  width: 100%;
`;

const Second = () => {

  const bringData = {
    heading: "Bring your team together",
    text: "At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.",
    read: "Learn more about channels",
  };

  const chooseData = {
    heading: "Choose how you want to work",
    text: "In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.",
    read: "Learn more about flexible communication",
  };

  const moveData = {
    heading: "Move faster with your tools in one place",
    text: "With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.",
    read: "Learn more about the Slack platform",
  };

  return (
    <Container>
      <ContainerFluid>
        <Heading>TRUSTED BY COMPANIES ALL OVER THE WORLD</Heading>
        <IconGrid />
        <VideoContainer>
          <VideoTexter
            src={bring}
            heading={bringData.heading}
            text={bringData.text}
            read={bringData.read}
          />
          <VideoTexter
            show="true"
            src={choose}
            heading={chooseData.heading}
            text={chooseData.text}
            read={chooseData.read}
          />
          <VideoTexter
            src={move}
            heading={moveData.heading}
            text={moveData.text}
            read={moveData.read}
          />
        </VideoContainer>
      </ContainerFluid>
    </Container>
  );
};

export default Second;
