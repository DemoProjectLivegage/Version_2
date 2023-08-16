// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";

const Information = ({  }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {/* {title} */}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            {/* <Tr my='.8rem' pl='0px' color='gray.400'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr> */}
          </Thead>
          {/* <Tbody>
            {data.map((row) => {
              return (
                <TablesTableRow
                  key={`${row.borrower_id}-${row.servicer_loan_id}`}
                  name={row.fullName}
                  email={row.email}
                  contact_number={row.contact_number}
                  domain={row.zip_code}
                  status={row.mailing_address}
                  
                />
              );
            })}
          </Tbody> */}
        </Table>
      </CardBody>
    </Card>
  );
};

export default Information;
