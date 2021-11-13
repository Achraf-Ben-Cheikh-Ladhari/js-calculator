var nf1=document.getElementById('nf1');
var nf2=document.getElementById('nf2');
var res=document.getElementById('res');
var form=document.getElementById('xi');
var sol=document.getElementById('sol');

form.addEventListener("submit",function(event){
    if(!nf1.value || !nf2.value){
        alert('please enter values in the fields')
    }else{
    var x=parseFloat(nf1.value);
    var y=parseFloat(nf2.value);
    var result= (x/y)*100;
    res.innerText="Answer : "+result+"%";
    sol.innerText="Solving our equation for P : P%=Y/X => P%="+x+"/"+y+"="+result/100+" => P%=" +result/100+"*100="+result+"%";
    event.preventDefault();
}
})
