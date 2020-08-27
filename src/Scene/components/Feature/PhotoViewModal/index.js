import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(46, 44, 44, 0.4)',
  },
};

const FileImage = styled.img`
align-self: center;
justify-content: center;
height: 900px;
width: 1200px;
overflow: hidden;
`


const LinkedFeaturesModal = ({ isOpen, close, url }) => (
  <Modal
          isOpen={isOpen}
          onRequestClose={close}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <FileImage src={url}/>
          </Modal>
)

export default LinkedFeaturesModal