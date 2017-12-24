module.exports = function codename(seed = Math.round(Math.random()*(112**2))) {
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
        )
        .reverse()
        .slice(1)
        .map(t => Math.ceil(target/t)-1)
        .concat(target%counts[counts.length - 1] - 1);

    return trickle.map((index, i) => data[i][index]);
};