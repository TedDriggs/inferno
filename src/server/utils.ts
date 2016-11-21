const ENTITY_RE = /[&<>"'/]/g

export function escapeText(s) {
	return String(s).replace(ENTITY_RE, s =>
		s === '&' ? '&amp;' :
		s === '<' ? '&lt;' :
		s === '>' ? '&gt;' :
		s === '"' ? '&quot;' :
		s === '\'' ? '&#039;' :
		s === '/' ? '&#x2f;' : '')
}

export function escapeAttr(str) {
	return (str + '')
		.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;');
}

export function toHyphenCase(str) {
	return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

const voidElements = {
	area: true,
	base: true,
	br: true,
	col: true,
	command: true,
	embed: true,
	hr: true,
	img: true,
	input: true,
	keygen: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true
};

export function isVoidElement(str) {
	return !!voidElements[str];
}
