import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

export default function Welcome() {
  return (
    <Html lang="es">
      <Head>
        <meta name="color-scheme" content="only" />
        <meta name="supported-color-schemes" content="only" />
      </Head>
      <Preview>Bienvenido al Círculo - Autofilia</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#880808", // Rojo sangre
                offwhite: "#f0ece4",
                dark: "#050505",
              },
            },
          },
        }}
      >
        <Body className="bg-dark m-0 p-0 font-sans">
          {/* Este contenedor de 100% de ancho asegura el fondo negro en Gmail/Outlook Móvil */}
          <Section className="bg-dark w-full py-[60px] table-cell align-middle">
            <Container className="bg-dark border border-solid border-[#1a1a1a] rounded-none my-0 mx-auto p-[40px] w-[580px]">
              {/* Header */}
              <Section className="border-b border-solid border-brand pb-[30px] mb-[40px]">
                <Heading className="text-offwhite text-[32px] font-normal text-left p-0 m-0 tracking-[6px] uppercase">
                  AUTOFILIA
                </Heading>
              </Section>

              {/* Contenido que enviaste */}
              <Section>
                <Text className="text-brand text-[13px] font-bold tracking-[4px] m-0 mb-[15px] uppercase">
                  NUEVO MIEMBRO DEL CIRCULO
                </Text>

                <Heading className="text-offwhite text-[28px] font-bold m-0 mb-[25px] leading-[1.2] tracking-tight">
                  Ahora llevas nuestra marca.
                </Heading>

                <Text className="text-[#a0a0a0] text-[16px] leading-[1.6] mb-[20px]">
                  No enviamos correos para saludarte. Enviamos ruido, fechas de
                  gira antes que a nadie, drops de merch que se agotan en
                  minutos y acceso a lo que nadie más ve.
                </Text>

                <Text className="text-[#a0a0a0] text-[16px] leading-[1.6] mb-[35px]">
                  Mantén el volumen alto. Nos vemos en el foso.
                </Text>

                <Section className="mb-[40px]">
                  <Link
                    className="bg-brand text-offwhite text-[11px] font-bold no-underline text-center px-8 py-4 uppercase tracking-[3px]"
                    href="https://autofiliarock.com"
                  >
                    Acceso al Merch
                  </Link>
                </Section>
              </Section>

              <Hr className="border border-solid border-[#1a1a1a] my-[40px] mx-0 w-full" />

              {/* Footer */}
              <Text className="text-[#444] text-[11px] leading-[18px] text-left m-0 uppercase tracking-widest">
                © 2026 AUTOFILIA. ALL RIGHTS RESERVED. <br />
                Has recibido esto porque eres parte del ruido.
              </Text>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
