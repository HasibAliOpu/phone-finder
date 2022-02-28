const loadPhones = () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
     searchField.value = '';
     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayPhones(data.data))
}

const displayPhones = phones => {
    const displayPhones = document.getElementById('display-phones');
    const first20Phones = phones.slice(0,18);
    displayPhones.innerHTML = '';
    first20Phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 cards">
                <img  src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5>${phone.phone_name}</h5>
                <p>${phone.brand}</p>
                <button onclick="getSinglePhoneDetails('${phone.slug}')" type="button" class="btn btn-info text-white">Details</button>
                </div>
              </div>
        `;
        displayPhones.appendChild(div)
    });
}

const getSinglePhoneDetails = phoneId => {
    const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySinglePhoneDetails(data.data))
}

const displaySinglePhoneDetails = singlePhone => {
    console.log(singlePhone.others);
    
    const  singlePhoneDetails = document.getElementById('single-phone-details')
    singlePhoneDetails.innerHTML = `
    <div id="single-phone" class="row g-0">
    <div class="col-md-4">
      <img src="${singlePhone.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singlePhone.name}</h5>
        <h5 class="card-title">${singlePhone.brand}</h5>
        <p class="card-text"><small class="text-muted">${singlePhone.releaseDate}</small></p>
        <p>Chipset: ${singlePhone.mainFeatures.chipSet}</p>
        <p>Storage: ${singlePhone.mainFeatures.storage}</p>
        <p>Display-Size: ${singlePhone.mainFeatures.displaySize}</p>
    <div class="btn-group">
        <button type="button" class="btn btn-info text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Sensers</button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">${singlePhone.mainFeatures.sensors[0]}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.mainFeatures.sensors[1]}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.mainFeatures.sensors[2]}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.mainFeatures.sensors[3]}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.mainFeatures.sensors[4]}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.mainFeatures.sensors[5]}</a></li>
        </ul>
     </div>
    <div class="btn-group">
        <button type="button" class="btn btn-info text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Others</button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">${singlePhone.others.Bluetooth}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.others.GPS}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.others.NFC}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.others.Radio}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.others.USB}</a></li>
        <li><a class="dropdown-item" href="#">${singlePhone.others.WLAN}</a></li>
        </ul>
     </div>
     
      </div>
    </div>
  </div>
    `
}