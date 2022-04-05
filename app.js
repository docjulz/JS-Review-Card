// local reviews data
// *** Better to use AJAX but do this Later


const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni voluptatibus quae, assumenda unde similique! Quam et dolor, quidem consectetur asperiores ipsum in dolorem vel repellat, quod maiores repudiandae mollitia?",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad dolorum tenetur voluptate illum dignissimos sed enim. Consequatur odit numquam enim, illum aut pariatur praesentium.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Dolor ipsa reiciendis cumque dignissimos sapiente quisquam aperiam tenetur nemo repudiandae, possimus ad velit perspiciatis aliquam, tempora vitae aut adipisci, ea sunt commodi.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Culpa quae molestias voluptate facere iste aut veniam, tempore consequatur aliquam! Doloremque nobis saepe suscipit voluptatum quasi harum obcaecati ducimus culpa laboriosam laudantium!",
    },
  ];
  
  // Select Items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // Set Starting Item
  let currentItem = 0;
  
  // Get the info from the array
  window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
  });
  
   // Show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // Show the previous and next button functionality
  nextBtn.addEventListener("click", () =>{
    currentItem++;
    
    if (currentItem > reviews.length-1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  prevBtn.addEventListener("click", () =>{
    currentItem--;
    
    if (currentItem < 0) {
      currentItem = reviews.length -1;
    }
    showPerson(currentItem);
  });
  
  // Show the Random Review function.  Dont need to do reviews.length-1 becuase the floor goes to lowest
  randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    
    showPerson(currentItem);
    
  })
  
  