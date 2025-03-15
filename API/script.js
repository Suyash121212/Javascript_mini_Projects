const base_api="https://v6.exchangerate-api.com/v6/9f6696e5627e468d27dc14a4/latest/USD";
let response;
let getapi=async()=>{
    let getitem =await fetch(base_api)
    let response = await getitem.json();
    console.log(response);
    console.log(response.conversion_rates);
    let check_element = document.querySelector('.check');
    
let ratesText='';
for(const currency in response.conversion_rates){
    ratesText=ratesText+`${currency}:${response.conversion_rates[currency]}\n,`

}
check_element.innerHTML=ratesText;

let options = document.querySelectorAll('.converter select ');
console.log(options);




}


getapi();

let options = document.querySelectorAll('.converter select ');
console.log(options);
