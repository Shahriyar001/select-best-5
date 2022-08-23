
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
        players: playerName,
    }

    selactionArea.push(playerObj);

    // console.log(selactionArea);

    document.getElementById('total-added-player').innerText = selactionArea.length;

    display(selactionArea);
}


document.getElementById('btn-players-exp').addEventListener('click', function () {
    const totalSelected = document.getElementById('total-added-player');
    // console.log(totalSelected);
    const totalSelectedString = totalSelected.innerText;
    // console.log(totalSelectedString)
    const totalSelectedNumber = parseInt(totalSelectedString);
    const sum = totalSelectedNumber * 1000;
    // console.log(sum);
    const plrSum = document.getElementById('sub-total');
    // console.log(plrSum)
    plrSum.innerText = sum;

})

function getvalue(elementId) {
    const eLement = document.getElementById(elementId);
    const elementString = eLement.innerText;
    const elementNumber = parseInt(elementString);
    return elementNumber;
}

const managerCost = getvalue('manager-id');
const coachCost = getvalue('coach-id');


const playerCostvalue = document.getElementById('sub-total');
const playerCostString = playerCostvalue.innerText;
const playerCostNumber = parseInt(playerCostString);
const playerCost = playerCostNumber;

document.getElementById('net-expence-btn').addEventListener('click', function () {
    const netExpence = playerCost + managerCost + coachCost;
    console.log(managerCost)
    console.log(coachCost)
    console.log(playerCost)
    console.log(netExpence);
})
