"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Modal } from "antd";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdFileUpload, MdUpload } from "react-icons/md";

const Menu = ["My Profile", "Edit Profile", "Security"];

export const ModalProfile = () => {
  const [isModal, setModal] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? (
        <Flex gap={2}>
          <Button variant={"link"} color="cream">
            <MdUpload size={25} />
          </Button>
          <Button
            variant="link"
            height={"fit-content"}
            onClick={() => setModal(true)}
            color="cream"
          >
            <IoPersonSharp size={23} />
          </Button>
        </Flex>
      ) : (
        <Flex align="center" justify="center" gap={2}>
          <Button
            height={"10"}
            width={"15"}
            borderRadius={1}
            border={0}
            onClick={() => setModal(true)}
            color="MutedRed"
            backgroundColor={"Cream"}
            leftIcon={<MdUpload size={25} />}
          >
            Upload
          </Button>
          <Button
            height={"10"}
            width={"15"}
            borderRadius={1}
            border={0}
            onClick={() => setModal(true)}
            color="MutedRed"
            backgroundColor={"Cream"}
          >
            <IoPersonSharp size={23} />
          </Button>
          <Box>
            <Text color="cream" fontWeight={"bold"}>
              Waseem
            </Text>
            <Text color="cream">Arshad</Text>
          </Box>
        </Flex>
      )}
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
            <Divider paddingY={1} />
            <Flex align={"center"} justify={"center"} paddingTop={3}>
              <Button rightIcon={<IoMdLogOut />} flex={1}>
                Log Out
              </Button>
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
        <Flex
          align={"center"}
          flexDirection={"column"}
          justify={"center"}
          position={"relative"}
        >
          <Flex
            align={"center"}
            justify={"end"}
            gap={[10]}
            flexDirection={"column"}
            height={[150]}
          >
            <Img
              src=""
              style={{
                border: "1px solid white;",
                backgroundColor: "gray",
                overflow: "hidden",
              }}
              top={["-14%", "-25%"]}
              position={"absolute"}
              borderRadius={[5]}
              height={["95px", 40]}
              width={["95px", 40]}
            />
            <Flex align={"center"} justify={"center"} flexDirection={"column"}>
              <Text>Waseem Ahmad</Text>
              <Text>UI/UX Designer</Text>
              <Button
                leftIcon={<MdFileUpload />}
                paddingY={[6]}
                paddingX={[20]}
              >
                Start Upload
              </Button>
            </Flex>
          </Flex>
          <Divider marginY={2} />
          <Flex flexDirection={"column"} gap={1} width={"100%"}>
            {Menu.map((item) => (
              <Button
                key={item}
                style={{ flex: 1 }}
                padding={[4]}
                variant={"outline"}
                border="none"
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
