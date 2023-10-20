(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        let currentPrblm = "";
        const { type, value, prblmId } = obj;

        if(type === 'NEW')
        {
            currentPrblm = prblmId;
            newProblemLoaded();
        }
    })
})()