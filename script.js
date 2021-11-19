window.onload = () => {
  const urlParams = new URLSearchParams(location.search);
  if (urlParams.has('to')){
    window.location.replace("/?q=" + btoa(urlParams.get('to')));
  } else if (urlParams.has('q')){
    window.history.replaceState(null, "", "/");
    setTimeout(() => {
      let h = atob(urlParams.get('q'));
      if (!h.startsWith("http")){
        h = "https://" + h;
      }
      window.location.href = h;
    }, 10000);
  }
};