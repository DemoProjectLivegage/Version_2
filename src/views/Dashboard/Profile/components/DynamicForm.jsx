import React from 'react'
import { Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Menu,
    MenuItem,
    MenuButton,
    MenuList

} from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from 'axios'
export default function DynamicForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [formFields, setFormFields] = useState([{ id: 0 }]); // Initial form field
    const [sendData, setSendData] = useState({
        loanId:1,
        beneficiary_1:{},
        beneficiary_2:{},
        beneficiary_3:{},
        beneficiary_4:{},
        beneficiary_5:{},
    });

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };  
    const [beneficiary, setBeneficiary] = useState("");

    const addFormField = () => {

        


        const newFieldId = formFields.length;
        setFormFields([...formFields, { id: newFieldId }]);
    };
    const [datas, setData] = useState([]);

    const handleMenuItemClick =(value)=>{
        
    }

    useEffect(() => {
        axios.get("http://localhost:5000/api/beneficiary")
            .then(response => {
                setData(response.data);
                console.log("\n\n\n",response.data,"\n\n\n");
            });
    }, [])
    return (
        <>
            <Button width="200px" onClick={openModal}>Add Beneficiary</Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>BeneFiciary Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {formFields.map((field) => (
                            <>
                                <FormControl key={field.id} mt={4} >
                                    <FormLabel>Beneficiary Name</FormLabel>
                                    <Menu>
                                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                            Beneficiary
                                        </MenuButton>
                                        <MenuList multiple>
                                            {datas.map((item)=>{
                                                return(
                                                    <MenuItem onClick={()=> handleMenuItemClick(item.benificiary_id)}>{item.benificiary_id}  {item.name}</MenuItem>
                                                )
                                            })}
                                        </MenuList>
                                    </Menu>
                                </FormControl>
                                <FormControl key={field.id} mt={4}>
                                    <FormLabel>Date of Payment</FormLabel>
                                    <Input type="date" placeholder={`Enter value for Field ${4}`} />
                                </FormControl>
                                <FormControl key={field.id} mt={4}>
                                    <FormLabel>Amount </FormLabel>
                                    <Input placeholder={`Enter value for Field ${4}`} />
                                </FormControl>
                            </>

                        ))}
                        <Button
                            variant="outline"
                            colorScheme="blue"
                            size="sm"
                            mt={2}
                            onClick={addFormField}
                        >
                            Add More Beneficiary
                        </Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant="ghost">Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
