App = {
  defaults: {
    skip: 5,
  }
}

Meteor.startup(function () {
  Session.set('limit', App.defaults.skip);

  Deps.autorun(function (computation) {
    Meteor.subscribe('messages', Session.get('limit'), function () {
      if (Session.get('limit') > Messages.find().count())
        Session.set('hideLoadMore', true);
      else
        Session.set('hideLoadMore', false);
    });
  });
});