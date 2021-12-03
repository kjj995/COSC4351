const tableForm = document.getElementById("setting-form");

tableForm.addEventListener("submit", setting);

function setting(event) {
    event.preventDefault();

    const table1 = event.target[0].value;
    const table2 = event.target[1].value;
    const table3 = event.target[2].value;
    const table4 = event.target[3].value;
    const table5 = event.target[4].value;
    const table6 = event.target[5].value; 
    const table7 = event.target[6].value;
    const table8 = event.target[7].value;

    addTableSetting([
        {value: table1, booked: false},
        {value: table2, booked: false},
        {value: table3, booked: false},
        {value: table4, booked: false},
        {value: table5, booked: false},
        {value: table6, booked: false},
        {value: table7, booked: false},
        {value: table8, booked: false}
    ])
    
    window.location.href = "login.html";
}