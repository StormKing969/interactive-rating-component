const PopUpCard = document.querySelector(".popup");
const UserCard = document.querySelector(".user_screen");
const user_rate = document.querySelector(".user_rate");
const rate = document.querySelectorAll(".quality_rate");

rate.forEach(element => {
    element.addEventListener("click", () => {
        rate.forEach(item => {
            item.classList.remove("rating_clicked");
        })
        element.classList.add("rating_clicked")
    })
});

let choice = []

function Selection(user_selection) {
    let parent = user_selection;
    
    if(choice != null) {
        choice = [];
        choice += parent.value;
    } else {
        choice += parent.value;
    }
    
    return choice;
}

function Submission() {
    if(choice.length !== 0) {
        user_rate.innerHTML = choice;
        PopUpCard.style.display = 'block';
        UserCard.style.display = 'none';
    }
}