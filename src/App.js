/* eslint-disable */
import React from 'react';
import { CardContainer } from './containers/cards';
import { FooterContainer } from './containers/footer';
import { HeaderContainer } from './containers/header';
import  { JumbotronContainer } from './containers/jumbotron';

export default function App() {
  return (
      <>
        <HeaderContainer />
        <JumbotronContainer />
        <CardContainer />
        <FooterContainer />
      </>
  );
}

