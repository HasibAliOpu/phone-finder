const loadPhones = () => {
  /* remove single phone details */
  const singlePhoneDetails = document.getElementById("single-phone-details");
  singlePhoneDetails.textContent = "";

  /* remove searching phone details  */
  const displayPhones = document.getElementById("display-phones");

  /* get search box value  */
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value.toLowerCase();
  searchField.value = "";

  /* get error text  */
  const error = document.getElementById("error-text");
  if (!searchText) {
    error.style.display = "block";
  }
  if (
    searchText !== "oppo" &&
    searchText !== "iphone" &&
    searchText !== "huawei" &&
    searchText !== "samsung"
  ) {
    error.style.display = "block";
    displayPhones.textContent = "";
  } else {
    error.style.display = "none";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchingPhones(data.data));
  }
};
/* display searching phone details  */
const displaySearchingPhones = (phones) => {
  const displayPhones = document.getElementById("display-phones");
  const first18Phones = phones.slice(0, 18);
  displayPhones.textContent = "";

  first18Phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100 all-cards">
                <img  src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5>${phone.phone_name}</h5>
                <p>${phone.brand}</p>
                <button onclick="getSinglePhoneDetails('${phone.slug}')" type="button" class="btn btn-info text-white">Details</button>
                </div>
              </div>
        `;
    displayPhones.appendChild(div);
  });
};
/* getting single phone id */
const getSinglePhoneDetails = (phoneId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySinglePhoneDetails(data.data));
};
/* display single phone details  */
const displaySinglePhoneDetails = (singlePhone) => {
  const singlePhoneDetails = document.getElementById("single-phone-details");
  singlePhoneDetails.innerHTML = `
    <div class="row g-0 all-cards">
    <div class="col-md-4">
      <img src="${singlePhone.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singlePhone.brand} ${singlePhone.name}</h5>
        <p class="card-text"><small class="text-muted">${
          singlePhone.releaseDate
            ? singlePhone.releaseDate
            : "No Release Date Found"
        }</small></p>
        <p>Chipset: ${
          singlePhone.mainFeatures.chipSet
            ? singlePhone.mainFeatures.chipSet
            : "Data Not Available"
        }</p>
        <p>Storage: ${
          singlePhone.mainFeatures.storage
            ? singlePhone.mainFeatures.storage
            : "Data Not Available"
        }</p>
        <p>Display-Size: ${
          singlePhone.mainFeatures.displaySize
            ? singlePhone.mainFeatures.displaySize
            : "Data Not Available"
        }</p>
    <div class="btn-group">
        <button type="button" class="btn btn-info text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Sensors</button>
        <ul class="dropdown-menu">
        <li class="dropdown-item">${
          singlePhone.mainFeatures.sensors[0]
            ? singlePhone.mainFeatures.sensors[0]
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">${
          singlePhone.mainFeatures.sensors[1]
            ? singlePhone.mainFeatures.sensors[1]
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">${
          singlePhone.mainFeatures.sensors[2]
            ? singlePhone.mainFeatures.sensors[2]
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">${
          singlePhone.mainFeatures.sensors[3]
            ? singlePhone.mainFeatures.sensors[3]
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">${
          singlePhone.mainFeatures.sensors[4]
            ? singlePhone.mainFeatures.sensors[4]
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">${
          singlePhone.mainFeatures.sensors[5]
            ? singlePhone.mainFeatures.sensors[5]
            : "Data Not Available"
        }</li>
        </ul>
     </div>
    <div class="btn-group">
        <button type="button" class="btn btn-info text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Others</button>
        <ul class="dropdown-menu">
        <li class="dropdown-item">Bluetooth: ${
          singlePhone?.others?.Bluetooth
            ? singlePhone?.others?.Bluetooth
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">GPS: ${
          singlePhone?.others?.GPS
            ? singlePhone?.others?.GPS
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">NFC: ${
          singlePhone?.others?.NFC
            ? singlePhone?.others?.NFC
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">Radio: ${
          singlePhone?.others?.Radio
            ? singlePhone?.others?.Radio
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">USB: ${
          singlePhone?.others?.USB
            ? singlePhone?.others?.USB
            : "Data Not Available"
        }</li>
        <li class="dropdown-item">WLAN: ${
          singlePhone?.others?.WLAN
            ? singlePhone?.others?.WLAN
            : "Data Not Available"
        }</li>
        </ul>
     </div>
     
      </div>
    </div>
  </div>
    `;
};
