Template.message.helpers({
	formattedDate: function () {
		return moment(this.created).format();
	}
})