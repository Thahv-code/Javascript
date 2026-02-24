let player = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function getShortestPlayerName() {
    let shortestName = player[0].split("-")[1];

    for (let i = 1; i < player.length; i++) {
        let currentName = player[i].split("-")[1];

        if (currentName.length < shortestName.length) {
            shortestName = currentName;
        }
    }

    return shortestName;
}

function countPlayersWithPositionLengthGreaterThan(length) {
    let result = 0;

    for (let i = 0; i < player.length; i++) {
        let positionName = player[i].split("-")[2];

        if (positionName.length > length) {
            result = result + 1;
        }
    }

    return result;
}


console.log("Tên cầu thủ ngắn nhất:");
console.log(getShortestPlayerName());

console.log("Số cầu thủ có độ dài vị trí > 7:");
console.log(countPlayersWithPositionLengthGreaterThan(7));