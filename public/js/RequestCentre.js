class RequestCentre {

    jsonRequest(type, url, json) {

        let request = new XMLHttpRequest();
        request.open(type, url, false);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(json));
        serverResponseStatusCode = request.status;
        localStorage.setItem("serverResponseStatusCode",request.status);
        localStorage.setItem("serverResponseStatusText",request.statusText);
        serverResponceStatusText = request.statusText;
        serverResponse = request.responseText;
        localStorage.setItem("serverResponse", request.responseText)
    }

   httpRequest(type, url) {
       let request = new XMLHttpRequest();
        request.open(type, url, false);
        request.send();
    }
}
