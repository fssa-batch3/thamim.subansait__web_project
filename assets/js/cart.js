function createItem(i) {
  const div = document.createElement('div');
  div.classList.add('item');
  div.id = `item-${i}`;

  const img = document.createElement('img');
  img.classList.add('trackimage');
  img.src = `https://source.unsplash.com/random/200x200?sig=${i}`;
  img.alt = '';

  const h2 = document.createElement('h2');
  h2.classList.add('name');

  const pContainer = document.createElement('div');
  pContainer.classList.add('container');

  const p = document.createElement('p');
  p.classList.add('detail');
  pContainer.append(p);

  const button1 = document.createElement('button');
  button1.classList.add('pricetag');
  button1.type = 'button';

  const button2 = document.createElement('button');
  button2.classList.add('remove');
  button2.type = 'button';
  button2.textContent = 'Remove';

  div.append(img, h2, pContainer, button1, button2);

  return div;
}

const cartItem = JSON.parse(localStorage.getItem('cart'));

if (cartItem == null) {
  console.error('Unable to retrieve cart items from local storage.');
  // Handle the error (e.g. display a message to the user)
} else {
  let song;

  for (let i = 0; i < cartItem.length; i++) {
    song = createItem(i);
    document.querySelector('.itemContainer').append(song);
    document.querySelector(`#item-${i} .name`).textContent = cartItem[i].Trackname;
    document.querySelector(`#item-${i} .detail`).textContent = cartItem[i].detail;
    document.querySelector(`#item-${i} .pricetag`).textContent = `$${cartItem[i].price}`;
  }
}

function removeCartItem(index) {
  // Remove item from cart array
  cartItem.splice(index, 1);
  // Update cart in local storage
  localStorage.setItem('cart', JSON.stringify(cartItem));
  // Remove item from DOM
  document.querySelector(`#item-${index}`).remove();
}

const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeCartItem(index);
  });
});
