var proxy = localStorage.getItem("proxy") || "uv";

document.getElementById("proxySelect").value = proxy;
document.getElementById("proxySelect").addEventListener("change", (event) => {
    proxy = event.target.value;
    localStorage.setItem("proxy", proxy);
})