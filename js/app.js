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
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img  src="${phone.image}" class="card-img-top w-50" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
        `;
        displayPhones.appendChild(div)
    });
}