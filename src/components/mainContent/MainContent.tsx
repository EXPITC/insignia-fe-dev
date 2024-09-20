import { Button, Text, Flex } from "@chakra-ui/react";
import { WrapperContent } from "../sideContent/WrapperContent";
import { CardMain } from "../card/CardMain";
import { ReactNode, useEffect, useState } from "react";
import { SiGooglegemini } from "react-icons/si";

const channels = [
  "Google",
  "Dribble",
  "Microsoft",
  "Behance",
  "Weather Channel",
  "Yahoo",
];

export const MainContent = ({
  title,
  navigateTitle,
}: {
  title: string;
  navigateTitle: string | ReactNode;
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <WrapperContent title={title} navigateTitle={navigateTitle}>
      {hasMounted ? (
        <>
          <Flex
            w={{ base: "70%", md: "70%" }}
            flexGrow={2}
            flexFlow={"column"}
            position={"relative"}
            height={"630"}
            gap={2}
          >
            <Flex flex={1} height={{ base: "70%" }}>
              {channels.slice(0, 1).map((_title, i) => (
                <CardMain
                  key={i}
                  title1={"How to Improve your skills"}
                  title2={"Wastem Arshad"}
                  title3="44.219 views"
                  hightlight={true}
                />
              ))}
            </Flex>
            <Flex gap={2} height={{ base: "30%" }}>
              {channels.slice(1, 3).map((title, i) => (
                <CardMain
                  key={i}
                  title1={title}
                  title2={"ahmed"}
                  title3="44"
                  hightlight={false}
                />
              ))}
            </Flex>
          </Flex>
          <Flex flexDir={"column"} gap={2} w={{ base: "25%", md: "25%" }}>
            {channels.slice(3, 5).map((title, i) => (
              <CardMain
                key={i}
                title1={title}
                title2={"ahmed"}
                title3="44"
                hightlight={false}
              />
            ))}
            <Button
              h={"30%"}
              backgroundColor={"transparent"}
              variant="outline"
              _hover={{
                backgroundColor: "none",
              }}
              borderColor="Cream"
              color="cream"
            >
              <Button color="Cream" variant="link">
                <SiGooglegemini size={30} />
              </Button>
              <Text textAlign={"start"}>
                Show <br /> Your Work
              </Text>
            </Button>
          </Flex>
        </>
      ) : (
        <></>
      )}
    </WrapperContent>
  );
};
