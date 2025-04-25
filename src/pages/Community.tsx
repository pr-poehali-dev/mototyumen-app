import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Сообщество мотоциклистов Тюмени</h1>
        
        <Tabs defaultValue="members" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="members">Участники</TabsTrigger>
            <TabsTrigger value="clubs">Клубы</TabsTrigger>
            <TabsTrigger value="forum">Обсуждения</TabsTrigger>
          </TabsList>
          
          <TabsContent value="members" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="clubs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clubs.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="forum" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Обсуждения</CardTitle>
                <CardDescription>Присоединяйтесь к дискуссиям в нашем сообществе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topics.map((topic) => (
                    <div key={topic.id} className="border-b pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">{topic.title}</h3>
                          <p className="text-muted-foreground">{topic.description}</p>
                        </div>
                        <Badge>{topic.replies} ответов</Badge>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <span>Автор: {topic.author}</span>
                        <span className="mx-2">•</span>
                        <span>Последнее обновление: {topic.lastUpdated}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Создать новую тему</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

interface Member {
  id: number;
  name: string;
  avatar: string;
  bike: string;
  experience: string;
  badges: string[];
}

interface Club {
  id: number;
  name: string;
  logo: string;
  description: string;
  memberCount: number;
  foundedYear: number;
}

interface Topic {
  id: number;
  title: string;
  description: string;
  author: string;
  lastUpdated: string;
  replies: number;
}

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{member.name}</CardTitle>
          <CardDescription>{member.bike}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">Стаж: {member.experience}</p>
        <div className="flex flex-wrap gap-2">
          {member.badges.map((badge, index) => (
            <Badge key={index} variant="secondary">{badge}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">Профиль</Button>
      </CardFooter>
    </Card>
  );
};

const ClubCard = ({ club }: { club: Club }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={club.logo} alt={club.name} />
          <AvatarFallback>{club.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{club.name}</CardTitle>
          <CardDescription>Основан в {club.foundedYear} году</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{club.description}</p>
        <Badge className="mt-2">{club.memberCount} участников</Badge>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

// Данные для демонстрации
const members: Member[] = [
  {
    id: 1,
    name: "Алексей Мотороff",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    bike: "Kawasaki Ninja ZX-6R",
    experience: "5 лет",
    badges: ["Спорт", "Дальнобой", "Инструктор"]
  },
  {
    id: 2,
    name: "Елена Скоростная",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bike: "Yamaha YZF-R6",
    experience: "3 года",
    badges: ["Мототрек", "Городская езда"]
  },
  {
    id: 3,
    name: "Иван Дорожный",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    bike: "BMW R 1250 GS",
    experience: "7 лет",
    badges: ["Эндуро", "Путешествия", "Механик"]
  }
];

const clubs: Club[] = [
  {
    id: 1,
    name: "Night Riders Тюмень",
    logo: "https://images.unsplash.com/photo-1506784926709-22f1ec395907",
    description: "Клуб любителей ночных поездок по городу и области. Регулярные встречи, совместные выезды.",
    memberCount: 76,
    foundedYear: 2018
  },
  {
    id: 2,
    name: "MotoQuad Тюмень",
    logo: "https://images.unsplash.com/photo-1577373521825-4cc5df87d2e6",
    description: "Сообщество мотоциклистов и квадроциклистов. Специализируемся на внедорожных трассах.",
    memberCount: 54,
    foundedYear: 2016
  },
  {
    id: 3,
    name: "СтритРейсерз",
    logo: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7",
    description: "Клуб спортивных мотоциклов. Организация трековых дней и соревнований.",
    memberCount: 42,
    foundedYear: 2020
  },
  {
    id: 4,
    name: "Урал-Сибирь Мото",
    logo: "https://images.unsplash.com/photo-1581661701314-5ef447042d2e",
    description: "Мотопутешественники по Уралу и Сибири. Дальние поездки, кемпинг, приключения.",
    memberCount: 38,
    foundedYear: 2015
  }
];

const topics: Topic[] = [
  {
    id: 1,
    title: "Подготовка к мотосезону 2025",
    description: "Обсуждаем, что нужно сделать с мотоциклом перед началом сезона",
    author: "Алексей Мотороff",
    lastUpdated: "2 часа назад",
    replies: 24
  },
  {
    id: 2,
    title: "Лучшие маршруты вокруг Тюмени",
    description: "Делимся интересными маршрутами в пределах 100-200 км от города",
    author: "Иван Дорожный",
    lastUpdated: "вчера",
    replies: 18
  },
  {
    id: 3,
    title: "Выбор экипировки для новичка",
    description: "Помогаем выбрать первую экипировку: шлем, куртка, перчатки и т.д.",
    author: "Елена Скоростная",
    lastUpdated: "3 дня назад",
    replies: 32
  }
];

export default Community;
