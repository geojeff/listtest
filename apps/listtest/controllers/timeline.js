// ==========================================================================
// Project:   ListTest.timelineController
// ==========================================================================
/*globals ListTest */

/** @class

  The controller for a single timeline.

  @extends SC.Object
*/
ListTest.timelineController = SC.ObjectController.create(
/** @scope ListTest.timelineController.prototype */ {
	contentBinding: "ListTest.timelinesController.selection",
	contentBindingDefault: SC.Binding.oneWay().single(),

  isEditing: NO,

	beginEditing: function() {
		this.set("isEditing", YES);
	},

	endEditing: function() {
		this.set("isEditing", NO);
		ListTest.store.commitRecords();
	}

});

