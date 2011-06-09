var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Sample = new mongoose.Schema({
		name: String
});
Sample.pre('save',
					 function(next){
							 next();
							 process.nextTick(function(){
									 setTimeout(function(){
											 console.log('pre 1');
									 },1000);
							 });
					 });
Sample.pre('save',
					 function(next){
							 console.log('pre 2');
							 setTimeout(next, 1000);
					 });
Sample.pre('save',
					 function(next){
							 console.log('pre 3');
							 setTimeout(next, 1000);
					 });
mongoose.model('Sample', Sample); Sample = mongoose.model('Sample');

new Sample({name: "hoge"}).save(function(err){
		if(err)
				console.log(err);
		console.log('save');
})

