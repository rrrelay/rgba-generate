var expect = require('chai').expect,
	ColorGenerator = require('./index');

describe('rgba-generate', function(){

	it('should generate an rgba value with a default opacity of 1', function(){
		var colorGenerator = new ColorGenerator();
		expect(colorGenerator).to.be.ok;
		expect(colorGenerator()).to.match(/^rgb\(\d{1,3},\d{1,3},\d{1,3},1\)$/);
	});

	it('should respect the opacity constructor parameter', function(){
		var colorGenerator = new ColorGenerator({opacity: .666});
		expect(colorGenerator).to.be.ok;
		expect(colorGenerator()).to.match(/^rgb\(\d{1,3},\d{1,3},\d{1,3},0\.666\)$/);
	});

	it('should respect the opacity function parameter', function(){
		var colorGenerator = new ColorGenerator({opacity: .666});
		expect(colorGenerator).to.be.ok;
		expect(colorGenerator(.7)).to.match(/^rgb\(\d{1,3},\d{1,3},\d{1,3},0\.7\)$/);
	});

	it('should work with opacity zero as ctor param', function(){
		var colorGenerator = new ColorGenerator({opacity: 0});
		expect(colorGenerator).to.be.ok;
		expect(colorGenerator()).to.match(/^rgb\(\d{1,3},\d{1,3},\d{1,3},0\)$/);
	});

	it('should work with opacity zero as function param', function(){
		var colorGenerator = new ColorGenerator({opacity: .8});
		expect(colorGenerator).to.be.ok;
		expect(colorGenerator(0)).to.match(/^rgb\(\d{1,3},\d{1,3},\d{1,3},0\)$/);
	});

	it('should work without new', function(){
		var colorGenerator = ColorGenerator({opacity: .8});
		expect(colorGenerator).to.be.ok;
		expect(colorGenerator(0)).to.match(/^rgb\(\d{1,3},\d{1,3},\d{1,3},0\)$/);
	});
});
