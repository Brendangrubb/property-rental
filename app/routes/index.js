import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
    rental: this.store.findAll('rental'),
    announcement: this.store.findAll('announcement')
    }
  },

  actions: {
    saveRental(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
