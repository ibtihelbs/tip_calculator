/*Get the values bill and number */
let bill=document.getElementById("bill");
let people=document.getElementById("poeple");
/*verify if the bill and number are filled */
let Empty_string=(EM_strg)=>{
  let prev_sib =  EM_strg.previousElementSibling;
 if(EM_strg.value ===""){
    prev_sib.classList.toggle('activate');
 }
}

/**calculate the bills */
//let percentage = document.querySelectorAll(".percentage>[type^=button]");
let percentage = document.querySelectorAll(".percentage>input");

let conv=(item,keys,array)=>{
    item.addEventListener("click",function(){
        Empty_string(bill);
        Empty_string(poeple);
        let x=item.value;
        x=x.replace("%","")/100;
        console.log(x);
        console.log((bill.value)*x);
        tip.innerHTML=(bill.value)*x;
        total.innerHTML=(people.value)*(bill.value)*x;
    })

}
percentage.forEach(conv);
   /**custom */
let custom = document.getElementById("Custom");
custom.addEventListener("click",function(){
    let y=custom.value;
    console.log(y);
})


/*resert button*/
let tip=document.getElementById("tip");
let total=document.getElementById("total");

let resert=document.getElementById("resert");
resert.addEventListener("click",function(){
    bill.value='';
    people.value='';
    tip.innerHTML="0.00";
    total.innerHTML="0.00";
});
