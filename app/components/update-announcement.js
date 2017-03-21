import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    updateForm() {
      this.set('updateForm', true);
    },
    update(announcement) {
      var parms = {
        title: this.get('title'),
        date: this.get('date'),
        body: this.get('body'),

      };
      this.set('updateForm', false);
      this.sendAction('update', announcement, parms);
    }
  }
});
