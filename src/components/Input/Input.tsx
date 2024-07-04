import { UseFormRegister, Path } from "react-hook-form";
import { clientForm } from "../../utils/type";
import { Box } from "@chakra-ui/react";
type inputProps = {
  label: string;
  name: Path<clientForm>;
  register: UseFormRegister<clientForm>;
  placeholder?: string;
};

const Input = ({ label, name, register, placeholder }: inputProps) => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={{
        sm: "flex-start",
        lg: "space-around",
      }}
      columnGap={"50px"}
      alignItems={"center"}
      minH={"85px"}
      _hover={{
        bgColor: "#262728",
        borderRadius: "15px",
      }}
      borderBottom={"1px solid #262728"}
      rowGap={5}
      padding={5}
    >
      <Box
        as="label"
        htmlFor={name}
        flex={"0 1 350px"}
        fontSize={"1.2rem"}
        cursor={"pointer"}
      >
        {label}
      </Box>
      <Box
        as="input"
        id={name}
        placeholder={placeholder}
        textIndent={"10px"}
        fontSize={"1.1rem"}
        flex={"0 1 550px"}
        minH={"45px"}
        color={"white"}
        borderBottom={"1px solid rgba(255,255,255, 0.2)"}
        _hover={{
          borderBottomColor: "#54ea54",
        }}
        _focus={{
          outline: "1px solid #54ea54",
          borderRadius: "8px",
          borderBottom: "none",
        }}
        _placeholder={{
          fontSize: "1rem",
        }}
        bgColor={"inherit"}
        {...register(name)}
      />
    </Box>
  );
};

export default Input;
