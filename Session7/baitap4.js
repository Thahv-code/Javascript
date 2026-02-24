const player = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function printTeamRoster() {
    console.log("===== DANH SÁCH CẦU THỦ =====");

    player.forEach((item, index) => {
        const info = item.split("-");
        console.log(`${index + 1}. ${info[0]} | ${info[1]} | ${info[2]}`);
    });
}

function countPlayerByPostion(players) {
    let statistic = {};

    for (let player of players) {
        let parts = player.split("-");
        let role = parts[2];

        if (statistic[role] === undefined) {
            statistic[role] = 1;
        } else {
            statistic[role] += 1;
        }
    }

    return statistic;
}

function hasGoalkeeper() {
    return player.some(player => {
        let role = player.split("-")[2];
        return role === "Thủ môn";
    });
}

printTeamRoster();

console.log("Số lượng cầu thủ theo vị trí:");
console.log(countPlayerByPostion(player));

console.log("Đội có thủ môn không?");
console.log(hasGoalkeeper());