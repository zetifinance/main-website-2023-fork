async function getAggregateStats(){
    const response = await fetch('https://calm-desert-086adb703.azurestaticapps.net/api/aggregatestats');
    const jsonData = await response.json();
    return jsonData;
}

export { getAggregateStats }