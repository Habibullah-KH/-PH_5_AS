const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');

document.getElementById('card-container');
document.getElementById('history');



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
  enableVisible('history');
  donationBtn.classList.remove('bg-lime-400');
  historyBtn.classList.add('bg-lime-400');

})


//*------------------Input field one---------------------



//* Access data form inputfield


//* card input select
const noakhaliInput = document.getElementById('noakhaliInput');
const totalDonatedAmount = document.getElementById('donatedAmount');
const donateNowBtn = document.getElementById('donateNowBtn');
const mainBalance = document.getElementById('mainBalance');


let sum = 0;

noakhaliInput.addEventListener('input', function(e){

  const numvalue = (e.target.value);

  const donateAmount = parseFloat(numvalue);

  sum = donateAmount

if(sum <= 0){
alert('Amount not found');
e.target.value = '';
  return ;
}
  // console.log(typeof sum, sum, donateAmount);

  
})


//* Donate now button click function
donateNowBtn.addEventListener('click', function(){
  
 const toNum = parseFloat(totalDonatedAmount.innerText);
 const mainBal = parseFloat(mainBalance.innerText);

  if (sum > mainBal) {
   alert('Donation amount larger then available balance! please recharge');
   return;
 }

 let newAmount = toNum + sum;
 totalDonatedAmount.innerText = newAmount;
 
 const availableBal = mainBal - totalDonatedAmount.innerText;

 mainBalance.innerText = availableBal;

  console.log('clicked', sum, newAmount, toNum, availableBal );
  
  if(noakhaliInput.value === ''){

    alert('Please enter a value in the input field.');
    return;
  }



  //* select card title
  document.getElementById('noakhali')

if( noakhaliInput.value <= 0){

  document.getElementById('history').innerHTML += `
  <div class="history-container m-10 border-2 p-10">
    <h1 class="font-bold text-2xl">
     Donation history not found !
    </h1>
    </div>
  `
  return;
}

  document.getElementById('history').innerHTML += `
  
    <div class="history-container m-10 border-2 p-10">

    <h1 class="font-bold text-2xl">
     ${noakhaliInput.value} Taka is ${noakhali.innerText}
    </h1>
  
    <p class="text-clrNutral100 mt-2">
      ${new Date()}
    </p>

  </div>
  `
  // donateNowBtn.showModal()
  document.getElementById('my_modal_1').showModal()

})



//* relode page with modal

// document.getElementById('modalBtn').addEventListener('click', function(){
//   window.location.reload()
// })


//*------------------Input field two---------------------



//* Access data form inputfield

//* card input select
const FiInput = document.getElementById('FiInput');
const FtotalDonatedAmount = document.getElementById('FdonatedAmount');
const FdonateNowBtn = document.getElementById('FdonateNowBtn');

FiInput.addEventListener('input', function(e){

  const numvalue = (e.target.value);

  const donateAmount = parseFloat(numvalue);

  sum = donateAmount

if(sum <= 0){
alert('Amount not found');
e.target.value = '';
  return ;
}
  // console.log(typeof sum, sum, donateAmount);
  
  
})


//* Donate now button click function
FdonateNowBtn.addEventListener('click', function(){
  
  const toNum = parseFloat(FtotalDonatedAmount.innerText);
  const mainBal = parseFloat(mainBalance.innerText);
 
   if (sum > mainBal) {
    alert('Donation amount larger then available balance! please recharge');
    return;
  }
 
  let newAmount = toNum + sum;
  FtotalDonatedAmount.innerText = newAmount;
  
  const availableBal = mainBal - FtotalDonatedAmount.innerText;
 
 
  mainBalance.innerText = availableBal;
 
 
   console.log('clicked', sum, newAmount, toNum, availableBal );
 
   if(FiInput.value === ''){

    alert('Please enter a value in the input field.');
    return;
  }



     //* select card title
  document.getElementById('feni')

  if( FiInput.value <= 0){
  
    document.getElementById('history').innerHTML += `
    <div class="history-container m-10 border-2 p-10">
      <h1 class="font-bold text-2xl">
       Donation history not found !
      </h1>
      </div>
    `
    return;
  }
  
    document.getElementById('history').innerHTML += `
    
      <div class="history-container m-10 border-2 p-10">
  
      <h1 class="font-bold text-2xl">
       ${FiInput.value} Taka is ${feni.innerText}
      </h1>
    
      <p class="text-clrNutral100 mt-2">
        ${new Date()}
      </p>
  
    </div>
    `

      // donateNowBtn.showModal()
  document.getElementById('my_modal_1').showModal()
 })





//*------------------Input field three---------------------



//* Access data form inputfield

//* card input select
const AidInput = document.getElementById('AidInput');
const AidtotalDonatedAmount = document.getElementById('AiddonatedAmount');
const AiddonateNowBtn = document.getElementById('AiddonateNowBtn');

AidInput.addEventListener('input', function(e){

  const numvalue = (e.target.value);

  const donateAmount = parseFloat(numvalue);

  sum = donateAmount

if(sum <= 0){
alert('Amount not found');
e.target.value = '';
  return ;
}
  // console.log(typeof sum, sum, donateAmount);
  
  
})



//* Donate now button click function
AiddonateNowBtn.addEventListener('click', function(){
  
  const toNum = parseFloat(AidtotalDonatedAmount.innerText);
  const mainBal = parseFloat(mainBalance.innerText);
 
   if (sum > mainBal) {
    alert('Donation amount larger then available balance! please recharge');
    return;
  }
 
  let newAmount = toNum + sum;
  AidtotalDonatedAmount.innerText = newAmount;
  
  const availableBal = mainBal - AidtotalDonatedAmount.innerText;
 
 
  mainBalance.innerText = availableBal;
 
 
   console.log('clicked', sum, newAmount, toNum, availableBal );
 
  
   if(AidInput.value === ''){

    alert('Please enter a value in the input field.');
    return;
  }

   
  //* select card title
  document.getElementById('aid')

  if( AidInput.value <= 0){
  
    document.getElementById('history').innerHTML += `
    <div class="history-container m-10 border-2 p-10">
      <h1 class="font-bold text-2xl">
       Donation history not found !
      </h1>
      </div>
    `
    return;
  }
  
    document.getElementById('history').innerHTML += `
    
      <div class="history-container m-10 border-2 p-10">
  
      <h1 class="font-bold text-2xl">
       ${AidInput.value} Taka is ${aid.innerText}
      </h1>
    
      <p class="text-clrNutral100 mt-2">
        ${new Date()}
      </p>
  
    </div>
    `
  // donateNowBtn.showModal()
  document.getElementById('my_modal_1').showModal()
 })