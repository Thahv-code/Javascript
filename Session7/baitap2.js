let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E"
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
    console.log("DANH SÁCH CẦU THỦ:");
    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            (i + 1) + ". " +
            playerIds[i] + " - " +
            playerNames[i] + " - " +
            playerJerseyNumbers[i]
        );
    }
}

function updatePlayerNameAndJersey(playerId, newName, newNumber) {
    let found = false;

    for (let i = 0; i < playerIds.length; i++) {
        if (playerIds[i] == playerId) {
            playerNames[i] = newName;
            playerJerseyNumbers[i] = newNumber;
            found = true;
            break;
        }
    }

    return found;
}

printTeamRoster();

let idInput = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let check = false;

for (let i = 0; i < playerIds.length; i++) {
    if (playerIds[i] == idInput) {
        check = true;
        break;
    }
}

if (check == true) {
    let newName = prompt("Nhập tên mới:");

    let newJersey;
    do {
        newJersey = Number(prompt("Nhập số áo mới (1 đến 99):"));
        if (newJersey < 1 || newJersey > 99 || !Number.isInteger(newJersey)) {
            console.log("Số áo không hợp lệ, nhập lại!");
        }
    } while (newJersey < 1 || newJersey > 99 || !Number.isInteger(newJersey));

    let ok = updatePlayerNameAndJersey(idInput, newName, newJersey);

    if (ok == true) {
        console.log("Cập nhật thành công!");
        printTeamRoster();
    }
} else {
    console.log("Không tìm thấy cầu thủ với mã này!");
}