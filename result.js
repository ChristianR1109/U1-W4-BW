function calcoloPercentuale() {
  const massimo = 100;
  const randomGiuste = Math.floor(Math.random() * massimo + 1);
  console.log(randomGiuste);

  const randomSbagliate = massimo - randomGiuste;
  console.log(randomSbagliate);

  const variabileGiuste = document.querySelector(".percentualeCorrect");
  const giuste = document.createElement("h1");
  giuste.innerText = randomGiuste + "%";
  variabileGiuste.appendChild(giuste);

  const divCorrect = document.querySelector(".correct");
  const h3Correct = document.createElement("h3");
  h3Correct.innerText = randomGiuste + "/" + massimo + " questions";
  divCorrect.appendChild(h3Correct);

  const variabileSbagliate = document.querySelector(".percentualeWrong");
  console.log(variabileSbagliate);
  const sbagliate = document.createElement("h1");
  sbagliate.innerText = randomSbagliate + "%";
  variabileSbagliate.appendChild(sbagliate);

  const divWrong = document.querySelector(".wrong");
  const h3Worng = document.createElement("h3");
  h3Worng.innerText = randomSbagliate + "/" + massimo + " questions";
  divWrong.appendChild(h3Worng);

  const aswers = document.querySelector(".comment-test h4");
  const aswers2 = document.querySelector(".comment-test h5");
  console.log(aswers);
  console.log(aswers2);
  if (randomGiuste < 60) {
    aswers.innerText = "Failed!";
    aswers2.innerText = "You don't passed the exam.";
    aswers2.style.color = "#d20094";
  }
  const agata = document.querySelector(".meta1");
  let value = (randomSbagliate / massimo) * 360;
  agata.style.background = `conic-gradient( #d20094 0deg ${value}deg, cyan 0deg 360deg)`;
}
calcoloPercentuale();
