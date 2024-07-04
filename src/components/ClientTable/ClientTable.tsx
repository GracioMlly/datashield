import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { clientForm } from "../../utils/type";

type clientsTableProps = {
  clients: clientForm[];
};

const ClientTable = ({ clients }: clientsTableProps) => {
  const rows = clients.map((client) => (
    <Tr key={client?.id}>
      <Td>{client?.societyName}</Td>
      <Td>{client?.address}</Td>
      <Td>{client?.email}</Td>
      <Td>{client?.activity}</Td>
    </Tr>
  ));

  return (
    <TableContainer>
      <Table variant="striped">
        <TableCaption>Table des clients</TableCaption>
        <Thead>
          <Tr>
            <Th>Nom de la société</Th>
            <Th>Adresse</Th>
            <Th>Email</Th>
            <Th>Activité</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default ClientTable;
