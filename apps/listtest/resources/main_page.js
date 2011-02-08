// ==========================================================================
// Project:   ListTest - mainPage
// ==========================================================================
/*globals ListTest */

ListTest.mainPage = SC.Page.design({

  mainPanel: SC.MainPane.design({
    childViews: 'timelineView'.w(),

    timelineView: SC.View.design({
      layout: { left: 0, width: 175, top: 0, bottom: 0 },
      childViews: "timelineList".w(),
  
      timelineList: SC.ScrollView.design({
        layout: { left: 0, right: 0, top: 0, bottom: 0},
        //borderStyle: SC.BORDER_NONE,
        hasHorizontalScroller: NO,
        hasVerticalScroller: YES,
        //verticalOverlay: YES,
  
        contentView: SC.ListView.design({
          //layout: { left: 0, width: 30, top: 0, bottom: 32},
          contentBinding: "ListTest.timelinesController.arrangedObjects",
          selectionBinding: "ListTest.timelinesController.selection",
          contentValueKey: "day",

          canReorderContent: NO,
          canDeleteContent: NO,
          rowHeight: 18
        })
      }) // timelineList
    }) // timelineView
  }) // mainPane
}); // mainPage
