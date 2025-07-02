const img = document.getElementById("dog-img");
const options = document.getElementById("options");
const result = document.getElementById("result");
const btnNext = document.getElementById("btn-next");

let correctBreed = "";

async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    return await response.json();
  } catch (error) {
    alert("Erro ao carregar o quiz. Tente de novo.");
  } 
}

async function getRandomQuestion() {
  const breeds = await fetchBreeds();

  const randomBreeds = breeds.sort(() => 0.5 - Math.random());
  console.log(randomBreeds);

  const selectionRandomBreeds = randomBreeds.slice(0, 4);
  console.log(selectionRandomBreeds);

  const correct = selectionRandomBreeds[Math.floor(Math.random() * 4)];
  console.log(correct);

  correctBreed = correct.name;

  const imgResponse = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${correct.id}`);
  console.log(imgResponse);
  const imgData = await imgResponse.json();
  console.log(imgData[0]);

  img.src = imgData[0]?.url || "";
  loadOptionsNoDom(selectionRandomBreeds);
  result.textContent = '';
}

function loadOptionsNoDom(breeds) {
  options.innerHTML = "";
  breeds.forEach(breed => {
    const btn = document.createElement("button");
    btn.textContent = breed.name;
    btn.addEventListener("click", () => {
        verifyAnswer(breed.name)
    });
    options.appendChild(btn);
  });
}

function verifyAnswer(selected) {
  if (selected === correctBreed) {
    result.textContent = "✅ Acertou!";
    result.style.color = 'green';
  } else {
    result.textContent = `❌ Errou! A resposta certa era: ${correctBreed}`;
    result.style.color = "red";
  }
}

// Chama proxima pergunta
btnNext.addEventListener('click', getRandomQuestion);

// Chama primeira pergunta
getRandomQuestion();