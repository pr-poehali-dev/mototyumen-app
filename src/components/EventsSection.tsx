import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Открытие мотосезона 2025",
    description: "Традиционное открытие мотосезона в Тюмени с парадом и концертом.",
    date: "12 мая 2025",
    location: "Цветной бульвар",
    participants: 154,
    image: "https://images.unsplash.com/photo-1517846693594-1567da72af75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Мотопробег Тюмень-Тобольск",
    description: "Однодневный мотопробег до Тобольска и обратно с экскурсией по кремлю.",
    date: "25 мая 2025",
    location: "Сбор на ТЭЦ-2",
    participants: 87,
    image: "https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Мото-выставка 'Железные кони'",
    description: "Выставка уникальных и кастомных мотоциклов с конкурсом и призами.",
    date: "8 июня 2025",
    location: "Технопарк",
    participants: 63,
    image: "https://images.unsplash.com/photo-1596809891449-d88549967fea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const EventsSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Ближайшие события</h2>
          <Button variant="link" className="text-accent">
            Смотреть все
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    <span>{event.participants} участников</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
