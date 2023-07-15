import Ember from 'ember';

export default Ember.Route.extend({
    result : null,
    tournament_id :null,
    user_id :null,

    beforeModel(){
       

        console.log("user before model user check");

        var value = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => 
            ({accumulator, [key.trim()]: decodeURIComponent(value) }), {});

            console.log("value",value.role);
            
        var role=value !== null ? value.role : null;
        console.log("onlyadminrole",role);

     if(role ==="0" ){
        this.transitionTo("admin.tournament");
     }
     else if(role==="null"){
     this.transitionTo("login");
     }

    },
    
    model: function(){

    
        
        // console.log(this.controllerFor('login').get('data'));

        var _this = this;
        $.ajax({
        async : false,
            method:'GET',
            url:'http://localhost:8080/SportsTournament/v1/tournament',
            success:function(result){
                _this.set("result", JSON.parse(result));
                // tournament_id = result.tournament_id;
                
                },
                
            });
            
            return this.get("result");  
           
        }

    
       
});

