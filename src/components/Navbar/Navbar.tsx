import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      h={70}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box fontWeight={"600"} fontFamily={"ClashDisplay-Variable"}>
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
          <HashLink to={"/#services"}>Services</HashLink>
        </Box>
        <Box as={"li"} _hover={{ color: "green.primary" }}>
          <HashLink to={"/#inscription"}>Inscription</HashLink>
        </Box>
      </Box>
      {pathname !== "/dashboard" && (
        <Button>
          <Link to={"/dashboard"}>Se connecter</Link>
        </Button>
      )}
    </Box>
  );
};
export default Navbar;
