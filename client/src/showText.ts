const toggleBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.toggle-button');
const hideTexts: NodeListOf<HTMLDivElement> = document.querySelectorAll('.hideText');

const isHidden: boolean[] = Array.from(toggleBtns).map(() => true)

toggleBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    hideTexts.forEach((hideText, hideTextIndex) => {
      if (hideTextIndex === index) {
        if (isHidden[index]) {
          hideText.classList.remove('hidden')
          isHidden[index] = false
        } else {
          hideText.classList.add('hidden')
          isHidden[index] = true
        }
      } else {
        hideText.classList.add('hidden')
        isHidden[hideTextIndex] = true
      }
    })
  })
})


// toggleTextBtn.addEventListener("click", function() {
//   if (isHidden) {
//     hideTextLanguage.classList.remove("hidden");
//     isHidden = false;
//   } else {
//     hideTextLanguage.classList.add("hidden");
//     isHidden = true;
//   }
// });
