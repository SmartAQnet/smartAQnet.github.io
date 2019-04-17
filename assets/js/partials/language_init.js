window.userLanguage = window.localStorage.userLanguage || navigator.language || navigator.userLanguage || "en";
window.userLanguage = window.userLanguage.slice(0,2);
window.localStorage.userLanguage = window.userLanguage;
console.log(window.userLanguage);

window.setUserLanguage = function(langCode){
    window.userLanguage = langCode;
    window.localStorage.userLanguage = window.userLanguage;
    window.redirectToLanguage();
}

window.runIfSiteExists = function (newPath, callback){
    var http = new XMLHttpRequest();
    http.open('HEAD', newPath);
    http.onreadystatechange = function() {
        if (this.readyState == this.DONE && this.status == 200) {
            callback();
        }
    };
    http.send();
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
    if(newPath != window.location.pathname && newPath + "/" != window.location.pathname){
        window.runIfSiteExists(newPath, function(){
            window.location.replace(newPath);
        })
    }
}

window.redirectToLanguage(window.userLanguage);