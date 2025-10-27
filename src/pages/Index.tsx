import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLiveStreaming, setIsLiveStreaming] = useState(false);

  const episodes = [
    {
      id: 1,
      title: 'Большой футбол. Выпуск 1: Первый матч группового этапа',
      date: '27 октября 2025',
      duration: '30 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
    },
    {
      id: 2,
      title: 'Большой футбол. Выпуск 2: Второй матч группового этапа',
      date: '26 октября 2025',
      duration: '30 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
    },
    {
      id: 3,
      title: 'Большой футбол. Выпуск 3: Третий матч группового этапа',
      date: '25 октября 2025',
      duration: '30 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
    },
    {
      id: 4,
      title: 'Большой футбол. Выпуск 4: Четвёртый матч группового этапа',
      date: '24 октября 2025',
      duration: '30 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
    },
    {
      id: 5,
      title: 'Большой футбол. Выпуск 5: Пятый матч группового этапа',
      date: '23 октября 2025',
      duration: '30 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
    },
    {
      id: 6,
      title: 'Большой футбол. Выпуск 6: Финальный матч группового этапа',
      date: '22 октября 2025',
      duration: '30 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
    },
    {
      id: 7,
      title: 'Большой футбол. Выпуск 7: Первый полуфинал',
      date: '21 октября 2025',
      duration: '30 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
    },
    {
      id: 8,
      title: 'Большой футбол. Выпуск 8: Второй полуфинал',
      date: '20 октября 2025',
      duration: '30 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
    },
    {
      id: 9,
      title: 'Большой футбол. Выпуск 9: Финал',
      date: '19 октября 2025',
      duration: '45 мин (матч 20 мин)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7e81838e-d007-466b-9e52-f48e4a049fd2.jpg',
      category: 'Реалити-шоу'
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
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                <Icon name="Calendar" size={16} className="mr-2" />
                СУББОТА 8 НОЯБРЯ 13:00
              </Badge>
            </div>
            <Card className="overflow-hidden bg-card border-border">
              <div className="aspect-video bg-black relative">
                {!isLiveStreaming ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="bg-orange-500/20 rounded-full p-6 inline-block mb-4">
                        <Icon name="Trophy" size={80} className="text-orange-500 mx-auto" />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Большой футбол: ФИНАЛ</h3>
                      <p className="text-xl text-muted-foreground mb-2">Суббота, 8 ноября 2025</p>
                      <p className="text-2xl font-bold text-primary mb-6">13:00 МСК</p>
                      <Button 
                        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={() => setIsLiveStreaming(true)}
                      >
                        <Icon name="Play" size={20} className="mr-2" />
                        Смотреть финал
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
                    <img
                      src="https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/68a4c642-ebca-49b8-8e54-c9677354e154.jpg"
                      alt="Прямой эфир - Большой футбол финал"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-3">
                      <img
                        src="https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/cfbeab5f-6dbf-4333-9543-336c22d16a47.jpg"
                        alt="Новые друзья ТВ"
                        className="h-12 rounded-lg bg-white/90 p-2 shadow-lg"
                      />
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center animate-pulse shadow-lg">
                        <Icon name="Video" size={16} className="mr-2" />
                        LIVE
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center space-x-2">
                        <Icon name="Camera" size={20} className="text-orange-500" />
                        <span className="text-sm font-medium">Камера 1 • Главный обзор</span>
                      </div>
                    </div>
                    <div className="absolute bottom-20 left-4 bg-black/70 text-white px-4 py-3 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center space-x-3">
                        <Icon name="Trophy" size={24} className="text-orange-500" />
                        <div>
                          <div className="text-xs text-gray-300">БОЛЬШОЙ ФУТБОЛ</div>
                          <div className="font-bold">ФИНАЛЬНАЯ ИГРА</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 space-x-2">
                      <Button 
                        variant="secondary" 
                        size="icon"
                        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                      >
                        <Icon name="Volume2" size={20} />
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="icon"
                        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsLiveStreaming(false)}
                      >
                        <Icon name="Pause" size={20} />
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="icon"
                        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                      >
                        <Icon name="Maximize" size={20} />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">Большой футбол: Финальная игра турнира</h3>
                  <Badge className="bg-orange-500">ФИНАЛ</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Грандиозный финал реалити-шоу! Две лучшие команды сразятся за главный трофей сезона. Не пропустите решающий матч турнира "Большой футбол" в прямом эфире.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground flex-wrap gap-2">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    Суббота, 8 ноября 2025
                  </span>
                  <span className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    13:00 МСК
                  </span>
                  <span className="flex items-center">
                    <Icon name="Timer" size={16} className="mr-1" />
                    45 минут (матч 20 мин)
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