function ActivateTab(tabName) {
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementsByClassName('step-number active')[0].classList.remove("active");
  document.getElementById(tabName + '-link').classList.add("active");

  document.getElementById(tabName).style.display = "block";
}