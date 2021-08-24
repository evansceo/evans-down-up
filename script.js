const items = [
    "apple",
    "apricot",
    "banana",
    "pear",
    "guava",
    "cherry",
    "orange",
    "pineapple",
    "mango",
    "grapes",
    "blueberry",
    "raspberry",
    "melon",
    "blackberry",
    "plum",
    "kiwi",
    "peach",
    "strawberry",
    "avocado",
    "tabs.html"
  ];
  
  const root = new makeNode("\0");
  for (const item of items) add(item, 0, root);
  
  const text_box = document.getElementById("text-box");
  const list = document.getElementById("list");
  
  function handler(e) {
    const str = e.target.value;
    // const predictions = ;
  
    list.innerHTML = "";
    for (const prediction of search(str, 0, root)) {
      if (prediction !== "")
        list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${str}</b>${prediction.substring(
          str.length
        )}</li>`;
    }
  }
  
  function handleClick(e) {
    text_box.value = e.innerText;
  }
  
  handler({ target: { value: "" } });
  
  text_box.addEventListener("keyup", handler);