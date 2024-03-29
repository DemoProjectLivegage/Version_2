// Chakra imports
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React, { useEffect } from "react";
import Header from "./components/Header";
import ProfileInformation from "./components/ProfileInformation";
import { useLocation } from "react-router-dom";
import Details from "./components/Details";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TabTables from "components/Tables/TabTables";
import MakePaymentComponent from "components/PaymentComponent/MakePaymentComponent";
import Bar from "../../Graph_View/Barchart" 
import Piechart from "../../Graph_View/Piechart" 
function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const locations = useLocation();
  const history = useHistory();
  const local = locations.state;
  var borrowerData;
  local ? (borrowerData = local) : (borrowerData = "");

  const [masterLoanData, setMasterLoanData] = useState([]);
  const [loanData, setLoanData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/borrower/loaninfo/${borrowerData.id}`)
      .then((response) => {
        setMasterLoanData(response.data);
        axios
          .get(
            `http://localhost:5000/api/borrower/loan_details/${response.data.loanInformationId}`
          )
          .then((resp) => {
            setLoanData(resp.data);
            console.log("data: ",resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return borrowerData != "" ? (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={borrowerData.profile}
        name={borrowerData.name}
        email={borrowerData.email}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 2fr)" }} gap="22px">
        <ProfileInformation
          title={"Borrower Information"}
          name={borrowerData.name}
          mobile={borrowerData.contact_number}
          email={borrowerData.email}
          location={borrowerData.mailingAddress}
          zipCode={borrowerData.zipCode}
        />

        {/* <Conversations title={"Conversations"} /> */}
      {masterLoanData.loanInformationId &&<Piechart id={masterLoanData.loanInformationId}/>}
      </Grid>
      <hr></hr>
      <hr></hr>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="22px">
        <Details
          title={"Loan Information"}
          header={[
            "Prior servicer loan id",
            "Note Date",
            "Loan Boarding Date",
            "Note Rate Percent",
            "Escrow",
            "Total Loan Amount",
            "Loan Term ",
            "Loan Type",
            "Payment Frquency",
            "Property Address",
          ]}
          data={masterLoanData}
          use="masterD"
        />
        <Grid templateRows={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="20px">
          <Details
            title={"Payment Details"}
            header={[
              "UPB Amount",
              "PI Payment Amount",
              "Escrow Amount",
              "Remaining Payments",
              "Due Date",
            ]}
            data={loanData}
            use="loanD"
          />
          <ButtonGroup flexDirection="column" gap="6">
            <Button
              onClick={() =>
                history.push({
                  pathname: "/admin/paymentdetails",
                  state: masterLoanData.loanInformationId,
                })
              }
            >
              Payment Details
            </Button>
            <MakePaymentComponent
              id={loanData.loanId}
              date={loanData.pmtDueDate}
              monthly_Payment_Amount={loanData.monthly_payment_amount}
            />
          </ButtonGroup>

        </Grid>

      </Grid>
      {masterLoanData.loanInformationId &&
      <Bar id={masterLoanData.loanInformationId} />
}
      {/* <Projects title={"Loan Details"} description={"User Loan Details"} /> */}
    </Flex>
  ) : (
    <div>Incorrect Data</div>
  );
}

export default Profile;
