window.userLanguage = window.localStorage.userLanguage || navigator.language || navigator.userLanguage || "en";
window.userLanguage = window.userLanguage.slice(0,2);
window.localStorage.userLanguage = window.userLanguage;

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
    //Try to get an alternate version of this document by using the jekyll generated links in the header. See seo_hreflang.html
    var alternateFromHead = document.querySelector('link[hreflang="'+window.userLanguage+'"][rel="alternate"]');
    //If alternatge link available and not already on page, replace URL immediately
    if(alternateFromHead){
        if(!window.alreadyOnPage(alternateFromHead.getAttribute("href"))){
            window.location.replace(alternateFromHead.getAttribute("href"));
        }
        return;
    }
    //Guess an alternate URL by replacing the language in the current URL
    var langPath = window.location.pathname.match(/\/(?<lang>\w{2})(?<langAgnosticPath>\/.*)/);
    var newPath = "";
    //Special logic for the root page
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
    //Only replace URL if not already at new url and page exists (send HEAD request before navigating)
    if(!window.alreadyOnPage(newPath)){
        window.runIfSiteExists(newPath, function(){
            window.location.replace(newPath);
        })
    }
}

window.alreadyOnPage = function(page){
    return (page == window.location.pathname || page + "/" == window.location.pathname);
}

window.redirectToLanguage(window.userLanguage);