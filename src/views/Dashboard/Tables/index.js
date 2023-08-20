// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Borrower from "./components/Borrower";


function Tables() {


  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Borrower
        title={"Loan Details"}
        captions={["Loan Id","prior Servicer Loan id","Full Name","Contact Number"]}
      />
    </Flex>
  );
}

export default Tables;
