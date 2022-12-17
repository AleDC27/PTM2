const URL = "http://localhost:5000/amigos";
//lista amigos
$("#boton").click(() => {
  let listaAmigos = $("#lista");
  listaAmigos.empty();
  $.get(URL, (data) => {
    for (let i = 0; i < data.length; i++) {
      listaAmigos.append(`<li>${data[i].name}</li>`);
    }
  });
});

//busqueda id
$("#search").click(() => {
  let id = $("#input").val();
  if (id <= 6) {
    $.get(`${URL}/${id}`,data => {
      $("#amigo").text(data.name);
    });
  } else {
    $("#amigo").text("no esta el amigo");
  }
});

//delete friend
$('#delete').click(()=>{
    let id=$('#inputDelete').val();
    $.ajax({
        url:`${URL}/${id}`,
        type:'DELETE',
        success:()=>{
            $('#success').text("el amigo fue borrado")
        }
    })
})
