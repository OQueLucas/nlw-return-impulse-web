import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2ff17ca4a56d00",
      pass: "019cb9024b1cea"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail( { subject, body }: sendMailData ) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Lucas Queiroz <lucasestevam365@gmail.com>',
        subject,
        html: body,
    });
    };
}