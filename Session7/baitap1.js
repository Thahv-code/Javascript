let playerIds = [];
let playerPositions = [];

function getPositionName(choice) {
    switch (choice) {
        case 1: return "Thủ môn";
        case 2: return "Hậu vệ";
        case 3: return "Tiền vệ";
        case 4: return "Tiền đạo";
        default: return "Không xác định";
    }
}

let n;
do {
    n = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng ?"));
    if (!(Number.isInteger(n) && n > 0)) {
        console.log("Vui lòng nhập số nguyên dương!");
    }
} while (!(Number.isInteger(n) && n > 0));

for (let i = 0; i < n; i++) {
    console.log("Nhập cầu thủ " + (i + 1) + " :");

    let id;
    let isDuplicate;
    do {
        isDuplicate = false;
        id = prompt("Mã cầu thủ :");

        for (let j = 0; j < playerIds.length; j++) {
            if (playerIds[j] === id) {
                isDuplicate = true;
                console.log("Mã cầu thủ đã tồn tại, nhập lại!");
                break;
            }
        }
    } while (isDuplicate);

    let posNum;
    do {
        posNum = Number(prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo) :"));
        if (posNum < 1 || posNum > 4) {
            console.log("Vui lòng chọn từ 1 đến 4!");
        }
    } while (posNum < 1 || posNum > 4);

    playerIds.push(id);
    playerPositions.push(getPositionName(posNum));
}

function printTeamRoster() {
    console.log("\nĐội bóng hiện tại (" + playerIds.length + " cầu thủ):");
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerPositions[i]);
    }
}

function findPlayersByPosition(position) {
    let indexList = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indexList.push(i);
        }
    }
    return indexList;
}

let searchNum;
do {
    searchNum = Number(prompt(
        "Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn , 2: Hậu vệ ,3: Tiền vệ, 4: Tiền đạo) :"
    ));
    if (searchNum < 1 || searchNum > 4) {
        console.log("Nhập sai, vui lòng chọn từ 1 đến 4!");
    }
} while (searchNum < 1 || searchNum > 4);

let searchPosition = getPositionName(searchNum);

printTeamRoster();

let resultIndexes = findPlayersByPosition(searchPosition);

console.log("\nSố cầu thủ ở vị trí " + searchPosition + ": " + resultIndexes.length);
console.log("Các chỉ số cầu thủ ở vị trí " + searchPosition + ": " + resultIndexes.join(", "));