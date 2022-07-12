export default async function Service(request, content) {
  console.log(content.files);
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
        return true;
      }
    }

    if (request === "uploadFiles") {
      for (const [fileName, file] of Object.entries(content.files)) {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          const req = await fetch(
            `http://localhost:8081/api/v1/upload/file/${content.iin}/?type=${fileName}`,
            {
              method: "POST",
              headers: {
                Accept: "*/*",
                "Access-Control-Allow-Origin": "*",
              },
              body: formData,
            }
          );
          // console.log(req);
        }
      }
      return true;
    }
  } catch (err) {
    console.log(err);
  }
}
