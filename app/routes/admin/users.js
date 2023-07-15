import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel(){
       
        console.log("admin before model");

        var value = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => 
            ({accumulator, [key.trim()]: decodeURIComponent(value) }), {});

            console.log("value",value.role);
            
        var role=value.role;
        console.log("onlyadminrole",role);

     if(role ==="1"){
      this.transitionTo("user.tournament");
     }

    },
    result : null,
    
    model: function(){
        var tournament = false;
        var _this = this;
       $.ajax({
        async : false,
            method:'GET',
            url:'http://localhost:8080/SportsTournament/v1/user',

            success:function(result){
                _this.set("result", JSON.parse(result));
                
                },
            
            });
           console.log(tournament);
            return this.get("result");  
        },
});
