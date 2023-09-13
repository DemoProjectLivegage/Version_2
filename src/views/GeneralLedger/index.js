import {
  Box, FormLabel, Grid, FormControl, Input,
  MenuButton, MenuItem, Menu, MenuList, Button

} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function index() {

  const [glname, setglname] = useState("");
  const [accountno, setaccountno] = useState();
  const [coatype, setcoatype] = useState();
  const [description, setdescrition] = useState();
  const [type, settype] = useState("");
  const [operation, setoperation] = useState("");
  const [selectedCOA, setSelectedCOA] = useState('');
  const [selectedtran, setSelectedtran] = useState('');
  const [selectedoper, setSelectedoper] = useState('');
  const [allCoa, setAllCoa] = useState();


  function containsOnlyCharacters(inputString) {
    var pattern = /[^A-Za-z ]/;
    return !pattern.test(inputString);
  }

  const handleNameChange = (e) => {
    if (containsOnlyCharacters(e.target.value) || e.target.value === " ") {
      setglname(e.target.value)
    }
  }
  const handledescChange = (e) => {
    if (containsOnlyCharacters(e.target.value) || e.target.value === " ") {
      setdescrition(e.target.value)
    }
  }

  const handlecoaChange = (value,name) => {
    setcoatype(value);
    setSelectedCOA(name);
  };
  const handletransChange = (value) => {
    settype(value);
    setSelectedtran(value);
    console.log(value)
  };

  const handleOperChange = (value) => {
    setoperation(value);
    setSelectedoper(value);

  };


  const handleSubmit = (e) => {
    const data ={
      "account_no": accountno,
      "name": glname,
      "type": type,
      "operation": operation,
      "description": description,
      "coa_id": coatype
    }

    console.log(data);
    axios.post("http://localhost:5000/api/GeneralLedger/", data)
      .then((response) => {
        window.alert("Submitted")
        console.log("form submitted", data);
      }).catch((error) => {
        console.log(error);
      })

  }

  useEffect(() => {
    axios.get(`http://localhost:5000/api/coa/all/`).then((response) => {
      console.log(response.data)
      setAllCoa(response.data);
    })
  }, [])

  return (
    <>
      <Box>
        <br />
        <br />
        <br />


        <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>
          <FormControl mt={5}>
            <Grid templateRows={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="22px">
              <FormLabel >GL Account Name</FormLabel>
              <Menu>

                <Input
                  style={{ width: '450px' }}
                  type="text"
                  placeholder="Enter GL Name"
                  value={glname}
                  onChange={handleNameChange}
                />
              </Menu>

              <FormLabel>Description</FormLabel>
              <Menu >
                <Input
                  style={{ width: '450px' }}
                  type="text"
                  placeholder="Enter Description"
                  value={description}
                  onChange={handledescChange}

                />
              </Menu>
              <FormLabel >Transaction Type</FormLabel>
              <Menu>
                <MenuButton style={{ width: '250px' }} as={Button} rightIcon={<ChevronDownIcon />}>{selectedtran || 'Select Transaction Type'}
                </MenuButton>
                <MenuList >
                  <MenuItem onClick={() => handletransChange("Debit")}>Debit</MenuItem>
                  <MenuItem onClick={() => handletransChange("Credit")}>Credit</MenuItem>
                </MenuList>
              </Menu>

              <Button mt={6} style={{ width: '150px' }} colorScheme="teal" onClick={handleSubmit} >
                Submit
              </Button>

            </Grid>
          </FormControl>
          <FormControl mt={5}>
            <Grid templateRows={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="22px">
              <FormLabel >GL Account No.</FormLabel>
              <Input
                style={{ width: '450px' }}
                type="number"
                placeholder="Enter GL No."
                value={accountno}
                onChange={(e) => setaccountno(e.target.value)}
              />



              <FormLabel >Account Category</FormLabel>
              <Menu>
                <MenuButton style={{ width: '250px' }} as={Button} rightIcon={<ChevronDownIcon />}>{selectedCOA || 'Select Account Category'}

                </MenuButton>
                <MenuList >
                  {allCoa && allCoa.map((item) => {
                    return (
                      <MenuItem onClick={() => handlecoaChange(item.coaid,item.coa_name)}>{item.coa_name}</MenuItem>
                    )
                  })}

                </MenuList>
              </Menu>



              <FormLabel>Operation</FormLabel>
              <Menu>
                <MenuButton as={Button} style={{ width: '250px' }} rightIcon={<ChevronDownIcon />}>{selectedoper || 'Select Operation'}

                </MenuButton>
                <MenuList >
                  <MenuItem onClick={() => handleOperChange("+")}>+</MenuItem>
                  <MenuItem onClick={() => handleOperChange("-")}>-</MenuItem>
                  {/* <MenuItem onClick={() => handleCOA("")}></MenuItem> */}

                </MenuList>
              </Menu>

            </Grid>
          </FormControl>
        </Grid>

      </Box>

    </>

  )
}

export default index