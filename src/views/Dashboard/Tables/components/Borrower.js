// Chakra imports
import {
  Flex,
  Grid,
  Modal,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import FileUploadComponent from "components/FileComponents/FileUploadComponent";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import TablesTableRow from "components/Tables/TablesTableRow";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


const Borrower = ({ title, captions }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [allData, setAllData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/borrower/")
      .then(response => {
        setAllData(response.data);
        setShowData(response.data);
      }).catch((error) => {
        console.log(error);
      })
      
  }, []);

  useEffect(() => {
    if (search) {
      setShowData(allData.filter((x) => x.loanInformationId.toString().includes(search) || x.fullName.toLowerCase().includes(search)));
    } else {
      setShowData(allData);
    }
  }, [search])

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value);
  }

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <Grid >
        <Flex >
          <SearchBar handleChange={handleChange} />
          <FileUploadComponent />
          <ToastContainer />
        </Flex>
      </Grid>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' pl='0px' color='gray.400'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {showData.map((row) => {
              return (

                <TablesTableRow
                  key={`${row.borrowerId}`}
                  id={row.borrowerId}
                  loanInformationId={row.loanInformationId}
                  priorServicerLoanId={row.priorServicerLoanId}
                  name={row.fullName}
                  contact_number={row.contactNumber}
                  email={row.email}
                  zipCode={row.zipcode}
                  mailingAddress={row.mailingAddress}

                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Borrower;
