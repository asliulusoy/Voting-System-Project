let projects = document.querySelectorAll('.ratings');
let submitButtons = document.querySelectorAll('.submit-btn');
let ratings = {};

for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    let submitBtn = submitButtons[i];

    project.addEventListener("click", function (event) {
        let clickedElement = event.target;

        if (clickedElement.tagName === 'SPAN') {
            let rating = clickedElement.dataset.rating;
            let projectId = this.dataset.projectid;

            // Set the selected rating in the ratings object
            ratings[projectId] = {
                "stars": rating
            };

            // Update the star colors
            updateStarColors(project, rating);
        }
    });

    submitBtn.addEventListener("click", function () {
        // Get the project ID associated with the submit button
        let projectId = project.dataset.projectid;

        // Find the rating data for the corresponding project
        let ratingData = ratings[projectId];

        if (ratingData) {
            // You can use ratingData["stars"] for the number of stars submitted
            console.log("Stars submitted for Project " + projectId + ": " + ratingData["stars"]);

            // Store the rating data in local storage
            localStorage.setItem("rating", JSON.stringify(ratingData));
        } else {
            console.log("No rating submitted for Project " + projectId);
        }
    });
}

// Function to update star colors


// Restore previous selections

