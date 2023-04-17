let tbl = document.querySelectorAll("tbl");
let btn = document.querySelectorAll("btn");

function table() {
    let dataAll = [];
    dataAll = JSON.parse(localStorage.getItem('tbl'));
    let tr = `<tr>
    <td> </td>
    <td>  </td>
    </tr>`
    for (let i = 0; i < dataAll.length; i++) {
        tr += `<tr>
                <td> ${dataAll[i][0]} </td>
                <td> ${dataAll[i][1]} </td>
                </tr>`
    }
    tbl.innerHTML = tr;
}
function localAdd() {
    let points;
    if (localStorage.getItem('tbl') === null) {
        points = [];
    } else {
        points = JSON.parse(localStorage.getItem('tbl'));
    }

    points.push([data, count]);

    localStorage.setItem('tbl', JSON.stringify(points));
}
btn.addEventListener("click",localAdd);
