const allTables = document.querySelectorAll("table");

// Highlight specific cells
const allTd = document.querySelectorAll("td");

allTd.forEach((td) => {
    let tdValue = td.innerText.trim();

    if (
        tdValue === "Aay" ||
        tdValue === "Purv Shesh" ||
        tdValue === "Yog" ||
        tdValue === "Vyay" ||
        tdValue === "Shesh"
    ) {
        td.style.color = "black";
        td.style.fontStyle = "italic";
        td.style.fontWeight = "bold";
        td.parentElement.classList.add(`rowblack`);
    }
});


const bahiTable = document.getElementById("bahiTable");
const rokadTable = document.getElementById("rokadTable");

function addHighlightListener(table1, table2) {
    const allTdInTable1 = table1.querySelectorAll("td");
    const allTdInTable2 = table2.querySelectorAll("td");

    function highlightRows(table1, table2, clickedTd) {
        const clickedRow = clickedTd.parentElement;
        const rowIndex = clickedRow.rowIndex;

        // Check if the clicked row is already highlighted
        const isRowHighlighted = clickedRow.classList.contains('highlight');

        // Remove highlight from all rows in both tables
        table1.querySelectorAll('tr').forEach((row) => {
            row.classList.remove('highlight');
        });
        table2.querySelectorAll('tr').forEach((row) => {
            row.classList.remove('highlight');
        });

        // If the row was not highlighted, highlight it in both tables
        if (!isRowHighlighted) {
            table1.querySelectorAll('tr')[rowIndex].classList.add('highlight');
            table2.querySelectorAll('tr')[rowIndex].classList.add('highlight');
        }
    }

    allTdInTable1.forEach((td) => {
        td.addEventListener('click', () => {
            highlightRows(table1, table2, td);
        });
    });

    allTdInTable2.forEach((td) => {
        td.addEventListener('click', () => {
            highlightRows(table2, table1, td);
        });
    });
}

addHighlightListener(rokadTable, bahiTable);

// Add
