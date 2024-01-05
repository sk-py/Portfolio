export const sendMessage = async (data) =>
  fetch("https://mubashir-shaikh.vercel.app/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
