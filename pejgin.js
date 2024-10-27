function toggleText(element) {
  const post = element.closest(".post");
  const fullTextContainer = post.querySelector(".full-text-container");

  const isOpen = fullTextContainer.classList.contains("open");

  if (!isOpen) {
    fullTextContainer.classList.add("open");
    element.textContent = "Закрити";
  } else {
    fullTextContainer.classList.remove("open"); // Закрити текст
    element.textContent = "Переглянути"; // Повернути текст посилання
  }
}
