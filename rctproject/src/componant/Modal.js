import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import "../componant/Style.css"
import { useState } from 'react';
import{ useDisclosure,ModalOverlay,Button,Modal,ModalContent,ModalHeader,ModalCloseButton,ModalBody,Text,ModalFooter, Input} from "@chakra-ui/react"

export default function BackdropExample() {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    // const OverlayTwo = () => (
    //   <ModalOverlay
    //     bg='none'
    //     backdropFilter='auto'
    //     backdropInvert='20%'
    //     backdropBlur='3px'
    //   />
    // )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)
  
    return (
      <>
        <Button className='btn-1'
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
        ENTER PIN
        </Button>
        {/* <Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Use Overlay two
        </Button> */}
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            {/* <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton /> */}
            <ModalBody className='bob'>
              <Input className='inputText'></Input>
            </ModalBody>
            <ModalFooter className='clickBtn'>
              <Button  onClick={onClose}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
// export default function PopupGfg(){
//   return(
//   <div >
    
//     <Popup  trigger={<button className='btn'>ENTER PIN</button>} 
//      position="right center" >
//       <div><input /></div>
//       <button >Submit</button>
//     </Popup>
//     <button >Submit</button>
    
    
//     <input placeholder='stor'/>
//   </div>
//   )
// };