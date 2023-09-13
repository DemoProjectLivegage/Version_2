import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { check } from 'prettier';



const GL_id = (props) => {
    const {data} = props;
    // const data=glData;
    if(data[0]["check"] === null)return (<div>{data[0]} </div>)
    return (

        <Table variant="simple" >
            <Thead>
                <Tr>
                    {data.some((item) => item.gl_list.length > 0) && <Th>COA Name</Th>}
                    <Th>Account No</Th>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th>Debit</Th>
                    <Th>Credit</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data && data.map((parentItem) => (
                    <React.Fragment key={parentItem.coaid}>
                        {/* Parent Row */}
                        <Tr>
                            {parentItem.gl_list.length > 0 && <Td><strong>{parentItem.coa_name}</strong></Td>}
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                        {/* Child Rows */}
                        {parentItem.gl_list.map((childItem, index) => (
                            <Tr key={index}>
                                <Td></Td>
                                <Td>{childItem.account_no}</Td>
                                <Td>{childItem.name}</Td>
                                <Td>{childItem.description}</Td>
                                {childItem.type.toLowerCase() == "debit" && <Td>{childItem.operation}{childItem.value}</Td>}
                                {childItem.type.toLowerCase() == "credit" && <Td></Td>}
                                {childItem.type.toLowerCase() == "credit" && <Td>{childItem.operation}{childItem.value}</Td>}
                            </Tr>
                        ))}
                    </React.Fragment>
                ))}
            </Tbody>
        </Table>
    );
};

export default GL_id;
