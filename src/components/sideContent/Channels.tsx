import { SimpleGrid } from "@chakra-ui/react";
import { Wrapper } from "./WrapperSide";
import { CardSmall } from "../card/Card";

const channels = [
  "Google",
  "Dribble",
  "Microsoft",
  "Behance",
  "Weather Channel",
  "Yahoo",
  "Microsoft",
  "Behance",
  "Weather Channel",
  "Yahoo",
];

export const Channel = () => {
  return (
    <Wrapper title="Channels" navigateTitle="Browse all channels">
      <SimpleGrid columns={2} spacing={5} justifyItems="center">
        {channels.map((title, i) => (
          <CardSmall key={i} title={title} />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
};
