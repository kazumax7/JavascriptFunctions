const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()-=^~\|[{]}@`:*;+,<.>/?_";
const passwordlength = 16;

function randomString(map, length){
	let result = "";
	for(let i = 0; i < length; i++)	result += map[Math.floor(Math.random() * map.length)];

	return result;
}
