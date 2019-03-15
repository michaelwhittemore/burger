console.log("JS loaded")
$(document).ready(function () {

    $("#submit").click((event) => {
        event.preventDefault()
        const newBurger = $("#burgerForm").val().trim()
        $.post("/api/addburger/" + newBurger)
        location.reload()  
    })
    $(".eat").click((event) => {
        event.preventDefault()
        const targetBurger = event.target.id
        $.post("/api/eatburger/" + targetBurger)
        location.reload()  
    })
})