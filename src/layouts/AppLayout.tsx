import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Box
      paddingInline={8}
      maxWidth={"1500px"}
      margin={"0 auto"}
      paddingBlockEnd={32}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default AppLayout;
