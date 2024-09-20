import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { ReactNode } from "react";

export const WrapperContent = ({
  title,
  navigateTitle,
  children,
}: {
  title: string;
  navigateTitle: string | ReactNode;
  children: ReactNode;
}) => {
  return (
    <Box width={"100%"}>
      <Flex justify="space-between" w={{ base: "70%", md: "74%" }}>
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
      <Flex gap={2}>{children}</Flex>
    </Box>
  );
};
