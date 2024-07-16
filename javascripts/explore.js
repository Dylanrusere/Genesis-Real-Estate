let products = {
    data: [
      {
        propertyDescription: "10 Rooms, Borrowdale Brook",
        category: "Borrowdale",
        price: "300 000",
        image: "../assets/images/img.jpg",
      },
      {
        propertyDescription: "10 Rooms, Chisipite",
        category: "Chisipite",
        price: "270 000",
        image: "../assets/images/origin.jpg",
      },
      {
        propertyDescription: "Two Story, 14 Rooms, Bulawayo",
        category: "Bulawayo",
        price: "350 000",
        image: "../assets/images/img7.webp",
      },
      {
        propertyDescription: "Two Story, 12 Rooms, Borrowdale Brook",
        category: "Borrowdale",
        price: "1 800 000",
        image: "../assets/images/hero1.jpeg",
      },
      {
        propertyDescription: "13 Rooms, Gweru",
        category: "Gweru",
        price: "90 000",
        image: "../assets/images/img8.webp",
      },
      {
        propertyDescription: "8 Rooms, Highlands, Harare",
        category: "Harare",
        price: "150 000",
        image: "../assets/images/hero4.jpg",
      },
      {
        propertyDescription: "Two Story, 10 Rooms, Chisipite",
        category: "Chispite",
        price: "1 600 000",
        image: "../assets/images/hero3.png",
      },
      {
        propertyDescription: "7 Rooms, Bulawayo",
        category: "Bulawayo",
        price: "130 000",
        image: "../assets/images/hero555.jpg",
      },
      {
        propertyDescription: "Two story, 18 Rooms, Domboshava",
        category: "Domboshava",
        price: "2 000 000",
        image: "../assets/images/img9.webp",
      },
      {
        propertyDescription: "Borrowdale Mall",
        category: "Borrowdale",
        price: "(Price On Inquiry)",
        image: "../assets/images/img14.webp",
      },
      {
        propertyDescription: "8 Rooms, Harare",
        category: "Harare",
        price: "15 000",
        image: "../assets/images/img16.webp",
      },
      {
        propertyDescription: "500 Square meters Stand, Gweru",
        category: "Gweru",
        price: "12 000",
        image: "../assets/images/img4.webp",
      },
      {
        propertyDescription: "6 Rooms, Domboshava",
        category: "Domboshava",
        price: "13 000",
        image: "../assets/images/img19.webp",
      },
      {
        propertyDescription: "Two Story, 13 Rooms, Chisipite",
        category: "Chisipite",
        price: "1 009 000",
        image: "../assets/images/img6.webp",
      },
      {
        propertyDescription: "10 Rooms, Harare",
        category: "Harare",
        price: "17 000",
        image: "../assets/images/img5.webp",
      },
      {
        propertyDescription: "400 Square meters stand, Gweru",
        category: "Gweru",
        price: "9 000",
        image: "../assets/images/img12.webp",
      },
      {
        propertyDescription: "10 Rooms, Domboshava",
        category: "Domboshava",
        price: "16 500",
        image: "../assets/images/img18.webp",
      },
      {
        propertyDescription: "10 Rooms, Bulawayo",
        category: "Bulawayo",
        price: "15 500",
        image: "../assets/images/img17.webp",
      },
      {
        propertyDescription: "14 Rooms, Chisipite",
        category: "Chisipite",
        price: "35 000",
        image: "../assets/images/img20.webp",
      },
      {
        propertyDescription: "7 Rooms, Harare",
        category: "Harare",
        price: "14 000",
        image: "../assets/images/img21.webp",
      },
      {
        propertyDescription: "14 Rooms, Borrowdale",
        category: "Borrowdale",
        price: "50 000",
        image: "../assets/images/img22.webp",
      }
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.propertyDescription.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("properties").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };