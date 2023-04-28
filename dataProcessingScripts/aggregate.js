const fs = require("fs");
    
const layer = (d) => d.repo;

const aggregate = async () => {
    let d3;
    try {
        d3 = await import('d3');
    } catch (e) {
        console.error("Failed to load d3", e);
    }

    const {
        utcWeek,
        utcWeeks,
        group,
        stack,
        extent,
        stackOffsetWiggle,
        stackOrderAppearance,
    } = d3;

    const parseDate = d3.timeParse('%Y-%m-%d');
    const formatDate = d3.timeFormat('%Y-%m-%d');
    const dataString = fs.readFileSync('data/all-d3-commits.json');
    const data = JSON.parse(dataString)
    const blurRadius = 15;


    //data = data.filter(d => d.repo !== 'd3');
    data.forEach((d) => {
        d.date = utcWeek.floor(
            parseDate(d.date.split(' ')[0])
        );
    });

    // Aggregate by week and repository.
    const groupedData = group(
        data,
        (d) => d.date,
        layer
    );

    const layerGroupedData = group(data, layer);

    const layers = Array.from(
        layerGroupedData.keys()
    );

    const [start, stop] = extent(
        data,
        (d) => d.date
    );
    const allWeeks = utcWeeks(start, stop);

    const dataBylayer = new Map();
    const aggregatedData = {
        dates: allWeeks.map(formatDate),
        repositories: {}
    };
    for (const layer of layers) {
        const layerData = allWeeks.map((date) => {
            const value = groupedData.get(date);
            const commits = value
                ? value.get(layer)
                : null;
            const commitCount = commits
                ? commits.length
                : 0;
            return commitCount;
        });
        aggregatedData.repositories[layer] = layerData;
    }
    fs.writeFileSync(`data/aggregatedData.json`, JSON.stringify(aggregatedData))
};

module.exports = aggregate;