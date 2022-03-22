var input = [2, -1, 2, 3, 3, 2];
var check = Array.from(new Set(input));
var data = [];

const dupidate = (check, input) => {
    check.map((item) => {
        let json = {};
        let frequency = 0;
        input.map((val) => {
            if (item == val) {
                frequency++;
            }
        });
        json.number = item;
        json.count = frequency;
        data.push(json);
    });
    let number = 0;
    let max = 0;
    data.map((item) => {
        if (item.count > max) {
            max = item.count;
            number = item.number;
        }
    });
    return { no: number, count: max };
};

const ans = dupidate(check, input);
console.log(ans);