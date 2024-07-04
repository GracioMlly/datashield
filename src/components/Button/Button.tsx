import { Button as ChakraButton, SystemStyleObject } from "@chakra-ui/react";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  rightIcon?: React.ReactElement;
  width?: string | string[];
  sx?: SystemStyleObject;
  type?: "button" | "submit" | "reset" | undefined;
  isLoading? : boolean
};

const Button = ({ children, rightIcon, width, sx, type, isLoading }: ButtonProps) => {
  return (
    <ChakraButton
      isLoading={isLoading}
      w={width}
      borderRadius={"999rem"}
      size={"sm"}
      paddingInline={7}
      paddingBlock={6}
      bgColor={"green.primary"}
      border={"1px solid"}
      borderColor={"green.primary"}
      fontFamily={"ClashDisplay-Variable"}
      fontWeight={600}
      rightIcon={rightIcon}
      _hover={{
        bgColor: "inherit",
        color: "green.primary",
      }}
      _active={{
        bgColor: "#4edc4e",
        color: "black",
      }}
      sx={sx}
      type={type}
    >
      {children}
    </ChakraButton>
  );
};
export default Button;
