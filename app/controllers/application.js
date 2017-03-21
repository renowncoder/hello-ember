import Ember from 'ember';

export default Ember.Controller.extend({
  number: 0,
  actions: {
    increment() {
      var number = this.get('number');
      this.set('number', number+1);
    } 
  }
});
