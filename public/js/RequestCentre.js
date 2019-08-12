class RequestCentre {

    static jsonRequest(type, url, json) {

        let request = new XMLHttpRequest();
        request.open(type, url, true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(json));
        //serverResponse = request.status + " " + request.statusText;
        serverResponse = request.responseText;
        localStorage.setItem("serverResponse", request.responseText)
    }
}
