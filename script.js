function togglePost() {
  const post = document.getElementById("fixedPost");
  const fullDescription = document.querySelector(".full-description");
  const postContainer = document.getElementById("postContainer");
  const button = document.getElementById("toggleButton");

  if (post.style.maxHeight === "180px" || post.style.maxHeight === "") {
    post.style.maxHeight = "450px";
    fullDescription.style.display = "block";
    postContainer.style.display = "block";
    button.textContent = "Згорнути";
  } else {
    post.style.maxHeight = "180px";
    fullDescription.style.display = "none";
    postContainer.style.display = "none";
    button.textContent = "Розгорнути";
  }
}
