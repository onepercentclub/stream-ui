Template.home.greeting = function () {
  return "Hello, World.";
};

Template.home.campaign = function () {
  return Session.get('campaign');
};

Template.home.helpers({
  percentFunded: function () {
    var campaign = Session.get('campaign');

    if (campaign)
      return Math.round(campaign.amount_donated / campaign.amount_asked * 100);
    else
      return null;
  }
});