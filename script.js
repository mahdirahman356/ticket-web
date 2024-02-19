
let seat = document.getElementsByClassName('seats-select')
let discountText = "";

for(const seats of seat){
    seats.addEventListener('click',function(event){
        event.target.classList.add('bg-[#1DD111]')
        event.target.classList.add('text-white')

        // seat-select-count
        let selectCount = document.getElementById('select-count')
        let selectCountInner = selectCount.innerText
        let selectCountNum = parseInt(selectCountInner)
        let selectCountUp = selectCountNum + 1
        let innerIs = selectCount.innerText = selectCountUp

         // select only fore
         if(innerIs > 4){
            let selectCount = document.getElementById('select-count')
            selectCount.innerText = 4;
            alert ('you can select only four seats')
            seats.classList.remove('bg-[#1DD111]')
            seats.classList.remove('text-white')
            return;
         }    


        // seats-left
        let countDown = document.getElementById('count-down')
        let countDownInner = countDown.innerText
        let countDownNum = parseInt(countDownInner)
        let countDownNumIs = countDownNum - 1
        countDown.innerText = countDownNumIs

        // seats-select-list
        let seatName = event.target.innerText
        let price = 550;
        let addListIn = document.getElementById('content') 
        let newListContainer = document.createElement('ul') 
        newListContainer.setAttribute('class','flex justify-between items-center font-semibold mt-2')

        let firstList = document.createElement('li') 
        firstList.innerText = seatName 

        let secondList = document.createElement('li') 
        secondList.innerText = 'Economoy' 

        let thirdList = document.createElement('li') 
        thirdList.innerText = price
        
        addListIn.appendChild(newListContainer)
        newListContainer.appendChild(firstList)
        newListContainer.appendChild(secondList)
        newListContainer.appendChild(thirdList)

        // total Price
        let totalPrice = document.getElementById('total-price')
        let totalPriceInner = totalPrice.innerText
        let totalPriceNum = parseInt(totalPriceInner)
        let totalPriceIs = totalPriceNum + price
        totalPrice.innerText = totalPriceIs

        // grand-total
        let grandTotalPrice = document.getElementById('grand-total')
        let grandTotalPriceInner = grandTotalPrice.innerText
        let grandTotalPriceNum = parseInt(grandTotalPriceInner)
        let grandTotalPriceIs = grandTotalPriceNum + totalPrice.innerText *4
        grandTotalPrice.innerText = grandTotalPriceIs
        console.log(totalPriceIs)

        //   discount input
       let discountInput = document.getElementById('discount-input')
       discountInput.addEventListener('keyup',function(event){
        discountText = event.target.value;
        
        let apply = document.getElementById("apply");
        apply.addEventListener('click', function(){
          if(discountText == "NEW15"){
            let discountIs = document.getElementById('discount-price');
            discountIs.removeAttribute("class","hidden")
            discountIs.setAttribute("class","flex justify-between items-center mt-10")

            let discount = document.getElementById('discount')
             discount.innerText = 0.15 * grandTotalPriceIs
            let discountPrice = grandTotalPriceIs - 0.15 * grandTotalPriceIs
            grandTotalPrice.innerText = discountPrice
            let discountInput = document.getElementById('discount-input')
            discountInput.classList.add('hidden')
            discountText = "";
          } else if(discountText == "Couple20"){
            let discountIs = document.getElementById('discount-price');
          discountIs.removeAttribute("class","hidden")
          discountIs.setAttribute("class","flex justify-between items-center mt-10")
          let discount = document.getElementById('discount')
          discount.innerText = 0.20 * grandTotalPriceIs    

          let discountPrice = grandTotalPriceIs - 0.20 * grandTotalPriceIs
          grandTotalPrice.innerText = discountPrice   
          let discountInput = document.getElementById('discount-input')
          discountInput.classList.add('hidden')
            discountText = "";
          } else if(discountText.length != 0){
            alert("Wrong Coupen");
            discountText = "";
          }
        })
      //  if(event.target.value === 'NEW15'){
      //   let apply = document.getElementById('apply')
      //   apply.addEventListener('click',function(){   
      //   let discountIs = document.getElementById('discount-price');
      //   discountIs.removeAttribute("class","hidden")
      //   discountIs.setAttribute("class","flex justify-between items-center mt-10")

      //   let discount = document.getElementById('discount')
      //   discount.innerText = 0.15 * grandTotalPriceIs
      //   let discountPrice = grandTotalPriceIs - 0.15 * grandTotalPriceIs
      //   grandTotalPrice.innerText = discountPrice
      //   let discountInput = document.getElementById('discount-input')
      //   discountInput.classList.add('hidden')
        
      //  })
      // } 
     
      // if(event.target.value === 'Couple20'){
      //   let apply = document.getElementById('apply')
      //   apply.addEventListener('click',function(){  

        // let discountIs = document.getElementById('discount-price');
        // discountIs.removeAttribute("class","hidden")
        // discountIs.setAttribute("class","flex justify-between items-center mt-10")
        // let discount = document.getElementById('discount')
        // discount.innerText = 0.20 * grandTotalPriceIs    

        // let discountPrice = grandTotalPriceIs - 0.20 * grandTotalPriceIs
        // grandTotalPrice.innerText = discountPrice   
        // let discountInput = document.getElementById('discount-input')
        // discountInput.classList.add('hidden')
      //   })
      // }
      
    })
     //      discount-input-to-show
     let seatCount = document.getElementById('select-count')
     let seatCountInner = seatCount.innerText
     let seatCountNum = parseInt(seatCountInner)
     if(seatCountNum === 4){

         let discountInput = document.getElementById('discount-input')
         discountInput.classList.remove('hidden')
     }
    this.disabled = true;


})

}


   
//   detail input
  let phonNumber  = document.getElementById('phon-number')
  phonNumber.addEventListener('keyup',function(){

    let phonNumber = document.getElementById('phon-number').value
    let numberValue = parseFloat(phonNumber)

    let seatCount = document.getElementById('select-count')
        let seatCountInner = seatCount.innerText
        let seatCountNum = parseInt(seatCountInner)
        if(seatCountNum > 0 && !isNaN(numberValue)){
            let btnNextExecute = document.getElementById('btn-next')
            btnNextExecute.classList.remove('hidden')
        }     
        
  })

//   next-button
  let btnNext = document.getElementById('btn-next')
  btnNext.addEventListener('click',function(){
       let mainSection = document.getElementById('main-section')
       mainSection.classList.add('hidden')

       let success = document.getElementById('success')
       success.classList.remove('hidden')
  })


