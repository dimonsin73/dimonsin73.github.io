
function getXmlHttp(){
        var xmlhttp;
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlhttp = false;
            }
        }
        if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
            xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
    }

function sendAjax(fileAdress,data,evalSuccess,evalError,arrayOption){

        //TODO приписку убрать

        var fileAdress = "https://" + document.domain  + fileAdress;
        // console.log(fileAdress);
        

        var xmlhttp = getXmlHttp();    

        if(arrayOption!=undefined){

            if(arrayOption["typeQuery"]!=undefined){
                xmlhttp.open(arrayOption["typeQuery"], fileAdress, true);
            }else{
                xmlhttp.open('POST', fileAdress, true);
            }
            
            if(arrayOption["contentType"]!=undefined){
                xmlhttp.setRequestHeader('Content-Type', arrayOption["contentType"]);
            }else{
                xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                data = (JSON.stringify(data));
            }

            

        }else{
            data = (JSON.stringify(data));
            xmlhttp.open('POST', fileAdress, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        }
        
        xmlhttp.send(data);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                let responseText = xmlhttp.responseText;
                if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText);
                    eval(evalSuccess);
                } else {
                    console.log('Error Status!=200');
                    console.log(xmlhttp.responseText);
                    eval(evalError);
                }
            }
        }
    }
function giveJson(responseText){
  try {
    let object = JSON.parse(responseText);
    return object;
  } catch(e) {
    return false;
  }
}