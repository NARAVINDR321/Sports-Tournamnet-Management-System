import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel(){
        var value = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => 
            ({accumulator, [key.trim()]: decodeURIComponent(value) }), {});

            console.log("value",value.role);

        var role=value.role;
        console.log("onlyuserrole",role);
        console.log("before model role ",role);

       
        if(role ==="0"){
        this.transitionTo("admin.tournament");
     }

    },
    
       
});

