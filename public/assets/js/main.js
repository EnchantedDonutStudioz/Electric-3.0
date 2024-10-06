const form = document.getElementById("f");
const input = document.getElementById("i");




window.addEventListener("chemicalLoaded", async function (e) {
    console.log("Chemical is loaded: ", chemical.loaded);
    chemical.setStore("transport", "epoxy");
    await chemical.setTransport("epoxy");
});

if (form && input) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        var url = await chemical.encode(input.value, {
            service: localStorage.getItem("proxy") || "uv",
            autoHttps: true,
            searchEngine: "https://www.google.com/search?q=%s"
        })
        console.log(url);
        window.location.href = url;

    });
}