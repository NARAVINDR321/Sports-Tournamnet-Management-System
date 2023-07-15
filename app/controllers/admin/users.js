import Ember from 'ember';


export default Ember.Controller.extend({

    controller: Ember.inject.controller('admin'),

    actions: {
        showuser: function(){
            var tournament = false;
            this.transitionToRoute('admin/users');
            comsole.log(tournament);
       


        }
    }

    
});
