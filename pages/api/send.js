const sgMail = require('@sendgrid/mail');

export default async function(req, res) {
  console.log(req);
  sgMail.setApiKey(process.env.XRDS_SENDGRID);

  const {targetEmail, email, message} = req.body;

  const content = {
    to: targetEmail,
    from: email,
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
