import { InputGroup, InputRightAddon, Input } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

export const InputBar = () => {
  return (
    <InputGroup>
      <Input
        width={"100%"}
        backgroundColor={"#F5E1CC"}
        border="#6C3D2A"
        color="#6C3D2A"
        placeholder="Find"
        _placeholder={{
          color: "#6C3D2A",
        }}
        _active={{
          borderColor: "#6C3D2A",
        }}
      />
      <InputRightAddon backgroundColor={"#F5E1CC"} color="#6C3D2A">
        <IoSearch />
      </InputRightAddon>
    </InputGroup>
  );
};
