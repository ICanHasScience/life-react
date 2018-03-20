const drawBip = (ctx, options) => {
	/*******************************
	 *  Options:                   *
	 *    x: x position            *
	 *    y: y position            *
	 *    s: scale                 *
	 *    value: Value bool        *
	 *    onColor: color when on   *
	 *    offColor: color when off *
	 *******************************/

	 let onColor = options.onColor || 'red';
	 let offColor = options.offColor || 'blue';
	 let x = options.x;
	 let y = options.y;
	 let s = options.s;
	 let v = options.value;

	 ctx.save();

	 ctx.fillStyle = v ? onColor : offColor;

	 ctx.translate(x * s, y * s);
	 ctx.beginPath();
	 ctx.rect(0, 0, s, s);

	 ctx.fill();

	 ctx.restore();
};

export default drawBip;