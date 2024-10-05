const form = document.getElementById("f");
const input = document.getElementById("i");

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
