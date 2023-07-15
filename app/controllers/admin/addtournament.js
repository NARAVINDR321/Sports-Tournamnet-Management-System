import Ember from 'ember';

export default Ember.Controller.extend({

    controller: Ember.inject.controller('admin'),
// will transition to   --- role of user
// if user redirect to admin .

    actions: {
        addTournament: function(){

            console.log(this.get('controller.data'));


            var tournament_details={ "tournament_name": $("#tournament_name").val(),
            "sports_name":$("#sports_name").val(),
            "event_type":$("#event_type").val(),
            "limits":$("#limits").val(),
            "status":$("#status").val(),
        }
        console.log(tournament_details);

            $.ajax({
                url: 'http://localhost:8080/SportsTournament/v1/tournament',
                method: 'POST',
                data: JSON.stringify(tournament_details),
                dataType: "json",
                async: false,
                success: function (resultText) {
                    alert("Tournament added successfully");
                   
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

            this.transitionToRoute('admin.tournament');
    
        }
    },
    
   
});
