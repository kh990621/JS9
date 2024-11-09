document.addEventListener('DOMContentLoaded', function() {
    const pullDownButton = document.getElementById("lists");

    pullDownButton.addEventListener('mouseover', function() {
        this.setAttribute("style", "background-color:blue")
    });

    pullDownButton.addEventListener('click', function() {
        this.setAttribute("style", "background-color:green")
    });

    pullDownButton.addEventListener('mouseleave', function() {
        this.removeAttribute("style", "background-color:red")
    });
});


const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")

pullDownButton.addEventListener("click", function() {
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style", "display:block;")
        console.log("非表示")
    } else {
    pullDownParents.setAttribute("style", "display:block;")
    console.log("表示）")
    }
})