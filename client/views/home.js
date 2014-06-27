Template.home.greeting = function () {
  return "Hello, World.";
};

Template.home.campaign = function () {
  return Session.get('campaign');
};

Template.home.percentFunded = function () {
  var message = Messages.findOne({'raw.project.id': Session.get('projectSlug')});
  if (message)
    return message.raw.project;
  else
    return null;
};