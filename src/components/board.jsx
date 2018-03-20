import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import drawBip from '../js/drawBip.js';

const Canvas = styled.canvas`
  background-color: #FFF;
`
Canvas.displayName='Canvas';

export default class Board extends Component {
	static propTypes = {
		xSize: PropTypes.number,
		ySize: PropTypes.number,
		scale: PropTypes.number
	}

	componentDidMount() {
		let ctx = document.getElementById('lifeboard').getContext('2d');
		if (ctx) {
			this.props.setContext(ctx);
		} else {
		}
	}
	render() {
		return (
			<Canvas id='lifeboard' width={this.props.xSize * this.props.scale} height={this.props.ySize * this.props.scale}></Canvas>

		)
	}
}