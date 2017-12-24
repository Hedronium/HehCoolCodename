module.exports = (seed) => {
    const data = "##--DATA HERE--##";
    const counts = data.map(x => x.length);
    const total = counts.reduce((a, b) => a*b, 1);
    const target = seed%total;
    const trickle = counts
        .reverse()
        .reduce(
            (acc, cur) => acc.concat(
                (acc[acc.length - 1] || 1)*cur
            ), []
        ).map(cumulative => Math.floor(cumulative/target));

    return trickle.map((index, i) => data[i][index]);
};

console.log(module.exports(7));