Template.donation.helpers({
    formattedDate: function () {
        return moment(this.created).fromNow();
    },
    selectedMessage: function () {
        return this.raw && this.raw.project && this.raw.project.id == Session.get('campaign').id;
    },
    amount: function () {
        return this.raw && this.raw.amount.match(/(\d+)\.*/)[1];;
    },
    donor: function () {
        if (this.raw && this.raw.user && this.raw.user.full_name) {
            return  this.raw.user.full_name;
        }
    },
    projectImage: function () {
        return this.raw.project.image;
        if (this.raw && this.raw.project && this.raw.project.image) {
            return this.raw.project.image;
        }
    },
    ownerImage: function () {
        return this.raw.project.owner.avatar;
    },
    labelCls: function () {
        return this.raw.project.image.match(/https:\/\/(.*?)\//)[1].replace(/\./g, '-');
    }
});

Template.donation.image = function() {
    if (!this.raw || !this.raw.user)
        return ''

    var raw = this.raw,
        user = raw.user;

    if (user && user.avatar) {
        return user.avatar;
    } else if (raw.project.image) {
        return raw.project.image;
    } else {
        return '';
    }
}
Template.donation.events({
    'click': function (event, template) {
        Session.set('campaign', this.raw.project);
    }

});