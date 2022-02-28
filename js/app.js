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
    phones.forEach(phone => {
        console.log(phone);
    });
}