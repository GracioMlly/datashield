import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Button from "../components/Button/Button";
import { ArrowRight02Icon, SentIcon } from "hugeicons-react";
import holdingPhoneImg from "../assets/images/holdingphone3.png";
import Card from "../components/Card/Card";
import { badgesArray, badgesImages } from "../utils/data";
import Badge from "../components/Badge/Badge";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { clientForm } from "../utils/type";
import Input from "../components/Input/Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import axios from "axios";
import { HashLink } from "react-router-hash-link";

const apiUrl = import.meta.env.VITE_API_URL_CLIENTS as string;

const postClient = async (form: clientForm) => {
  const response = await axios.post(apiUrl, form);
  return response;
};

const Home = () => {
  const queryclient = useQueryClient();
  const { register, handleSubmit } = useForm<clientForm>();
  const toast = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: postClient,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["clients"] });
      toast({
        title: "Client inscrit avec succès.",
        description: "Nous vous contacterons sous peu",
        status: "success",
        variant: "subtle",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    },
  });

  const [selectedBadgeId, setSelectedBadgeId] = useState<number | null>(null);

  const pathImg = badgesImages.at(
    selectedBadgeId === null ? 0 : selectedBadgeId
  );

  const handleSelectedBadge = (id: number) => {
    setSelectedBadgeId((prevId) => {
      return id !== prevId ? id : null;
    });
  };

  const onsSubmit: SubmitHandler<clientForm> = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <>
      <Box
        marginTop={5}
        display={"flex"}
        flexWrap={"wrap"}
        bgGradient={
          "radial(275px 275px at 75% 50%, #27282a, #252628, #232426, #212325, #1f2123, #1d1f21, #1b1d1f, #1a1c1d, #181a1b, #161819)"
        }
        color={"white"}
        borderRadius={50}
        paddingBlockStart="100px"
        paddingInlineStart={{
          sm: "0",
          lg: "80px",
        }}
        justifyContent={["center", "center", "center", null]}
        columnGap={100}
        rowGap={50}
      >
        <Box flex={"0 1 600px"} display={"flex"} flexDir={"column"} rowGap={8}>
          <Heading fontWeight={600} size={"2xl"}>
            Experts en Cybersécurité
            <br />
            et Analyse de Données
          </Heading>
          <Text width={["100%", null, null, "72%"]}>
            Chez Data Shield, nous protégeons et optimisons vos données pour un
            avenir numérique sécurisé.Transformez vos données en insights
            précieux avec nos services d'analyse de données avancés.
          </Text>
          <Button width={"35%"} rightIcon={<ArrowRight02Icon />}>
            <HashLink to={"/#inscription"}>Je suis intéressé</HashLink>
          </Button>
        </Box>
        <Box
          flex={"0 1 500px"}
          position={"relative"}
          bgPosition={"center"}
          bgSize={"800px 100%"}
        >
          <Image
            src={holdingPhoneImg}
            alt="main qui tient un tel"
            objectFit={"cover"}
            height={"100%"}
          />
        </Box>
      </Box>

      <Heading marginTop={100} fontWeight={600} id="services">
        Différents services
      </Heading>

      <Box
        display={"flex"}
        columnGap={"50px"}
        flexWrap={"wrap"}
        marginTop={"8px"}
      >
        <Text flex={"0 1 400px"}>
          Chez Data Shield, nous offrons une gamme complète de services pour
          répondre à vos besoins en matière de données et de sécurité.
        </Text>
        <Text flex={"0 1 400px"}>
          Nos experts sont prêts à vous aider avec l'analyse de données, la
          cybersécurité, l'administration et l'audit de bases de données.
        </Text>
      </Box>

      <Box
        display={"flex"}
        marginTop={"35px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        columnGap={50}
      >
        <Card
          title="L’analyse de données et la cybersécurité"
          description="Nous transformons vos données en informations précieuses tout en assurant leur sécurité maximale."
          img={img1}
        />
        <Card
          title="L’administration et l’audit des bases de données"
          description="L’administration et l’audit des bases de données : Nous garantissons la performance et la fiabilité de vos bases de données grâce à une administration rigoureuse et des audits réguliers."
          img={img2}
        />
      </Box>

      <Box
        minH={{
          md: "1000px",
          lg: "700px",
        }}
        marginTop={100}
        bg={"#f4f5f6"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        alignContent={"center"}
        flexWrap={"wrap"}
        borderRadius={15}
      >
        <Box display={"flex"} flexDir={"column"} rowGap={8} flex={"0 1 400px"}>
          {badgesArray.map((badge) => (
            <Badge
              key={badge.id}
              {...badge}
              handleSelectedBadge={handleSelectedBadge}
              selectedBadgeId={selectedBadgeId}
            />
          ))}
        </Box>

        <Box flex={"0 1 400px"} h={"400px"}>
          <Image src={pathImg} height={"100%"} />
        </Box>
      </Box>

      <Box
        id="inscription"
        as="form"
        marginTop={100}
        borderRadius={15}
        color={"white"}
        bgColor={"#181a1b"}
        paddingBlock={"60px"}
        paddingInline={"60px"}
        display={"flex"}
        flexDirection={"column"}
        onSubmit={handleSubmit(onsSubmit)}
        minH={700}
      >
        <Heading size={"2xl"} fontWeight={500}>
          Remplissez avec vos informations
        </Heading>

        <Box
          marginTop={75}
          mb={10}
          display={"flex"}
          flexDirection={"column"}
          rowGap={16}
        >
          <Input
            label="Nom de la société"
            name="societyName"
            placeholder="societe SARL..."
            register={register}
          />
          <Input
            label="Adresse de la société"
            name="address"
            placeholder="Adidogomé Apédokoe"
            register={register}
          />
          <Input
            label="Email de la société"
            name="email"
            register={register}
            placeholder="societe@tg.com"
          />
          <Input
            label="Activité de la société"
            name="activity"
            placeholder="Vente de ..."
            register={register}
          />
        </Box>
        <Button
          width={"100%"}
          sx={{
            maxW: "400px",
            alignSelf: "center",
          }}
          rightIcon={<SentIcon />}
          type="submit"
          isLoading={isPending}
        >
          S'inscrire
        </Button>
      </Box>
    </>
  );
};
export default Home;
