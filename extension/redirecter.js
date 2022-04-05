document.querySelector(".button").addEventListener("click", ()=>{
    chrome.tabs.query({currentWindow: true, active: true}, (tabs)=>{
        var active = tabs[0]
        enabled = !enabled;
        if(enabled){
            chrome.tabs.sendMessage(active.id, {command: "enable"})
        }else{
            chrome.tabs.sendMessage(active.id, {command: "disable"})
        }
        document.querySelector(".text").textContent = enabled? "Enabled" : "Disabled"
    })
    
})
let enabled = true;