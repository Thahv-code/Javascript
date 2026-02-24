let players = [];

function getPositionName(choice) {
    switch (choice) {
        case 1: return "Thủ môn";
        case 2: return "Hậu vệ";
        case 3: return "Tiền vệ";
        case 4: return "Tiền đạo";
        default: return "Không xác định";
    }
}
function printTeamRoster() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");

    for (let i = 0; i < players.length; i++) {
        let data = players[i].split("-");
        let id = data[0];
        let name = data[1];
        let position = data[2];

        console.log((i + 1) + ". Mã: " + id + " | Tên: " + name + " | Vị trí: " + position);
    }
}

function pushPlayer(name, position) {
    let newId = "P00" + (players.length + 1);
    let newPlayer = newId + "-" + name + "-" + position;
    players.push(newPlayer);
    console.log("Đã thêm cầu thủ mới!");
}

let number;

do {
    number = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));
    if (!(Number.isInteger(number) && number > 0)) {
        console.log("Vui lòng nhập số nguyên dương!");
    }
} while (!(Number.isInteger(number) && number > 0));

for (let i = 0; i < number; i++) {

    console.log("Nhập cầu thủ " + (i + 1));

    let id;
    let trung;

    do {
        trung = false;
        id = prompt("Nhập mã cầu thủ:");

        for (let j = 0; j < players.length; j++) {
            let oldId = players[j].split("-")[0];
            if (oldId == id) {
                trung = true;
                console.log("Mã cầu thủ đã tồn tại, nhập lại!");
                break;
            }
        }
    } while (trung);

    let name;
    do {
        name = prompt("Nhập tên cầu thủ:");
        if (name == "") {
            console.log("Tên không được để trống!");
        }
    } while (name == "");

    let posNum;
    do {
        posNum = Number(prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"));
        if (posNum < 1 || posNum > 4) {
            console.log("Chọn từ 1 đến 4!");
        }
    } while (posNum < 1 || posNum > 4);

    let posName = getPositionName(posNum);

    let playerString = id + "-" + name + "-" + posName;
    players.push(playerString);
}

printTeamRoster();

let addMore = prompt("Bạn có muốn thêm cầu thủ mới không? (có/không)");

if (addMore == "có") {
    let newName = prompt("Nhập tên cầu thủ mới:");

    let newPos;
    do {
        newPos = Number(prompt("Chọn vị trí (1-4):"));
    } while (newPos < 1 || newPos > 4);

    let newPositionName = getPositionName(newPos);

    pushPlayer(newName, newPositionName);

    printTeamRoster();
}