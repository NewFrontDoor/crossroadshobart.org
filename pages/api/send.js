const sgMail = require('@sendgrid/mail');

export default async function(req, res) {
  console.log(req);
  sgMail.setApiKey(process.env.XRDS_SENDGRID);

  const {targetEmail, message} = req.body;

  const content = {
    to: targetEmail,
    from: 'info@newfrontdoor.org',
    subject: `[no-reply] New Message From - ${message.email}`,
    text: JSON.stringify(message),
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