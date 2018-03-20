import React, { Component } from 'react';
// import styled from 'styled-components';
import drawBip from '../js/drawBip.js';
import PropTypes from 'prop-types';



export default class Board extends Component {
	static propTypes = {
		x: PropTypes.number,
		y: PropTypes.number,
		s: PropTypes.number,
		v: PropTypes.bool,
		onColor: PropTypes.string,
		offColor: PropTypes.string,
		ctx: PropTypes.object
	}
	render() {
		if(this.props.ctx) {
			drawBip(
				this.props.ctx,
				{
					x: this.props.x,
					y:this.props.y,
					s:this.props.s,
					value: this.props.v,
					onColor:this.props.onColor,
					offColor:this.props.offColor
				}
			);
		}
		return null;
	}
}