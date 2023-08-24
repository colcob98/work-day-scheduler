// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    //Add a listener for click events on the save button.
    $('.saveBtn').on('click', function () {
        var hour = $(this).parent().attr('id');

        var task = $(this).siblings('.description').val();

        // saves to local storage
        localStorage.setItem(hour, task);

        $('#notification').removeAttr('hidden');
    });

    // Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
    var hourCalculate = dayjs().hour();
    $('.time-block').each(function () {
        var row = $(this);
        // variable to store the second, numbered item without the string in "hour-n"
        var rowHour = parseInt(row.attr('id').split('-')[1]);

        // conditional statements to add "past", "present", and "future" classes based on current time
        // time blocks will be color-coded accordingly through the css file
        if (hourCalculate > rowHour) {
            row.addClass('past');
        } else if (hourCalculate === rowHour) {
            row.addClass('present');
        } else if (hourCalculate < rowHour) {
            row.addClass('future');
        };
    });


    //Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements to ensure that saved events
    // persist even on page reload.
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    //Add code to display the current date in the header of the page.
    var currentDate = dayjs().format('dddd, MMMM DD, YYYY');
    $('#currentDay').text(currentDate);
  });