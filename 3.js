const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"} 
];

const TABLE = document.createElement('table');

window.onload = function() {
    let mountainList = document.getElementById('mountains');
    let tableHeads = ['name', 'heigth', 'place'];
    this.createTableHeads(tableHeads);
    this.createTableData();
    mountainList.appendChild(TABLE);
}

function createTableHeads(tableHeads) {
    let row = document.createElement('tr');
    tableHeads.map( tableHead => {
        let th = document.createElement('th');
        th.innerHTML = tableHead;
        row.appendChild(th);
    });
    TABLE.appendChild(row);    
}

function createTableData() {
    MOUNTAINS.map( mountain => {
        let row = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdHeight = document.createElement('td');
        let tdPlace = document.createElement('td');
        tdName.innerHTML = mountain.name;
        tdHeight.innerHTML = mountain.height;
        tdPlace.innerHTML = mountain.place;
        row.appendChild(tdName);
        row.appendChild(tdHeight);
        row.appendChild(tdPlace);
        TABLE.appendChild(row);
    });
}
