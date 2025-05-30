import { Html, Head, Preview, Body, Container, Text } from '@react-email/components';

export default function ContactConfirmationEmail() {
  return (
    <Html>
      <Head />
      <Preview>Thanks for contacting us! Our experts will reach out soon.</Preview>
      <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '20px' }}>
          <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Thank You for Reaching Out!
          </Text>
          <Text>
            We've received your message and one of our experts will contact you shortly.
          </Text>
          <Text>
            If you have any urgent inquiries, feel free to reply to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
