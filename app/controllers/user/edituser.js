import Ember from 'ember';

export default Ember.Controller.extend({

    controller: Ember.inject.controller('user'),

    actions: {
        editUser: function(){

            console.log(this.get('controller.data'));
            console.log(this.get('editTournament'));
           
            
            
            console.log("ls1"+localStorage.getItem("uid"));
           
            

            var tournament_details={ 

            "name": $("#name").val(),
            "pwd":$("#pwd").val(),
            "age":$("#age").val(),
            "address":$("#address").val(),
            "blood_group":$("#blood_group").val(),
            
        }
            console.log(tournament_details);
            console.log(localStorage.getItem("uid"));


            $.ajax({
                url: 'http://localhost:8080/SportsTournament/v1/user/'+localStorage.getItem("uid"),
                method: 'PUT',
                data: JSON.stringify(tournament_details),
                dataType: "json",
                async: false,
                success: function (resultText) {
                    alert("User edited successfully");
                   
                    return resultText;
                    
                },
                
                
            });

           
            setTimeout(2000);
            this.Toadmin();
        },
        backToHome: function(){
            console.log(this.get('controller.data'));
            this.Toadmin();
        },
        Toadmin(){
            this.transitionToRoute('/user/tournament');
    
        }
    },
    
    
});
