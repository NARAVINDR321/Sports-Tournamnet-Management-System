import Ember from 'ember';
import $ from 'jquery'; 


export default Ember.Route.extend({

    beforeModel(){

        var value = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => 
            ({accumulator, [key.trim()]: decodeURIComponent(value) }), {});

            console.log("value",value.role);

            console.log("before model role ",role);
            
        var role=value.role;
       
       
     if(role ==="1"){

        this.transitionTo("user.tournament");
     }

    },

    model(params) {

    const { user_id } = params;
    this.set('user_id', user_id);
    sessionStorage.setItem('user_id', user_id);
    },

    setupController: function (controller) {
        controller.set('data', this.get('data'));
        controller.set('user_id', this.get('user_id'));
        // controller.set("role",this.get(role));
        
    },

});