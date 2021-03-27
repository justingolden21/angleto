window.onload = ()=> {
	let html = '';
	for(let item of ['x1','y1','x2','y2']) html += `<label for="${item}">${item}</label><input id="${item}" type="number" value="0">`;
	get('inputs').innerHTML = html;
};

function calc() {
	let [x1,y1,x2,y2]=[val('x1'),val('y1'),val('x2'),val('y2')];
	let ans = angleTo(x1,y1,x2,y2);
	get('output').innerHTML =`<b>Inputs</b>: ${[x1,y1,x2,y2].join(', ')}<br><b>Answer</b>:<br>${ans} rad<br>${ans/Math.PI}π rad<br>${180*ans/Math.PI}°`;
}
const get = str => document.getElementById(str);
const val = str => parseFloat(get(str).value) || 0;
const angleTo = (x1,y1,x2,y2) => Math.atan2(y2-y1,x2-x1);