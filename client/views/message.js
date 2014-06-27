Template.message.helpers({
	formattedDate: function () {
		return moment(this.created).format("dddd, MMMM Do YYYY, h:mm a");
	},
  hideMessage: function () {
    return this.raw && this.raw.project && this.raw.project.id == Session.get('campaign').id;
  },
  amount: function () {
    return this.raw && this.raw.amount;
  }
});

Template.message.image = function() {
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