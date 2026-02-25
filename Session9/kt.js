let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];
const negativeRevenue = revenues.some(revenue => revenue < 0);
const above500 = revenues.every(revenue => revenue > 500);
console.log("Có đơn hàng âm:", negativeRevenue);
console.log("Tất cả trên 500:", above500);
const netProfits = revenues.map(revenue => revenue * 0.9);
console.log("Lợi nhuận ròng:", netProfits);