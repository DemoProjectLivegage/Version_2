import React, { useState } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import axios from "axios";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { ChakraProvider, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const TabTables = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);


  const [type, setType] = useState("");
  const [number, setNumber] = useState();
  const [name, setName] = useState("");
  const [account, setAccount] = useState();
  const [mode, setMode] = useState("");
  const [frequency, setFrequency] = useState("");
  function containsOnlyCharacters(inputString) {
    var pattern = /[^A-Za-z]/;
    return !pattern.test(inputString);
  }


  const handleNameChange = (e) => {
    if(containsOnlyCharacters(e.target.value)){
      setName(e.target.value)
    }
  }



  const handleTabChange = (index) => {
    setSelectedTab(index);
  };
  const { TabName, form, datas, header, extra, header2, data2, data3, header3, header4, data4 } = props;
  const key1 = Object.keys(datas[0]);
  var key2 = 0;
  var key3 = 0;
  var key4 = 0;
  if (extra) {
    key2 = Object.keys(data2[0]);
    key3 = Object.keys(data3[0]);
    key4 = Object.keys(data4[0]);
  }


  const handleChange = (e) => {
    const data = [{
      "escrow_type": type,
      "name": name,
      "account_no": account,
      "routing_no": number,
      "payment_mode": mode,
      "frequency": frequency
    }]
    axios.post(`http://localhost:5000/api/beneficiary`, data)
      .then((response) => {
        window.alert("Submitted")
        console.log("form submitted", data);
      });
    console.log("clicked")
  }
  const handleMenuItemClick = (value) => {
    setMode(value);
  }
  const handleMenuClick = (value) => {
    setFrequency(value);
  }

  return (
    <Tabs onChange={handleTabChange} style={{ marginTop: "100px" }} isLazy>
      <TabList>
        {TabName.map((name) => {
          return (
            <Tab>{name}</Tab>
          )
        })}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Table variant="styled">
            <Thead>
              <Tr>
                {header.map((head) => {
                  return (
                    <Th>{head}</Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {datas.map((data, index) => {
                return (
                  <Tr key={index}>
                    {key1.map((item) => {
                      return (
                        <Td>{data[item]}</Td>
                      )
                    })}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TabPanel>
        {form &&
          <TabPanel >
            <Heading mb={4} fontSize="30px">Enter Beneficiary Details</Heading>
            <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>
              <Grid templateRows={{ sm: "1fr", xl: "repeat(3, .1fr)" }} gap='22px'>
                <FormControl>
                  <FormLabel mt={4}>Escrow Type</FormLabel>
                  <Input type="text" placeholder="Enter escrow type" value={type} onChange={(e) =>containsOnlyCharacters(e.target.value)? setType(e.target.value):""} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Beneficiary Name</FormLabel>
                  <Input type="text" placeholder="Enter beneficiary" value={name} onChange={handleNameChange} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Account Number</FormLabel>
                  <Input type="number" placeholder="Enter account number" value={account} onChange={(e) =>containsOnlyCharacters(e.target.value)? "":setAccount(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid templateRows={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
                <FormControl mt={4}>
                  <FormLabel>Routing Number</FormLabel>
                  <Input type="text" placeholder="Enter routing number" value={number} onChange={(e) =>setNumber(e.target.value)} />
                </FormControl >
                <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="20px">
                  <FormControl mt={10}>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Payment Mode
                      </MenuButton>
                      <MenuList  >
                        <MenuItem onClick={() => handleMenuItemClick("CHECK")}>Check</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick("WIRE")}>Wire</MenuItem>

                      </MenuList>
                    </Menu>
                  </FormControl>
                  <FormControl mt={10}>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Frequency
                      </MenuButton>
                      <MenuList >
                        <MenuItem onClick={() => handleMenuClick("MONTHLY")}>Monthly</MenuItem>
                        <MenuItem onClick={() => handleMenuClick("QUARTERLY")}>Quarterly</MenuItem>
                        <MenuItem onClick={() => handleMenuClick("ANNUALLY")}>Annually</MenuItem>

                      </MenuList>
                    </Menu>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Box display="flex" alignItems="center">
              <Button mt={4} marginX="auto" colorScheme="blue" type="submit" onClick={handleChange}>
                Add Beneficiary
              </Button>
            </Box>
          </TabPanel>

        }
        {extra &&
          <TabPanel>
            <Table variant="styled">
              <Thead>
                <Tr>
                  {header2.map((head) => {
                    return (
                      <Th>{head}</Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {data2.map((data, index) => {
                  return (
                    <Tr key={index}>
                      {key2.map((item) => {
                        return (
                          <Td>{data[item]}</Td>
                        )
                      })}
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TabPanel>
        }
        {extra &&
          <TabPanel>
            <Table variant="styled">
              <Thead>
                <Tr>
                  {header3.map((head) => {
                    return (
                      <Th>{head}</Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {data3.map((data, index) => {
                  return (
                    <Tr key={index}>
                      {key3.map((item) => {
                        return (
                          <Td>{data[item]}</Td>
                        )
                      })}
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TabPanel>
        }

        {extra &&
          <TabPanel>
            <Table variant="styled">
              <Thead>
                <Tr>
                  {header4.map((head) => {
                    return (
                      <Th>{head}</Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {data4.map((data, index) => {
                  return (
                    <Tr key={index}>
                      {key4.map((item) => {
                        return (
                          <Td>{data[item]}</Td>
                        )
                      })}
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TabPanel>
        }
      </TabPanels>
    </Tabs>
  );
};

export default TabTables;
