const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => { return res.json() }).then(data => {
        const table = document.getElementById('table');
        const body = document.createElement('tbody');
        data.map(item => {
            const tableRow = document.createElement('tr')
            tableRow.classList.add('hover')
            tableRow.innerHTML = `
       <td> ${item.id} </td>
       <td> ${item.name} </td>
       <td> ${item.username} </td>
       <td> ${item.email} </td>
        `;
            body.appendChild(tableRow);
        })
        table.appendChild(body);
    })
})