// local reviews data
const reviews = [
    {
      id: 1,
      name: "simon adjei",
      job: "web developer",
      img:
        "team/tech.jpg",
      text:
        "Its been wonderful working with the teckhub team.i would say their services are one of the best in the corporate world and coherent in providing the best design and development ",
    },
    {
      id: 2,
      name: "clement koranteng",
      job: "web designer",
      img:
        "team/tech.jpg",
      text:
        "Its been wonderful working with the teckhub team.i would say their services are one of the best in the corporate world and coherent in providing the best design and development ",
    },
    {
      id: 3,
      name: "Gideon Lambride",
      job: "mobile dev",
      img:
        "team/tech.jpg",
      text:
        "Its been wonderful working with the teckhub team.i would say their services are one of the best in the corporate world and coherent in providing the best design and development ",
    },
    {
      id: 4,
      name: "jahel",
      job: "the boss",
      img:
        "team/tech.jpg",
      text:
      "Its been wonderful working with the teckhub team.i would say our services are one of the best in the corporate world and coherent in providing the best design and development ",
    },
    {
      id: 5,
      name: "micheal aboagye",
      job: "mobile developer",
      img:
        "team/tech.jpg",
      text:
        "Its been wonderful working with the teckhub team.i would say their services are one of the best in the corporate world and coherent in providing the best design and development ",
    }
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });