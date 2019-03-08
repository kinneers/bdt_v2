(function ($) {
  $(document).ready(function () {

    var currentUser; //username of currently logged in user

    //Gets the current user's username
    function userNow() {
      $.get('/current-user', function (current_user) {
        currentUser = current_user.username;
        console.log(currentUser + ' is the current user.');
        return currentUser;
      })
    }
    userNow();

    //This is all you need to update to pull in student data
    // var data =
    //   [["1", "Tiger Nixon", "raise hand before speaking"],
    //   ["2", "Tiger Nixon", "raise hand before speaking"],
    //   ["3", "Tiger Nixon", "raise hand before speaking"]
    //   ];

    var data = [];

    function getStudents() {
      $.get("/teacher/students", function (dbData) {
        console.log(dbData);
        for (var i = 0; i < dbData.length; i++) {
          var studArray = [];
          var order = (i + 1);
          var name = dbData[i].studentname;
          var bx = dbData[i].behavior;
          studArray.push(order, name, bx);
          data.push(studArray);
        }
        console.log("DATA: ", data);

        // e = element,  i = index
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
        $(".container").on("click", "#saveData", function (event) {
          console.log(data);
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
          $(".with-gap").prop("checked", false);
        });
      })

    }
    getStudents();
  });
}
  (jQuery));
