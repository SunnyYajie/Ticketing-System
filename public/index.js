function changeModalHeaderColor(status){
    let modalHeader = document.getElementById('modal-header');
    modalHeader.classList.remove('bg-warning','bg-success','bg-success','bg-danger');

    switch (status) {
        case 'ongoing':
            modalHeader.classList.add('bg-warning');
            break;
        case 'On Queue':
            modalHeader.classList.add('bg-secondary');
            break;      
        case 'completed':
            modalHeader.classList.add('bg-success');
            break;      
        default:
            modalHeader.classList.add('bg-danger');
            break;                    
    }
}

function assignRowFieldValues(row){
    let columns = row.getElementsByTagName('td');
    let title = document.getElementById('title');
    title.value = columns[1].textContent;
    let cost = document.getElementById('cost');
    cost.value = columns[7].textContent;
    let weakness = document.getElementById('weakness');
    weakness.value = columns[6].textContent;
    let strengths = document.getElementById('strengths');
    strengths.value = columns[5].textContent;
    let regions = document.getElementById('regions');
    regions.value = columns[8].innerText;
    let followers = document.getElementById('followers');
    followers.value = columns[3].innerText;
    let spells = document.getElementById('spells');
    spells.value = columns[4].innerText;
    let tier = document.getElementById('tier');
    tier.value = columns[9].innerText;
    if(tier.value == "S Class" || tier.value == "S Class Hot"){
        tier.style = "background: rgb(255, 217, 0);";
    } else if(tier.value == "A Class" || tier.value == "A Class Hot"){
        tier.style = "background: rgb(0, 225, 255);";
    }
    else if(tier.value == "B Class" || tier.value == "B Class Hot"){
        tier.style = "background: rgb(4, 189, 66);";
    }
    let deckNo = document.getElementById('modal-deck-number');
    deckNo.textContent = columns[0].textContent;
}

function showHideModalButtons(row, state =''){
    const status = row.getElementsByTagName('td')[9].innerHTML;
    const modalMain = document.querySelector("#viewModal");
    if(status.includes("S Class") || status.includes("S Class Hot") ){
        if(state == ""){
            showBtnsDemote = modalMain.querySelector("#modal-btn-demote");
            showBtnsDemote.classList.add('d-none');
            showBtnsPromote = modalMain.querySelector("#modal-btn-promote");
            showBtnsPromote.classList.add('d-none');
            showBtns = modalMain.querySelector("#modal-btn-save");
            showBtns.classList.add('d-none');
        }
        else {
            showBtns = modalMain.querySelector("#modal-btn-save");
            showBtns.classList.remove('d-none');
            showBtnsDemote = modalMain.querySelector("#modal-btn-demote");
            showBtnsDemote.classList.remove('d-none');
        }
    } 
    else if (status.includes("A Class") || status.includes("A Class Hot")){
        if(state == ""){
            showBtnsDemote = modalMain.querySelector("#modal-btn-demote");
            showBtnsDemote.classList.add('d-none');
            showBtnsPromote = modalMain.querySelector("#modal-btn-promote");
            showBtnsPromote.classList.add('d-none');
            showBtns = modalMain.querySelector("#modal-btn-save");
            showBtns.classList.add('d-none');
        }
        else {
            showBtnsPromote = modalMain.querySelector("#modal-btn-promote");
            showBtnsPromote.classList.remove('d-none');
            showBtnsDemote = modalMain.querySelector("#modal-btn-demote");
            showBtnsDemote.classList.remove('d-none');
            showBtns = modalMain.querySelector("#modal-btn-save");
            showBtns.classList.remove('d-none');
        }
    }
    else if (status.includes("B Class") || status.includes("B Class Hot")){
        if(state == ""){
            showBtnsDemote = modalMain.querySelector("#modal-btn-demote");
            showBtnsDemote.classList.add('d-none');
            showBtnsPromote = modalMain.querySelector("#modal-btn-promote");
            showBtnsPromote.classList.add('d-none');
            showBtns = modalMain.querySelector("#modal-btn-save");
            showBtns.classList.add('d-none');
        }
        else {
            showBtnsPromote = modalMain.querySelector("#modal-btn-promote");
            showBtnsPromote.classList.remove('d-none');
            showBtns = modalMain.querySelector("#modal-btn-save");
            showBtns.classList.remove('d-none');
        }
    }
}

// Main Content
document.addEventListener('DOMContentLoaded', function(){
    let activeRow = null;
    const rows = document.querySelectorAll('.table tbody tr');

    rows.forEach(row => {
        const columns = row.getElementsByTagName('td');
        // if(columns[9].innerText == "S Class" || columns[9].innerText == "S Class Hot"){
        //     let removeButtons = columns[10].querySelectorAll(".btn-warning, .btn-danger");
        //     removeButtons[0].classList.add('d-none'); //edit
        //     removeButtons[1].classList.add('d-none'); //edit
        });

        // View button
        viewButton = document.querySelectorAll('.view-deck');
        viewButton.forEach(function(button){
            button.addEventListener('click', function(){
                let row = this.parentElement.parentElement;
                activeRow = row;
                assignRowFieldValues(row);
                const inputFields = document.querySelectorAll(".form-control");
                inputFields.forEach(input => {
                    if(input.id != "tier" && input.id != "regions")
                    input.setAttribute("disabled", "");
                    showHideModalButtons(row, "");
                });

                // changeModalHeaderColor(columns[9].textContent);
            });
        });

        // Edit button
        editButton = document.querySelectorAll('.edit-deck');
        editButton.forEach(function(button){
            button.addEventListener('click', function(){
                let row = this.parentElement.parentElement;
                activeRow = row;
                assignRowFieldValues(row);
                
                const inputFields = document.querySelectorAll(".form-control");
                inputFields.forEach(input => {
                    if(input.id != "tier" && input.id != "regions")
                    input.removeAttribute("disabled");
                });
                showHideModalButtons(row, "edit");
                // changeModalHeaderColor(columns[9].textContent);
            });
        });

        // Modal-Save button
        mdlSaveButton = document.querySelector('#modal-btn-save');
        mdlSaveButton.addEventListener('click', function(){
            const columns  = activeRow.querySelectorAll('td');
            const modalMain = document.querySelector('#viewModal');
            columns[1].textContent = modalMain.querySelector('#title').value
            columns[3].textContent = modalMain.querySelector('#followers').value
            columns[4].textContent = modalMain.querySelector('#spells').value
            columns[5].textContent = modalMain.querySelector('#weakness').value
            columns[6].textContent = modalMain.querySelector('#strengths').value
            columns[7].textContent = modalMain.querySelector('#cost').value
            

        });

});
