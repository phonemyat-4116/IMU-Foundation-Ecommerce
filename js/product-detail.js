const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const quantity = document.getElementById("quantity");

const planbtn = document.querySelectorAll('.plan-btn');

const netflix_acc = document.getElementById("netflix-account");
const discount = document.getElementById("discount");

const customerName = document.getElementById("name");

console.log(netflix_acc)

let num = 0;

console.log(planbtn);

plus.addEventListener('click',(e)=>{
    e.preventDefault();
    num++;
    quantity.textContent = num;

    if(num>0){
        minus.disabled=false;
    }
})

minus.addEventListener('click',(e)=>{
    e.preventDefault();
    num--;
    quantity.textContent = num;

    if(num===0){
        minus.disabled=true;
    }
})


let previousValue;

planbtn.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();

        removeActive();
        e.target.classList.add('active');

        if(btn.innerHTML=="3 Months"){
            netflix_acc.innerHTML = "150,000 MMK"
            discount.innerHTML = "190,000 MMK"

        }else if(btn.innerHTML=="6 Months"){
            netflix_acc.innerHTML = "180,000 MMK"
            discount.innerHTML = "210,000 MMK"

        }else if(btn.innerHTML == "1 Year"){
            netflix_acc.innerHTML = "30,000 MMK"
            discount.innerHTML = "350,000 MMK"
        }else{
            netflix_acc.innerHTML = "120,000 MMK"
            discount.innerHTML = "150,000 MMK"
        }
        
    })
})

function removeActive(){
    planbtn.forEach(btn=>{
        btn.classList.remove('active')
    })
}

function thankCustomer(){
    alert("Thank you for your review, "+customerName.value);
}