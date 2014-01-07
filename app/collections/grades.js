define(['backbone'],
function(Backbone) {
  var Grades = Backbone.Collection.extend({
    initialize: function(models, options) {
      this.urlParams = '';
      if(options.department) {
        this.urlParams += '/' + options.department.toLowerCase();
      }
      if(options.course) {
        // TODO - Change '.' to '/', used for testing purposes
        this.urlParams += '/' + options.course.toLowerCase(); //Course can have letters e.g: 1211k
      }
      if(options.profId) {
        this.urlParams += '/' + options.profId;
      }
    },
    /*
      FOR GRUNT TESTING /app/api/ is used over /api (static files stored in /app/api/...)
    */
    url : function() {
      return 'http://localhost:3000/api/grade' + this.urlParams;
      // return '/app/api/grades' + this.urlParams;
    },
    parse : function(res, xhr) {
      return res;
    }
  });
  return Grades;
});

// var volvos = new SearchQuery([], {query:'volvo'});
// volvos.fetch();