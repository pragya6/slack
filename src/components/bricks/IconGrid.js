import styled from "styled-components";
import seek from "../../assets/seek.png";
import xero from "../../assets/xero.png";
import rea from "../../assets/rea.png";
import rmit from "../../assets/rmit.png";
import ibm from "../../assets/ibm.png";
import deliveroo from "../../assets/delivero.png";

const Stack = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  align-self: center;
`;

const IconStack = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(8, 1fr);
justify-content: center;
align-items: center
column-gap: 2rem;
`;

const Icons = styled.img`
display: block;
width: 80%;
place-self: center;
`;

const IconGrid = () => {
  return (
    <Stack>
      <IconStack>
        <div></div>
        <Icons src={seek} alt="seek" />
        <Icons style={{width: "50%", height: "55%"}} src={xero} alt="xero" />
        <Icons src={rea} alt="rea" />
        <Icons src={rmit} alt="rmit" />
        <Icons src={ibm} alt="ibm" />
        <Icons src={deliveroo} alt="deliveroo" />
        <div></div>
      </IconStack>
    </Stack>
  );
};

export default IconGrid;
