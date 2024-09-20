import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutContent = ({
  content,
  sideContent,
}: {
  content: ReactNode;
  sideContent: ReactNode;
}) => {
  return (
    <Flex gap={5}>
      <Flex flex={4} gap={20} flexDir={"column"}>
        {content}
      </Flex>
      <Flex flex={2} gap={20} flexDir={"column"}>
        {sideContent}
      </Flex>
    </Flex>
  );
};
