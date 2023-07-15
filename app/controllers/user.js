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

            // document.cookie = "role=; expires=Thu Oct 20 2022 13:10:21 GMT+05:30",

            this.transitionToRoute('/login');
            alert("logged out successfully");
        },
        Touserhome :function () {

            var value = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) => 
            ({accumulator, [key.trim()]: decodeURIComponent(value) }), {});

            console.log("value",value.role);
            this.transitionToRoute('/user/tournament');
            console.log("user home");
        },

        Touseredit:function () {
           
            this.transitionToRoute('/user/edituser');
            console.log("user home");
        },



        
        },
 });