let cache = null

async function getAggregateStats(){
    if(cache) return cache;
    const response = await fetch('https://calm-desert-086adb703.azurestaticapps.net/api/aggregatestats');
    const jsonData = await response.json();
    cache = jsonData;
    return jsonData;
}

export { getAggregateStats }