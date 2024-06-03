let inp = document.getElementById('inp')
let text=document.querySelector(".text")
function Add()
{  if(inputs.value=="")
        {     alert("please enter task")
        }
    else{
        let newele=document.createElement("ul")
        newele.innerHTML=`${inp.value} <i class="fa-solid fa-trash"> </i>`;
        text.appendChild(newele);
        inp.value = "";
       newele.querySelector('i').addEventListener("click", ()=>{
            newele.remove();
        })
    }
}