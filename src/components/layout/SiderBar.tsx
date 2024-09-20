import { Button, Flex, Divider, Text } from "@chakra-ui/react";
import { Modal } from "antd";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const menu = [
  "Videos",
  "People",
  "Documents",
  "Events",
  "Communities",
  "Favorites",
  "Channels",
];

export const SideBar = () => {
  const [isModal, setModal] = useState(false);
  return (
    <>
      <Button color="cream" variant={"link"} onClick={() => setModal(true)}>
        {<FaBarsStaggered />}
      </Button>
      <Modal
        open={isModal}
        closable={false}
        onCancel={() => setModal(false)}
        styles={{
          header: {
            padding: 0,
            margin: 0,
          },
          body: {
            padding: 0,
            margin: 0,
          },
          footer: {
            padding: 0,
            margin: 0,
          },
        }}
        footer={
          <>
            <Flex align={"center"} justify={"center"} paddingTop={3}>
              <Button
                position={"absolute"}
                variant={"link"}
                marginX={"auto"}
                marginY={"auto"}
                bottom={-20}
                color={"#F8EDE3"}
                onClick={() => setModal(false)}
              >
                <FaTimes size={30} />
              </Button>
            </Flex>
          </>
        }
      >
        <Flex align={"center"} justify={"center"} flexDirection={"column"}>
          <Text fontWeight={"bold"} fontSize={"15"}>
            Main Menu
          </Text>
          <Divider marginY={5} />
          <Flex flexDirection={"column"} gap={1} width={"100%"}>
            {menu.map((item) => (
              <Button
                key={item}
                style={{ flex: 1 }}
                padding={[4]}
                variant={"outline"}
                border={"none"}
              >
                {item}
              </Button>
            ))}
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
