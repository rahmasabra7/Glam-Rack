
window.addEventListener("load", () => {
    const loadingPage = document.querySelector(".loading-page");
    const content = document.querySelector(".content");
  
  
    setTimeout(() => {
      loadingPage.style.display = "none"; 
      content.style.display = "block";  
    }, 1555);
  });