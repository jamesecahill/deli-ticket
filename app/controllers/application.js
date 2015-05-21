import Ember from 'ember';

export default Ember.Controller.extend({
    counter: 1,
    initializeCounterState: function() {
        var count = localStorage.getItem("counter");
        if (count) {
            this.set("counter", parseInt(count));
        }
    }.on("init"),
    saveCounterState: function() {
        localStorage.setItem("counter", this.get("counter"));
    }.observes("counter"),
    actions: {
        next: function() {
            this.set("counter", this.get("counter") + 1);
            this.send("ding");
        },
        previous: function() {
            if (this.get("counter") > 1) {
                this.set("counter", this.get("counter") - 1);
            }
        },
        ding: function() {
            var dinger = Ember.$("#dinger")[0];
            dinger.pause();
            dinger.currentTime = 0;
            dinger.play();
        }
    }
});
