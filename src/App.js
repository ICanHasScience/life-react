import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Board from './components/board.jsx';
import Bip from './components/bip.jsx';
import * as bipUtils from './js/bipUtils.js'

const Title = styled.h1`
  font-size: 1.5em;
`
Title.displayName='Title';


const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
Header.displayName='Header';

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`
Logo.displayName='Logo';

const Main = styled.div`
  text-align: center;
`
Main.displayName='Main';

const DataContainer = styled.div`
  margin: 25px auto;
  background-color: #DDE;
  width: 45%;
  padding: 10px;
  border-radius: 10px;
`
DataContainer.displayName='DataContainer';

// const Entrybox = styled.div`
//   margin: 20px;
// `

class App extends Component {
  // drawBips() = {
  //   this.state.bips.map((bip) => <Bip x={bip.x} y={bip.y} ctx=/>);
  // }

  state={
    ctx: null,
    xSize: 80,
    ySize: 40,
    scale: 10,
    offColor: 'darkGrey',
    onColor: 'red',
    bips: bipUtils.initializeRandomBips(80, 40)
  };

  setContext = (ctx) => {
    this.setState({ctx: ctx});
  }

  iterateBips = () => {
    this.setState({bips: bipUtils.repopulateBips(this.state.bips)});
  }

  renderBips = () => {
    let myBips = [];
    this.state.bips.forEach((bipCol) => {
      bipCol.forEach((bip) => {
        myBips.push(
          <Bip
            x= {bip.x}
            y= {bip.y}
            s= {this.state.scale}
            v= {bip.alive}
            onColor= {this.state.onColor}
            offColor= {this.state.offColor}
            ctx= {this.state.ctx}
          />
        );
      });
    });
    return myBips;
  }

  render() {
    return (
      <Main>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title >Welcome to React</Title>
        </Header>
        <button onClick={this.iterateBips}>Iterate Bips</button>
        <Board
          setContext={this.setContext}
          xSize={this.state.xSize}
          ySize={this.state.ySize}
          scale={this.state.scale}
        />
        {this.renderBips()}
      </Main>
    );
  }
}

export default App;
