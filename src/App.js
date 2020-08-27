import React from 'react';
import styled from 'styled-components'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import Scene from './Scene'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const Container = styled.div`
display: flex;
flex-direction: column;
`

const Hero = styled.div`
font-size: 48px;
padding: 24px;
background-color: rgb(0, 174, 217);
color: white;
`

const Italic = styled.span`
font-style: italic;
`

const Bold = styled.span`
font-weight: 600;
`


function App() {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <Container>
          <Hero><Bold>VEX</Bold><Italic>Poser</Italic></Hero>
          <Scene />
        </Container>
      </div>
    </ApolloProvider>
  );
}

export default App;
