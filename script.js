const infoText = document.querySelector(".information input");
const infoButton = document.querySelector(".information button");
const result = document.querySelector(".result");

infoButton.addEventListener("click", function () {
  if (infoText.value == "") {
    result.innerHTML = `<span class="inforesult">enter a username </span>`;
  } else {
    fetchData();
  }
});

const fetchData = async function () {
  try {
    const res = await fetch(
      `https://api.github.com/users/${infoText.value}/repos`
    );
    const data = await res.json();
    if (res.ok) {
      console.log("secces", data);
      result.innerHTML = "";
      data.forEach((el) => {
        const markup = `<span class="inforesult">${el.name}  <span>${el.forks} /  ${el.visibility} / ${el.id} / <a href=${el.html_url}>Visit</a></span></span>`;
        result.insertAdjacentHTML("beforebegin", markup);
      });
    } else {
      console.log("serveur error", data);
    }
  } catch (err) {
    console.log(err);
  }
};

fetchData();
