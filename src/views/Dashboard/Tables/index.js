// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Borrower from "./components/Borrower";
// import  Information  from "./Borrower_information/Information";
// import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Borrower
        title={"Borrower Details"}
        captions={["Borrower Id","Servicer Load Id","Full Name","Email","Contact Number","Zip Code","Mailing Address"]}
        data={tablesTableData}
      />
      
      {/* <Projects
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      /> */}
    </Flex>
  );
}

export default Tables;
