
const selactionArea = [];

function display(selectedPlayers) {
    // console.log(selectedPlayers);
    const tableBody = document.getElementById('all-players')
    tableBody.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        // console.log(selactionArea[i].players);
        const name = selactionArea[i].players;

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th scope="row"> ${i + 1} </th>
        <td> ${name} </td>
        `;

        tableBody.appendChild(tr);
    }

}

function addToSelacted(element) {
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.children[0]);

    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);

    const playerObj = {
        players: playerName
    }

    selactionArea.push(playerObj);

    // console.log(selactionArea);

    document.getElementById('total-added-player').innerText = selactionArea.length;

    display(selactionArea);
}


document.getElementById('btn-players-exp').addEventListener('click', function () {
    const totalSelected = document.getElementById('total-added-player');
    const totalSelectedString = totalSelected.innerText;
    const totalSelectedNumber = parseInt(totalSelectedString);
    const sum = totalSelectedNumber * 1000;
    console.log(sum);

})