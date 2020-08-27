import React from 'react'
import styled from 'styled-components'
import Feature from '../Feature'
import Grid from '../Grid'

const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 60px 1fr;
grid-gap: 24px;
`

const FeaturesGridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
grid-gap: 24px;
`

const Title = styled.div`
font-size: 24px;

`

const FeaturesContainer = ({ features, title, selectFeature, selectedFeature, resetSelections }) => (
  <Container> 
    {console.log('selectedFeature', selectedFeature)}
    <Grid.Item row={1} column={1}>
     <Title>{title || 'TITLE'}</Title>
    </Grid.Item>
    <Grid.Item row={2} column={1}>
      <FeaturesGridContainer>
        {features && features.map(feature => 
        <Feature 
        feature={feature} 
        selectFeature={selectFeature} 
        selectedFeature={selectedFeature} 
        resetSelections={resetSelections}
        /> 
        )}
      </FeaturesGridContainer>
    </Grid.Item>
  </Container>
)

export default FeaturesContainer