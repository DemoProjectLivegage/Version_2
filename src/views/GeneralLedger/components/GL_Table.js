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
  Grid
} from '@chakra-ui/react';
import TabTables from 'components/Tables/TabTables'


import axios from "axios";
import { ChevronDownIcon } from '@chakra-ui/icons';

const GL_Table = () => {

    const tabs = ["Chart of Account"];
    const header = ["GL Account Number", "GL Account Name", "Description", "Debit", "Credit"]

    const [data, setData] = useState([
      {
          "EscrowType": "Mortgage Insurance",
          "Name": "MGIC",
          "AccountNumber": "93749376493649",
          "RoutingNumber": "GDH567",
          "PaymentMode": "Cheque",
          "Frequency": "Monthly"
      }
  ]);

    const handleTabChange = (index) => {
        setSelectedTab(index);
      };

  return (
    <TabTables TabName={tabs}  header={header}  datas={data} />

  );
};

export default GL_Table;
