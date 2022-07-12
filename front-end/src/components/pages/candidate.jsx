import ReactLoading from "react-loading";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Service from "../service/service";

export default function Candidate(props) {
  const candidate = props.candidate;
  const [candidateInfo, setCandidateInfo] = useState();

  //   const requestToCandidateInfo = useCallback(async () => {
  //     try {
  //       const requestCandidate = await Service("candidateInfo", candidate.iin);
  //       setCandidateInfo(requestCandidate);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     try {
  //       requestToCandidateInfo();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, [requestToCandidateInfo]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <div className="candidate">
        <button onClick={onOpen}>
          <div className="candidateName">{candidate.fio}</div>
          <div className="candidateIIN">{candidate.iin}</div>
        </button>
      </div>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
