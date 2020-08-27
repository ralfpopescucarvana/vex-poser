import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LinkIcon } from '../../assets/link.svg'

const Card = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #e2e2e2;
box-shadow: ${({ selected }) => selected ? '0px 0px 5px 3px rgb(29, 208, 139)' : 'none'};
border-radius: 8px;
height: ${({isDynamic}) => isDynamic ? '160px' : '220px'}; 
width: 220px;
cursor: pointer;

`
const FileImage = styled.img`
align-self: center;
justify-content: center;
height: 120px;
width: 160px;
overflow: hidden;
`

const Title = styled.div`
display: flex;
border-radius: 8px 8px 0px 0px;
font-size: 16px;
padding: 10px;
font-weight: 600;
background-color: ${({isDynamic}) => isDynamic ? 'none' : 'rgb(0,174,217)'}; ;
color: ${({isDynamic}) => isDynamic ? '#3d3d3d;' : 'white'}; 
height: ${({isDynamic}) => isDynamic ? '48px' : '32px'};
text-overflow: ellipsis;
`

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 12px;

`

const Descriptor = styled.div`
font-size: 10px;
margin-bottom: 4px;
display: flex;
flex-direction: row;
`

const ValueIndicatorContainer = styled.div`
padding: 10px;
`

const FlexGrow = styled.div`
display: flex;
font-weight: 600;
flex-grow: 1;
`

const StyledLinkIcon = styled(LinkIcon)`
height: 20px;
width: 20px;
margin-right: 4px;
`

const LinkRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
fill: #3d3d3d;

&:hover {
  opacity: 0.5;
}
`

const ValueIndicator = ({ feature }) => (
  <ValueIndicatorContainer>
    <Descriptor><FlexGrow>Package Name: </FlexGrow>{feature.packageName}</Descriptor>
    <Descriptor><FlexGrow>Package Price: </FlexGrow>{feature.price}</Descriptor>
    <Descriptor><FlexGrow>Rare: </FlexGrow>{feature.isRare ? 'true' : 'false'}</Descriptor>
    <Descriptor><FlexGrow>Valuable: </FlexGrow>{feature.isValuable ? 'true' : 'false'}</Descriptor>
  </ValueIndicatorContainer>
)

const Feature = ({ feature, selectedFeature, selectFeature }) => {
  console.log('DEEZE', feature.id, selectedFeature)
  console.log('selected', feature.id === selectedFeature)
  return (
  <Card onClick={() => {
    console.log('Clicking!')
    selectFeature(feature.id)
    }} selected={feature.id === selectedFeature} isDynamic={feature.genericFeature.sourceType.name === 'dynamic'}>
    <Title isDynamic={feature.genericFeature.sourceType.name === 'dynamic'}>
      {feature.genericFeature.name}
    </Title>
    <Content>
    {feature.genericFeature.sourceType.name === 'dynamic' && <ValueIndicator feature={feature} />}
    {feature.file && <FileImage src={feature.file?.url}/>}
    {feature.linkedFeatures?.length > 0 && 
    <LinkRow>
      <StyledLinkIcon />
      <div>{feature.linkedFeatures.length}</div>
    </LinkRow>}
    </Content>
  </Card>
  )
}

export default Feature