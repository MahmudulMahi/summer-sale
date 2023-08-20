let count = 1;
function calculateProduct(target) {
  const productList = document.getElementById("product-list");
  const product = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li")
  li.innerText = `${count++}. ${product}`;
  productList.appendChild(li)
}