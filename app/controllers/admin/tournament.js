import Ember from 'ember';
import $ from 'jquery'; 


export default Ember.Controller.extend({

    actions: {

        Tologinpage :function () {
            sessionStorage.clear();
            //this.transitionToRoute('/login');
            alert("logged out successfully");
        },

        Toshowtournament : function (param) {

            

            console.log("in Toshowtournament function");
            console.log(param);
            

            var person = { 
                
                "tournament_id":param,
                
                
             }
    
            $.ajax({
                url:'http://localhost:8080/SportsTournament/v1/tournament/'+param,
                method: 'GET',
                data: JSON.stringify(person),
                dataType: "json",
                async: false,
                success:function(data){

                    console.log(data);    
                
                },
                error: function (e, exception) {
                        console.log('Error occured!!' + e + exception);
                        alert("Already Registered ")
                    }
                });



        },

        Toedittournament :function (param) {
            console.log("in register team function");
            console.log(param);
            localStorage.setItem("tid",param );
            console.log("ls"+localStorage.getItem("tid"));
            this.transitionToRoute("/admin/edittournament/");

            // var person = { 
            //     "team_id":this.get("user_id"),
            //     "tournament_id": param,
            //     "status":0
                
            //  }
    
            // $.ajax({
            //     url:'http://localhost:8080/SportsTournament/v1/teamparticipation',
            //     method: 'POST',
            //     data: JSON.stringify(person),
            //     dataType: "json",
            //     async: false,
            //     success:function(data){

            //         console.log(data);    
                
            //     },
            //     error: function (e, exception) {
            //             console.log('Error occured!!' + e + exception);
            //             // alert("Registrations completed ")
            //         }
            //     });
        },

        Todeletetournament :function (param) {
            
            console.log("in delete tournament function");
            $.ajax({
                url:'http://localhost:8080/SportsTournament/v1/tournament/'+param,
                method: 'DELETE',
                async: false,
                success:function(data){
                    alert("Tournament deleted successfully");

                    console.log(data);    
                
                },
                error: function (e, exception) {
                        console.log('Error occured!!' + e + exception);
                    
                    }
                });
        },
        Toshowteam: function(){
            var tournament = false;
            this.transitionToRoute('admin/teamdetails');
            comsole.log(tournament);
       


        },



    }

    
 


});