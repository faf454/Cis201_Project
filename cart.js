var total = 0;           // يحفظ السعر التوتل
var cartItems = {};      // يحفظ كل الاصناف مع العدد 

// Function: يضيف اصناف للسله
function addToCart(item, price) {
    // اذا الصنف موجود يزود عليه
  if (cartItems[item]) {
    cartItems[item].qty += 1;
  }
  //اذا كان صنف جديد يحط ادخال جديد 
  else {
    cartItems[item] = { price: price, qty: 1 };
  }

// يضيف سعر للتوتل

total = total + price;

// يحدث ظهور السلة
  updateCart();
}

// Function: يحدث السلة
function updateCart() {
  var cart = document.getElementById("cart"); // يوجد اللسته حقت السله
  cart.innerHTML = ""; // يمحي اللستة القديمه

// يروح لكل صنف ويظهر السعر والكمية
  for (var item in cartItems) {
    var line =
      item +
      " x" +
      cartItems[item].qty +
      " - $" +
      cartItems[item].price * cartItems[item].qty +
      "<br>";
    cart.innerHTML += line; // يظهر الخط هذا 
  }
// تحديث  السعر الاجمالي
  document.getElementById("total").innerHTML = "Total: $" + total;
}
// يمحي السلة
function clearCart() {
  cartItems = {}; // ريسيت للاصناف
  total = 0; // ريسيت للسعر
  document.getElementById("cart").innerHTML = "";
  document.getElementById("total").innerHTML = "Total: $0";
}