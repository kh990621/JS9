function pullDown(){
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
};


const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentlist = document.getElementById("current-list")

pullDownButton.addEventListener("click", function() {
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style", "display:block;")
        console.log("非表示")
    } else {
    pullDownParents.setAttribute("style", "display:block;")
    console.log("表示）")
    }
})

pullDownChild.forEach(function(list) {
    list.addEventListener("click", function() { 
        const value = list.innerHTML
        currentlist.innerHTML = value
        console.log(value)
        if (value === "リスト1") {
            window.location.href = "https://fp-curriculum.com/";
        }
    })
})

window.addEventListener("loas", pullDown)



