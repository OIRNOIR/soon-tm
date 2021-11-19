document.onload = () => {
  console.log("1");
  const urlParams = new URLSearchParams(location.search);
  console.log("2");
  if (urlParams.has('to')){
    console.log("3");
    window.location.replace("/?q=" + btoa(urlParams.get('to')));
  } else if (urlParams.has('q')){
    console.log("4");
    window.history.replaceState(null, "", "/");
    console.log("5");
    setTimeout(() => {
      console.log("6");
      let url = atob(urlParams.get('q'));
      console.log("7");
      if (!url.startsWith("http")){
        console.log("8");
        url = "https://" + url;
      }
      console.log("9");
      window.location.href = url;
    }, 10000);
  }
};