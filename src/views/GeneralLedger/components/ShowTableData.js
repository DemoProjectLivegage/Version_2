import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const ShowTableData = () => {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/coa/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Tabs onChange={handleTabChange} isLazy my="5rem">
      <TabList>
        {data.map((item, index) => (
          <Tab key={index}>{item.coa_name}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((item, index) => (
          <TabPanel key={index}>
            <Table variant="simple">
              <Thead>
              <Tr>
                   <Th>Account No</Th>
                   <Th>Name</Th>
                   <Th>Description</Th>
                   <Th>Debit</Th>
                   <Th>Credit</Th>
                 </Tr>
              </Thead>
              <Tbody>
                {item.gl_list.map((childItem, childIndex) => (
                 <Tr key={childIndex}>
                  <Td>{childItem.account_no}</Td>
                  <Td>{childItem.name}</Td>
                  <Td>{childItem.description}</Td>
                  {childItem.type.toLowerCase()=="debit" &&<Td>{childItem.operation}{childItem.value}</Td>}
                  {childItem.type.toLowerCase()=="credit" &&<Td></Td>}
                  {childItem.type.toLowerCase()=="credit" &&<Td>{childItem.operation}{childItem.value}</Td>}
                                    </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ShowTableData;



// import React, { useState } from 'react';
// import { Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

// const data = [
//   {
//     "coaid": 1,
//     "coa_name": "Assets",
//     "gl_list": [
//       {
//         "account_no": 110501,
//         "name": "PI Custodian Account",
//         "type": "Debit",
//         "operation": "-",
//         "description": "Principal and Interest Collected",
//         "value": 202.50
//       }
//     ]
//   },
//   {
//     "coaid": 2,
//     "coa_name": "Liability",
//     "gl_list": []
//   },
//   {
//     "coaid": 3,
//     "coa_name": "Expense",
//     "gl_list": [
//       {
//         "account_no": 110509,
//         "name": "PI Custodian Account",
//         "type": "credit",
//         "operation": "+",
//         "description": "Principal and Interest Collected",
//         "value": 582.50
//       }
//     ]
//   },
//   {
//     "coaid": 4,
//     "coa_name": "Revenue",
//     "gl_list": []
//   },
//   {
//     "coaid": 5,
//     "coa_name": "Cash",
//     "gl_list": []
//   }
// ];

// const ShowTableData = () => {
//   const [selectedTab, setSelectedTab] = useState(0);

//   const handleTabChange = (index) => {
//     setSelectedTab(index);
//   };

//   return (
//     <Tabs onChange={handleTabChange} isLazy my={100}>
//       <TabList>
//         {data.map((items, index) => (
// //       {data.some((item) => item.gl_list.length > 0) && <Th>COA Name</Th>}
          
//           <Tab key={index}>{items.coa_name}</Tab>
//         ))}
//       </TabList>
//       <TabPanels>
//         {data.map((item, index) => (
//           <TabPanel key={index}>
//             <Table variant="simple">
//               <Thead>
//                 <Tr>
//                   {/* <Th>COA ID</Th> */}
//                   <Th>Account No</Th>
//                   <Th>Name</Th>
//                   <Th>Description</Th>
//                   <Th>Debit</Th>
//                   <Th>Credit</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {item.gl_list.map((childItem, childIndex) => (
//                   <Tr key={childIndex}>
//                     <Td>{childItem.account_no}</Td>
//                     <Td>{childItem.name}</Td>
//                     <Td>{childItem.description}</Td>
//                     {childItem.type.toLowerCase()=="debit" &&<Td>{childItem.operation}{childItem.value}</Td>}
//                     {childItem.type.toLowerCase()=="credit" &&<Td>{childItem.operation}{childItem.value}</Td>}
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </TabPanel>
//         ))}
//       </TabPanels>
//     </Tabs>
//   );
// };

// export default ShowTableData;



// import React from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

// const data = [
//   {
    
//     "coa_name": "Assets",
//     "gl_list": [
//       {
//         "account_no": 110501,
//         "name": "PI Custodian Account",
//         "type": "Debit",
//         "operation": "-",
//         "description": "Principal and Interest Collected",
//         "value": 202.50
//       }
//     ]
//   },
//   {
    
//     "coa_name": "Liability",
//     "gl_list": []
//   },
//   {
    
//     "coa_name": "Expense",
//     "gl_list": []
//   },
//   {
    
//     "coa_name": "Revenue",
//     "gl_list": []
//   },
//   {
    
//     "coa_name": "Cash",
//     "gl_list": []
//   }
// ];

// const ShowTableData = () => {
//   return (
//     <Table variant="simple" my={100}>
//       <Thead>
//         <Tr>
//           {data.some((item) => item.gl_list.length > 0) && <Th>COA Name</Th>}
//           <Th>Account No</Th>
//           <Th>Name</Th>
//           <Th>Type</Th>
//           <Th>Value</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {data.map((parentItem) => (
//           <React.Fragment key={parentItem.coaid}>
//             {/* Parent Row */}
//             <Tr>
//               {parentItem.gl_list.length > 0 && <Td>{parentItem.coa_name}</Td>}
//               <Td></Td>
//               <Td></Td>
//               <Td></Td>
//               <Td></Td>
//             </Tr>
//             {/* Child Rows */}
//             {parentItem.gl_list.map((childItem, index) => (
//               <Tr key={index}>
//                 <Td></Td>
//                 <Td></Td>
//                 <Td>{childItem.account_no}</Td>
//                 <Td>{childItem.name}</Td>
//                 <Td>{childItem.type}</Td>
//                 <Td>{childItem.value}</Td>
//               </Tr>
//             ))}
//           </React.Fragment>
//         ))}
//       </Tbody>
//     </Table>
//   );
// };

// export default ShowTableData;
