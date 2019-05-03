window.addEventListener("load", function(){

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
    var con1 = localStorage.getItem('con1');
    var con2a = localStorage.getItem('con2a');
    var con2b = localStorage.getItem('con2b');
    var con3 = localStorage.getItem('con3');
    var con4 = localStorage.getItem('con4');
    var con5 = localStorage.getItem('con5');
    var list1 = localStorage.getItem('list1');
    var list2 = localStorage.getItem('list2');
    var list3 = localStorage.getItem('list3');
    var list4 = localStorage.getItem('list4');
    var list5 = localStorage.getItem('list5');
    console.log(list3);

    document.querySelector('#condition-1').value = con1;
    document.querySelector('#condition-2a').value = con2a;
    document.querySelector('#condition-2b').value = con2b;
    document.querySelector('#condition-3').value = con3;
    document.querySelector('#condition-4').value = con4;
    document.querySelector('#condition-5').value = con5;

    const userClothes = {
        "condition-1": list1.split(","),
        "condition-2": list2.split(","),
        "condition-3": list3.split(","),
        "condition-4": list4.split(","),
        "condition-5": list5.split(",")
    }

    addClothesToConditions(userClothes);
}

function loadFromList(nr) {
    const lists = document.querySelectorAll(".list-condition");
    const list = lists[nr].querySelectorAll(".list-item-text");
    console.log(lists);
    let arr = [];
    for (const el of list) {
        arr.push(el.innerText);
    }
    return arr
}

function setUserData() {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('con1', document.querySelector('#condition-1').value);
        localStorage.setItem('con2a', document.querySelector('#condition-2a').value);
        localStorage.setItem('con2b', document.querySelector('#condition-2b').value);
        localStorage.setItem('con3', document.querySelector('#condition-3').value);
        localStorage.setItem('con4', document.querySelector('#condition-4').value);
        localStorage.setItem('con5', document.querySelector('#condition-5').value);
    
        localStorage.setItem('list1', loadFromList(0));
        localStorage.setItem('list2', loadFromList(1));
        localStorage.setItem('list3', loadFromList(2));
        localStorage.setItem('list4', loadFromList(3));
        localStorage.setItem('list5', loadFromList(4));
    
        loadUserData();
    } else {
        $(".js-error-msg").slideDown("fast");
    }
}

document.querySelector(".btn-save").addEventListener("click", setUserData);
// ANCHOR przywrócenie ustawień domyślnych, zapisanych w stałych defaultClothes i defaultValues
document.querySelector(".btn-reset").addEventListener("click", () => {
    addClothesToConditions(defaultClothes);
    const inputs = document.querySelectorAll(".condition-input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = defaultValues[i];
    }
});
// button chowający komunikat z błędem
document.querySelector(".js-error-msg .remove-msg-btn").addEventListener("click", () => $(".js-error-msg").slideUp("fast"));

if (storageAvailable('localStorage')) {
    if(localStorage.getItem('con1')) {
        loadUserData();
      }
  }
})