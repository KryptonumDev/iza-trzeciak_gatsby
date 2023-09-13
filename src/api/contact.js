const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_APIKEY);

import { regex } from '../constants/regex';
import { removeHtmlTags } from '../utils/functions';
const senderEmail = {
  name: 'Iza Trzeciak',
  to: 'kontakt@izatrzeciak.pl',
  from: 'kontakt@izatrzeciak.pl'
};

const isValidEmail = (email) => {
  return regex.email.test(email.toLowerCase());
}
const isValidPhone = (phone) => {
  return regex.phone.test(phone);
}

function constructMessage(data) {
  const { name, email, tel, subject, subjectInfo, additionalInfo, legal } = data;
  return `
<p>Imię: <b>${name}</b></p>
<p>Adres e-mail: <b>${email}</b></p>
${tel && `<p>Numer telefonu: <b>${tel}</b></p>`}
<p>Temat rozmowy: <b>${subject}</b></p>
<p>Dokładny temat rozmowy: <b>${subjectInfo}</b></p>

${additionalInfo && `<p>${additionalInfo}</p>`}

<br /><br />
<p>${legal && 'Zaakceptowano politykę prywatności'}</p>`;
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://izatrzeciak.pl');

  if (req.method !== 'POST') {
    return res.status(404).send('');
  }

  const { name='', email='', tel='', subject='', subjectInfo='', additionalInfo='', legal='' } = req.body;

  (name.trim().length === 0
  ||
  !isValidEmail(email)
  ||
  (tel && !isValidPhone(tel))
  ||
  subject.trim().length === 0
  ||
  subjectInfo.trim().length === 0
  ||
  (additionalInfo && additionalInfo.trim().length === 0)
  ||
  !legal)
  && res.status(422).json({ success: false })

  const messageBody = constructMessage(req.body);

  const emailMessage = {
    from: {
      email: senderEmail.from,
      name: senderEmail.name
    },
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