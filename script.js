function getTime(){
  const secondHand = document.querySelector(".sec-hand");
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");

  const now = new Date(); //get date
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const secondDegrees =((seconds/60) * 360) + 90; //we rotate default 90deg in css so 90deg added here
  const hoursDegrees =((hours/12) * 360) + 90;
  const minuteDegrees =((minutes/60) * 360) + 90;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`; //template literals
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;
  // console.log(seconds);
}
setInterval(getTime,1000);
