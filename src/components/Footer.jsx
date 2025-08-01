import { TypographyMuted } from "./ui/typography";
import { Link } from "./ui/link";

export default function Footer() {
  return (
    <footer className="text-center">
      <TypographyMuted>
        Desenvolvido por{" "}
        <Link href="https://github.com/gbrcavalcante">Gabriel Cavalcante</Link>. O
        código-fonte está disponível no{" "}
        <Link href="https://github.com/gabrielcavalcante-dev/rescisao-facil">GitHub</Link>
        .
      </TypographyMuted>
    </footer>
  );
}
