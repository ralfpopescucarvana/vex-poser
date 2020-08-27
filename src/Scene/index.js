import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import styled from 'styled-components'

import { GET_VEHICLE } from './queries'
import FeaturesContainer from './components/FeaturesContainer'
import Grid from './components/Grid'
import SideBar from './components/SideBar'

const Container = styled.div`
display: flex;
flex-direction: column;
color: #3d3d3d;
`

const Scene = () => {
  const { data, loading, error } = useQuery(GET_VEHICLE, 
    { variables: { input: { stockNumber: 2000000001 } }});

  const [selectedStandardFeature, setSelectedStandardFeature] = useState()
  const [selectedDynamicFeature, setSelectedDynamicFeature] = useState()

  const resetSelections = () => {
    setSelectedStandardFeature(null)
    setSelectedDynamicFeature(null)
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <Container>
      <SideBar selectedDynamicFeatureId={selectedDynamicFeature} 
        selectedStandardFeatureId={selectedStandardFeature} resetSelections={resetSelections}/>
    <Grid.Layout rows={['100px', '1fr']} columns={['1fr', '1fr']} alignment={'top-left'}>
      {console.log('THEDATA', data)}
      <Grid.Item row={2} column={1}>
        <FeaturesContainer features={data?.vehicle?.features
          .filter(feature => feature.genericFeature.sourceType.name === 'standard' && feature.file)} 
          title={'Standard features'} 
          selectedFeature={selectedStandardFeature}
          selectFeature={setSelectedStandardFeature}
          />
      </Grid.Item>
      <Grid.Item row={2} column={2}>
        <FeaturesContainer features={data?.vehicle?.features
          .filter(feature => feature.genericFeature.sourceType.name === 'dynamic')} 
          title={'Dynamic features'} 
          selectedFeature={selectedDynamicFeature}
          selectFeature={setSelectedDynamicFeature}
          resetSelections={resetSelections}
          />
        </Grid.Item>
    </Grid.Layout>
    </Container>
  )
}

export default Scene