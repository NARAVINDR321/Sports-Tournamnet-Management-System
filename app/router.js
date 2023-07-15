import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('login');
  this.route('signup');
  this.route('tournaments');
  this.route('admin', function() {
    this.route('users');
    this.route('addtournament');
    this.route('tournament');
    this.route('edittournament');
    this.route('teamdetails');
  });
  this.route('user', function(){
    this.route('edituser');
    this.route('tournament');
  });
});

export default Router;
