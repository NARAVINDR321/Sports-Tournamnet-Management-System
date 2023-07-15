import Ember from 'ember';
import $ from 'jquery'; 


export default Ember.Controller.extend({

    controller: Ember.inject.controller('login'),

    data: Ember.observer(function(){
        return "inside data";
    }),

    actions: {
       

        Tologinpage : function () {
            sessionStorage.clear();

            alert("logged out successfully");
            
            // document.cookie = "role=; expires=Thu Oct 20 2022 13:10:21 GMT+05:30",
            this.transitionToRoute('/login');

            // document.cookie = “uid=; expires=Thu Oct 20 2022 13:10:21 GMT+05:30",
           

           
            
        },
    
        Toadminuser: function(){

        // role=document.cookie();
        this.transitionToRoute('admin.users');
        console.log("adminuser page");
       
    },
         Toaddtournament: function(){
        this.transitionToRoute('/admin/addtournament');
        
        console.log('/admin/addtournament');
    },
        Toshowteam: function(){
        
        this.transitionToRoute('/admin/teamdetails');
        



    },

    viewUers :function () {
        

        this.set('isTournament',false);
       
        console.log("users clicked");
        this.set('user', true);
        var readers = $.ajax({
            url: 'http://localhost:8080/SportsTournament/v1/login',
            method: 'GET',
            async: false,
            success: function (resultText) {
                return resultText;
            },
            
            
        });

        readers = JSON.parse(readers.responseText);
       
        console.log(this.get('isTournament'));
    },
    Toadminpage :function(){

        this.transitionToRoute('/admin/tournament');
       

    },

    


    


    }

    

});
