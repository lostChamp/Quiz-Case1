
let toothCheckbox = document.querySelector(".tooth-checkboxes");
let teeth = "";

for(let i = 1; i <= 32; i++) {
        teeth += `
        <div class="tooth">
            <input type="checkbox" value="${i}" id="tooth-${i}" name="tooth[]" class="tooth__checkbox">
            <label for="tooth-${i}" class="tooth__mark"></label>
        </div>
    `
}

toothCheckbox.innerHTML = teeth;



