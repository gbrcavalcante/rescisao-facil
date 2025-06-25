import { TypographyMuted } from "./ui/typography";
import { Link } from "./ui/link";

export default function Footer() {
  return (
    <footer className="text-center py-4">
      <TypographyMuted>
        Desenvolvido por{" "}
        <Link href="https://github.com/gabriellcro">Gabriel Cavalcante</Link>. O
        código-fonte está disponível no{" "}
        <Link href="https://github.com/gabriellcro/rescisao-facil">GitHub</Link>
        .
      </TypographyMuted>
    </footer>
  );
}
