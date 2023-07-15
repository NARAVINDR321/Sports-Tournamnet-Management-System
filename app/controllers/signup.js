import Ember from 'ember';
import $ from 'jquery'; 

export default Ember.Controller.extend({

    actions: {

       

        signUp:function(){
            
            var role = 0;
            // admin =0
            if(document.getElementById("admin").checked){
                role = 0;
            }
            else if(document.getElementById("user").checked){
                role = 1;
            }
            
            var person = { 
                "name":$('#name').val(),
                "pwd":$('#pwd').val(),
                "age":$('#age').val(),
                "address":$('#address').val(),
                "blood_group":$('#blood_group').val(),
                "role" : role
             }
    
            
           
            
            $.ajax({
                url:'http://localhost:8080/SportsTournament/v1/user',
                method: 'POST',
                data: JSON.stringify(person),
                dataType: "json",
                async: false,
                success:function(data){
                    console.log(data); // eslint-disable-line no-console
                },
            
            });

            
        },
        
        Tologinpage : function () {
            this.transitionToRoute('login');
        }
       
    },
    
    

});
