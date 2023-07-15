import Ember from 'ember';
import $ from 'jquery'; 


export default Ember.Controller.extend({

    init(){
          var role=localStorage.getItem("role");
          this.set("isuser",role);
    },

    actions: {

        
         
        },
});
