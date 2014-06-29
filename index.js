function _random(){ return Math.floor(Math.random()*255); }
function _isNumber(n){ return !isNaN(n); }

function ColorGenerator(params){
	params = Object(params);

	var defaultOpacity = _isNumber(params.opacity) ? Number(params.opacity) : 1;
	
	var generate = function(opacity){
		opacity = _isNumber(opacity) ? Number(opacity) : defaultOpacity;

		return [
			'rgb(', 
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
