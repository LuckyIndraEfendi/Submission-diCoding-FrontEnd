$("my-navbar").on("click", function () {
  showMenu();
});

function showMenu() {
  $(".menu").toggleClass("show");
}
