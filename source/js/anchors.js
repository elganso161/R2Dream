const anchors = document.querySelectorAll(".up, .down");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.querySelector(" " + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
