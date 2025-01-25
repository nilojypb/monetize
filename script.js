function followProfile() {
  document.getElementById("message").innerHTML = "<p>Perfil seguido com sucesso! <span class='check-icon'>✔️</span></p>";
  setTimeout(() => {
    window.location.href = "register.html";
  }, 1500);
}

function watchVideo() {
  let coinBalance = parseInt(document.getElementById('coin-balance').innerText);
  coinBalance += 10;
  document.getElementById('coin-balance').innerText = coinBalance;
  alert("Você ganhou 10 moedas!");
}
