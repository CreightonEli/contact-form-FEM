const queryBtn1 = document.getElementById("query-btn-1");
const queryBtn2 = document.getElementById("query-btn-2");

function queryStyle(n) {
    queryBtn1.classList.remove("checked");
    queryBtn2.classList.remove("checked");

    if (n === 0) {
        queryBtn1.classList.add("checked");
    }
    else if (n === 1) {
        queryBtn2.classList.add("checked");
    }
}