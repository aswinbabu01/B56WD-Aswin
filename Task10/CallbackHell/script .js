callback1 = (value, nextcb) => {
    document.getElementById("p1").innerText = value;
    nextcb(value - 1);
}
callback2 = (value, nextcb) => {
    document.getElementById("p2").innerText = value;
    nextcb(value - 1);
}
callback3 = (value, nextcb) => {
    document.getElementById("p3").innerText = value;
    nextcb(value - 1);
}
callback4 = (value, nextcb) => {
    document.getElementById("p4").innerText = value;
    nextcb(value - 1);
}
callback5 = (value, nextcb) => {
    document.getElementById("p5").innerText = value;
    nextcb(value - 1);
}
callback6 = (value, nextcb) => {
    document.getElementById("p6").innerText = value;
    nextcb(value - 1);
}
callback7 = (value, nextcb) => {
    document.getElementById("p7").innerText = value;
    nextcb(value - 1);
}
callback8 = (value, nextcb) => {
    document.getElementById("p8").innerText = value;
    nextcb(value - 1);
}
callback9 = (value, nextcb) => {
    document.getElementById("p9").innerText = value;
    nextcb(value - 1);
}
callback10 = (value, nextcb) => {
    document.getElementById("p10").innerText = value;
    nextcb(value - 1);
}

callback1(10, function (res) {
    callback2(res, function (res) {
        callback3(res, function (res) {
            callback4(res, function (res) {
                callback5(res, function (res) {
                    callback6(res, function (res) {
                        callback7(res, function (res) {
                            callback8(res, function (res) {
                                callback9(res, function (res) {
                                    callback10(res, function (res) {
                                        document.getElementById("p11").innerText = "HAPPY INDEPENDENCE DAY!";
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})



