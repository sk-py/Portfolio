import nodemailer from "nodemailer";
export const POST = async (request) => {
  const data = await request.json();
  if (!data.email || !data.subject || !data.message) {
    return Response.json({ message: "Bad request" });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
  };

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: "This is message form portfolio",
      html: `<!DOCTYPE html><html html lang="en" > <head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Message from portfolio website</title><style media="all" type="text/css"> html{background-color:#1E1E1E;font-color:white}  /* styles go here */</style></head><body><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body"><tr><td>&nbsp;</td><td class="container"><div class="content"><!-- START CENTERED WHITE CONTAINER --><span class="preheader"><br/> </span><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main"><!-- START MAIN CONTENT AREA --><tr><td class="wrapper"><p>Message from ${data.email} </p><p>${data.message}</p><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary"><tbody><tr><td align="left"><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td> <a href="https://github.com/sk-py/" target="_blank">Go to site</a> </td></tr></tbody></table></td></tr></tbody></table><p></p><p>Hope it\'s useful to you </p></td></tr><!-- END MAIN CONTENT AREA --></table><!-- START FOOTER --><div class="footer"><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="content-block"><span class="apple-link">&copy; Sk-py </span><br> </td></tr><tr><td class="content-block powered-by">Powered by <a href="http://htmlemail.io">Shaikh\'s Portfolio and Nodemailer</a></td></tr></table></div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td>&nbsp;</td></tr></table></body></html>`,
    });
    return Response.json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(`Error : ${error.message}`);
    return Response.json({ message: "Internal Server Error" });
  }
};
