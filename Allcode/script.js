const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');

document.getElementById('card-container');



//* Donate button click to visible section
donationBtn.addEventListener('click', function(){
  console.log('clicked');
  enableVisible('card-container');
  donationBtn.classList.add('bg-lime-400');
  historyBtn.classList.remove('bg-lime-400');
})

//* History button click to visible section
historyBtn.addEventListener('click', function(){
  console.log('clicked');
  enableVisible('card-container');
  donationBtn.classList.remove('bg-lime-400');
  historyBtn.classList.add('bg-lime-400');
})


//* Access data form inputfield


//* card input select
const noakhaliInput = document.getElementById('noakhaliInput');
const donatedMoney = document.getElementById('donatedAmount');

noakhaliInput.addEventListener('input', function(e){

  const value = e.target.value;

  const tovalue = parseFloat(value);


  parseFloat(donatedMoney.innerText);
  
 donatedMoney.innerText += tovalue;
   console.log(typeof value);

})