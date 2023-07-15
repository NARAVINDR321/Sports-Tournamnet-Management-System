import Ember from 'ember';
import $ from 'jquery'; 


export default Ember.Controller.extend({
    team_id : null,
    tournament_id : null,
    user_id: null,

    controller: Ember.inject.controller('login'),
    
    data: Ember.observer(function(){
        return "inside data";
    }),
  

    actions: {

        Tologinpage : function () {
            sessionStorage.clear();
            this.transitionToRoute('/login');
            alert("logged out successfully");
        },

        Toregistersingle : function (param) {

            console.log("in register single function");
            console.log(param);
            console.log("ls"+localStorage.getItem("uid"));
            

            document.cookie="singleid="+param;
            
            
         
            
    
            var person = { 
                "user_id":uid,
                "tournament_id":param,
                "status":0
                
             }
    
            $.ajax({
                url:'http://localhost:8080/SportsTournament/v1/singleparticipation',
                method: 'POST',
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

        Toregisterteam :function (param) {

            this.set('tournament_id',param);

            document.cookie="tournament_id="+param;

            console.log("in register team function");
            // var id=document.cookie;
            // var uid=id[0];
            
            console.log(param);
            // console.log("ls"+localStorage.getItem("uid"));
            
            var person;
            var _this=this
            var teams=$.ajax({
                url:'http://localhost:8080/SportsTournament/v1/tournament/'+param+'/teamparticipation',
                method: 'GET',
                data: JSON.stringify(person),
                dataType: "json",
                async: false,
                success:function(data){

                    console.log(data);  
                    _this.set("teams",data);  
                
                },
                error: function (e, exception) {
                        console.log('Error occured!!' + e + exception);
                        
                    }
                });

            
    
            // only to show team var person = { 
            //     "team_id":this.team_id,
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
            //             alert("Selected team has been added ")
            //         }
            //     });
        },

        Toselectedteam :function (param) {

            console.log("in register selected team function");

            // var team_id : {"team_id" :$('#myForm').val()}

            var team_id = document.getElementById("team").value;

            var team;

            document.cookie="team_id="+team_id;

            var team_name=document.getElementById("teamname").value;

            document.cookie="team_name="+team_name;

            {{if (team_id=="0") {

                console.log("in team name method")

                var person = { 

                    "team_name":team_name,
                 }

                 var teammembers = { 

                    "team_name":team_name,
                    "user_id": localStorage.getItem("uid"),
                
                 }

                 var teamparticipation = { 

                    "team_name":team_id,
                    "tournament_id": this.get("tournament_id"),
                    "status":0
                    
                 }


                 var teamdetailsresponse= $.ajax({
                    url:'http://localhost:8080/SportsTournament/v1/teamdetails',
                    method: 'POST',
                    data: JSON.stringify(person),
                    dataType: "json",
                    async: false,
                    success:function(data){

                        //  need ti team id

                        $.ajax({
                            url:'http://localhost:8080/SportsTournament/v1/teammembers',
                            method: 'POST',
                            data: JSON.stringify(teammembers),
                            dataType: "json",
                            async: false,
                            success:function(data){
            
                                console.log(data);    
                                $.ajax({
                                    url:'http://localhost:8080/SportsTournament/v1/teamparticipation',
                                    method: 'POST',
                                    data: JSON.stringify(teamparticipation),
                                    dataType: "json",
                                    async: false,
                                    success:function(data){
                    
                                        console.log(data);    
                                        alert("Successfully added to team")
                                    
                                    },
                                    error: function (e, exception) {
                    
                                            console.log('Error occured!!' + e + exception);
                                            alert("Registrations completed ")
                                        }
                                
                    
                        });
            
                            
                    }
            });

 },
                    error: function (e, exception) {
    
                            console.log('Error occured!!' + e + exception);
                            alert("Registration for the team is completed ")
                        },

                    });

                        // Also need to insert in team member table with  user id




                        // Also need to insert in team participation table

                        
        
        
        
                     
        
                            $.ajax({
                                url:'http://localhost:8080/SportsTournament/v1/teamparticipation',
                                method: 'POST',
                                data: JSON.stringify(teamparticipation),
                                dataType: "json",
                                async: false,
                                success:function(data){
                
                                    console.log(data);    
                                
                                },
                                error: function (e, exception) {
                
                                        console.log('Error occured!!' + e + exception);
                                        alert("Registrations completed ")
                                    }
                            
                
                        



                    });
        

                
                
            } else {

                console.log("in team existing team registration method")

                var teammembers = { 

                    "team_id":team_id,
                    "user_id": localStorage.getItem("uid"),
                
                 }

                 var teamparticipation = { 

                    "team_name":team_id,
                    "tournament_id": this.get("tournament_id"),
                    "status":0
                    
                 }
                


                 $.ajax({
                    url:'http://localhost:8080/SportsTournament/v1/teammembers',
                    method: 'POST',
                    data: JSON.stringify(teammembers),
                    dataType: "json",
                    async: false,
                    success:function(data){
    
                        console.log(data);    
                    
                    },
                    error: function (e, exception) {
    
                            console.log('Error occured!!' + e + exception);
                            alert("Registrations completed ")
                        }
                    });

                    $.ajax({
                        url:'http://localhost:8080/SportsTournament/v1/teamparticipation',
                        method: 'POST',
                        data: JSON.stringify(teamparticipation),
                        dataType: "json",
                        async: false,
                        success:function(data){
        
                            console.log(data);    
                        
                        },
                        error: function (e, exception) {
        
                                console.log('Error occured!!' + e + exception);
                                alert("Registrations completed ")
                            }
                        });
        
                
            }}}


   
        },

        },
 });