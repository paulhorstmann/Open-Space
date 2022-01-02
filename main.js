passwordInput = document.getElementById("password")
checkPasswordBtn = document.getElementById("password-check")
checkboxes = document.querySelectorAll("input[type=\"checkbox\"]")
ranges = document.querySelectorAll("input[type=\"range\"]")
launch = document.getElementById("launch")
rocket = document.querySelector(".rocket")

checkPasswordBtn.addEventListener("click", (e) => {
    if (passwordInput.value === "TrustNo1") {
        checkboxes.forEach(inpt => {
            inpt.disabled = false
        })
        ranges.forEach(inpt => {
            inpt.disabled = false
        })
        passwordInput.disabled = true
        checkPasswordBtn.disabled = true
    } else {
        passwordInput.value === "" ? passwordInput.focus() : alert('Wrong Password')
    }
})

checkboxes.forEach(check => {
    check.onchange = () => checkIfReadyToLoaunch()
})

ranges.forEach(range => {
    range.onchange = () => checkIfReadyToLoaunch()
})

function checkIfReadyToLoaunch() {
    readyControls = 0

    checkboxes.forEach(checkbox => {
        if (checkbox.checked == true) {
            readyControls++
        }
    });

    ranges.forEach(range => {
        if (range.value == 100) {
            readyControls++
        }
    })

    launch.disabled = readyControls !== 11
}

launch.addEventListener("click", async () => {
    console.log(rocket)
    rocket.classList.add("lift-of")
    await new Promise(r => setTimeout(r, 8000));
    if (confirm('Restart?'))
        location.reload()
})