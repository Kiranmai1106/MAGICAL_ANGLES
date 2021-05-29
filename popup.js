const rotateEl = document.getElementById("rotate");

const rotate3DEl = document.getElementById("rotate3d");

rotateEl.addEventListener("input", (e) => {
  const degree = e.target.value;
  chrome.tabs.executeScript(null, {
    code: `document.body.style.transform='rotate(${degree}deg)'`,
  });
});

rotate3DEl.addEventListener("input", (e) => {
  const degree = e.target.value;
  chrome.tabs.executeScript(null, {
    code: `document.body.style.transform='rotate3d(1, 1, 1,${degree}deg)'`,
  });
});

