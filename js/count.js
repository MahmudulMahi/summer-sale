let count = 1;
let total = 0
const applyBtn = document.getElementById("applyBtn");
const PurchaseBtn = document.getElementById("PurchaseBtn");
function calculateProduct(target) {
  const productList = document.getElementById("product-list");
  const product = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = `${count++}. ${product}`;
  productList.appendChild(li);

  // console.log(target.parentNode.childNodes[1].childNodes[3].childNodes[5])
  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price)
  document.getElementById("total-frist").innerText = total;
  // console.log(total)
  if (total >= 200) {
    applyBtn.removeAttribute('disabled');
  }
  // discount calculation
  applyBtn.addEventListener("click", function () {
    const couponCode = document.getElementById("coupon").value;
    const discount = document.getElementById("discount");
    const discountPrice = document.getElementById("discount-price");
    const error = document.getElementById("discount-error");

    if (couponCode === "SELL200") {
      const discountTotal = (total * .8).toFixed(2);
      const discountValue = (total * .2).toFixed(2);
      discountPrice.innerText = discountTotal;
      discount.innerText = discountValue;
    }
    else {
      error.innerText = "Discount code invalid";
    }
  })

  if (total >= 1) {
    PurchaseBtn.removeAttribute('disabled');
  }
 
    const reloadButton = document.getElementById("reloadButton");

  
    reloadButton.addEventListener("click", function() {
     
      location.reload();
    });
}
