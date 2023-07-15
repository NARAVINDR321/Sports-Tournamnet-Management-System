import Ember from 'ember';

export default Ember.Controller.extend({

    controller: Ember.inject.controller('admin'),

    actions: {
        editTournament: function(){

            console.log(this.get('controller.data'));
            console.log(this.get('editTournament'));
           
            
            
            console.log("ls1"+localStorage.getItem("tid"));
           
            

            var tournament_details={ 

            "tournament_name": $("#tournament_name").val(),
            "sports_name":$("#sports_name").val(),
            "event_type":$("#event_type").val(),
            "limits":$("#limits").val(),
            "status":$("#status").val(),

        }
            // console.log(tournament_details);
            // console.log(tid);


            $.ajax({
                url: 'http://localhost:8080/SportsTournament/v1/tournament/'+localStorage.getItem("tid"),
                method: 'PUT',
                data: JSON.stringify(tournament_details),
                dataType: "json",
                async: false,
                success: function (resultText) {
                    alert("Tournament edited successfully");
                   
                    return resultText;
                    
                },
                
                
            });

            $("#result").text("Successfully added the tournament");
            setTimeout(2000);
            this.Toadmin();
        },
        backToHome: function(){
            console.log(this.get('controller.data'));
            this.Toadmin();
        },
        Toadmin(){
            this.transitionToRoute('admin.tournament');
    
        }
    },
    
   
});
