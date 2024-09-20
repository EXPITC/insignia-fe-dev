import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";

const sns = [
  <FaSquareFacebook key={1} size={40} />,
  <FaTwitterSquare key={2} size={40} />,
  <FaLinkedin key={3} size={40} />,
];

const menuList = [
  "About",
  "For Business",
  "Suggestions",
  "Help & FAQs",
  "Contact Us",
  "Pricing",
];

export const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      align={{ base: "center", md: "start" }}
      justify={"space-between"}
      flexDir={"column"}
      gap={3}
    >
      <Divider
        marginY={2}
        marginTop={5}
        borderWidth={1}
        borderColor={"cream"}
      />
      <Flex gap={{ base: 2, md: 5 }}>
        {sns.map((socialMedia, i) => (
          <Button color="cream" key={i} variant={"link"} width={50}>
            {socialMedia}
          </Button>
        ))}
      </Flex>
      <Flex flexDir={{ base: "column", md: "row" }} gap={{ base: 2, md: 5 }}>
        <Flex
          gap={{ base: 0, md: 5 }}
          justifyContent={"space-evenly"}
          align={{ base: "center" }}
          justify={{ base: "center", md: "start" }}
          minW={{ base: "100vw", md: "fit-content" }}
        >
          {menuList.map((item, i) => (
            <>
              <Button
                color="cream"
                key={i}
                variant={"link"}
                fontSize={{ base: 12 }}
                display={{ base: i > 3 ? "none" : "default" }}
              >
                {item}
              </Button>
              <Box display={isMobile ? "none" : i > 3 ? "none" : "default"}>
                <RxSlash />
              </Box>
            </>
          ))}
        </Flex>
        <Flex
          justifyContent={"space-evenly"}
          align={{ base: "center" }}
          justify={{ base: "center", md: "start" }}
          minW={{ base: "100vw", md: "fit-content" }}
          gap={{ base: 0, md: 5 }}
        >
          {menuList.slice(4, 6).map((item, i) => (
            <>
              <Box
                key={i}
                display={isMobile ? "none" : i === 0 ? "none" : "default"}
              >
                <RxSlash />
              </Box>
              <Button
                color="cream"
                key={i}
                variant={"link"}
                fontSize={{ base: 12 }}
                display={{ base: "default" }}
              >
                {item}
              </Button>
            </>
          ))}
        </Flex>
      </Flex>
      <Text
        color="cream"
        marginTop={{ base: 5, md: 0 }}
        fontSize={{ base: 12, md: 15 }}
      >
        © Copyright 2013 companyname inc.
      </Text>
      <Flex gap={3} align={"center"}>
        <Button variant={"link"} color="cream" fontSize={12}>
          Privacy
        </Button>
        <Box display={isMobile ? "none" : "default"}>
          <RxSlash />
        </Box>
        <Button variant={"link"} color="cream" fontSize={12}>
          Terms
        </Button>
      </Flex>
    </Flex>
  );
};
