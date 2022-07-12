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
    if (request === "registration") {
      const req = await fetch("http://localhost:8081/api/v1/register", {
        method: "POST",
        body: JSON.stringify(content, null, 2),
        headers: {
          Accept: "*/*",
          // "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      if (!req.ok) {
        alert(res.Error);
      } else {
        window.location = "/login";
      }
    }

    if (request === "login") {
      const req = await fetch("http://localhost:8081/api/v1/auth", {
        method: "POST",
        body: JSON.stringify(content, null, 2),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // "Access-Control-Allow-Origin": "*",
        },
      });

      const reqJ = await req.json();
      if (!req.ok) {
        alert(reqJ.Error);
      }
      if (reqJ.token) {
        sessionStorage.setItem("token", reqJ.token);
        window.location = "/admin";
      }
    }
    if (request === "applicationList") {
      const req = await fetch("http://localhost:8081/api/v1/anketa/all", {
        method: "GET",
        Accept: "application/json",
      });
      if (req.ok) {
        const res = await req.json();
        return res;
      }
    }
    if (request === "candidateInfo") {
      const req = await fetch(
        `http://localhost:8081/api/v1/anketa/${content.iin}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const res = await req.json();
      return res;
    }
  } catch (err) {
    console.log(err);
  }
}
