function _random(){ return Math.floor(Math.random()*255); }
function _isNumber(n){ return !isNaN(n); }

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

		return [
			'rgba(', 
			_random(),
			',',
			_random(),
			',',
			_random(),
			',',
			opacity,
			')'
		].join('');
	};

	return generate;
}

module.exports = ColorGenerator;
