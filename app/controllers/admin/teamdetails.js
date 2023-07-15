import Ember from 'ember';


export default Ember.Controller.extend({

    controller: Ember.inject.controller('admin'),

    actions: {
        Toshowteam: function(){
            var tournament = false;
            this.transitionToRoute("admin/teamdetails");
            comsole.log(tournament);
       


        },
    }
});
