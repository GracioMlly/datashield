import axios from "axios";
import ClientTable from "../components/ClientTable/ClientTable";
import { useQuery } from "@tanstack/react-query";
import { clientForm } from "../utils/type";
import { Spinner } from "@chakra-ui/react";

const apiUrl = import.meta.env.VITE_API_URL_CLIENTS as string

const getClients = async () => {
  const response = await axios.get<clientForm[]>(
    apiUrl
  );
  return response.data;
};

const Dashboard = () => {
  const { isFetching, data } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    gcTime: 60000
  });

  const clientsData = data ?? [];
  return (
    <>
      {isFetching && <Spinner />}
      <ClientTable clients={clientsData} />
    </>
  );
};
export default Dashboard;
