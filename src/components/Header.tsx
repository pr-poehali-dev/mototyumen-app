import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold mr-2">🏍️ MotoTyumen</span>
              <span className="text-accent font-medium hidden sm:inline">online</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <NavLinks />
            <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
              Вход
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-primary-foreground/10 pt-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks mobile />
              <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground transition-colors">
                Вход
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const baseClassName = mobile
    ? "text-primary-foreground hover:text-accent transition-colors"
    : "text-primary-foreground hover:text-accent transition-colors";

  return (
    <>
      <Link to="/" className={baseClassName}>Главная</Link>
      <Link to="/events" className={baseClassName}>События</Link>
      <Link to="/community" className={baseClassName}>Сообщество</Link>
      <Link to="/routes" className={baseClassName}>Маршруты</Link>
    </>
  );
};

export default Header;
