import React, { useState, useEffect } from 'react';
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
import Gl_map from "./Gl_map";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { ChakraProvider, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
// import GL_id from "../../views/Dashboard/PaymentDetails/GL_id"
const TabTables = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ["Transaction Mapping", "Show Transaction"];
    const header = ["Transaction", "From Account", "Credit/Debit", "+/-", "To Account", "Credit/Debit", "+/-"];

    const [data, setData] = useState('');
    useEffect(() => {
        const apiUrl = 'http://localhost:5000/api/transactions/';

        axios.get(apiUrl)
            .then((response) => {
                setData(response.data); // Assuming the API response is an array of options
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Tabs style={{ marginTop: "80px" }} isLazy>
            <TabList>

                <Tab>Transaction Mapping</Tab>
                <Tab>Show Transaction Mapping</Tab>

            </TabList>
            <TabPanels>
                <TabPanel>
                    <Gl_map />
                </TabPanel>

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
                            {data && data.map((data) => {
                                if (data.from_GeneralLedger && data.to_generalLedger ) {
                                    return (
                                        <Tr >

                                            <Td>{data.transaction_name}</Td>
                                            <Td>{data.from_GeneralLedger.name}</Td>
                                            <Td>{data.from_GeneralLedger.type}</Td>
                                            <Td>{data.from_GeneralLedger.operation}</Td>
                                            <Td>{data.to_generalLedger.name}</Td>
                                            <Td>{data.to_generalLedger.type}</Td>
                                            <Td>{data.to_generalLedger.operation}</Td>
                                        </Tr>
                                    )
                                }
                            })}
                        </Tbody>
                    </Table>
                </TabPanel>

            </TabPanels>

        </Tabs>
    );
};

export default TabTables;
