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
    displayPhones.innerHTML = '';
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 w-75">
                <img  src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5>${phone.phone_name}</h5>
                <p>${phone.brand}</p>
                <button onclick="getSinglePhoneDetails('${phone.slug}')" type="button" class="btn btn-info">Details</button>
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
    // console.log(singlephone);
    console.log(singlePhone.mainFeatures);
    const  singlePhoneDetails = document.getElementById('single-phone-details')
    singlePhoneDetails.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${singlePhone.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singlePhone.name}</h5>
        <p>Chipset: ${singlePhone.mainFeatures.chipSet}</p>
        <p>Storage: ${singlePhone.mainFeatures.storage}</p>
        <p>Display-Size: ${singlePhone.mainFeatures.displaySize}</p>
        <p class="card-text"><small class="text-muted">${singlePhone.releaseDate}</small></p>
      </div>
    </div>
  </div>
    `
}