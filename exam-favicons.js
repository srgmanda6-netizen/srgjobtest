(function () {
  var SZ = 128;
  function faviconUrl(domain) {
    return "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(domain) + "&sz=" + SZ;
  }
  document.querySelectorAll("[data-favicon]").forEach(function (el) {
    var domain = el.getAttribute("data-favicon");
    if (!domain || el.querySelector("img")) return;
    var img = document.createElement("img");
    img.src = faviconUrl(domain);
    img.alt = "";
    img.className = "favicon-img";
    img.loading = "lazy";
    img.decoding = "async";
    el.appendChild(img);
  });
})();
