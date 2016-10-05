Meteor.startup(function(){
	if (Info.find().fetch().length == 0) {
		console.log("adding documents to the Info collection")
		Info.insert({name:"Hillary",party:"Democratic"});
		Info.insert({name:"Donald",party:"Republican"});
		Info.insert({name:"Jill",party:"Green"});
		Info.insert({name:"Gary",party:"Libertarian"});

	}
});
