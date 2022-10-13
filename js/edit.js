document.getElementById('modelField').setAttribute("value",sessionStorage.getItem("modelToEdit"))
document.getElementById('priceField').setAttribute("value",sessionStorage.getItem("priceToEdit"))

function toMainPage() {
    window.location.href = 'index.html';
}

function editPhone() {
    let model = document.querySelector('#modelField').value
    let price = parseInt(document.querySelector('#priceField').value)
    fetch("http://localhost:8080/phones/"+sessionStorage.getItem("idToEdit"), {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
            'model': model,
            'price': price
        })
    })
        .then(res => {
            if (res.status === 200) {
                model = '';
                price = '';
                window.location.href = 'index.html';
            }
        })
        .catch(() => {
            modalContent.insertAdjacentHTML("beforeend", '<p>Error</p>')
            modal.style.display = "block";
        });
}