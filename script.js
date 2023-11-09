document.addEventListener('DOMContentLoaded', function() {
    const excelDataContainer = document.getElementById('excelData');

    // Replace 'YOUR_EXCEL_FILE_SHAREABLE_LINK' with the actual shareable link of your Excel file
    const excelFileLink = 'https://docs.google.com/spreadsheets/d/1Wf7CPYuDWsYBCVCDoZRNUOBJG8r151R1UtPI19ZVTkE/edit?usp=sharing';

    fetch(excelFileLink)
        .then(response => response.json()) // Assuming the data is in JSON format
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