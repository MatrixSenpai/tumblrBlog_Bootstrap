$(document).ready(function() {
  $('.searchWatch').on('keyup', function() {
    if(this.value.length > 1) {
      // check for the activator
      var tester = new RegExp(":");

      if(tester.test(this.val)) {
        // Activate
      }
    }
  });
});
