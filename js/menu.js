// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   const mobileBtnClose = document.querySelector("[data-menu-close]");

//   menuBtnRef.addEventListener("click", () => {
//     mobileMenuRef.classList.toggle("is-open");
//   });

//   mobileBtnClose.addEventListener("click", () => {
//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();


function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  
  switch (password) {
  case null:
  message = "Canceled by user!";
  break;
  
  case ADMIN_PASSWORD:
  message = "Welcome!";
  break;
      
  default:
  console.log("Access denied, wrong password!");
  }
  console.log(message);
}

checkPassword("mangohackzor")
