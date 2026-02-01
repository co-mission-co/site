(() => {
  const wordEl = document.querySelector(".slogan-word");
  if (!wordEl) return;

  const words = (wordEl.dataset.words || "").split("|").filter(Boolean);
  if (!words.length) return;

  const baseDelay = 3000;
  const longDelay = 5600;
  const typeSpeed = 60;
  const deleteSpeed = 40;
  const pauseAfterType = 1100;

  let index = 0;
  let current = "";
  let isDeleting = false;

  const isLastWord = () => index === words.length - 1;

  const tick = () => {
    const target = words[index];

    if (isDeleting) {
      current = target.slice(0, current.length - 1);
      wordEl.textContent = current;

      if (!current) {
        isDeleting = false;
        index = (index + 1) % words.length;
        setTimeout(tick, 250);
        return;
      }

      setTimeout(tick, deleteSpeed);
      return;
    }

    current = target.slice(0, current.length + 1);
    wordEl.textContent = current;

    if (current === target) {
      const hold = isLastWord() ? longDelay : baseDelay;
      isDeleting = true;
      setTimeout(tick, hold);
      return;
    }

    setTimeout(tick, typeSpeed);
  };

  wordEl.textContent = "";
  setTimeout(tick, pauseAfterType);
})();
