import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const episodes = [
    {
      id: 1,
      title: 'Вечернее шоу с гостями',
      date: '25 октября 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/693214b7-99bd-41b2-8582-21e7d5a02956.jpg',
      category: 'Ток-шоу'
    },
    {
      id: 2,
      title: 'Новости дня: главное',
      date: '24 октября 2025',
      duration: '30 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/ae8c8f06-98d1-4304-be7b-295d7920b5f1.jpg',
      category: 'Новости'
    },
    {
      id: 3,
      title: 'Утренний эфир: разговор по душам',
      date: '23 октября 2025',
      duration: '60 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/693214b7-99bd-41b2-8582-21e7d5a02956.jpg',
      category: 'Интервью'
    },
    {
      id: 4,
      title: 'Специальный репортаж',
      date: '22 октября 2025',
      duration: '40 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/ae8c8f06-98d1-4304-be7b-295d7920b5f1.jpg',
      category: 'Репортаж'
    },
    {
      id: 5,
      title: 'Культурный код: искусство сегодня',
      date: '21 октября 2025',
      duration: '50 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/693214b7-99bd-41b2-8582-21e7d5a02956.jpg',
      category: 'Культура'
    },
    {
      id: 6,
      title: 'Вечерние новости',
      date: '20 октября 2025',
      duration: '30 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/ae8c8f06-98d1-4304-be7b-295d7920b5f1.jpg',
      category: 'Новости'
    }
  ];

  const schedule = [
    { time: '09:00', program: 'Утреннее шоу', duration: '2 часа' },
    { time: '11:00', program: 'Новости', duration: '30 мин' },
    { time: '11:30', program: 'Документальный фильм', duration: '1 час' },
    { time: '13:00', program: 'Дневные новости', duration: '30 мин' },
    { time: '14:00', program: 'Ток-шоу "Диалог"', duration: '1 час' },
    { time: '16:00', program: 'Культурный код', duration: '1 час' },
    { time: '18:00', program: 'Вечерние новости', duration: '45 мин' },
    { time: '19:00', program: 'Прайм-тайм шоу', duration: '2 часа' },
    { time: '21:00', program: 'Ночные новости', duration: '30 мин' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Tv" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">Новые друзья ТВ</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              {['home', 'episodes', 'schedule', 'live', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'episodes' && 'Выпуски'}
                  {section === 'schedule' && 'Расписание'}
                  {section === 'live' && 'Прямой эфир'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/14697817-169b-49d5-8853-459479aa5ecd.jpg"
              alt="Новые друзья ТВ"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12 animate-fade-in">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold mb-4">Всегда на связи с вами</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Смотрите любимые передачи онлайн. Не пропустили эфир? Все выпуски доступны в архиве.
                </p>
                <div className="flex space-x-4">
                  <Button size="lg" onClick={() => scrollToSection('live')} className="bg-primary hover:bg-primary/90">
                    <Icon name="Radio" size={20} className="mr-2" />
                    Прямой эфир
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('episodes')}>
                    <Icon name="PlayCircle" size={20} className="mr-2" />
                    Смотреть выпуски
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="episodes" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Архив выпусков</h2>
            <Button variant="ghost">
              Все выпуски
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((episode, index) => (
              <Card
                key={episode.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in border-border bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{episode.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-primary rounded-full p-4">
                      <Icon name="Play" size={32} className="text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{episode.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <span className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-1" />
                      {episode.date}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {episode.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Расписание передач</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow animate-fade-in bg-card border-border"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.program}</h3>
                      <p className="text-sm text-muted-foreground">{item.duration}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{item.time}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="live" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold">Прямой эфир</h2>
              <Badge className="bg-red-500 text-white animate-pulse px-4 py-2 text-sm">
                <Icon name="Radio" size={16} className="mr-2" />
                В ЭФИРЕ
              </Badge>
            </div>
            <Card className="overflow-hidden bg-card border-border">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Tv" size={80} className="text-primary mx-auto mb-4" />
                  <p className="text-xl text-muted-foreground">Прямая трансляция будет доступна здесь</p>
                  <Button className="mt-6 bg-primary hover:bg-primary/90">
                    <Icon name="Play" size={20} className="mr-2" />
                    Запустить эфир
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Сейчас в эфире: Прайм-тайм шоу</h3>
                <p className="text-muted-foreground mb-4">
                  Самые интересные темы дня с экспертами и гостями студии. Общаемся, обсуждаем, находим ответы на важные вопросы.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    19:00 - 21:00
                  </span>
                  <span className="flex items-center">
                    <Icon name="Users" size={16} className="mr-1" />
                    2,543 зрителей
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-8">
              Есть вопросы или предложения? Мы всегда рады услышать наших зрителей!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">info@novyedruzya.tv</p>
              </Card>
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
              </Card>
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-sm text-muted-foreground">Москва, ул. Примерная, 1</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Новые друзья ТВ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
