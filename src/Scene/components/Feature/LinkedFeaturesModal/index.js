import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding: '40px'
  },
  overlay: {
    backgroundColor: 'rgba(46, 44, 44, 0.4)',
  },
};

const LinkedFeatureContainer = styled.div`
display: flex;
flex-direction: column;
`


const Title = styled.div`
font-size: 24px;
font-weight: 600;
margin-top: 16px;
`

const LinkedFeature = ({ feature }) => (
  <LinkedFeatureContainer>
  <Title>
{feature?.genericFeature?.name}
</Title>
<div style={{ fontSize: '20px'}}>
{feature?.packageName}
</div>
<div>
${feature?.price}
</div>
</LinkedFeatureContainer>
)


const LinkedFeaturesModal = ({ isOpen, close, linkedFeatures }) => (
  <Modal
          isOpen={isOpen}
          onRequestClose={close}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {console.log('linkedFeatures', linkedFeatures)}
          {linkedFeatures && linkedFeatures.map(feature => <LinkedFeature feature={feature} />)}
          </Modal>
)

export default LinkedFeaturesModal