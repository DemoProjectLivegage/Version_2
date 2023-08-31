import { Button } from "@chakra-ui/button";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChakraProvider, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MakePaymentComponent(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {id, date, monthly_Payment_Amount} = props;
  const fixedPayment = "$"+monthly_Payment_Amount;
  const [payment, setPayment] = useState();

  const handleChange = (event) => {
    setPayment(event.target.value);
  };
  const showToastMessage = (message, types) => {
    if (types) {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSubmit = () => {
      axios
        .post(`http://localhost:5000/api/payment_hierarchy?id=${id}&date=${date}&incoming_amount=${payment}`)
        .then((response) => {
          onClose();
          showToastMessage("Transaction Successful.", true);
          // window.location.reload(true);
        })
        .catch((error) => {
          console.error("Transaction Failed!!!", error.response.data);
          showToastMessage("Transaction Failed!!!", false);
          // showToastMessage();
        });
  };

  return (
    <>
      <Button onClick={onOpen} width="100%" colorScheme="blue">
        Make Payment
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Actual Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl key="1">
              <FormLabel>Schedule Payment</FormLabel>
              <Input type="text" value={fixedPayment}/>
            </FormControl>
            <FormControl key="2"> 
              <FormLabel>Payment Received</FormLabel>
              <Input type="text" value={payment} onChange={(e)=>handleChange(e)}/>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default MakePaymentComponent;
