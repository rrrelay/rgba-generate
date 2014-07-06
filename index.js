function _random(){ return Math.floor(Math.random()*255); }
function _isNumber(n){ return !isNaN(n); }

function _toHex(i){
	return ('0'+i.toString(16)).slice(-2);
}

function ColorGenerator(params){
	var defaultOpacity;

	if (_isNumber(params)) {
		defaultOpacity = Number(params);
	} else {
		params = Object(params);

		defaultOpacity = _isNumber(params.opacity) ? Number(params.opacity) : 1;
	}

	var generate = function(opacity){
		opacity = _isNumber(opacity) ? Number(opacity) : defaultOpacity;

		var nums = [_random(),_random(),_random()];

		var rgba = [
			'rgba(', nums[0], ',', nums[1], ',', nums[2], ',', opacity, ')'
		].join('');


		var hex = [
			'#', _toHex(nums[0]),  _toHex(nums[1]), _toHex(nums[2])
		].join('');

		return {
			toString: function(){ return rgba; },
			toHex: function(){ return hex; }
		};
	};

	return generate;
}

module.exports = ColorGenerator;
