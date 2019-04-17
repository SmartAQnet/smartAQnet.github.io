window.userLanguage = window.localStorage.userLanguage || navigator.language || navigator.userLanguage || "en";
window.userLanguage = window.userLanguage.slice(0,2);
window.localStorage.userLanguage = window.userLanguage;
window.setUserLanguage = function(langCode){
    window.userLanguage = langCode;
    window.localStorage.userLanguage = window.userLanguage;
    window.redirectToLanguage();
}
window.redirectToLanguage = function(){
    var langPath = window.location.pathname.match(/\/(?<lang>\w{2})(?<langAgnosticPath>\/.*)/);
    var newPath = "";
    if(langPath && langPath.groups.langAgnosticPath != "/"){
        newPath = "/" + window.userLanguage + 
            langPath.groups.langAgnosticPath + window.location.hash + window.location.search;
    }
    else if(window.userLanguage == "en"){
        newPath = "/";
    }
    else{
        newPath = "/" + window.userLanguage;
    }
    if(newPath != window.location.pathname){
        window.location.href = newPath;
    }
}

try{
    var inPageNavigation = (new URL(document.referrer)).origin == window.location.origin
    if(!inPageNavigation){
        window.redirectToLanguage(window.userLanguage);
    }
} catch(e) {
    window.redirectToLanguage(window.userLanguage);
}