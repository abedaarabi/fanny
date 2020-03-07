const btnSend = document.querySelector("button");
const doggos = document.querySelector(".doggos");
console.log(doggos);

const link = "https://dog.ceo/api/breeds/image/random";

btnSend.addEventListener("click", async (e) => {
  try {
    const result = await fetch(link);
    const data = await result.json();
    console.log(data);
    const img = document.createElement("img");
    img.src = data.message;
    img.alt = "Cute Doggyy";
    img.class = "rounded";
    doggos.innerHTML = "";
    doggos.appendChild(img);
  } catch (error) {
    console.log(error);
  }
});
