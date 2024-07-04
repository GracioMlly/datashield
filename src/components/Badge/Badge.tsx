import { Box, Heading, Text } from "@chakra-ui/react";
import { HugeiconsProps } from "hugeicons-react";

type BadgeProps = {
  id: number;
  BadgeIcon: React.FC<
    Omit<HugeiconsProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  handleSelectedBadge?: (id: number) => void;
  selectedBadgeId?: number | null;
};

const Badge = ({
  id,
  BadgeIcon,
  title,
  description,
  handleSelectedBadge,
  selectedBadgeId,
}: BadgeProps) => {
  const handleClick = () => {
    if (handleSelectedBadge !== undefined) {
      handleSelectedBadge(id);
    }
  };

  const isSelected = id === selectedBadgeId;

  return (
    <Box
      onClick={handleClick}
      bg={`${isSelected ? "black" : "white"}`}
      color={`${isSelected ? "white" : ""}`}
      cursor={"pointer"}
      flex={"0 1 75px"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      borderRadius={15}
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
      _hover={{
        bgGradient: isSelected
          ? ""
          : "linear(45deg, #d9dcdc, #dbdddd, #dddfdf, #dfe0e0, #e1e2e2, #e2e3e3, #e4e5e5, #e6e6e6)",
      }}
      rowGap={4}
      padding={15}
      transition={"all 0.15s linear"}
    >
      <Box display={"flex"} columnGap={5} alignItems={"center"}>
        <BadgeIcon />
        <Heading size={"md"} fontWeight={500}>
          {title}
        </Heading>
      </Box>
      {isSelected && <Text>{description}</Text>}
    </Box>
  );
};
export default Badge;
