var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var SchemaSample = new mongoose.Schema({
		name: String
});
var SchemaSample2 = new mongoose.Schema({
		name: String
});
var Sample, Sample2;

mongoose.model('Sample2', SchemaSample2); var Sample2 = mongoose.model('Sample2');
mongoose.model('Sample', SchemaSample); var Sample = mongoose.model('Sample');

SchemaSample.path('name').validate(function(v, fn){
		Sample2.find({name: v}, function(err, sample2s){
				console.log(v);
				fn(true);
		});
}, 'my Error');

new Sample({name: 111}).save(function(err){
		if(err){
				console.log(err);
		}else{
				console.log('save');
		}
})

