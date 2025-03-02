// Array of Objects for storing individual contact details
const favourites = [
  {
    name: "Frank Miller",
    phone: "+91 3333333333",
    email: "frankmiller@example.com",
    address: "1234 Oak St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    status: "Online",
    birth: "2nd August 1990",
  },
  {
    name: "Grace Lee",
    phone: "+91 2222222222",
    email: "gracelee@example.com",
    address: "567 Willow St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    status: "Busy",
    birth: "29th May 1998",
  },
];

const contacts = [
  {
    name: "John Doe",
    phone: "+91 1234567890",
    email: "johndoe@example.com",
    address: "123 Main St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    status: "Online",
    birth: "15th July 2005",
  },
  {
    name: "Jane Smith",
    phone: "+91 9876543210",
    email: "janesmith@example.com",
    address: "456 Elm St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    status: "Busy",
    birth: "29th May 1998",
  },
  {
    name: "Alice Johnson",
    phone: "+91 0987654321",
    email: "alicejohnson@example.com",
    address: "789 Oak St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    status: "Online",
    birth: "15th July 2005",
  },
  {
    name: "Charlie Davis",
    phone: "+91 8888888888",
    email: "charliedavis@example.com",
    address: "345 Willow St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    status: "Busy",
    birth: "2nd August 1990",
  },
  {
    name: "David Wilson",
    phone: "+91 4444444444",
    email: "davidwilson@example.com",
    address: "678 Maple St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    status: "Online",
    birth: "15th July 2005",
  },
  {
    name: "Emily Thompson",
    phone: "+91 7777777777",
    email: "emilythompson@example.com",
    address: "901 Grass St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    status: "Urgent Call Only",
    birth: "18th March 2002",
  },
  {
    name: "Frank Miller",
    phone: "+91 3333333333",
    email: "frankmiller@example.com",
    address: "1234 Oak St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    status: "Online",
    birth: "2nd August 1990",
  },
  {
    name: "Grace Lee",
    phone: "+91 2222222222",
    email: "gracelee@example.com",
    address: "567 Willow St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    status: "Busy",
    birth: "29th May 1998",
  },
  {
    name: "Brett Lee",
    phone: "+91 2222222222",
    email: "gracelee@example.com",
    address: "567 Willow St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    status: "Online",
    birth: "15th July 2005",
  },
  {
    name: "Mathew Hayden",
    phone: "+91 2222222222",
    email: "gracelee@example.com",
    address: "567 Willow St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    status: "Busy",
    birth: "2nd August 1990",
  },
  {
    name: "Adam Gilchrist",
    phone: "+91 2222222222",
    email: "gracelee@example.com",
    address: "567 Willow St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    status: "Urgent Call Only",
    birth: "29th May 1998",
  },
  {
    name: "Shane Warne",
    phone: "+91 2222222222",
    email: "gracelee@example.com",
    address: "567 Willow St, Anytown, USA",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    status: "Urgent Call Only",
    birth: "18th March 2002",
  },
];

//function call to display the contacts
displayFavourites(favourites);
displayContacts(contacts);
favouriteDetails(0);

// Diasplay contact list on the left side
function displayFavourites(favourites) {
  favourites.forEach((contact, index) => {
    console.log(contact);
    document.getElementById("favourite-list").innerHTML += `
    <div class="contact-card py-2 px-4" onclick="favouriteDetails(${index})">
            <div class="container">
              <div class="d-flex align-items-center">
                <div class="contact-profile flex-shrink-0">
                  <img
                    src="${contact.avatar}"
                    alt="dp"
                    width="60px"
                  />
                </div>
                <div class="contact-name ms-3 align-self-center flex-grow-1">
                  <h5 class="mb-0">${contact.name}</h5>
                  <span class="contact-status text-muted">${contact.status}</span>
                </div>
                <i class="fa-solid fa-chevron-right fa-lg"></i>
              </div>
            </div>
          </div>
    `;
  });
}

function displayContacts(contacts) {
  contacts.forEach((contact, index) => {
    document.getElementById("contact-list").innerHTML += `
    <div class="contact-card py-2 px-4" onclick="displayDetails(${index})">
            <div class="container">
              <div class="d-flex align-items-center">
                <div class="contact-profile flex-shrink-0">
                  <img
                    src="${contact.avatar}"
                    alt="dp"
                    width="60px"
                  />
                </div>
                <div class="contact-name ms-3 align-self-center flex-grow-1">
                  <h5 class="mb-0">${contact.name}</h5>
                  <span class="contact-status text-muted">${contact.status}</span>
                </div>
                <i class="fa-solid fa-chevron-right fa-lg"></i>
              </div>
            </div>
          </div>
    `;
  });
}

//Display contact details on the right side
function displayDetails(index) {
  let contact = contacts[index];

  document.getElementById("detail-copy").innerHTML = `
                <div
                  class="contact-details-hero d-flex align-items-center mb-4"
                >
                  <img src="${contact.avatar}" alt="" />
                  <h3 class="m-auto">${contact.name}</h3>
                </div>
                <div class="contact-details">
                  <div class="card phone-number mb-4">
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-mobile fa-lg me-3"></i>
                      <div>
                        <h5 class="mb-0">${contact.phone}</h5>
                        <span class="contact-slug text-muted fst-italic ms-2"
                          >Mobile</span
                        >
                      </div>
                      <i class="fa-solid fa-message fa-lg ms-auto"></i>
                    </div>
                  </div>
                  <div class="card email-address mb-4">
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-envelope fa-lg me-3"></i>
                      <div>
                        <h5 class="mb-0">${contact.email}</h5>

                        <span class="contact-slug text-muted fst-italic"
                          >Personal</span
                        >
                      </div>
                      <i class="fa-solid fa-paper-plane fa-lg ms-auto"></i>
                    </div>
                  </div>
                  <div class="card birth-day mb-4">
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-cake-candles fa-lg me-3"></i>
                      <div>
                        <h5 class="mb-0">${contact.birth}</h5>
                        <span class="contact-slug text-muted fst-italic"
                          >Add to Calendar</span
                        >
                      </div>

                      <i class="fa-solid fa-gift ms-auto fa-lg"></i>
                    </div>
                  </div>
                </div>
              
  `;
}
function favouriteDetails(index) {
  let contact = favourites[index];

  document.getElementById("detail-copy").innerHTML = `
                <div
                  class="contact-details-hero d-flex align-items-center mb-4"
                >
                  <img src="${contact.avatar}" alt="" />
                  <h3 class="m-auto">${contact.name}</h3>
                </div>
                <div class="contact-details">
                  <div class="card phone-number mb-4">
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-mobile fa-lg me-3"></i>
                      <div>
                        <h5 class="mb-0">${contact.phone}</h5>
                        <span class="contact-slug text-muted fst-italic ms-2"
                          >Mobile</span
                        >
                      </div>
                      <i class="fa-solid fa-message fa-lg ms-auto"></i>
                    </div>
                  </div>
                  <div class="card email-address mb-4">
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-envelope fa-lg me-3"></i>
                      <div>
                        <h5 class="mb-0">${contact.email}</h5>

                        <span class="contact-slug text-muted fst-italic"
                          >Personal</span
                        >
                      </div>
                      <i class="fa-solid fa-paper-plane fa-lg ms-auto"></i>
                    </div>
                  </div>
                  <div class="card birth-day mb-4">
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-cake-candles fa-lg me-3"></i>
                      <div>
                        <h5 class="mb-0">${contact.birth}</h5>
                        <span class="contact-slug text-muted fst-italic"
                          >Add to Calendar</span
                        >
                      </div>

                      <i class="fa-solid fa-gift ms-auto fa-lg"></i>
                    </div>
                  </div>
                </div>
              
  `;
}

function searchContacts() {
  const searchText = document.getElementById("search-input").value;
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.includes(searchText);
  });
  document.getElementById("favourite-list").innerHTML = "";
  document.getElementById("contact-list").innerHTML = "";
  displayContacts(filteredContacts);
}

function resetContacts() {
  console.log("reset");
  document.getElementById("favourite-list").innerHTML = "";
  document.getElementById("contact-list").innerHTML = "";
  displayFavourites(favourites);
  displayContacts(contacts);
  favouriteDetails(0);
}
