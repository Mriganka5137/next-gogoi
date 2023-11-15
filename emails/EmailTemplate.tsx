import React from "react";
import {
  Html,
  Tailwind,
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
      <Tailwind>
        <Body className="bg-slate-900 font-sans">
          <Container>
            <Text className="text-3xl font-bold text-slate-300">
              Hello {name}
            </Text>
            <Link href="https://mrigankagogoi.com">www.mrigankagogoi.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;

// import * as React from "react";

// interface EmailTemplateProps {
//   firstName: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );
