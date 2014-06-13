Template.message.helpers({
	formattedDate: function () {
		return moment(this.created).format("dddd, MMMM Do YYYY, h:mm a");
	}
});

Template.message.images = function() {
  return '/img/project-image-2.jpg';
}