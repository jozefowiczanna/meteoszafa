window.addEventListener("load", function(){

function showConfirmMsg(msg) {
    $(".confirm-msg").text(msg);
    $(".confirm-msg").slideDown("fast");
    setTimeout(function (){
        $(".confirm-msg").slideUp("fast");
    }, 3000)
}
    
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function loadUserData() {

    const conditions = localStorage.getItem('conditions').split(",");
    const conInputs = document.querySelectorAll(".con-input");
    const conOutputs = document.querySelectorAll(".js-con-output");
    for (let i = 0; i < conInputs.length; i++) {
        conInputs[i].value = conditions[i];
    }

    const list1 = localStorage.getItem('list1');
    const list2 = localStorage.getItem('list2');
    const list3 = localStorage.getItem('list3');
    const list4 = localStorage.getItem('list4');
    const list5 = localStorage.getItem('list5');

    const userClothes = {
        "con-1": list1.split(","),
        "con-2": list2.split(","),
        "con-3": list3.split(","),
        "con-4": list4.split(","),
        "con-5": list5.split(",")
    }

    addClothesToConditions(userClothes);
    copyInputData(conInputs, conOutputs);
}

function loadFromList(nr) {
    const lists = document.querySelectorAll(".list-con");
    const list = lists[nr].querySelectorAll(".list-item-text");
    let arr = [];
    for (const el of list) {
        arr.push(el.innerText);
    }
    return arr
}

function setUserData() {
    const errors = document.querySelectorAll(".error");
    if (errors.length > 0) {
        $(".js-input-error-msg").slideDown("fast");
    } else {
        if (storageAvailable('localStorage')) {
            const conInputs = document.querySelectorAll(".con-input");
            let conStr = "";
            for (const con of conInputs) {
                conStr += con.value+",";
            }
            conStr = conStr.slice(0, -1); // remove last comma
            localStorage.setItem('conditions', conStr);
        
            localStorage.setItem('list1', loadFromList(0));
            localStorage.setItem('list2', loadFromList(1));
            localStorage.setItem('list3', loadFromList(2));
            localStorage.setItem('list4', loadFromList(3));
            localStorage.setItem('list5', loadFromList(4));
        
            loadUserData();
        } else {
            $(".js-storage-error-msg").slideDown("fast");
        }

        showConfirmMsg("Zapisano ustawienia.");
    }
}

function resetUserData() {
    addClothesToConditions(defaultClothes);
    const conInputs = document.querySelectorAll(".con-input");
    const conOutputs = document.querySelectorAll(".js-con-output");
    copyInputData(conInputs, conOutputs);
    for (let i = 0; i < conInputs.length; i++) {
        conInputs[i].value = defaultValues[i];
        conOutputs[i].innerText = conInputs[i].value;
    }
    showConfirmMsg("Przywrócono ustawienia domyślne.");
}

document.querySelector(".js-btn-save").addEventListener("click", setUserData);
// ANCHOR przywrócenie ustawień domyślnych, zapisanych w stałych defaultClothes i defaultValues
document.querySelector(".js-btn-reset").addEventListener("click", resetUserData);
// button chowający komunikat z błędem
document.querySelector(".js-storage-error-msg .remove-msg-btn").addEventListener("click", () => $(".js-storage-error-msg").slideUp("fast"));
document.querySelector(".js-input-error-msg .remove-msg-btn").addEventListener("click", () => $(".js-input-error-msg").slideUp("fast"));


if (storageAvailable('localStorage')) {
    if(localStorage.getItem('conditions')) {
        loadUserData();
      }
}
})