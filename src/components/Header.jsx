import { TypographyH4 } from "./ui/typography";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <TypographyH4>
        Rescisão<span className="text-primary">Fácil</span>
      </TypographyH4>
      <ModeToggle />
    </header>
  );
}
