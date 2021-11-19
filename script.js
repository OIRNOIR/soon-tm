const urlParams = new URLSearchParams(location.search);

if (urlParams.has('to')){
  window.location.replace("https://soon-tm.glitch.me/?q=" + btoa(urlParams.get('to')));
} else if (urlParams.has('q')){
  setTimeout(() => {
    let url = atob(urlParams.get('q'));
    if (!url.startsWith("http")){
      url = "https://" + url;
    }
    window.location.replace(url);
  }, 10000);
}