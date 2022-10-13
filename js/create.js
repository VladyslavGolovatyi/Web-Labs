const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modal-content");


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

async function saveNewPhone() {
    let model = document.querySelector('#modelField').value
    let price = parseInt(document.querySelector('#priceField').value)
    if (model === "") {
        while (modalContent.childNodes.length > 2) {
            modalContent.removeChild(modalContent.lastChild);
        }
        modalContent.insertAdjacentHTML("beforeend", '<p>Model can not be blank</p>')
        modal.style.display = "block";
    } else if (isNaN(price)) {
        while (modalContent.childNodes.length > 2) {
            modalContent.removeChild(modalContent.lastChild);
        }
        modalContent.insertAdjacentHTML("beforeend", '<p>Price can not be blank</p>')
        modal.style.display = "block";
    } else {
        fetch("http://localhost:8080/phones", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
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
        //sessionStorage.setItem("newPhone", JSON.stringify(newPhone));
        //toMainPage();
    }
}

function toMainPage() {
    window.location.href = 'index.html';
}