import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EventsSection />
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Почему мотоциклисты выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-secondary rounded-lg">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Сообщество</h3>
                <p className="text-muted-foreground">Более 500 активных участников сообщества помогут с советом и поддержкой.</p>
              </div>
              
              <div className="p-6 bg-secondary rounded-lg">
                <div className="text-3xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold mb-2">Маршруты</h3>
                <p className="text-muted-foreground">Десятки проверенных маршрутов с описанием дорожного покрытия и достопримечательностей.</p>
              </div>
              
              <div className="p-6 bg-secondary rounded-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">События</h3>
                <p className="text-muted-foreground">Регулярные мероприятия, встречи и совместные поездки каждую неделю.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
