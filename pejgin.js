function toggleText(element) {
  const post = element.closest(".post");
  const fullTextContainer = post.querySelector(".full-text-container");

  const isOpen = fullTextContainer.classList.contains("open");

  if (!isOpen) {
    fullTextContainer.classList.add("open");
    element.textContent = "Згорнути";
  } else {
    fullTextContainer.classList.remove("open");
    element.textContent = "Читати далі";
  }
}
