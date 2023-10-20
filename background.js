chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url && tab.url.includes("leetcode.com/problems"))
    {
        const urlParts = tab.url.split('/');
        const problemId = urlParts[4];
        console.log(problemId);
        
        chrome.tabs.sendMessage(tabId, {
            type : 'NEW',
            prblmId : problemId,
        });
    } 
})