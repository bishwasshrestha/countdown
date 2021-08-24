const countdown = () => {
  //get the date in future, the date of openning
  const countDate = new Date('August 24, 2022  15:57:00').getTime(); 

  //get current date
  const now = new Date().getTime(); 
  //get the difference 
  const gap = countDate - now; //milliseconds

  //time in perspective
  var seconds = 1000 //milliseconds
  var minutes = seconds * 60 //milliseconds
  var hours = minutes * 60 //milliseconds
  var days = hours * 24 //milliseconds

  //getting the time in day, hour, min and seconds
  //use math.floor to get a round figure
if(gap >= 0){
  const textDay = Math.floor(gap/days);
  const textHour = Math.floor((gap % days)/hours);
  const textMinute = Math.floor((gap % hours)/minutes);
  const textSecond = Math.floor((gap % minutes)/seconds)

  document.querySelector('.Day').innerText = textDay;
  document.querySelector('.Hour').innerText = textHour;
  document.querySelector('.Minute').innerText = textMinute;
  document.querySelector('.Second').innerText = textSecond;
  }else{

  }
}
setInterval(countdown,1000);
