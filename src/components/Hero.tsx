import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh] flex items-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Откройте свободу на дорогах Тюмени
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Присоединяйтесь к крупнейшему мотосообществу города. Маршруты, события, встречи и единомышленники ждут вас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium">
              Ближайшие события
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Присоединиться к сообществу
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
