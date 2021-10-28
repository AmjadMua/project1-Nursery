const picScrool = document.querySelectorAll(".sccroll-to")
picScrool.forEach((item) => {
    item.addEventListener("click", () => {
        const element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({ behavior: "smooth", block: "center" })
    })
})


const btn = document.querySelector(".send")
btn.addEventListener("click", function () {
    const alert = document.querySelector(".alert")
    alert.innerHTML = (`
    <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Thank you!</h4>
                    <p> we will take your advice and work on it</p>
                    <hr>
                    <p class="mb-0">Whenever you want to, be sure that we allwayse here to hear you </p> <br>
                    <button type="button" class="close" data-dismiss="modal">Close</button>
                    </div>`)
    const closebtn = document.querySelector(".close")
    closebtn.addEventListener("click", function () {
        const alertinner = document.querySelector(".alert-success")
        alertinner.remove()
    })


})