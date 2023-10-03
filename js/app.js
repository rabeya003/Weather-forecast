const api_key=`a01edfc123cd92ecd27ecf12c30c0505`;
const loadTemparature=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}
const displayTemperature=(data)=>{

    setInnerText('temperature',data.main.temp);
    setInnerText('condition',data.weather[0].main)

}
const setInnerText=(id,text)=>{
    const temField=document.getElementById(id);
    temField.innerText=text;
}


document.getElementById('btn-search').addEventListener('click',function(){
    const input=document.getElementById('input');
    const city=input.value;
    loadTemparature(city);
    const cityName=document.getElementById('city');
    cityName.innerText=city
})
loadTemparature('dhaka')