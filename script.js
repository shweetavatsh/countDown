const days = document.getElementById('days');
const hours =  document.getElementById('hours');
const mins =  document.getElementById('mins');
const sec= document.getElementById('sec');

const updatecountdown =() => {
    const currenttime = new date();
    const timedifference = deadline - currenttime; // millisecond 
// calculate days hours days mins from time difference -->

    let calsecs = math.floor(timedifference/1000)%60;
    let mins = math.floor(timedifference/1000/60)%60;
    let hours = math.floor(timedifference/1000/60/60)%60;
    let days= math.floor(timedifference/1000/60/60/24)%60;

    console.log(days);
}

 
const countdown =(tragetdate) => {
setInterval(() => updatecountdown(tragetDate),1000);

}


const tragetDate = new Date ("june 30 2023 02:25");
  countdown(tragetDate);