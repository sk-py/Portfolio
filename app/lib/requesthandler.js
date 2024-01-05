export const sendMessage = async (data) =>
  fetch("http://mubashir-shaikh/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
