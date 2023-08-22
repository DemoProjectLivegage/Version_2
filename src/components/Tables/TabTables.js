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
} from '@chakra-ui/react';

const TabTables = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Tabs onChange={handleTabChange} style={{marginTop:"100px"}} isLazy>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Header 1</Th>
                <Th>Header 2</Th>
                <Th>Header 3</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Data 1</Td>
                <Td>Data 2</Td>
                <Td>Data 3</Td>
              </Tr>
              {/* Add more rows here */}
            </Tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Header A</Th>
                <Th>Header B</Th>
                <Th>Header C</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Data A</Td>
                <Td>Data B</Td>
                <Td>Data C</Td>
              </Tr>
              {/* Add more rows here */}
            </Tbody>
          </Table>
        </TabPanel>

        <TabPanel>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Header 1</Th>
                <Th>Header 2</Th>
                <Th>Header 3</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Data </Td>
                <Td>Data </Td>
                <Td>Data </Td>
              </Tr>
              {/* Add more rows here */}
            </Tbody>
          </Table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabTables;
