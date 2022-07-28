const mailer = require('../configs/mail');

const patterns = {
  welcome: {
    subject: 'Bienvenido a tu pokédex',
    text: 'Te acabas de registrar como entrenador pokémon!',
  },
};

const messageFactory = ({ to, type }) => {
  const { subject, text } = patterns[type];

  return {
    from: process.env.MAILER_ORIGIN,
    to,
    subject,
    text,
  };
};

const send = async ({ to, type }) => {
  try {
    const message = messageFactory({ to, type });
    console.info('> message: ', message);

    const mailerResponse = await mailer.sendMail(message);
    console.info('> mail response: ', mailerResponse);

    return true;
  } catch (error) {
    console.error('> [email]: ', error.message);
    return false;
  }
};

module.exports = {
  send,
};
