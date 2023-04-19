const listToggles = document.querySelectorAll(".list-toggle");

listToggles.forEach(listToggle=>{

    console.log(listToggle)

    listToggle.addEventListener('click',(e)=>{

        e.preventDefault();
        
        if(listToggle.parentElement.classList.contains('active')){
            listToggle.parentElement.classList.remove('active')
        }else{
            listToggle.parentElement.classList.add('active')
        }

    })

})

// button alert 

function welcome(){
    var fname = document.getElementById("fname").value;

    alert("Hello "+fname);

}

