import Ember from 'ember';

export default Ember.Route.extend({
   
    
    model(){
        if(sessionStorage.getItem('user_id') != null){
            this.transitionTo('/user/');
        }
        else if(sessionStorage.getItem('admin_id') != null){
            this.transitionTo('/admin/tournament');
        }
       
    }




});
