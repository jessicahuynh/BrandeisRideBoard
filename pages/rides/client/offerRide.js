Session.set("summary",false);

Template.offerRideForm.helpers({
  rides: function(){
    // we get all of the rides from the Rides collection
    // and we order them by date (increasing) and by time (increasing)
    var theRides = Rides.find({},{sort:{date:1,time:1}});
    return theRides;
  }
})


Template.offerRideForm.events({
  "submit": function(event){
    event.preventDefault(); // this keeps us from going to a new page when we hit the submit button
    // now we use jQuery to read the values of all of thie input elements on the offerRideForm template
    var date = $("#date").val();
    var time = $("#time").val();
    var destination = $("#destination").val();
    var origin = $("#origin").val();
    var name = $("#name").val();
    var cell = $("#cell").val();
    // next we get the id of the logged in user
    var who = Meteor.userId();
    // finally we put all of this information into a JSON object
    var ride = {name:name,cell:cell,date:date,time:time,destination:destination,origin:origin,who:who};
    // we print out the object just to make sure its OK
    console.dir(ride);
    // and we insert the object into the Rides collection on the server
    Rides.insert(ride);
  },
});

Template.showRide.helpers({
  isOwner:function(){
    return Meteor.userId()==this.r.who;
  }
})

Template.showRide.events({
  "click #delete": function(event){
    // first we print out a couple of variables to see what they contain
    console.dir(event);
    console.dir(this);
    // next we check to see if the user "owns" the ride
    if ( Meteor.userId()==this.r.who){
      // if so, then we remove the ride from the collection
      Rides.remove(this.r._id);
    }
  },
})
