function ajax(url,method,functionName,dataArr){
    let xhttp = new XMLHttpRequest();
    xhttp.open(method,url,true);
    xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
    xhttp.send(requsetData(dataArr));
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 4){
            functionName(this.response);
        }
    }
}
function requsetData(dataArr){
    let out = '';
    for(let key in dataArr){
        out+=`${key}=${dataArr[key]}&`;
    }
    console.log(out);
    return out;
}
export default ajax