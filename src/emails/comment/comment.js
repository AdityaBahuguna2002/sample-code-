import { Html, Head, Preview, Body, Container, Text } from '@react-email/components';

export default function CommentSuccessEmail() {
  return (
    <Html>
      <Head />
      <Preview>Your comment was posted successfully!</Preview>
      <Body style={{ backgroundColor: '#f0f4f8', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '20px' }}>
          <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Comment Submitted!
          </Text>
          <Text>
            Thanks for leaving a comment. It's now live on the site for others to see.
          </Text>
          <Text>
            We appreciate your input and hope to see you engage more with our content!
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
