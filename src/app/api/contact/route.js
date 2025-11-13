export async function POST(request) {
  try {
    const {
      nome,
      cognome,
      email,
      telefono,
      oggetto,
      messaggio,
      privacyCheckbox,
      recaptchaToken,
    } = await request.json();

    console.info('request: ', request);

    // Verifica il token reCAPTCHA con Google
    const verifyResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );

    const verifyData = await verifyResponse.json();
    console.log(
      '🤖 Risposta Google completa:',
      JSON.stringify(verifyData, null, 2)
    );

    console.log('reCAPTCHA score:', verifyData.score);

    // Controlla se la verifica è andata a buon fine e lo score è accettabile
    if (!verifyData.success || verifyData.score < 0.5) {
      return Response.json(
        {
          success: false,
          error: 'Verifica di sicurezza fallita. Riprova.',
        },
        { status: 400 }
      );
    }

    // Invia la mail
    await inviaEmail({
      nome,
      cognome,
      email,
      telefono,
      oggetto,
      messaggio,
      privacyCheckbox,
    });

    // Esempio: potresti inviare un'email, salvare in un database, ecc.
    // await sendEmail({ name, email, message })

    return Response.json({ success: true });
  } catch (error) {
    console.error('Errore server:', error);
    return Response.json(
      {
        success: false,
        error: 'Errore del server',
      },
      { status: 500 }
    );
  }
}

async function inviaEmail({
  nome,
  cognome,
  email,
  telefono,
  oggetto,
  messaggio,
  privacyCheckbox,
}) {
  // Qui processa il form (invia email, salva nel DB, ecc.)
  console.log('Form ricevuto:', {
    nome,
    cognome,
    email,
    telefono,
    oggetto,
    messaggio,
    privacyCheckbox,
  });
}
