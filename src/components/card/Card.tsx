import { Button, Card } from "@chakra-ui/react";

export const CardSmall = ({ title }: { title: string }) => {
  return (
    <Card
      backgroundColor={"Cream"}
      w={{ base: "50px", md: "80ox", lg: "195px" }}
      h={{ base: "50px", md: "80px", lg: "195px" }}
      _hover={{
        border: "1px solid;",
        borderColor: "DarkBrown",
      }}
    >
      <Button
        variant="link"
        position={"absolute"}
        color="DarkBrown"
        fontWeight={"bold"}
        left={2}
        bottom={2}
      >
        {title}
      </Button>
    </Card>
  );
};
