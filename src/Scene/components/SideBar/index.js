import React from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client';
import axios from 'axios'
import { ReactComponent as LinkIcon } from '../../assets/link.svg'

import { ADD_FEATURE_LINK } from './queries'


const Button = styled.button`
font-size: 20px;
width: 200px;
border-radius: 8px;
background-color: rgb(29, 208, 139);
color: white;
padding: 12px;
border: none;
outline: none;
cursor: pointer;

&:active {
  opacity: 0.7;
  transform: translateY(4px)
}
`

const NakedButton = styled.button`
font-size: 20px;
width: 200px;
border-radius: 8px;
padding: 12px;
border: none;
outline: none;
cursor: pointer;
color: #3d3d3d;

&:active {
  opacity: 0.7;
  transform: translateY(4px)
}
`

const finalizeEndpoint = 'http://localhost:8080/api/vehicles/2/finalize'
axios.defaults.headers.common.Authorization = `Bearer YouShallPass`;

const Container = styled.div`
padding: 24px;
display: flex;
flex-direction: row;
justify-content: flex-end;
`

const FlexGrow = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
`

const StyledLinkIcon = styled(LinkIcon)`
height: 20px;
width: 20px;
fill: #3d3d3d;
margin-right: 16px;

&:hover {
  opacity: 0.7;
}
`

const SieBar = ({ selectedStandardFeatureId, selectedDynamicFeatureId, resetSelections }) => {
  const [addFeatureLink, { data }] = useMutation(ADD_FEATURE_LINK, { onCompleted: resetSelections });
  return (
    <Container>
      {console.log('datadata', data)}
      <FlexGrow>
      <NakedButton onClick={() => addFeatureLink({ 
        variables: { input: { 
          featureId: selectedStandardFeatureId, 
          linkedFeatureId: selectedDynamicFeatureId 
          } }
        })}>
        <StyledLinkIcon />

      Add Link
      </NakedButton>
      </FlexGrow>
      <Button onClick={() => axios.post(finalizeEndpoint)} >Publish</Button>
    </Container>

  )
}

export default SieBar