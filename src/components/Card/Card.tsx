import { Box, Text, Heading, Image } from "@chakra-ui/react";

type CardProps = {
  title: string;
  description: string;
  img?: string;
};

const Card = ({
  title,
  description,
  img = "https://placehold.co/600x400",
}: CardProps) => {
  return (
    <Box display={"flex"} flexDir={"column"} rowGap={"16px"} flex={"1 1 350px"}>
      <Box height={350}>
        <Image
          src={img}
          objectFit={"cover"}
          borderRadius={50}
          w={"100%"}
          height={"100%"}
        />
      </Box>
      <Heading as={"h3"} size={"md"} fontWeight={690}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};
export default Card;
