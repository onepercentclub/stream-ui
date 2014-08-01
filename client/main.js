App = {
    defaults: {
        skip: 20
    }
}

interval = null;

Meteor.startup(function () {
    Session.set('limit', App.defaults.skip);
    Session.setDefault('projectSlugs', []);

    if (LEAP_ENABLED) {

        LeapManager.init({
            useHands: false,
            maxCursors: 1,
            enableHoverTap: true,
            enablePressDown: true,
            enableTouchScrolling: true,
            enableScrollbarScrolling: false,
            interactiveSelector: "a",
            enableMetaGestures: false,
            enableDefaultMetaGestureActions: false,
            simulateWithMouse:false,
            mouseCursorConfig: {
                easing:.2
            },
            greedySelector: "body"
        });

    }

    Deps.autorun(function (computation) {
        Meteor.subscribe('messages', {limit: Session.get('limit')}, function (response) {
            if (Session.get('limit') > Messages.find().count())
                Session.set('hideLoadMore', true);
            else
                Session.set('hideLoadMore', false);
        });
    });

    Deps.autorun(function (computation) {
        Session.set('campaignSlugs', Messages.find().map( function (message) {
            if (message.raw && message.raw.project)
                return message.raw.project.id;
        }));

        Session.set('campaignSlug', Session.get('campaignSlugs')[0]);
    });

    Deps.autorun(function (computation) {
        var message = Messages.findOne({'raw.project.id': Session.get('campaignSlug')});
        if (message && message.raw && message.raw.project)
            Session.set('campaign', message.raw.project);
    });

    Deps.autorun(function (computation) {
        // Clear old timer
        if (interval) Meteor.clearInterval(interval);

        var slugs = Session.get('campaignSlugs'),
            index = 0;

        // No timer needed if there are no slugs
        if (!slugs.length) return;

        var timeLeft = function () {
            Session.set('campaignSlug', slugs[index]);
            if (index < slugs.length - 1) {
                index++;
            } else {
                index = 0;
            }
        }

        // Set timer for 10 seconds
        interval = Meteor.setInterval(timeLeft, 60*1000);
    });
});
