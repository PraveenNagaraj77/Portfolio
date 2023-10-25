//SHow Menu

const showmenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showmenu("nav_toggle", "nav_menu");

// Active & remove Active

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Onlcik submit

// function SendMail() {
//   var params = {
//     from_name: document.getElementById("fullName").value,
//     email_id: document.getElementById("email_id").value,
//     message: document.getElementById("message").value,
//   };
//   emailjs
//     .send("service_mq55k5p", "template_88iu9jm", params)
//     .then(function (res) {
//       alert("Success!" + res.status);
//     });
// }

function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_mq55k5p";
  const templateID = "template_88iu9jm";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("fullName").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
