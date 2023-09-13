
import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { Box, FormControl, FormLabel, Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
import './style.css';

const Gl_map = () => {



  //Transaction Ledger NAME
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
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


  //From GL to TO GL 
  const [option1, setoptions1] = useState([]);
  const [option2, setoptions2] = useState([]);
  // const [options, setOptions] = useState([]);
  const [selectedOptions1, setSelectedOptions1] = useState('');
  const [selectedOptions2, setSelectedOptions2] = useState('');
  useEffect(() => {
    const apiUrl = 'http://localhost:5000/api/GeneralLedger/';

    axios.get(apiUrl)
      .then((response) => {
        setoptions1(response.data); // Assuming the API response is an array of options
        setoptions2(response.data); // Assuming the API response is an array of options
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '400px', // Adjust the width as needed
    }),
    option: (provided) => ({
      ...provided,
      width: '400px', // Adjust the width of individual options as needed
    }),
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange1 = (selected) => {
    const id = selected.target.value;
    setSelectedOptions1(id);
    // console.log(selected.target.value);
    setoptions2(option2.filter((option) => {
      return option.id.toString() !== id.toString();
    }));

  };

  const handleChange2 = (selected) => {
    const id = selected.target.value;
    setSelectedOptions2(id);
    // console.log(selected.target.value);
    setoptions1(option1.filter((option) => {
      return option.id.toString() !== id.toString();
    }));

  };



  const handleSubmit = (e) => {

    const data = {
      "Id":  selectedOption ,
      "from_account":  selectedOptions1 ,
      "to_account":  selectedOptions2 

    }

    axios.post("http://localhost:5000/api/Transactions/", data)
      .then((response) => {
        window.alert("Submitted")
        console.log("form submitted", response.data);
      }).catch((error) => {
        console.log(error);
      })

  };

  return (
    <Box  style={{ width: '400px' }}>
      <FormControl marginBottom={'10px'}>
        <FormLabel>Transactions Name</FormLabel>
        <Select
          placeholder="Select an option"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {data.map((option) => (
            <option key={option.id} value={option.id}>
              {option.transaction_name}
            </option>
          ))}
        </Select>
      </FormControl>

      <Flex>
        <FormControl>
          <FormLabel>From General Ledgers Transaction</FormLabel>

          <Select
            width={400}
            placeholder="Select an option"
            value={selectedOptions1}
            onChange={handleChange1}
          >
            {option1.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}, &nbsp; {option.type},&nbsp;&nbsp;&nbsp;{option.operation}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl mx={10}>
          <FormLabel>To General Ledgers Transaction</FormLabel>
          <Select
            width={400}
            placeholder="Select an option"
            value={selectedOptions2}
            onChange={handleChange2}
          >

            {option2.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}, &nbsp; {option.type},&nbsp;&nbsp;&nbsp;{option.operation}

              </option>
            ))}
          </Select>
        </FormControl>
      </Flex>


      {/* </Flex> */}


      <Button mt={4} colorScheme="teal" type="submit" onClick={handleSubmit}>
        Submit
      </Button>

    </Box>
  );
};

export default Gl_map;
