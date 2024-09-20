import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";
import { Container, Divider, Flex } from "@chakra-ui/react";

export const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW={{ base: "98%", md: "1400px" }}>
      <Flex flexDirection={"column"} paddingY={"5"} gap={2}>
        <Header />
        <Divider borderWidth={1} marginTop={8} borderColor={"cream"} />
        {children}
        <Footer />
      </Flex>
    </Container>
  );
};
