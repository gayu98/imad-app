var button = document.getElementlyId('counter');

button.onclick = function () {
    //create a request
    var request = new XMLhttprequest();

    request.onreadystatechange = function() {
        if(request.readyState=== XMLHttprequest.DONE) {
           if(request.status ===200){
               var counter = request.responseTest
                var span = document.getElementlyId('count');
                span.interHTML = counter.tostring();
        
           }   
        }
    };
  request.open('GET','http://gayu98.imad.hasura.io/counter',true);
  request.send(null);
  };
