$(".track").click(function() {
     console.log("button clicked");
     tracker = ga.getAll()[0];
     tracker.send('event', 'button', 'click');
});
