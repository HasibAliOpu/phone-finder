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
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 w-75">
                <img  src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5>${phone.phone_name}</h5>
                <p>${phone.brand}</p>
                <button type="button" class="btn btn-info">Details</button>
                </div>
              </div>
        `;
        displayPhones.appendChild(div)
    });
}