const talkingCalendar = function(date) {

  var month = ["January ", "February ", "March ", "April ", "May" , "June ", "July ", "August ", "September ", "October ", "November ", "December "];
  var calendar = "";
  
  var int = date.split('/');
  //return int;
  
  for (var i = 0; i < month.length; i++) {
    if (i == int[1] - 1) {
      calendar += month[i]
    }
  } 
  if (int[2][0] == 0) {
      if (int[2][1] == 1) {
      calendar += "1st, " + int[0];
    } else if (int[2][1] == 2) {
      calendar += "2nd, " + int[0];
    } else if (int[2][1] == 3) {
      calendar += "3rd, " + int[0];
    } else {
      calendar += int[2] + "th, " + int[0];
    }
  }
    else if (int[2][1] == 1) {
    calendar += int[2][0] + "1st, " + int[0];
  } else if (int[2][1] == 2) {
    calendar += int[2][0] + "2nd, " + int[0];
  } else if (int[2][1] == 3) {
    calendar += int[2][0] + "3rd, " + int[0];
  } else {
    calendar += int[2] + "th, " + int[0];
  }

  return calendar;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));



//December 2nd, 2017