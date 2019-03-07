(function ($) {
  $(document).ready(function () {

    var currentUser; //username of currently logged in user

    //Gets the current user's username
    function userNow() {
        $.get('/current-user', function(current_user) {
            currentUser = current_user.username;
            console.log(currentUser + ' is the current user.');
            return currentUser;
        })    
    }
    userNow();
    
    $(document).on("click tap", "#logout", function() {
        console.log('logout button is not working yet!');
    });

    //This is all you need to update to pull in student data
    var data =
      [["1", "Tiger Nixon", "raise hand before speaking"],
      ["2", "Tiger Nixon", "raise hand before speaking"],
      ["3", "Tiger Nixon", "raise hand before speaking"]
      ];

    function getStudents() {
        $.get("/teacher/students", function(dbData) {
          console.log(dbData);
          data = dbData;
          data.forEach((e, i) => {
            return (
              e.push(
                `<form><label><input class="with-gap" value="1" name="group-${i}" type="radio"/>
            <span>Met</span> </label>
            <label><input class="with-gap" value="0" name="group-${i}" type="radio"/>
            <span>Not Met</span></label>
            <label> <input class="with-gap" value="null" name="group-${i}" type="radio"/>
            <span>N/A</span></label></form>`
              )
            )
          });  
        })
      }
      getStudents();

    //This handles the buttons. The console log is logging the events on click and showing the correct value, so you should be able to use this and modify to capture each unique id with value.
    data.forEach((e, i) => {
      return (
        e.push(
          `<form id="student-${i}"><label><input class="with-gap" id="met-${i}" name="group-${i}" type="radio"/>
      <span>Met</span> </label>
      <label><input class="with-gap" id="notMet-${i}" name="group-${i}" type="radio"/>
      <span>Not Met</span></label></form>`
        )
      )
    });

    $(".container").on("click", "#saveData", function (event) {
      for (var i = 0; i < data.length; i++) {
        var met = $(`#met-${i}:checked`).val();
        //var met = $(`#met-${data[i].id}:checked`).val();
        var notMet = $(`#notMet-${i}:checked`).val();
        console.log(i);
        console.log(met);
        console.log(notMet);
        if (met === "on") {
          //ajax call or something to post to db
          //post to student[i] or student.id
          //${i} will change to data[i].id
        }
        //else return 0 instead
      }
    });

    var tableCustomElements = $('#table-custom-elements');
    if (tableCustomElements.length) {
      var table = tableCustomElements.DataTable({
        'data': data,
        'columnDefs': [{
          'targets': 0,
          'searchable': false,
          'orderable': false,
          'className': 'dataTables-checkbox-column',
          /*'render': function (data, type, full, meta){
              return '<label><input class="filled-in" type="checkbox" name="id[]" value="'
                 + $('<div/>').text(data).html() + '"><span></span></label>';
          }*/
        }],
        'language': {
          'search': '',
          'searchPlaceholder': 'Enter search term'
        },
        'order': [3, 'asc'],
        'dom': 'ft<"footer-wrapper"l<"paging-info"ip>>',
        'scrollY': '400px',
        'scrollCollapse': true,
        'pagingType': 'full',
        'drawCallback': function (settings) {
          var api = this.api();

          // Add waves to pagination buttons
          $(api.table().container()).find('.paginate_button').addClass('waves-effect');

          api.table().columns.adjust();
        }
      });

      $('#table-custom-elements_wrapper').on('change', 'input[type=checkbox]', function (e) {
        var parentTR = $(this).parentsUntil('table').closest('tr');
        parentTR.toggleClass('selected', this.checked);
      });

      // Handle click on "Select all" control
      $('#table-custom-elements_wrapper').find('.select-all').on('click', function () {
        // Check/uncheck all checkboxes in the table
        var rows = table.rows({ 'search': 'applied' }).nodes();
        $('input[type="checkbox"]', rows)
          .prop('checked', this.checked)
        $(rows).toggleClass('selected', this.checked);
      });
    }


  });
}(jQuery));
