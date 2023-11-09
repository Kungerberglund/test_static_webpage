
document.addEventListener('DOMContentLoaded', function() {
    const excelDataContainer = document.getElementById('excelData');
    const excelFileLink = 'https://docs.google.com/spreadsheets/d/1Wf7CPYuDWsYBCVCDoZRNUOBJG8r151R1UtPI19ZVTkE/edit?usp=sharing';

    fetch(excelFileLink)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Process and display the data
            const table = document.createElement('table');
            data.forEach(rowData => {
                const row = document.createElement('tr');
                Object.values(rowData).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                table.appendChild(row);
            });
            excelDataContainer.appendChild(table);
        })
        .catch(error => console.error('Error fetching data:', error));
});