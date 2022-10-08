const form = document.querySelector("#fcf-form-id");
form.addEventListener("submit", handleSubmit);
console.log(form)

async function handleSubmit(event){
    event.preventDefault();
    var nombre = document.querySelector("#nombre").value;
    var mail = document.querySelector("#email").value;
    var asunto = document.querySelector("#asunto").value;
    var mensaje = document.querySelector("#mensaje").value;
    console.log(nombre + mail + asunto + mensaje)
    
    const expNombre =  /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.


   if ( nombre === "" || mail === "" || asunto === "" || mensaje === "" ){
    alert("Todos los campos son obligatorios");
    return false;
   } else if(!expNombre.test(nombre)) {
    alert("El nombre no es válido");
    return false;
   } else if (nombre.lenght>25){
    alert("El nombre no debe superar los 30 caracteres");
    return false;
   }
    const form1 = new FormData(this)
    console.log(form1);
    const response = await fetch(this.action, {method: this.method, 
        body:form1, headers:{ 'Accept': 'application/json'}});
    console.log(response)
    if (response.ok){
        this.reset();
        alert(`Tu mensaje ha sido enviado con éxito! Gracias por contactarte con nosotros, en breve recibirás nuestra respuesta.`)
    }
}
 const deleteButton = document.getElementById ("fcf-button-delete");
 deleteButton.addEventListener("click", borrarForm);
 function borrarForm (event){
    form.reset()
 }
