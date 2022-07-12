export default async function Service(request, content) {
  try {
    if (request === "uploadForm") {
      const req = await fetch("http://localhost:8081/api/v1/anketa/submit", {
        method: "POST",
        body: JSON.stringify(content, null, 2),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return true;
    }
    if (request === "downloadForm") {
      const req = await fetch(
        // `https://e77c-45-8-119-241.eu.ngrok.io/api/v1/anketa/download-pdf/${content.iin}`,
        `http://localhost:8081/api/v1/anketa/download-pdf/${content.iin}`,
        {
          method: "GET",
          headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (req.ok) {
        window.open(req.url);
        console.log("test");
        return true;
      }
    }
  } catch (err) {
    console.log(err);
  }
}
