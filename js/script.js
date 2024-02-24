const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tableName = document.querySelector("#table_name").value;
  const tableSize = document.querySelector("#table_capacity").value;
  const date = document.querySelector("#order_date").value;
  const order = document.querySelector("#order").value;

  console.log({ tableName, tableSize, date, order });

  const orderText = `Halo, saya ingin reservasi meja untuk ${tableSize} orang, atas name ${tableName} di tanggal ${date}
  
  Order : 
  ${order}
  `;

  window.location.replace(`https://wa.me/083826219440?text=${orderText}`);
});

// Hamburger icon animation
const hamburger = document.querySelector("#burger-navigation");
const mobileNavigation = document.querySelector(".nav-mobile-main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNavigation.classList.toggle("menu-active");
});
