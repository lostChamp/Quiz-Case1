document.addEventListener("click", (e) => {
    if(e.target.className.includes("dropdown") && !e.target.className.includes("not__available")) {
        const dropdownId = e.target.id[e.target.id.length - 1];
        const questionsId = "dropdown_id_questions_" + dropdownId;
        const arrowId = "arrow_open_close_" + dropdownId;
        const arrow = document.getElementById(arrowId);
        const questions = document.getElementById(questionsId);
        const questionsClasses = questions.className.split(" ");

        if(questionsClasses.includes("close")) {
            questions.classList.remove("close");
            arrow.classList.remove("close__img");
        }else {
            questions.classList.add("close");
            arrow.classList.add("close__img");
        }
    }

    if(e.target.type === "radio") {
        const numberRadio = e.target.name[e.target.name.length - 1] - 1;
        const dropdowns = document.querySelectorAll(".dropdown");
        if(dropdowns.length - 1 === numberRadio) {
            console.log("all");
        }else {
            dropdowns[numberRadio + 1].classList.remove("not__available");
        }
    }
});



