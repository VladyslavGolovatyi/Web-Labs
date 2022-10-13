const main = document.getElementById('main');

let phones = [];


function sortByPriceDesc() {
    addItemsToPage(phones.sort((a, b) => b.price - a.price))
}

function findByName(event) {
    event.preventDefault()
    const input = document.querySelector('#nameToFind').value;
    addItemsToPage(phones.filter(phone => phone.model.indexOf(input) !== -1))
}

function calculateTotalPrice() {
    const totalPrice = phones.reduce((acc, phone) => (acc + phone.price), 0);
    main.insertAdjacentHTML("beforeend",`<h3>Total price: <strong>${totalPrice} UAH</strong></h3>`)
}

function toAddPage() {
    window.location.href = 'create.html';
}

function toMainPage() {
    window.location.href = 'index.html';
}

function updateDOM() {
    fetch("http://localhost:8080/phones")
        .then(res => res.json())
        .then(data => {
            phones = data;
            addItemsToPage(phones)
        })
}

function addItemsToPage(phones) {
    main.innerHTML = '<h2><strong>Model</strong> Price<div> Edit</div><div> Delete</div></h2>';

    phones.forEach(item => {
        main.insertAdjacentHTML("beforeend",
            `<h3><strong>${item.model}</strong>${item.price} UAH<button style="max-width: 60px" onclick="toEditPage('${item.phoneId}','${item.model}', '${item.price}')">Edit</button>
<button style="max-width: 60px" onclick="deletePhone('${item.phoneId}')">Delete</button></h3>`)
    });
}

function deletePhone(phoneId) {
    fetch("http://localhost:8080/phones/"+phoneId, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })
        .then(res => {
            if (res.status === 200) {
                window.location.href = 'index.html';
            }
        })
        .catch(() => {
            modalContent.insertAdjacentHTML("beforeend", '<p>Error</p>')
            modal.style.display = "block";
        });
}

function toEditPage(phoneId, model, price) {
    sessionStorage.setItem("idToEdit", phoneId);
    sessionStorage.setItem("modelToEdit", model);
    sessionStorage.setItem("priceToEdit", price);
    window.location.href = 'edit.html';
}

function containsObject(list, obj) {
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i].model === obj.model) {
            return true;
        }
    }

    return false;
}

document.getElementById('add').addEventListener('click', toAddPage);
document.getElementById('sort-by-price').addEventListener('click', sortByPriceDesc);
document.getElementById('calculate-total-price').addEventListener('click', calculateTotalPrice);
document.getElementById('find-by-name').addEventListener('click', findByName);

updateDOM()

