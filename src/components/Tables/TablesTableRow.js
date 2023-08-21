import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useHistory } from 'react-router-dom';

function TablesTableRow(props) {
  const data_copy = props;
  const { name, loanInformationId, priorServicerLoanId, contact_number,zipCode } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const history = useHistory();

  return (
    
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Button onClick={()=>history.push({pathname:"/admin/info",state:data_copy})}>
          <Text
            fontSize="md"
            fontWeight="bold"
            cursor="pointer"
          >
            {loanInformationId}
          </Text>
        </Button>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {priorServicerLoanId}
          </Text>
          {/* <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {}
          </Text> */}
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {name}
        </Text>
      </Td>
      
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {contact_number}
        </Text>
      </Td>
      {/* <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {zipCode}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {}
          </Text>
        </Flex>
      </Td> */}
    </Tr>
  );
}

export default TablesTableRow;
