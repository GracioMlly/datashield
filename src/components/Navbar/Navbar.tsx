import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      h={70}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box fontWeight={"bold"}>
        <Link to={"/"}>Data Shield</Link>
      </Box>
      <Box
        as={"ul"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        columnGap={8}
        fontWeight={500}
      >
        <Box as={"li"} _hover={{ color: "green.primary" }}>
          <Link to={"/"}>Accueil</Link>
        </Box>
        <Box as={"li"} _hover={{ color: "green.primary" }}>
          <Link to={"#offres"}>Offres</Link>
        </Box>
        <Box as={"li"} _hover={{ color: "green.primary" }}>
          <Link to={"#temoignage"}>Témoignages</Link>
        </Box>
      </Box>
      <Button
        borderRadius={"999rem"}
        size={"sm"}
        paddingInline={7}
        paddingBlock={6}
        bgColor={"green.primary"}
        border={"1px solid"}
        borderColor={"green.primary"}
        fontWeight={500}
        _hover={{
          bgColor: "inherit",
          color: "green.primary",
        }}
        _active={{
          bgColor: "#4edc4e",
          color: "black",
        }}
      >
        Se connecter
      </Button>
    </Box>
  );
};
export default Navbar;
