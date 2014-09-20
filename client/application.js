Router.map(function() {
	this.route('about');
	this.route('home', {
		path : '/'
	})
});

Router.configure({
	layoutTemplate: 'mainLayout'
});