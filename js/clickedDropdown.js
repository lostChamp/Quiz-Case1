const form = document.getElementById("form__quiz");

form.addEventListener("click", (e) => {
    if(e.target.className.includes("dropdown") && !e.target.className.includes("not__available")) {
        const dropdownId = e.target.id[e.target.id.length - 1];
        const questionsId = "dropdown_id_questions_" + dropdownId;
        const questions = document.getElementById(questionsId);
        const arrowId = "arrow_open_close_" + dropdownId;
        const arrow = document.getElementById(arrowId);
        const questionsClasses = questions.className.split(" ");

        if(questionsClasses.includes("close")) {
            questions.classList.remove("close");
            arrow.classList.remove("close__img");
            questions.style.display = "";
        }else {
            questions.classList.add("close");
            arrow.classList.add("close__img");
            questions.addEventListener("transitionend", () => {
                questions.style.display = "none";
            })
        }
    }

    if(e.target.type === "radio") {
        const numberRadio = Number(e.target.name[e.target.name.length - 1]);
        const dropdowns = document.querySelectorAll(".dropdown");
        if(dropdowns.length === numberRadio) {
            const submitQuizButton = document.getElementById("quiz_submit_id");
            submitQuizButton.classList.remove("not__available");
            submitQuizButton.style.pointerEvents = "auto";
        }else {
            const arrow = document.getElementById("arrow_open_close_" + (numberRadio + 1));
            const questions = document.getElementById("dropdown_id_questions_" + (numberRadio + 1));
            arrow.src = "img/arrow.png";
            dropdowns[numberRadio].classList.remove("not__available");
            questions.classList.remove("close");
            arrow.classList.remove("close__img");
            questions.style.display = "";
        }
    }
});

const topToothCheckbox = document.getElementById("top__tooth");
const toothCheckboxesQuiz = document.querySelectorAll(".tooth__checkbox");
topToothCheckbox.addEventListener("change", (e) => {
    if(e.target.checked) {
        for(let i = 0; i <= 15; i++) {
            toothCheckboxesQuiz[i].checked = true;
        }
    }else {
        for(let i = 0; i <= 15; i++) {
            toothCheckboxesQuiz[i].checked = false;
        }
    }
});

const bottomToothCheckbox = document.getElementById("bottom__tooth");

bottomToothCheckbox.addEventListener("change", (e) => {
    if(e.target.checked) {
        for(let i = 16; i < toothCheckboxesQuiz.length; i++) {
            toothCheckboxesQuiz[i].checked = true;
        }
    }else {
        for(let i = 16; i < toothCheckboxesQuiz.length; i++) {
            toothCheckboxesQuiz[i].checked = false;
        }
    }
});