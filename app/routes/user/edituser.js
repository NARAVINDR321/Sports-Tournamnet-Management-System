import Ember from 'ember';

export default Ember.Route.extend({

    beforemodel(){

        var value = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => 
            ({accumulator, [key.trim()]: decodeURIComponent(value) }), {});

            console.log("value",value.role);
            
        var role=value.role;
        console.log("onlyadminrole",role);
      
     if(role ==="0"){
        this.transitionTo("admin.tournament");
     }

    },
});
