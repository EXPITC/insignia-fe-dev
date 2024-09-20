"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RxSlash } from "react-icons/rx";

const Menu = [
  "Videos",
  "People",
  "Documents",
  "Event",
  "Communities",
  "Favorites",
  "Channels",
];

export const Breadcrumb = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const BtnMenu = ({ item, i }: { item: string; i: number }) => (
    <>
      {" "}
      <Button key={i} variant={"link"} color="cream">
        {item}
      </Button>{" "}
      <Box key={i} display={i === 6 ? "none" : "default"}>
        <RxSlash />
      </Box>
    </>
  );

  return (
    <Box display={isMobile ? "none" : "default"}>
      <Flex gap={5} align={"center"}>
        {Menu.map((item, i) => (
          <BtnMenu key={i} item={item} i={i} />
        ))}
      </Flex>
      <Divider borderWidth={1} marginY={3} borderColor={"cream"} />
    </Box>
  );
};
