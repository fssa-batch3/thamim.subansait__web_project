const root = window.location.origin;

const buyerHeader = `<div class="header">
<a
  href="${root}/pages/homepage/buyer homepage.html"
  style="
    text-decoration: none;
    color: white;
    font-size: large;
    position: relative;
    left: 30px;
  "
  ><h2>DOBOO</h2></a
>
<div class="search">
  <form role="search" id="form">
    <input
      type="search"
      id="query"
      name="q"
      placeholder="Search..."
      aria-label="Search through site content"
    /><i
      class="fa-solid fa-magnifying-glass"
      style="color: rgb(0, 0, 0); font-size: x-large"
    ></i>
  </form>
</div>
<div class="dropdown">
  <span style="color: white; font-size: large">EXPLORE </span>
  <div class="dropdown-content">
    <a href="${root}/pages/explore artist.html">Connect with artist</a>
  </div>
</div>
<a href="${root}/pages/subscription page.html" style="text-decoration: none"
  ><p
    style="
      color: white;
      background-color: #222222;
      border-radius: 10px;
      padding: 10px;
      font-size: large;
      width: 140px;
    "
  >
    SUBSCRPITION
  </p></a
>
<a href="${root}/pages/profile.html"
  ><img
    loading="lazy"
    class="profile"
    src="${root}/assets/img/icons8-male-user-48.png"
    alt="profile"
/></a>
<a href="${root}/pages/cart/cart.html"
  ><img
    loading="lazy"
    class="carticon"
    src="${root}/assets/img/icons8-shopping-cart-60.png"
    alt="cart icon"
/></a>
</div>`;

const sellerHeader = `<div class="header">
      <a
        href="${root}/pages/homepage/buyer homepage.html"
        style="
          text-decoration: none;
          color: white;
          font-size: large;
          position: relative;
          left: 30px;
        "
        ><h2>DOBOO</h2></a
      >
      <div class="dropdown">
        <span style="color: white; font-size: large">upload</span>
        <div class="dropdown-content">
          <a href="${root}/pages/seller profile and upload a track/upload a track .html" id="uploadtrack">Upload track for sale</a><br/>
          <a href="">Upload for streaming</a>
        </div>
      </div>
      <div class="search">
        <form role="search" id="form">
          <input
            type="search"
            id="query"
            name="q"
            placeholder="Search..."
            aria-label="Search through site content"
          /><i
            class="fa-solid fa-magnifying-glass"
            style="color: rgb(0, 0, 0); font-size: x-large"
          ></i>
        </form>
      </div>
      <div class="dropdown">
        <span style="color: white; font-size: large">EXPLORE </span>
        <div class="dropdown-content">
          <a href="${root}/pages/explore artist.html">Connect with artist</a>
        </div>
      </div>

      <a href="${root}/pages/subscription page.html" style="text-decoration: none"
        ><p
          style="
            color: white;
            background-color: #222222;
            border-radius: 10px;
            padding: 10px;
            font-size: large;
            width: 140px;
          "
        >
          SUBSCRPITION
        </p></a
      >
      <a href="${root}/pages/profile.html"
        ><img
          loading="lazy"
          class="profile"
          src="${root}/assets/img/icons8-male-user-48.png"
          alt="profile"
      /></a>
      <a href="${root}/pages/cart/cart.html"
        ><img
          loading="lazy"
          class="carticon"
          src="${root}/assets/img/icons8-shopping-cart-60.png"
          alt="cart icon"
      /></a>
      </div>`;

const userRole = JSON.parse(localStorage.getItem('userRoleC'));

if (userRole === 'buyer') {
  document.body.insertAdjacentHTML('afterbegin', buyerHeader);
} else if (userRole === 'seller') {
  document.body.insertAdjacentHTML('afterbegin', sellerHeader);
}

document.getElementById('uploadtrack').addEventListener('click', () => {
  if (localStorage.getItem('songId')) {
    localStorage.removeItem('songId');
  }
});
