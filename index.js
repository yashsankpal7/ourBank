function time() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";
  
  if (hour > 12) {
      hour -= 12;
      am_pm = " PM";
  }
  if (hour == 0) {
      hr = 12;
      am_pm = " AM";
  }
  
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  
  let currentTime = hour + ":" 
  + min + ":" + sec + am_pm;
  
  document.title = currentTime;
}
window.setInterval(time, 1000);





function change(params) {
  let fixedRate = {
    'home':7,
    'car':9,
    'personal':12
  }

  let fixedYears = {
    'home':25,
    'car':7,
    'personal': 5
  }

  document.forms['Loan']['roi'].value = fixedRate[document.forms['Loan']['typeSelect'].value]   

  document.forms['Loan']['duration'].min = 1
  document.forms['Loan']['duration'].max = fixedYears[document.forms['Loan']['typeSelect'].value]
}

function calc(params) {
  
  let p = parseInt(document.forms['Loan']['amt'].value)

  let r = parseInt(document.forms['Loan']['roi'].value)

  let n = parseInt(document.forms['Loan']['duration'].value)

  document.forms['Loan']['emi'].value =  p*r*(Math.pow(1+r, n))/(Math.pow(1+r,n)-1);

}