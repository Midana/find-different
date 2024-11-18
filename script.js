let differences = [
    { x: 326, y: 333 }, // 图片1中的差异点坐标
    { x: 336, y: 523 },  // 图片2中的差异点坐标
    { x: 228, y: 79}  // 图片3中的差异点坐标
];

let userDifferences = [];

function checkDifference() {
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');

    for (let diff of differences) {
        if (!userDifferences.includes(diff)) {
            alert('还有什么不同找找看');
            return;
        }
    }

    alert('你太厉害了，真强啊');
}

document.getElementById('image1').addEventListener('click', function(event) {
    let rect = this.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // 检查点击位置是否为差异点
    for (let diff of differences) {
        if (Math.abs(x - diff.x) < 50 && Math.abs(y - diff.y) < 50) {
            userDifferences.push(diff);
            alert('好厉害，这都被你找到了');
            break;
        }
    }
});

document.getElementById('image2').addEventListener('click', function(event) {
    let rect = this.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // 检查点击位置是否为差异点
    for (let diff of differences) {
        if (Math.abs(x - diff.x) < 50 && Math.abs(y - diff.y) < 50) {
            userDifferences.push(diff);
            alert('好厉害，这都被你找到了');
            break;
        }
    }
});