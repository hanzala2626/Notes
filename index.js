

function newYear() {
    let timeToNewYear = new Date('13 june,2022,09:17:00').getTime();
    let currentDate = new Date().getTime();
    
    
   let gap = timeToNewYear-currentDate;
    
    let second = 1000;
    let minute = second*60;
    let hour = minute*60;
    let day = hour*24;

    let d = Math.floor(gap/(day));
    let h = Math.floor((gap%(day))/(hour));
    let m = Math.floor((gap%(hour))/(minute));
    let s = Math.floor((gap%(minute))/(second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText =m;
    document.getElementById('second').innerText = s; 

    
if(m<2){
    let message = document.getElementById('alertMessage');

      message.style.color = ('red')
        message.innerHTML=("!!! you have very Less Time")
  }

  if(s<=0){
    let message = document.getElementById('alertMessage');
 
    clearInterval(intervaal);
      message.innerHTML=('time Ended')

document.getElementById('day').innerText = 0;
    document.getElementById('hour').innerText = 0;
    document.getElementById('minute').innerText =0;
    document.getElementById('second').innerText = 0; 
  }


}
  

let intervaal = setInterval(function(){
    newYear();
},1000)


