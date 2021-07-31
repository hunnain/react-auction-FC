


export function openLoginModal() {
    let loginModal = document.getElementById("loginModal")
    loginModal.style.display = "block"
    loginModal.classList.add("show");
    document.querySelector("body").classList.add("modal-open")
}

export function closeLoginModal() {
    let loginModal = document.getElementById("loginModal")
    loginModal.style.display = "none"
    loginModal.classList.remove("show");
    document.querySelector("body").classList.remove("modal-open")
}

export function openRegisterModal() {
    let loginModal = document.getElementById("registerModal")
    loginModal.style.display = "block"
    loginModal.classList.add("show");
    document.querySelector("body").classList.add("modal-open")
}

export function closeRegisterModal() {
    let loginModal = document.getElementById("registerModal")
    loginModal.style.display = "none"
    loginModal.classList.remove("show");
    document.querySelector("body").classList.remove("modal-open")
}


