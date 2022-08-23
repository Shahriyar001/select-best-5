
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
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        players: playerName,
    }
    selactionArea.push(playerObj);
    document.getElementById('total-added-player').innerText = selactionArea.length;

    display(selactionArea);
}


document.getElementById('btn-players-exp').addEventListener('click', function () {
    const totalSelected = document.getElementById('total-added-player');
    const totalSelectedString = totalSelected.innerText;
    const totalSelectedNumber = parseInt(totalSelectedString);
    const sum = totalSelectedNumber * 1000;
    const plrSum = document.getElementById('sub-total');
    plrSum.innerText = sum;
    const anPlrSum = document.getElementById('player-id');
    anPlrSum.innerText = sum;


})

function getvalue(elementId) {
    const eLement = document.getElementById(elementId);
    const elementString = eLement.innerText;
    const elementNumber = parseInt(elementString);
    return elementNumber;
}


const managerCost = getvalue('manager-id');
const coachCost = getvalue('coach-id');
const playerCost = getvalue('player-id');




document.getElementById('net-expence-btn').addEventListener('click', function () {
    const netExpence = playerCost + managerCost + coachCost;
    const netTotal = document.getElementById('net-expence');
    netTotal.innerText = netExpence;

    // console.log(playerCost)
    // console.log(managerCost)
    // console.log(coachCost)

    // console.log(netExpence);
})
