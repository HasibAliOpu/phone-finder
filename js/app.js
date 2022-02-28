const loadPhones = () =>{
    const  singlePhoneDetails = document.getElementById('single-phone-details')
    singlePhoneDetails.innerHTML = '';
    const displayPhones = document.getElementById('display-phones');
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value.toLowerCase();
    searchField.value = '';
    const error = document.getElementById('error')
    if(searchText === ''){
         error.style.display = 'block';
    }
    if(searchText !== 'oppo' && searchText !== 'iphone' && searchText !== 'huawei' && searchText !== 'samsung'){
        error.style.display = 'block';
        displayPhones.innerHTML = '';
    }
    else{
        error.style.display = 'none';
     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayAllPhones(data.data))
    }
}

const displayAllPhones = phones => {
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

    const  singlePhoneDetails = document.getElementById('single-phone-details')
    singlePhoneDetails.innerHTML = `
    <div class="row g-0 cards">
    <div class="col-md-4">
      <img src="${singlePhone.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singlePhone.brand} ${singlePhone.name}</h5>
        <p class="card-text"><small class="text-muted">${singlePhone.releaseDate}</small></p>
        <p>Chipset: ${singlePhone.mainFeatures.chipSet}</p>
        <p>Storage: ${singlePhone.mainFeatures.storage}</p>
        <p>Display-Size: ${singlePhone.mainFeatures.displaySize}</p>
    <div class="btn-group">
        <button type="button" class="btn btn-info text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Sensors</button>
        <ul class="dropdown-menu">
        <li class="dropdown-item">${singlePhone.mainFeatures.sensors[0]}</li>
        <li class="dropdown-item">${singlePhone.mainFeatures.sensors[1]} </li>
        <li class="dropdown-item">${singlePhone.mainFeatures.sensors[2]}</li>
        <li class="dropdown-item">${singlePhone.mainFeatures.sensors[3]}</li>
        <li class="dropdown-item">${singlePhone.mainFeatures.sensors[4]}</li>
        <li class="dropdown-item">${singlePhone.mainFeatures.sensors[5]}</li>
        </ul>
     </div>
    <div class="btn-group">
        <button type="button" class="btn btn-info text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Others</button>
        <ul class="dropdown-menu">
        <li class="dropdown-item">Bluetooth: ${singlePhone.others.Bluetooth}</li>
        <li class="dropdown-item">GPS: ${singlePhone.others.GPS}</li>
        <li class="dropdown-item">NFC: ${singlePhone.others.NFC}</li>
        <li class="dropdown-item">Radio: ${singlePhone.others.Radio}</li>
        <li class="dropdown-item">USB: ${singlePhone.others.USB}</li>
        <li class="dropdown-item">WLAN: ${singlePhone.others.WLAN}</li>
        </ul>
     </div>
     
      </div>
    </div>
  </div>
    `;
}