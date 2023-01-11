import { SMTPClient } from "emailjs";
import * as dotenv from "dotenv";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    const { email, name, message, phone } = req.body;
    dotenv.config();
    console.log(email);

    const client = new SMTPClient({
      user: process.env.EMAIL,
      password: process.env.PASS,
      host: "nspro12.hostgator.com.br",
      port: 465,
      ssl: true,
    });

    try {
      await client.sendAsync({
        text: `<p>${name}</p>
          <br/>
          <p>${email}</p>
          <br/>
          <p>${message}</p>
          <br/>
          <p>${phone}</p>
          `,
        from: process.env.EMAIL,
        to: "edgar@istv.com.br",
        subject: "istv " + name + " ou " + email,
      });
    } catch (e) {
      console.log(e);
      return;
    }
    res.status(200).end(JSON.stringify({ email: email }));
  }
}
