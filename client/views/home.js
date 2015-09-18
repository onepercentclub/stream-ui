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
  },
  sliderCls: function () {
    var campaign = Session.get('campaign');
    
    return campaign.image.match(/https:\/\/(.*?)\//)[1].replace(/\./g, '-');
  },
  tenantLogo: function () {
    var campaign = Session.get('campaign'),
        url = campaign.image.match(/https:\/\/(.*?)\//)[1].replace(/\./g, '.'),
        tenantName,
        newUrl;

    switch(true) {
      case /onepercent/.test(url):
        tenantName = 'onepercent';
        break;
      case /utrecht/.test(url):
        tenantName = 'utrecht';
        break;
      case /goes/.test(url):
        tenantName = 'goes';
        break;
      case /breda/.test(url):
        tenantName = 'breda';
        break;
      case /tilburg/.test(url):
        tenantName = 'tilburg';
        break;
      case /almelo/.test(url):
        tenantName = 'almelo';
        break;
      case /gent/.test(url):
        tenantName = 'gent';
        break;
      case /westfriesland/.test(url):
        tenantName = 'west-friesland';
        break;
    }
    newUrl = 'https://' + url + '/static/assets/frontend/'+ tenantName +'/images/logo.svg'
    return newUrl;
  }
});