import { Button, H2, SingleColumnLayout } from "@daohaus/ui";
import { StyledButton } from "../components/customDesigns/StyledButton";

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>A purpose-driven governance stack for your Arbitrum community.</H2>
      <StyledButton className="poopin">POOPIN</StyledButton>
    </SingleColumnLayout>
  );
};
