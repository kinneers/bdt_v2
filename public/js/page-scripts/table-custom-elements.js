(function ($) {
  $(document).ready(function () {

    var currentUser; //username of currently logged in user

    //Gets the current user's username
    function userNow() {
      $.get('/current-user', function (current_user) {
        currentUser = current_user.username;
        console.log(currentUser + ' is the current user.');
        $('#username-container').text(currentUser);
        return currentUser;
      });
    }
    userNow();

    var data = [];
    var dbDataContainer = [];
    var bxId = [];

    function getStudents() {
      $.get("/teacher/students", function (dbData) {
        // console.log(dbData);
        dbDataContainer = dbData;
        for (var i = 0; i < dbData.length; i++) {
            var studArray = [];
            var order = (i + 1);
            var name = dbData[i].studentname;
            var bx = dbData[i].behavior;
            var eachId = dbData[i].id;
            bxId.push(eachId);
            studArray.push(order, name, bx);
            data.push(studArray);

            var sidebar = `<li class="bold waves-effect"><a class="collapsible-header">${name}<i class="material-icons chevron">chevron_left</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><button id="${eachId}" class="waves-effect">${bx}<i class="material-icons">web</i></button></li>
                </ul>
              </div>
            </li>`;
            $(".collapsible-accordion").append(sidebar);
        }
        
        $('<button>').on('click tap', function() {
            console.log('button clicked');
        })
        // $.post(/)

        // e = element,  i = index
        data.forEach((e, i) => {
          return (
            e.push(
              `<form id="${dbData[i].id}"><label><input class="with-gap" id="met-${dbData[i].id}" name="group-${dbData[i].id}" type="radio"/>
      <span>Met</span> </label>
      <label><input class="with-gap" id="notMet-${dbData[i].id}" name="group-${dbData[i].id}" type="radio"/>
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
      })
      $(".container").on("click", "#saveData", function (event) {
        //console.log(data);
        for (var i = 0; i < dbDataContainer.length; i++) {
          var met = $(`#met-${dbDataContainer[i].id}:checked`).val();
          //var met = $(`#met-${data[i].BehaviorId}:checked`).val();
          var notMet = $(`#notMet-${dbDataContainer[i].id}:checked`).val();
        //   console.log(dbDataContainer[i].id);
        //   console.log(met);
        //   console.log(notMet);

          var body = {
            BehaviorId: dbDataContainer[i].id,
          };
          if (met === undefined && notMet === undefined) {
            // eslint-disable-next-line no-console
            console.log('One or more behaviors was not rated');
          }
          if (met === "on") {
            //post to student[i] or student.id
            //${i} will change to data[i].id 
            body.behavInfo = 1;
          }
          else {
            body.behavInfo = 0;
          }
          $.post('/ratings', body, function (req, res) {
            // console.log(body);
            // console.log(res);
          });

        }
        $(".with-gap").prop("checked", false);
      })
    }
    getStudents();


    function makeChart() {
        //$.get("/chartdata", function (chartData) {

            //GET THE DATA
            var sName = "Jodi 'Sprit Fingers' McGee";
            var bxDefinition = "Learn to be a pirate";
            $('#title').text(sName + ': ' + bxDefinition);
            //Create chart for behavior
            //Note that the value for getElementById must come from the dynamically added HTML 
            var ctx = document.getElementById("ourAmazingChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6'],
                    datasets: [{
                        label: 'We will put something good here',
                        data: [50, 65, 70, 90, 82, 100],
                        backgroundColor: [
                            'rgba(80, 58, 88, 0.2)',
                        ],
                        borderColor: [
                            'rgba(80, 58, 88, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                max: 100
                            }
                        }]
                    }
                }
            });
        //});
    }

  });
})(jQuery);