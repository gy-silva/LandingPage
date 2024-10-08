function fieldValidation(email, senha) {
  let isValid = true;

  const spanMessagemEmail = document.getElementById("msgemail");
  const spanMessagemSenha = document.getElementById("msgsenha");

  email.className = "";
  spanMessagemEmail.innerHTML = "";
  senha.className = "";
  spanMessagemSenha.innerHTML = "";

  if (email.value.length < 1) {
    spanMessagemEmail.innerHTML = "E-mail é obrigatório";
    email.className = "mensagemDeErro";
    isValid = false;
  }

  if (senha.value.length < 1) {
    spanMessagemSenha.innerHTML = "Senha é obrigatória";
    senha.className = "mensagemDeErro";
    isValid = false;
  }

  return isValid;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email");
    const senha = document.getElementById("password");

    const isValid = fieldValidation(email, senha);

    if (isValid) {
      email.value = "";
      senha.value = "";
      alert("Formulário enviado!");
    }
  });
});
