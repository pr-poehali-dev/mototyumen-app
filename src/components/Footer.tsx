import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🏍️ MotoTyumen <span className="text-accent">online</span></h3>
            <p className="text-primary-foreground/80">
              Объединяем мотоциклистов Тюмени с 2022 года. Лучшее сообщество для любителей двухколесной техники.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Главная</Link></li>
              <li><Link to="/events" className="text-primary-foreground/80 hover:text-accent transition-colors">События</Link></li>
              <li><Link to="/community" className="text-primary-foreground/80 hover:text-accent transition-colors">Сообщество</Link></li>
              <li><Link to="/routes" className="text-primary-foreground/80 hover:text-accent transition-colors">Маршруты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Тюмень, ул. Республики, 142</li>
              <li><a href="tel:+73452123456" className="text-primary-foreground/80 hover:text-accent transition-colors">+7 (3452) 12-34-56</a></li>
              <li><a href="mailto:info@mototyumen.ru" className="text-primary-foreground/80 hover:text-accent transition-colors">info@mototyumen.ru</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">VK</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Telegram</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} MotoTyumen. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
