let stars = document.querySelectorAll('.ratings span');
let projects = document.querySelectorAll('.ratings');
let ratings = [];

for (let star of stars) {
    star.addEventListener("click", function () {
        let children = star.parentElement.children;
        for (let child of children) {
            if (child.getAttribute("data-clicked")) {
                return false;
            }
        }
        this.setAttribute("data-clicked", "true");
        let rating = this.dataset.rating;
        let projectId = this.parentElement.dataset.projectid;

        let data = {
            "stars": rating,
            "project-id": projectId,
        }
        ratings.push(data);
        localStorage.setItem("rating", JSON.stringify(ratings));
    });
}
if (localStorage.getItem("rating")) {
    ratings = JSON.parse(localStorage.getItem("rating"));
    for (let rating of ratings) {
        for (let project of projects) {
            if (rating["project-id"] == project.dataset.projectid) {
                let reversedStars = Array.from(project.children).reverse();
                let index = parseInt(rating["stars"]) - 1;
                reversedStars[index].setAttribute("data-clicked", "true");
            }
        }
    }
}