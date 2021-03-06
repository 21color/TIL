//hexToRGB

const hexToRGB = (hex) => {
	let alpha = false,
		h = hex.slice(hex.startsWith('#') ? 1 : 0);
	if (h.length === 3) h = [...h].map((x) => x + x).join('');
	else if (h.length === 8) alpha = true;

	h = parseInt(h, 16);

	return console.log(
		'rgb' +
			(alpha ? 'a' : '') +
			'(' +
			(h >>> (alpha ? 24 : 16)) +
			', ' +
			((h & (alpha ? 0x00ff000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
			', ' +
			((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
			(alpha ? `, ${h & 0x0000ff}` : '') +
			')'
	);
};

hexToRGB('#27ae60ff');
hexToRGB('27ae60');
hexToRGB('#fff');

// Converts a color code to a rgb() or rgba() string if alpha value is provided.

// Use bitwise right-shift operator and mask bits with & (and) operator to convert a hexadecimal color code (with or without prefixed with #) to a string with the RGB values. If it's 3-digit color code, first convert to 6-digit version. If an alpha value is provided alongside 6-digit hex, give rgba() string in return.
