const input_text = document.getElementById('Input-box');
const Parent_ul = document.getElementById('parent');
const input_value = document.getElementById('input-search');


console.log(Parent_ul);
function add(){
    if(input_text.value === ""){
        alert("You must type Something here...")
    }
    else
    {
      let li = document.createElement('li');
      li.innerHTML=input_text.value;
      Parent_ul.appendChild(li);
      let span = document.createElement('span')
      span.innerHTML = "\u00d7";
      li.appendChild(span)
    }
    input_text.value=""
    localsaveData()
}
// deletion of child li
Parent_ul.addEventListener("click",function(event){
    if(event.target.tagName ==='LI'){
        event.target.classList.toggle("checked");
        localsaveData()
    }
    else if(event.target.tagName==='SPAN'){
        if(confirm("Are you Want to Delete the list...")){
        event.target.parentElement.remove();
        localsaveData()
        }
       
    }

},false);


// LocalHostWorking
function localsaveData(){
    localStorage.setItem("Data",Parent_ul.innerHTML);
}

function getData(){
    Parent_ul.innerHTML=localStorage.getItem("Data");
}
getData();


// Serach bar
input_value.addEventListener("keyup", function(event){
    // console.log(event.target.value.toLocalelLowerCase());
    let data = event.target.value.toLocaleLowerCase();
    let li = document.getElementsByTagName("LI");
    console.log(li);
    Array.from(li).forEach((elem)=>{
        console.log(elem.firstChild.textContent.toLocaleLowerCase());
        if(elem.firstChild.textContent.toLocaleLowerCase().indexOf(data)!=-1){
            elem.style.display='block';
        }
        else{
            elem.style.display='none';
        }
    })
})

