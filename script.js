const Boxes = document.querySelector(".boxes");
const men = document.getElementById("men");
const women = document.getElementById("women");
const kids = document.getElementById("kids");
const shoes = document.getElementById("shoes");
const showCaseProduct = document.querySelector(".showCaseProduct");
const clothsView = document.querySelector(".cloths_view");
const ShowCaseProduct = document.querySelector(".showCaseProduct");
const leftPart = document.querySelector(".left-part");
const rightPart = document.querySelector(".right-part");
const bagSection = document.querySelector(".bag_section");
const itemBoxes = document.querySelector(".item_boxes");

const openBag = () => {
  bagSection.classList.toggle("none");
};
const closeBag = () => {
  bagSection.classList.add("none");
};
const Navbar = document.querySelector(".navbar");
const searchInput = document.querySelector(".search_input");
const Bag = document.getElementById("bag").addEventListener("click", openBag);

const TotalP = document.querySelector(".total");
const CheckOut = document.getElementById("checkout");
const CLoseBag = document
  .getElementById("closebag")
  .addEventListener("click", closeBag);

const ProductShow = (ans) => {
  clothsView.classList.add("none");
  searchInput.classList.add("none")
  showCaseProduct.classList.remove("none");
  Navbar.classList.add("none");
  leftPart.innerHTML = `<img src="${ans.Image}" alt="">`;
  rightPart.innerHTML = ` <div class="info_product">
              <h1 class="name">${ans.clothName}</h1>
              <h4 class="cate_pro">${ans.CategoryName}</h4>
  
              <h2 class="priceTag">₹${ans.PriceTag}</h2>
          </div>
          <div class="size-details">
            <h3>Select Size</h3>
            <div class="size_button">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>
          <button id="Buy" class="btn">Buy Now</button>
          <button id="addCart" class="btn">Add to cart</button>`;

  const addCartBtn = rightPart.querySelector("#addCart");

  let totalprice = parseFloat(TotalP.dataset.total) || 0;
  console.log(totalprice);
  
  addCartBtn.addEventListener("click", () => {
    let ele = document.createElement("div");
    ele.className = "item-box";
    ele.innerHTML = `<img src="${ans.Image}" alt="" />
                  <div class="box_ino">
                    <div class="product_name">${ans.clothName}</div>

                    <div class="price_t">₹${ans.PriceTag}</div>
                  </div>`;
    const Price = parseFloat(ans.PriceTag);
    
    totalprice += Price;
    TotalP.dataset.total = totalprice;

    openBag();
    
    TotalP.innerHTML = `<h3>Your total is: ₹${totalprice.toFixed(2)}</h3>`;
    
    itemBoxes.append(ele);
  });
};

const show = (val) => {
  Boxes.innerHTML = "";
  data.filter((ans) => {
    if (ans.category == val) {
      let div = document.createElement("div");
      div.className = "box";
      div.innerHTML = `<div class="image">
                          <img src="${ans.Image}" alt="">
                        </div>
                        <div class="desc">
                          <button id="cart">Preview</button>
                          <h3>${ans.clothName}</h3>
                          <p>${ans.CategoryName}</p>
                          <h3 id="price">₹${ans.PriceTag}</h3>
                        </div>`;
      Boxes.append(div);
      let button = div.querySelector("#cart");

      button.addEventListener("click", () => {
        ProductShow(ans);
      });
    }
  });
};

men.addEventListener("click", () => {
  show("men");
});
women.addEventListener("click", () => {
  show("women");
});
kids.addEventListener("click", () => {
  show("kids");
});
shoes.addEventListener("click", () => {
  show("shoes");
});

const CloseProductPage = () => {
  searchInput.classList.remove("none");
  Navbar.classList.remove("none");
  clothsView.classList.remove("none");
  showCaseProduct.classList.add("none");
};
const Close = document
  .getElementById("close")
  .addEventListener("click", CloseProductPage);

const showDisplayData = () => {
  data.filter((ans) => {
    if (
      ans.category == "men" ||
      ans.category == "women" ||
      ans.category == "kids"
    ) {
      let div = document.createElement("div");
      div.className = "box";
      div.innerHTML = `<div class="image">
                          <img src="${ans.Image}" alt="">
                        </div>
                        <div class="desc">
                          <button id="cart">Preview</button>
                          <h3>${ans.clothName}</h3>
                          <p>${ans.CategoryName}</p>
                          <h3 id="price">₹${ans.PriceTag}</h3>
                        </div>`;
      Boxes.append(div);

      let button = div.querySelector("#cart");

      button.addEventListener("click", () => {
        ProductShow(ans);
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showDisplayData();
});

// ________________For get data which is type in input section________________

const Input = document.getElementById("input");
const searchValue = () => {
  let value = Input.value;
  value = value.toLowerCase();
  Boxes.innerHTML = "";
  data.filter((ans) => {
    if (ans.category == value) {
      let div = document.createElement("div");
      div.className = "box";
      div.innerHTML = `<div class="image">
                            <img src="${ans.Image}" alt="">
                          </div>
                          <div class="desc">
                            <button id="cart">Preview</button>
                            <h3>${ans.clothName}</h3>
                            <p>${ans.CategoryName}</p>
                            <h3 id="price">₹${ans.PriceTag}</h3>
                          </div>`;
      Boxes.append(div);
      let button = div.querySelector("#cart");

      button.addEventListener("click", () => {
        ProductShow(ans);
      });
    }
  });
  if (value == "") {
    location.reload();
  }
};
Input.addEventListener("input", searchValue);



