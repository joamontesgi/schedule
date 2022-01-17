function confirmar() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Do you want delete this proposals?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'This proposals has been deleted!',
            )
           

        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancel',
            )
        }
    })
}

function prioridad() {
    let si_prioridad = document.getElementById('prioridad');
    let div_1 = document.getElementById('div_1');
    let mensaje = document.getElementById('mensaje');
    if (si_prioridad.checked) {
        div_1.style.backgroundColor = "#F3E975";
        mensaje.innerHTML = "Priority assigned";
    } else {
        div_1.style.backgroundColor = "rgb(140, 235, 163)";
        mensaje.innerHTML = "Prioritize this proposals?";
    }
}


function prioridad2() {
    let si_prioridad = document.getElementById('prioridad2');
    let div_2 = document.getElementById('div_2');
    let mensaje = document.getElementById('mensaje2');
    if (si_prioridad.checked) {
        div_2.style.backgroundColor = "#F3E975";
        mensaje.innerHTML = "Priority assigned";
    } else {
        div_2.style.backgroundColor = "rgb(214, 139, 139)";
        mensaje.innerHTML = "Prioritize this proposals?";
    }
}

function prioridad3() {
    let si_prioridad = document.getElementById('prioridad3');
    let div_3 = document.getElementById('div_3');
    let mensaje = document.getElementById('mensaje3');
    if (si_prioridad.checked) {
        div_3.style.backgroundColor = "#F3E975";
        mensaje.innerHTML = "Priority assigned";
    } else {
        div_3.style.backgroundColor = "rgb(214, 139, 139)";
        mensaje.innerHTML = "Prioritize this proposals?";
    }
}
function prioridad4() {
    let si_prioridad = document.getElementById('prioridad4');
    let div_4= document.getElementById('div_4');
    let mensaje = document.getElementById('mensaje4');
    if (si_prioridad.checked) {
        div_4.style.backgroundColor = "#F3E975";
        mensaje.innerHTML = "Priority assigned";
    } else {
        div_4.style.backgroundColor = "rgb(140, 235, 163)";
        mensaje.innerHTML = "Prioritize this proposals?";
    }
}
