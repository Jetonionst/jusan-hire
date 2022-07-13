export default async function Service(request, content) {
  const url = "https://jusanhireserver.azurewebsites.net";
  try {
    if (request === "uploadForm") {
      const req = await fetch(`${url}/api/v1/anketa/submit`, {
        method: "POST",
        body: JSON.stringify(content, null, 2),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(JSON.stringify(content, null, 2));
      return true;
    }
    if (request === "downloadForm") {
      const req = await fetch(
        `${url}/api/v1/anketa/download-pdf/${content.iin}`,
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
            `${url}/api/v1/upload/file/${content.iin}/?type=${fileName}`,
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
      const req = await fetch(`${url}/api/v1/register`, {
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
      const req = await fetch(`${url}/api/v1/auth`, {
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
      const req = await fetch(`${url}/api/v1/anketa/all`, {
        method: "GET",
        Accept: "application/json",
      });
      if (req.ok) {
        const res = await req.json();
        return res;
      }
    }
    if (request === "HR") {
      const req = await fetch(`${url}/api/v1/download/zip/${content}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (req.ok) {
        window.open(req.url);
      }
    }
    // const documentList = await req.json();
    // documentList.map(async (doc) => {
    //   const req = await fetch(
    //     `http://localhost:8081/api/v1/download/${doc.id}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //       },
    //     }
    //   );
    //   if (req.ok) {
    //     window.open(req.url);
    //   }
    // });
    if (request === "SB") {
      const req = await fetch(
        `${url}/api/v1/download/sb/zip/${content}?types=residentCard,form,medDoc`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (req.ok) {
        window.open(req.url);
      }
      // const fetchList = [
      //   "residentCard",
      //   "educationDoc",
      //   "laborActivity",
      //   "medDoc",
      //   "militaryDoc",
      //   "form",
      //   "image",
      //   "invalidDoc",
      //   "pensionerDoc",
      //   "lgotiDoc",
      //   "marriageDoc",
      //   "childDoc",
      // ];

      // const req = await fetch(
      //   `http://localhost:8081/api/v1/attachments/${content}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       Accept: "application/json",
      //     },
      //   }
      // );
      // if (req.ok) {
      //   const documentList = await req.json();
      //   documentList.map(async (doc) => {
      //     // const req = await fetch(
      //     //   `http://localhost:8081/api/v1/download/${doc.id}`,
      //     //   {
      //     //     method: "GET",
      //     //     headers: {
      //     //       Accept: "application/json",
      //     //     },
      //     //   }
      //     // );
      //     if (doc.type)
      //       if (req.ok) {
      //         window.open(req.url);
      //       }
      //   });
      // }
    }
    if (request === "deleteUser") {
      const req = await fetch(`${url}/api/v1/anketa/delete/${content}`, {
        method: "DELETE",
        headers: {
          Accept: "*/*",

          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
}
