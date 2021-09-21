fetch('https://api.covid19api.com/countries')
.then(res => res.json())
.then(function(data) {
  console.log(data)
  
    document.getElementById('demo').innerHTML = `${JSON.stringify(data[176].Country)}`;
    document.getElementById('demo1').innerHTML = `${JSON.stringify(data[86].Country)}`;
    document.getElementById('demo2').innerHTML = `${JSON.stringify(data[13].Country)}`;
    document.getElementById('demo3').innerHTML = `${JSON.stringify(data[12].Country)}`;
})
