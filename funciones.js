function myfunction() {
    var x = document.getElementById("workers");
    var div = document.getElementById("workers_div");
    //casting x to integer
    x = parseInt(x.value);
    div.innerHTML = "";
    for (var i = 0; i < x; i++) {

        //create x elements with type input to drop

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        //add margin top to input
        input.setAttribute("style", "margin-top: 10px;");
        input.setAttribute("class", "form-control");


        input.setAttribute("name", "worker" + i);
        input.setAttribute("placeholder", "Worker name " + (i + 1));
        div.appendChild(input);
    }
}

function fecha() {
    var x = document.getElementById("listado_empleados");
    var workers = document.getElementById("workers");
    var date = document.querySelector('input[type="date"]');
    //if date is empty and hour is empty, ocultar el div
    if (date.value == "") {
        x.style.display = "none";
        //disable workers
        workers.disabled = true;
    } else {
        x.style.display = "block";
        workers.disabled = false;


    }
}

function sendAlert() {
    var button = document.getElementById("send");

    //alert with message "schedule finished, email sent to client"
    button.onclick = function() {
        alert("Schedule finished, email sent to client");
    }


}