let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function getAllPositions() {
    let result = [];

    for (let i = 0; i < players.length; i++) {
        let arr = players[i].split("-");
        let pos = arr[2];

        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === pos) {
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(pos);
        }
    }
    return result;
}

function findPlayersWithLongestName() {
    let nameLongest = "";
    let len = 0;

    for (let i = 0; i < players.length; i++) {
        let temp = players[i].split("-");
        let playerName = temp[1];

        if (playerName.length > len) {
            len = playerName.length;
            nameLongest = playerName;
        }
    }

    return nameLongest;
}

function countPlayersStartingWithLetter(letter) {
    let total = 0;
    let check = letter.toLowerCase();

    for (let i = 0; i < players.length; i++) {
        let info = players[i].split("-");
        let ten = info[1];
        let first = ten[0].toLowerCase();

        if (first == check) {
            total++;
        }
    }

    return total;
}

console.log("Danh sách các vị trí:");
console.log(getAllPositions());

console.log("Tên cầu thủ dài nhất:");
console.log(findPlayersWithLongestName());

console.log("Số cầu thủ bắt đầu bằng chữ N:");
console.log(countPlayersStartingWithLetter("N"));