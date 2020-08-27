import React from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client';
import axios from 'axios'

import { ADD_FEATURE_LINK } from './queries'
import Grid from '../Grid'


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

const finalizeEndpoint = 'http://localhost:8080/api/vehicles/2/finalize'
axios.defaults.headers.common.Authorization = `Bearer YouShallPass`;

const Container = styled.div`
padding: 24px;
display: flex;
flex-direction: row;
`

const SieBar = ({ selectedStandardFeatureId, selectedDynamicFeatureId, resetSelections }) => {
  const [addFeatureLink, { data }] = useMutation(ADD_FEATURE_LINK, { onCompleted: resetSelections });
  return (
    <Container>
    <Grid.Layout rows={1} columns={2} gap={'48px'}>
      <Button onClick={() => addFeatureLink({ 
        variables: { input: { 
          featureId: selectedStandardFeatureId, 
          linkedFeatureId: selectedDynamicFeatureId 
          } }
        })}>
      Add Link
      </Button>
      <Button onClick={() => axios.post(finalizeEndpoint)} >Publish</Button>
    </Grid.Layout>
    </Container>

  )
}

export default SieBar