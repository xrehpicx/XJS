x('#box1').click((o) => {
    o.style();
}).hover((o) => {
    console.log(o.style('opacity','0'));
});
