import React, { Component } from 'react';
import styled from 'styled-components';
// import drawBip from '../js/drawBip.js';

const Canvas = styled.canvas`
  background-color: #AAA;
`
Canvas.displayName='Canvas';

export default class Board extends Component {

	componentDidMount() {
		let ctx = document.getElementById('lifeboard').getContext('2d');
		if (ctx) {
			this.props.setContext(ctx);
		} else {
		}
	}
	render() {
		return (
			<Canvas id='lifeboard' width='800' height='400'></Canvas>

		)
	}
}