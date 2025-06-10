function toggleMenu() {
  const navlist = document.getElementById('navlist');
  navlist.classList.toggle('open');
}
  const aside = document.getElementById("aside");
  const toggleBtn = document.getElementById("toggleHide");

  toggleBtn.addEventListener("click", () => {
    aside.classList.toggle("hide");
    toggleBtn.innerHTML = aside.classList.contains("hide") ? "&lt;" : "&gt;";
  });

function btnProfile(){
  document.getElementById('buton').addEventListener('click', function(){
    window.open('https://genshin-impact.fandom.com/wiki/Raiden_Shogun')
});
}