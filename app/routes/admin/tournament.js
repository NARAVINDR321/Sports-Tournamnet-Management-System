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

        console.log("admin model")
       

        var value = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => 
            ({accumulator, [key.trim()]: decodeURIComponent(value) }), {});

            console.log("value",value.role);
            
        var role=value.role;
        console.log("onlyadminrole",role);


        if(role ==="1"){
            this.transitionTo("login");
            alert("invalid access")
         }
         else{

          var _this = this;
        $.ajax({
        async : false,
            method:'GET',
            url:'http://localhost:8080/SportsTournament/v1/tournament',
            success:function(result){
                _this.set("result", JSON.parse(result));
                
                },
                
            });
            
            return this.get("result");  
           
        }
        
    },
       
       
});
