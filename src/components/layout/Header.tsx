"use client";
import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { ModalProfile } from "../profile/Modal/ModalProfile";
import { SideBar } from "./SiderBar";
import { InputBar } from "./InputBar";

export const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex flexDir={{ base: "column", md: "row" }} position={"relative"}>
      <Flex
        align={"center"}
        justify={"space-between"}
        gap={{ base: 0, md: 2 }}
        width={"100%"}
      >
        <SideBar />
        <Flex flex={1} align={"center"} justify={"center"} textAlign={"center"}>
          <Box paddingLeft={{ base: 10, md: 0 }} paddingX={{ base: 0, md: 2 }}>
            <Text fontSize={{ base: 15, md: 30 }} fontWeight={"thin"}>
              <span style={{ fontWeight: "bold" }}>Social</span>Network
            </Text>
          </Box>
        </Flex>
        <Flex
          align={"center"}
          gap={{ base: 0, md: 2 }}
          width={{ base: "auto", md: "100%" }}
        >
          {!isMobile && <InputBar />}
          <ModalProfile />
        </Flex>
      </Flex>
      {isMobile && <InputBar />}
    </Flex>
  );
};
