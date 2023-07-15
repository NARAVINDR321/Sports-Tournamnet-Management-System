import Ember from 'ember';
import $ from 'jquery'; 


// willtransitionto(){

// }

// oninit check login details ----



export default Ember.Controller.extend({
    actions: {
        
        login: function () {    
            var json={"name":$('#name').val(), pwd:$('#pwd').val() };
            var uid;
            var role;

            var data;
            var to=this;
            var cook;
            var response = $.ajax({
                url: 'http://localhost:8080/SportsTournament/v1/login',
                method: 'POST',
                data: JSON.stringify(json),
                dataType: "json",
                async: false,
                success: function (resultText) {
                  
                   uid=JSON.stringify(resultText.user_id)
                   role=JSON.stringify(resultText.role)

                    document.cookie = "uid="+uid;
                    document.cookie = "role="+role;
                    
                    localStorage.setItem("uid",uid);
                    localStorage.setItem("role",role);

                    console.log(document.cookie);

                    return resultText;
                   
                }
                
                }
            );
            if (JSON.parse(response.responseText).role !== "null") {
                data = JSON.parse(response.responseText);
                
                this.set('data',data);



            //    admin role =0,
                if (data.role === 0) {
                    to.transitionToRoute('/admin/tournament/');
                   
                    var admin=data.role;
                    
                    
                }
                else if (data.role === 1) {
                    to.transitionToRoute('/user/tournament');
                    
                    
                }
               
            
                else { 
                alert("Invalid username,password");
                }
           
        }
        this.set('data',data);
        var userid=this.get('data.user_id');
        this.set("userid",userid)
        // console.log(this.get("userid"));
        // console.log(this.get("data.name"));
        
        },
        backToHome: function(){
        },

        backToLogin: function(){
            alert(" Logout Completed");
        },
        backToSignup: function(){
            this.transitionToRoute('signup');
        }
    }
});
