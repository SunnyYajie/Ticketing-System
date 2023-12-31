let toastCtr = 0;
currentRow = null;

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
    let deckno = document.getElementById('deckno');
    deckno.value = columns[0].innerText;
    let champcards = document.getElementById('champcards');
    champcards.value = columns[2].innerText;
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
    showBtnsDemote = modalMain.querySelector("#modal-btn-create");
    showBtnsDemote.classList.add('d-none');
    showBtnsDemote = modalMain.querySelector("#modal-btn-demote");
    showBtnsDemote.classList.add('d-none');
    showBtnsPromote = modalMain.querySelector("#modal-btn-promote");
    showBtnsPromote.classList.add('d-none');
    showBtns = modalMain.querySelector("#modal-btn-save");
    showBtns.classList.add('d-none');
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

function clearFieldValues(){
    let modalMain   = document.querySelector("#viewModal");
    let tier     = document.querySelector('#tier');
    let category     = document.querySelector('#category');
    let title        = document.querySelector('#title');
    let description     = document.querySelector('#description');
    let followers        = document.querySelector('#followers');
    let spells     = document.querySelector('#spells');
    let strengths        = document.querySelector('#strengths');
    let weakness     = document.querySelector('#weakness');
    let regions        = document.querySelector('#regions');
    let cost        = document.querySelector('#cost');
    let deckno        = document.querySelector('#deckno');
    let champcards        = document.querySelector('#champcards');



    tier.value = 'S Class';
    category.value = '';
    title.value = '';
    description.innerHTML = '';
    followers.value = '';
    spells.value = '';
    strengths.value = '';
    weakness.value = '';
    regions.value = '';
    cost.value = '';
    deckno.value = '';
    champcards.value = '';
    if(tier.value == "S Class" || tier.value == "S Class Hot"){
        tier.style = "background: rgb(255, 217, 0);";
    } else if(tier.value == "A Class" || tier.value == "A Class Hot"){
        tier.style = "background: rgb(0, 225, 255);";
    }
    else if(tier.value == "B Class" || tier.value == "B Class Hot"){
        tier.style = "background: rgb(4, 189, 66);";
    }

    // Date created function for original ticketing system assigned to description instead
    // let todayDate = new Date();
    // todayDate.toISOString().split('T')[0];
    // console.log(todayDate);
    // description.innerHTML = todayDate;
    // dueDate = todayDate.setDate(todayDate.getDate() + 7);
    // dueDate.toISOString().split('T')[0];
    // category.value = dueDate;

    showBtnsDemote = modalMain.querySelector("#modal-btn-demote");
    showBtnsDemote.classList.add('d-none');
    showBtnsPromote = modalMain.querySelector("#modal-btn-promote");
    showBtnsPromote.classList.add('d-none');
    showBtns = modalMain.querySelector("#modal-btn-save");
    showBtns.classList.add('d-none');
    showBtns = modalMain.querySelector("#modal-btn-create");
    showBtns.classList.remove('d-none');
}

function addTicketRecord(){
    let modalMain   = document.querySelector("#viewModal");
    let tier     = document.querySelector('#tier');
    let category     = document.querySelector('#category');
    let title        = document.querySelector('#title');
    let description     = document.querySelector('#description');
    let followers        = document.querySelector('#followers');
    let spells     = document.querySelector('#spells');
    let strengths        = document.querySelector('#strengths');
    let weakness     = document.querySelector('#weakness');
    let regions        = document.querySelector('#regions');
    let cost        = document.querySelector('#cost');
    let deckno        = document.querySelector('#deckno');
    let champcards        = document.querySelector('#champcards');

    const tblRow   = document.querySelector("#table-sclass");
    const tblBody  = tblRow.querySelector('tbody');

    let newRow     = tblBody.insertRow();
    let col1 = newRow.insertCell(0); // Deck No.
    let col2 = newRow.insertCell(1); // Name
    let col3 = newRow.insertCell(2); // Champion Cards
    let col4 = newRow.insertCell(3); // Followers
    let col5 = newRow.insertCell(4); // Spells
    let col6 = newRow.insertCell(5); // Strongest
    let col7 = newRow.insertCell(6); // Weakest
    let col8 = newRow.insertCell(7); // Cost
    let col9 = newRow.insertCell(8); // Regions
    let col10 = newRow.insertCell(9); // Tier
    let col11 = newRow.insertCell(10); // Details
    
    col1.outerHTML = `<td class="align-middle">${deckno.value}</td>`;
    col3.outerHTML = `<td class="align-middle">${champcards.value}</td>`;
    col2.outerHTML = `<td class="align-middle">${title.value}</td>`;
    col4.outerHTML = `<td class="align-middle">${followers.value}</td>`;
    col5.outerHTML = `<td class="align-middle">${spells.value}</td>`;
    col6.outerHTML = `<td class="align-middle">${strengths.value}</td>`;
    col7.outerHTML = `<td class="align-middle">${weakness.value}</td>`;
    col8.outerHTML = `<td class="align-middle">${cost.value}</td>`;
    col9.innerHTML = `<td class="align-middle">${regions.value}</td>`;
    col10.outerHTML = `<td class="align-middle"><span class="badge rounded-pill text-bg-warning">S Class</span></td>`
    col11.outerHTML = `<td class="align-middle text-center">
    <button class="btn btn-info view-deck" data-bs-toggle="modal" data-bs-target="#viewModal">view</button>
    <button class="btn btn-warning edit-deck" data-bs-toggle="modal" data-bs-target="#viewModal">Edit</button>
    <button class="btn btn-danger delete-deck" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
    </td>`;

    generateToast("text-bg-success",`Inputted deck is ADDED`);
}

/* Generate Dynamic Toast Message*/
function generateToast(bgColor = "", textMessage = "") {
    toastCtr++;
    let toastHtml = `<div class="toast align-items-center ${bgColor} border-0" role="alert" aria-live="assertive" aria-atomic="true"  id="liveToast${toastCtr}">
                    <div class="d-flex">
                        <div class="toast-body">
                            ${textMessage}
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    </div>`;
    // Get the container where the message will be placed
    const toastWrapper = document.querySelector('.toast-container');
    // Append the toast message to the container
    toastWrapper.innerHTML += toastHtml;
    // Get the id of the toast component to show
    const toastMain = document.querySelector('#liveToast' + toastCtr);
    // Get the id of the toast component to show
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastMain);
    // Bootstrap method to generate a toast object
    toastBootstrap.show();
}

function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e);
    });
    // addGlobalEventListener("click", ".delete-deck", e => {});
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
    
                let modalHeader = document.getElementById('modal-header');
                modalHeader.classList.remove('bg-warning','bg-success','bg-success','bg-danger','bg-dark');
                modalHeader.classList.add('bg-primary');

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
                let modalHeader = document.getElementById('modal-header');
                modalHeader.classList.remove('bg-warning','bg-success','bg-success','bg-danger', 'bg-dark');
                modalHeader.classList.add('bg-warning');

                let row = this.parentElement.parentElement;
                activeRow = row;
                assignRowFieldValues(row);
                
                const inputFields = document.querySelectorAll(".form-control");
                inputFields.forEach(input => {
                    if(input.id != "tier" && input.id != "regions")
                    input.removeAttribute("disabled");
                });
                showHideModalButtons(row, "edit");
            });
        });

        // Delete button
        deleteButton = document.querySelectorAll('.delete-deck');
        deleteButton.forEach(function(button){
            button.addEventListener('click', function(){
                
                currentRow = this.parentElement.parentElement;

            });
            const confirmDelBtn = document.querySelector("#modal-btn-delete");
            confirmDelBtn.addEventListener("click", function(){
                currentRow.remove();
                generateToast("text-bg-danger",`Selected deck  is DELETED`);
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
            columns[6].textContent = modalMain.querySelector('#weakness').value
            columns[5].textContent = modalMain.querySelector('#strengths').value
            columns[7].textContent = modalMain.querySelector('#cost').value
            columns[0].textContent = modalMain.querySelector('#deckno').value
            columns[2].textContent = modalMain.querySelector('#champcards').value
            
            generateToast("text-bg-info",`Edited deck is SAVED`);
        });

        // Add Deck button
        addButton = document.querySelector('#add-ticket');
        addButton.addEventListener('click', function(){       
            let modalHeader = document.getElementById('modal-header');
            modalHeader.classList.remove('bg-warning','bg-success','bg-success','bg-danger', 'bg-dark');
            modalHeader.classList.add('bg-dark');
            // let modalTier = document.getElementById('#tier');
            // modalTier.classList.remove('bg-warning','bg-success','bg-success','bg-danger', 'bg-dark');
            // modalTier.classList.add('bg-warning');

            const inputFields = document.querySelectorAll(".form-control");
                inputFields.forEach(input => {
                    if(input.id != "tier" && input.id != "regions" && input.id != "description"){
                        input.removeAttribute("disabled");
                    }
                });
            
            clearFieldValues();
        });
        const createButton = document.querySelector("#modal-btn-create");
            createButton.addEventListener('click', function(){
                
                addTicketRecord();
                
            });
});