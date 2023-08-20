import { Button } from '@chakra-ui/button';
import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FileUploadComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const showToastMessage = () => {
    toast.success('File Uploaded Successfully! ', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('http://localhost:5000/api/borrower', formData)
      .then(response => {
        onClose();
        showToastMessage();
        // window.location.reload(true);
      })
      .catch(error => {
        console.error('Error uploading file');
        // showToastMessage();
      });
  };

  return (
    <ChakraProvider>
      <Button onClick={onOpen}>Onboard Loan</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload File</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input type="file" onChange={handleFileChange} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleFileUpload}>Upload</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </ChakraProvider>
  );
}


export default FileUploadComponent;