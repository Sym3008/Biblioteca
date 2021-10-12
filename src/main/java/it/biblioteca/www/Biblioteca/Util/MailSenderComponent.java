package it.biblioteca.www.Biblioteca.Util;

import org.springframework.stereotype.Component;

import java.net.PasswordAuthentication;
import java.util.Properties;

@Component
public class MailSenderComponent {

    private final static String SMTP_HOST = "smtp.gmail.com";
    private final static String SMTP_PORT = "587";
    private final static String SMTP_AUTH = "true";
    private final static String SMTP_USER = "gruppo.vintage.bari@gmail.com";
    private final static String SMTP_PWD = "Gruppovintage1";

    public void send(String destinatario, String oggetto, String messaggio) {
        try {
            InternetAddress address = new InternetAddress(destinatario);
            Properties props = new Properties();
            props.put("mail.smtp.host", SMTP_HOST);
            props.put("mail.smtp.auth", SMTP_AUTH);
            props.put("mail.smtp.port", SMTP_PORT);
            props.put("mail.smt.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
            Authenticator auth = new Autenticator() {
                public PasswordAuthentication(SMTP_USER, SMTP_PWD);
            }
        } ;
        Session session = Session.getDefaultInstance(props, auth);

        Message msg = new MineMessage(session);

        InternaetAddress addressFrom = new InternetAddres(SMT_USER);
        msg.setFrom(addressFrom);
        msg.setRecipient(Message.RecipientType.TO, address);
        msg.setSubject(oggetto);
        msg.setText(messaggio);
        Transport.send(msg);
        }catch (AddressException e) {
            e.printStackTrace();
        }catch(MessagingException e)
            e.printStackTrace();
        }
    }
}
