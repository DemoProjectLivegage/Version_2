// Chakra imports
import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Details = ({
  title,
  header,
  data,
  use,
}) => {


  const textColor = useColorModeValue("gray.700", "white");
  const loanD = [
    "piPmtAmt",
    "upbAmt",
    "remainingPayments",
    "pmtDueDate",
  ]
  const masterD = [
    "priorServicerLoanId",
    "noteDate",
    "loanBoardingDate",
    "noteRatePercent",
    "escrow",
    "taxInsurancePmtAmt",
    "totalLoanAmount",
    "loanTerm",
    "loanType",
    "paymentFreq",
    "propertyAddress"
  ]

  var tableName = "";
  use == "loanD" ? tableName = loanD : tableName = masterD;

  return (
    <Card p='16px' my={{ sm: "24px", xl: "0px" }}>
      <CardHeader p='12px 5px' mb='12px'>
        <Text fontSize='lg' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column'>
          {tableName.map((dd, index) => {
            if (header[index] === "Escrow") {
              var show = "";
              data[dd] === true ? show = "Selected" : show = "Not Selected";
              // console.log(data[dd])
              return (
                <Flex align='center' mb='18px'>
                  <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                    {header[index]}:{" "}
                  </Text>
                  <Text fontSize='md' color='gray.500' fontWeight='400'>
                    {show}
                  </Text>
                </Flex>
              )
            }
            return (
              <Flex align='center' mb='18px'>
                <Text fontSize='md' color={textColor} fontWeight='bold' me='10px'>
                  {header[index]}:{" "}
                </Text>
                <Text fontSize='md' color='gray.500' fontWeight='400'>
                  {data[dd]}
                </Text>
              </Flex>
            )
          })}


        </Flex>
      </CardBody>
    </Card>
  );
};

export default Details;
