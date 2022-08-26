const smallCups = document.querySelectorAll(".small-cup");
const bigCup = document.querySelector(".big-cup");
const theEmptyHalf = document.querySelector(".the-empty-half");
const theFullHalf = document.querySelector(".the-full-half");
console.log(bigCup, theEmptyHalf, theFullHalf);

let numOfCups = 0;
let sumOfcups = 0;

// we can't toggle the first cup (FIX)
smallCups.forEach((el, i, arr) => {
   el.addEventListener("click", function () {
      for (let j = 0; j <= i; j++) arr[j].classList.add("active-cups");
      for (let x = arr.length - 1; x > i; x--)
         arr[x].classList.remove("active-cups");
      numOfCups = i + 1;
      updateCup();
   });
});

function genrateMarkup(litersToFill) {
   return `
   <h2>${litersToFill}L</h2>
   <p>Remained</p>
   `;
}

function updateCup() {
   // to get the percentage of how much of the cup is full we have to get the number of cups then multiply is by 250
   // that's gonna give us the the amount of water we've poured in the big cup
   //then we should divide by the total amount (the big cup capacity) and finally we multiply by 100 to get the percentage
   // amount we have / total amount * 100 = percentage

   sumOfcups = numOfCups * 250;
   let percentage = (sumOfcups / 2000) * 100;
   theFullHalf.style.height = `${percentage}%`;

   if (percentage === 0) {
      theFullHalf.textContent = ``;
      theEmptyHalf.innerHTML = genrateMarkup((2000 - sumOfcups) / 1000);
   }
   if (percentage > 0 && percentage < 100) {
      theFullHalf.textContent = `${percentage}%`;
      theEmptyHalf.innerHTML = genrateMarkup((2000 - sumOfcups) / 1000);
   }
   if (percentage === 100) {
      theEmptyHalf.textContent = "";
      theFullHalf.textContent = `${percentage}%`;
   }
}
updateCup();
