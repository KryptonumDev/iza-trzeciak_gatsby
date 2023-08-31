const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_APIKEY);

import { emailRegex, phoneRegex } from '../constants/regex';
import { removeHtmlTags } from '../utils/functions';
const senderEmail = {
  to: 'kontakt@izatrzeciak.pl',
  from: 'kontakt@izatrzeciak.pl'
};

const isValidEmail = (email) => {
  return emailRegex.test(email.toLowerCase());
}
const isValidPhone = (phone) => {
  return phoneRegex.test(phone);
}

function constructMessage(data) {
  const { name, surname, tel, email, message, legal } = data;
  return `
<p>Imię: <b>${name}</b></p>
${surname && `<p>Nazwisko: <b>${surname}</b></p>`}
${tel && `<p>Numer telefonu: <b>${tel}</b></p>`}
<p>Adres e-mail: <b>${email}</b></p>

<p>${message}</p>

<br /><br />
<p>${legal && 'Zaakceptowano politykę prywatności'}</p>`;
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://izatrzeciak.pl');

  if (req.method !== 'POST') {
    return res.status(404).send('');
  }

  const { name = '', tel = '', email = '', message = '', legal = '' } = req.body;

  if (name.trim().length === 0 || !isValidEmail(email) || (tel && !isValidPhone(tel)) || message.trim().length === 0 || !legal) {
    return res.status(422).json({ success: false });
  }

  const messageBody = constructMessage(req.body);

  const emailMessage = {
    from: { email: senderEmail.from, name: 'Ośrodek Zdrowia w Turośni Koscielnej' },
    to: senderEmail.to,
    replyTo: email,
    subject: `Formularz kontaktowy - ${name} przesyła wiadomość`,
    text: removeHtmlTags(messageBody),
    html: messageBody,
  };

  sgMail
    .send(emailMessage)
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(() => {
      res.status(422).json({ success: false });
    });
}