document.getElementById("btn-update-title").addEventListener("click", function () {
    // console.log("btn clicked")
    const pageTitleElement = document.getElementById("page-title");
    console.log(pageTitleElement);
})

document.getElementById("btn-login").addEventListener("click", function () {
    // console.log("Login button clicked"); 
    const userInfoEl = document.getElementById("user-info");
    userInfoEl.innerText = "User logged in successfully";
})