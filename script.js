// Search Function
function searchBook() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#bookTable tbody tr');
    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        const bookName = cells[0].textContent.toLowerCase();
        if (bookName.includes(input)) {
            row.style.display = '';
            cells[0].innerHTML = bookName.replace(
                input, `<span class="highlight">${input}</span>`
            );
        } else {
            row.style.display = 'none';
        }
    });
}

// Reset Function
function resetTable() {
    document.querySelectorAll('#bookTable tbody tr').forEach(row => {
        row.style.display = '';
        row.querySelectorAll('td')[0].innerHTML = row.querySelectorAll('td')[0].textContent;
    });
    document.getElementById('searchInput').value = '';
}

// Filter Function
function filterTable() {
    const filter = document.getElementById('filter').value;
    const rows = document.querySelectorAll('#bookTable tbody tr');
    rows.forEach(row => {
        const availability = row.getElementsByTagName('td')[2].textContent.toLowerCase();
        if (filter === 'all' || availability === filter) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Sort Function
function sortTable(columnIndex) {
    const table = document.getElementById('bookTable');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const isNumericColumn = columnIndex === 4;
    const sortedRows = rows.sort((a, b) => {
        const cellA = a.getElementsByTagName('td')[columnIndex].textContent;
        const cellB = b.getElementsByTagName('td')[columnIndex].textContent;
        return isNumericColumn
            ? new Date(cellA) - new Date(cellB)
            : cellA.localeCompare(cellB);
    });
    const tbody = table.querySelector('tbody');
    sortedRows.forEach(row => tbody.appendChild(row));
}

