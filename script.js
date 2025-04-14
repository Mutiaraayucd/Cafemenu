let order = [];
let total = 0;

function addToOrder(item, price) {
  order.push({ item, price });
  total += price;
  updateOrderSummary();
}

function updateOrderSummary() {
  const orderList = document.getElementById('order-list');
  const totalDisplay = document.getElementById('total');
  
  orderList.innerHTML = '';
  order.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.item} - $${entry.price.toFixed(2)}`;
    orderList.appendChild(li);
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function resetOrder() {
  order = [];
  total = 0;
  updateOrderSummary();
}
