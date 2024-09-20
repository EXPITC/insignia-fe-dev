import { Text, Button, Card, Flex, Icon } from "@chakra-ui/react";
import { BsChatLeftFill } from "react-icons/bs";

export const CardArticle = ({
  title,
  description,
  day,
  user,
}: {
  title: string;
  user: string;
  description: string;
  day: string;
}) => {
  return (
    <Button
      variant={"outline"}
      border="1px solid none;"
      _hover={{ border: "1px solid", borderColor: "Cream" }}
      borderRadius={1}
      borderColor={"Cream"}
      height={"80px"}
      width={"100%"}
    >
      <Flex width={"100%"} gap={3}>
        <Flex flex={1}>
          <Card
            backgroundColor={"Cream"}
            w={{ base: "50px", md: "70px" }}
            h={{ base: "50xp", md: "70px" }}
          />
        </Flex>
        <Flex flex={5}>
          <Flex flexDirection={"column"} justify={"space-between"}>
            <Flex gap={1}>
              <Text color="Cream" fontWeight={"bold"}>
                {user}
              </Text>
              <Text
                color="Cream"
                fontWeight={"light"}
                fontSize={{ base: 10, md: 12 }}
              >
                {title}
              </Text>
            </Flex>
            <Text color="Cream" fontSize={{ base: 10, md: 13 }}>
              {description}
            </Text>
            <Flex color="Cream">
              <Icon w={{ base: 5, md: 7 }}>
                <BsChatLeftFill />
              </Icon>
              <Text fontSize={{ base: 10, md: 10 }}>
                {day + " minutes ago"}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Button>
  );
};
