const recipes = [
  {
    title: "French Onion Soup",
    img: "images/img1.jpg",
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter",
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes.",
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
  },
  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img: "images/img2.jpg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter",
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley.",
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg",
    },
  },

  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img: "images/img3.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese",
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately.",
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg",
    },
  },

  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img: "images/img4.jpg",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles.",
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg",
    },
  },

  {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img: "images/img5.jpg",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving.",
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg",
    },
  },
];

function repalceFood() {
  const i = Math.floor(Math.random() * recipes.length);

  var change = "";
  for (var g = 0; g < recipes[i].ingredients.length; g++) {
    change += `<div class="d-flex mb-3 align-items-center">
                                        <span class="editingredients">${g + 1}</span>
                                        <span>${ recipes[i].ingredients[g]}</span>
                                    </div>`;
  }

  var change2 = "";
  for (var h = 0; h < recipes[i].instruction.length; h++) {
    change2 += `
    <div class="d-flex mb-3 align-items-center">
                                        <span class="editInstructions">${h + 1}</span>
                                        <span>
                                           ${recipes[i].instruction[h]}</span>
                                    </div>`;
  }

  document.getElementById("food").innerHTML = `
          <div class="container-lg">
            <div class="row g-0 heightdiv overflow-hidden rounded-4 bg-white">
                <div class="col-xl-5 p-0 h-100 position-relative">
                    <div class="inner h-100">
                        <img class="w-100 h-100 " src="${recipes[i].img}" alt="">
                    </div>
                    <div class=" position-absolute sizepsition rounded-4 bg-white p-4 d-flex align-items-center justify-content-between">
                        <div class="text-center">
                            <i class="fa-solid fa-clock icon1"></i>
                            <p class="f-14px text-gray-500 m-0">Prep Time</p>
                            <p class="f-16px fw-bolder m-0">${recipes[i].prepTime}</p>
                        </div>
                        <div class="text-center">
                            <i class="fa-solid fa-fire-burner icon2"></i>
                            <p class="f-14px text-gray-500 m-0">Cook Time</p>
                            <p class="f-16px fw-bolder m-0">${recipes[i].cookTime}</p>
                        </div>
                        <div class="text-center">
                            <i class="fa-solid fa-users icon3"></i>
                            <p class="f-14px text-gray-500 m-0">Servings</p>
                            <p class="f-16px fw-bolder m-0">${recipes[i].servings} people</p>
                        </div>
                    </div>
                    <div class="rate">
                        <i class="fa-solid fa-star me-1" style="color: #FFD43B;"></i>
                        <span class="me-1 fw-bolder">${recipes[i].rating}</span>
                        <span class="f-14px">(${recipes[i].reviews} reviews)</span>
                    </div>
                </div>
                <div class="col-xl-7 p-0 h-100 ">
                    <div class="inner2 h-100">
                        <div class="mb-3">
                            <span class="span1">${recipes[i].level}</span>
                            <span class="span2">${recipes[i].cuisine}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 class="editfood">${recipes[i].title}</h3>
                                <p class="paragraphedit">Juicy homemade burger with all the fixings</p>
                            </div>
                            <div class="d-flex">
                                <i class="fa-solid fa-bookmark iconshare me-3"></i>
                                <i class="fa-solid fa-share-nodes iconshare"></i>
                            </div>
                        </div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active fw-bold" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                    aria-selected="true"><i class="fa-solid fa-list-check me-2"></i>Ingredients</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link fw-bold" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                    aria-selected="false"><i
                                        class="fa-solid fa-book-open me-2"></i>Instructions</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link fw-bold" id="contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#contact" type="button" role="tab" aria-controls="contact"
                                    aria-selected="false"><i class="fa-solid fa-chart-pie me-2"></i>Nutrition</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link fw-bold" id="contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#chef" type="button" role="tab" aria-controls="contact"
                                    aria-selected="false"><i class="fa-solid fa-lightbulb me-2"></i>Chef's Tips</button>
                            </li>
                        </ul>
                        <div class="tab-content " id="myTabContent">
                            <div class="tab-pane fade show active height-navs overflow-auto" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="p-4 bg-div rounded-4">
                                    ${change}
                                </div>
                            </div>
                            <div class="tab-pane fade height-navs overflow-auto" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div>
                               ${change2}
                                </div>

                            </div>
                            <div class="tab-pane fade height-navs overflow-auto" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div class="row row-cols-1 g-3 m-0  row-cols-lg-2 ">
                                    <div class="col">
                                        <div
                                            class="p-3 bg-card rounded-3 d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-fire me-3 calreicon"></i>
                                                <p class="f-16px fw-medium m-0 color-gray">Calories</p>
                                            </div>
                                            <span class="f-20px fw-bolder">${recipes[i].nutrition.calories} kcal</span>
                                        </div>
                                    </div>
                                    <div class="col ">
                                        <div
                                            class="p-3 bg-card rounded-3 d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-dumbbell me-3 calreicon1"></i>
                                                <p class="f-16px fw-medium m-0 color-gray">Protein</p>
                                            </div>
                                            <span class="f-20px fw-bolder">${recipes[i].nutrition.protein}</span>
                                        </div>
                                    </div>
                                    <div class="col ">
                                        <div
                                            class="p-3 bg-card rounded-3 d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-wheat-awn me-3 calreicon2"></i>
                                                <p class="f-16px fw-medium m-0 color-gray">Carbohydrates</p>
                                            </div>
                                            <span class="f-20px fw-bolder">${recipes[i].nutrition.carbs}</span>
                                        </div>
                                    </div>
                                    <div class="col ">
                                        <div
                                            class="p-3 bg-card rounded-3 d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-droplet me-3 calreicon3"></i>
                                                <p class="f-16px fw-medium m-0 color-gray">Fat</p>
                                            </div>
                                            <span class="f-20px fw-bolder">${recipes[i].nutrition.fat}</span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div
                                            class="p-3 bg-card rounded-3 d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-seedling me-3 calreicon4"></i>
                                                <p class="f-16px fw-medium m-0 color-gray">Fiber</p>
                                            </div>
                                            <span class="f-20px fw-bolder">${recipes[i].nutrition.fiber}</span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div
                                            class="p-3 bg-card rounded-3 d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-cube me-3 calreicon5"></i>
                                                <p class="f-16px fw-medium m-0 color-gray">Sodium</p>
                                            </div>
                                            <span class="f-20px fw-bolder">${recipes[i].nutrition.sodium}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade height-navs overflow-auto" id="chef" role="tabpanel" aria-labelledby="contact-tab">
                                <div>
                                    <div class="d-flex mb-3 align-items-center bg-div p-4 borderitem rounded-4">
                                        <span class="editingredients"><i class="fa-solid fa-check"></i></span>
                                        <span>Don't press down on burgers while cooking - keeps them juicy</span>
                                    </div>
                                    <div class="d-flex mb-3 align-items-center bg-div p-4 borderitem rounded-4">
                                        <span class="editingredients"><i class="fa-solid fa-check"></i></span>
                                        <span>Make indent in center to prevent burger from puffing up</span>
                                    </div>
                                    <div class="d-flex mb-3 align-items-center bg-div p-4 borderitem rounded-4">
                                        <span class="editingredients"><i class="fa-solid fa-check"></i></span>
                                        <span>Let patties rest for 2-3 minutes before serving</span>
                                    </div>
                                    <div class="d-flex mb-3 align-items-center bg-div p-4 borderitem rounded-4">
                                        <span class="editingredients"><i class="fa-solid fa-check"></i></span>
                                        <span>Toast buns for better texture and flavor</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="borrr">
                        <button onclick="repalceFood()" class="btr"><i class="fa-solid fa-rotate me-2"></i>Try Another Recipe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
