let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async () => {
  chrome.storage.local.set({ key: "value" }, function () {
    console.log("Value is set to " + "value");
  });
});
