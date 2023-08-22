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
} from '@chakra-ui/react';
import { ChakraProvider, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const TabTables = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };
  const { TabName, form, datas, header,extra,header2,data2,data3,header3 } = props;
  const key1 = Object.keys(datas[0]);
var key2=0;
var  key3=0;
  if(extra)
  {
     key2=Object.keys(data2[0]);
     key3=Object.keys(data3[0]);
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
                  <Input type="text" placeholder="Enter escrow type" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Beneficiary Name</FormLabel>
                  <Input type="text" placeholder="Enter beneficiary" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Account Number</FormLabel>
                  <Input type="number" placeholder="Enter account number" />
                </FormControl>
              </Grid>
              <Grid templateRows={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
                <FormControl mt={4}>
                  <FormLabel>Routing Number</FormLabel>
                  <Input type="text" placeholder="Enter routing number" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Payment Mode</FormLabel>
                  <Input type="text" placeholder="Enter mode of payment" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Frequency</FormLabel>
                  <Input type="text" placeholder="Enter payment frequency" />
                </FormControl>
              </Grid>
            </Grid>
            <Box display="flex" alignItems="center">
            <Button mt={4} marginX="auto" colorScheme="blue" type="submit">
              Login
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
      </TabPanels>
    </Tabs>
  );
};

export default TabTables;
