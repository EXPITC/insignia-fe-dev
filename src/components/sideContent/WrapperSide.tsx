import { Divider, Flex, Text, Box, Button } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Wrapper = ({
  title,
  navigateTitle,
  children,
}: {
  title: string;
  navigateTitle: string | ReactNode;
  children: ReactNode;
}) => {
  return (
    <Box>
      <Flex justify="space-between">
        <Text fontSize={{ base: 12, md: "20px" }} fontWeight={"bold"}>
          {title}
        </Text>
        {typeof navigateTitle === "string" ? (
          <Button
            color={"cream"}
            variant={"link"}
            fontSize={{ base: 8, md: 10 }}
            fontWeight={"light"}
          >
            {navigateTitle}
          </Button>
        ) : (
          navigateTitle
        )}
      </Flex>
      <Divider borderWidth={2} marginBottom={5} borderColor={"cream"} />
      <Box>{children}</Box>
      <Divider borderWidth={1} marginTop={5} borderColor={"cream"} />
    </Box>
  );
};
