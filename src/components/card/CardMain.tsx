import { Button, Card } from "@chakra-ui/react";

export const CardMain = ({
  title1,
  title2,
  title3,
  hightlight = false,
}: {
  title1: string;
  title2: string;
  title3: string;
  hightlight: boolean;
}) => {
  return (
    <Card
      backgroundColor={"Cream"}
      w={{ base: "100px", md: "100%" }}
      minW={{ base: "100px", md: hightlight ? "100%" : "195px" }}
      minH={{ base: "100px", md: hightlight ? "100%" : "180px" }}
      h={{ base: "100px", md: "100%" }}
      _hover={{
        border: "1px solid;",
        borderColor: "DarkBrown",
      }}
      style={{
        display: "flex",
      }}
      height={"100%"}
      flex={1}
    >
      <Button
        variant="link"
        position={"absolute"}
        color="DarkBrown"
        fontWeight={"bold"}
        left={2}
        bottom={8}
      >
        {title1}
      </Button>

      <Button
        variant="link"
        position={"absolute"}
        color="DarkBrown"
        fontWeight={"bold"}
        left={2}
        bottom={2}
      >
        {title2}
      </Button>
      <Button
        variant="link"
        position={"absolute"}
        color="DarkBrown"
        fontWeight={"bold"}
        right={2}
        bottom={2}
      >
        {title3}
      </Button>
    </Card>
  );
};
