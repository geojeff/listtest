// ==========================================================================
// Project:   ListTest
// ==========================================================================
/*globals ListTest */

ListTest.main = function main() {

  ListTest.timelinesController.initialize('day', 365, 182);
  ListTest.timelinesController.select(182);

  ListTest.getPath('mainPage.mainPanel').append();
};

function main() { ListTest.main(); }
