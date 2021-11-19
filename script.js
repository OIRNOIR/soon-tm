document.addEventListener('load', () => {
  const urlParams = new URLSearchParams(location.search);
  if (urlParams.has('to')){
    window.location.replace("/?q=" + btoa(urlParams.get('to')));
  } else if (urlParams.has('q')){
    window.history.replaceState(null, "", "/");
    setTimeout(() => {
      let url = atob(urlParams.get('q'));
      if (!url.startsWith("http")){
        url = "https://" + url;
      }
      window.location.href = url;
    }, 10000);
  }
});