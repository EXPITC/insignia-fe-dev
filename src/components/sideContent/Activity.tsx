import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { Wrapper } from "./WrapperSide";
import { RxSlash } from "react-icons/rx";
import { CardArticle } from "../card/CardArticle";

const article = [
  "Google",
  "Dribble",
  "Microsoft",
  "Behance",
  "Weather Channel",
  "Yahoo",
];

export const Activity = () => {
  return (
    <Wrapper
      title="Activity"
      navigateTitle={
        <Flex align="center">
          <Button
            color={"cream"}
            variant={"link"}
            fontSize={{ base: 8, md: 10 }}
            fontWeight={"light"}
          >
            View timeline
          </Button>
          <Box display={"default"}>
            <RxSlash />
          </Box>
          <Button
            color={"cream"}
            variant={"link"}
            fontSize={{ base: 8, md: 10 }}
            fontWeight={"light"}
          >
            Filter activities
          </Button>
        </Flex>
      }
    >
      <SimpleGrid columns={1} spacing={5} justifyItems="center">
        {article.map((title, i) => (
          <CardArticle
            key={i}
            title={title}
            user={"ahmed"}
            description="hello"
            day="44"
          />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
};
