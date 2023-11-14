import React from "react";
import {
  Html,
  Container,
  Body,
  Text,
  Preview,
  Link,
} from "@react-email/components";
const EmailTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://mrigankagogoi.com">www.mrigankagogoi.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
