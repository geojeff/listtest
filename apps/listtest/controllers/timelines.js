// ==========================================================================                                                                                                                                                                                            
// ListTest.timelinesController
// ==========================================================================
/*globals ListTest*/

/** 

This controller manages the creation of entry data.

   @extends SC.ArrayController
   @area Jeff Pittman
*/

ListTest.timelinesController = SC.ArrayController.create(
/** @scope ListTest.timelinesController.prototype */ {
  content: [],

  isDaily: YES,
  isHourly: NO,

  nowPosition: null,

  select: function(index) {
    var obj = this.objectAt(index);
    if (!SC.none(obj)) {
      this.selectObject(obj);
    }
  },

  // initialize('day', 365, 182);
  initialize: function(incrementType, numberOfTimelines, nowPosition) {
    var now = SC.DateTime.create().get('milliseconds'),
        start, incrementMilliseconds;

    this.set('nowPosition', nowPosition);

    switch(incrementType) {
      case 'day':
        incrementMilliseconds = 24 * 60 * 60 * 1000;
        break;
      case 'hour':
        incrementMilliseconds = 60 * 60 * 1000;
        break;
    }

    // start at the end time and step back through time, so index 0 is youngest time
    end = now + (incrementMilliseconds * (numberOfTimelines - nowPosition - 1));

    step = end;
    var arr = this.get('content');
    for (var i=0; i<numberOfTimelines; i++) {
      arr.pushObject(SC.DateTime.create(step));
      step -= incrementMilliseconds;
    }
  }

});
        
