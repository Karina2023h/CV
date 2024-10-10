function toggleText(element) {
  const post = element.closest(".post");
  const fullTextContainer = post.querySelector(".full-text-container");

  // Визначити, чи контейнер відкритий
  const isOpen = fullTextContainer.classList.contains("open");

  if (!isOpen) {
    fullTextContainer.classList.add("open"); // Відкрити текст
    element.textContent = "Згорнути"; // Змінити текст посилання
  } else {
    fullTextContainer.classList.remove("open"); // Закрити текст
    element.textContent = "Читати далі"; // Повернути текст посилання
  }
}
