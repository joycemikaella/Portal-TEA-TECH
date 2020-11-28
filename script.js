document.getElementById("formulario").addEventListener("submit", function(event){
  event.preventDefault();

  const alunoObj = {};

  alunoObj.nome = document.getElementById('fname').value;
  alunoObj.sobrenome = document.getElementById('lname').value;
  alunoObj.instituicao = document.getElementById('instituicao').value;
  alunoObj.periodo = document.getElementById('periodo').value;
  alunoObj.matricula = document.getElementById('matricula').value;
  alunoObj.email = document.getElementById('email').value;
  alunoObj.telefone = document.getElementById('fone').value;

  document.getElementById("formulario").reset();
  showAlunoData(alunoObj);
});

function showAlunoData(alunoObj) {
  window.scrollTo(0, 0);

  document.getElementById("area-info").style.setProperty('display', 'block');

  document.getElementById('fnome-table').innerHTML = alunoObj.nome;
  document.getElementById('lnome-table').innerHTML = alunoObj.sobrenome;
  document.getElementById('instituicao-table').innerHTML = alunoObj.instituicao;
  document.getElementById('periodo-table').innerHTML = alunoObj.periodo;
  document.getElementById('matricula-table').innerHTML = alunoObj.matricula;
  document.getElementById('email-table').innerHTML = alunoObj.email;
  document.getElementById('telefone-table').innerHTML = alunoObj.telefone;
}

function enviaContato() {
  alert(`Dúvida enviado com sucesso.`);
}