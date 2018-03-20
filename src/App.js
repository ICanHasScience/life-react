import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Board from './components/board.jsx';
import Bip from './components/bip.jsx';

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
    onColor: 'red'
  };

  setContext = (ctx) => {
    this.setState({ctx: ctx});
  }

  render() {
    console.log('context:', this.state.ctx);
    return (
      <Main>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title >Welcome to React</Title>
        </Header>
        <Board
          setContext={this.setContext}
          xSize={this.state.xSize}
          ySize={this.state.ySize}
          scale={this.state.scale}
        />
        <Bip
          x= {10}
          y= {10}
          s= {this.state.scale}
          v= {true}
          onColor= {this.state.onColor}
          offColor= {this.state.offColor}
          ctx= {this.state.ctx} />
        <Bip
          x= {11}
          y= {10}
          s= {this.state.scale}
          v= {false}
          onColor= {this.state.onColor}
          offColor= {this.state.offColor}
          ctx= {this.state.ctx} />
        <Bip
          x= {10}
          y= {11}
          s= {this.state.scale}
          v= {true}
          onColor= {this.state.onColor}
          offColor= {this.state.offColor}
          ctx= {this.state.ctx} />
        <Bip
          x= {11}
          y= {11}
          s= {this.state.scale}
          v= {false}
          onColor= {this.state.onColor}
          offColor= {this.state.offColor}
          ctx= {this.state.ctx} />
      </Main>
    );
  }
}

export default App;
