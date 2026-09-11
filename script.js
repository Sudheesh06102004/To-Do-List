function liveDateAndTime(){
    const now=new Date();
    const date=document.querySelector(".date");
    const time=document.querySelector(".time");

    date.textContent= `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    time.textContent= `${now.getHours()} - ${now.getMinutes()} - ${now.getSeconds()}`;
}

liveDateAndTime();
setInterval(liveDateAndTime,1000);

const input=document.querySelector(".input");
const btn=document.querySelector(".add-btn");
const ul=document.querySelector(".ullist");
const successfull=document.querySelector(".inner-footer");

btn.addEventListener("click",()=>{
    const value=input.value.charAt(0).toUpperCase()+input.value.slice(1).toLowerCase();
    if(value!==""){
        const li=document.createElement("li");
        li.className="list-items";
        li.innerHTML=`${value} <div class="x"><i class="fa-solid fa-check"></i></div>`;

        ul.append(li);
        input.value="";
        successfull.style.display="block";
        successfull.style.opacity="1";
        successfull.textContent="✅ Task Added Successfully";
        setTimeout(()=>{
            successfull.style.opacity="0";
        },2000);
        setTimeout(()=>{
            successfull.style.display="none";
        },2500)
    }
})

const completeditems=document.querySelector(".completed-items");

    ul.addEventListener("click",(event)=>{
        const x=event.target.closest(".x");
        if(x){
            const li=x.parentElement;
            completeditems.append(li);
            successfull.style.display="block";
            successfull.style.opacity="1";
            successfull.textContent="✅ Successfully Completed";
            setTimeout(()=>{
                successfull.style.opacity="0";
            },2000);
            setTimeout(()=>{
                successfull.style.display="none";
            },2500)
            }

    })


