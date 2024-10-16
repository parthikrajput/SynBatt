window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 130) {
    header.style.position = "fixed";
    header.style.left = "0";
    header.style.right = "0";
    header.style.top = "0";
    header.style.zIndex = "99999";
    header.style.boxShadow =
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgb(16, 39, 29, 0.23) 0px 6px 6px";
  } else {
    header.style.position = "";
    header.style.left = "";
    header.style.right = "";
    header.style.top = "";
    header.style.zIndex = "";
    header.style.boxShadow = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const nav = document.querySelector("nav");

  menuIcon.addEventListener("click", () => {
    nav.classList.remove("left-[-1000px]");
    nav.classList.add("left-0");
    nav.classList.add("border-r-2");
    nav.classList.add("border-white");
    nav.classList.add("border-solid");
  });

  closeIcon.addEventListener("click", () => {
    nav.classList.remove("left-0");
    nav.classList.add("left-[-1000px]");
  });
});

document.querySelectorAll(".menu-item").forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    const submenu = this.querySelector(".sub-menu");

    if (submenu.classList.contains("hidden")) {
      submenu.classList.remove("hidden");
      submenu.style.display = "block";
      submenu.style.height = "0";
      submenu.style.opacity = "0";

      submenu.offsetHeight;

      submenu.style.transition = "height 0.5s ease, opacity 0.5s ease";
      submenu.style.height = submenu.scrollHeight + "px";
      submenu.style.opacity = "1";

      submenu.addEventListener(
        "transitionend",
        function () {
          submenu.style.height = "auto";
          submenu.style.transition = "";
        },
        { once: true }
      );
    } else {
      submenu.style.height = submenu.scrollHeight + "px";
      submenu.style.opacity = "1";
      submenu.offsetHeight;

      submenu.style.transition = "height 0.5s ease, opacity 0.5s ease";
      submenu.style.height = "0";
      submenu.style.opacity = "0";

      submenu.addEventListener(
        "transitionend",
        function () {
          submenu.classList.add("hidden");
          submenu.style.display = "none";
          submenu.style.transition = "";
        },
        { once: true }
      );
    }
  });
});

function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.add("hidden");
    content.classList.remove("active");
  });

  const tabLinks = document.querySelectorAll(".tab-links");
  tabLinks.forEach((link) => {
    link.classList.remove("bg-green-light", "text-white", "active");
    link.classList.add("bg-blue-very_light", "text-gray-dark");
  });

  evt.currentTarget.classList.add("bg-green-light", "text-white", "active");
  evt.currentTarget.classList.remove("bg-blue-very_light", "text-gray-dark");

  document.getElementById(tabName).classList.remove("hidden");
  document.getElementById(tabName).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const firstTabLink = document.querySelector(".tab-links");
  const firstTabContent = document.querySelector(".tab-content");

  firstTabLink.classList.add("bg-green-light", "text-white", "active");
  firstTabContent.classList.remove("hidden");
  firstTabContent.classList.add("active");
});
