import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLiveStreaming, setIsLiveStreaming] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showAwardCeremony, setShowAwardCeremony] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);

  const episodes = [
    {
      id: 0,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 1: Баку',
      date: '27 октября 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/0a358a16-097c-4755-a501-af08a19c9e90.jpg',
      category: 'Travel Show',
      description: 'Ведущий Максим Зуев отправляется в столицу Азербайджана - город Баку. Знакомство с современной архитектурой, старым городом и культурой страны огней. Воскресенье, 10:00.'
    },
    {
      id: 100,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 2: Тюмень',
      date: '3 ноября 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/601f6156-b7b2-49cf-b30b-49fefe54e331.jpg',
      category: 'Travel Show',
      description: 'Максим Зуев исследует знаменитый город России - Тюмень. Прогулка по набережной Туры, современные мосты и уникальная атмосфера сибирского города. Воскресенье, 10:00.'
    },
    {
      id: 101,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 3: Озеро Байкал',
      date: '10 ноября 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/9123d845-81a7-40df-b15d-ca1937c92df4.jpg',
      category: 'Travel Show',
      description: 'Путешествие к самому глубокому озеру планеты - Байкалу. Кристально чистый лед, величественные горы и невероятные зимние пейзажи. Воскресенье, 10:00.'
    },
    {
      id: 102,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 4: Лас-Вегас',
      date: '17 ноября 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/82bb1a5e-a311-4332-8b01-ed32827da38a.jpg',
      category: 'Travel Show',
      description: 'Город огней и развлечений - Лас-Вегас. Неоновые огни стрипа, знаменитые казино, фонтаны Белладжио и невероятная атмосфера города в пустыне. Воскресенье, 10:00.'
    },
    {
      id: 103,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 5: Дубай',
      date: '24 ноября 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/410a87cb-6954-4479-b810-6499030c2a66.jpg',
      category: 'Travel Show',
      description: 'Город будущего - Дубай. Бурдж-Халифа, роскошные небоскребы, искусственные острова и закат над пустыней. Погружение в мир роскоши и инноваций. Воскресенье, 10:00.'
    },
    {
      id: 104,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 6: Бангкок',
      date: '1 декабря 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/4c30b71f-dd1f-451f-a458-00e7e3bdcbc2.jpg',
      category: 'Travel Show',
      description: 'Столица Таиланда - Бангкок. Золотые храмы, река Чао Прайя, традиционные лодки и контраст древней культуры с современностью. Воскресенье, 10:00.'
    },
    {
      id: 105,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 7: Сочи',
      date: '8 декабря 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/4a2e3aba-979f-4c8b-a05c-8d26d98d7bad.jpg',
      category: 'Travel Show',
      description: 'Курортная столица России - Сочи. Черное море, пальмовая набережная, Олимпийский парк и горы на горизонте. Летний рай на берегу моря. Воскресенье, 10:00.'
    },
    {
      id: 106,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 8: Москва',
      date: '15 декабря 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/9b5db122-421c-40b8-a0e2-3b21870b89b9.jpg',
      category: 'Travel Show',
      description: 'Сердце России - Москва. Красная площадь, собор Василия Блаженного, Кремль и историческая архитектура. Погружение в столичную жизнь и культуру. Воскресенье, 10:00.'
    },
    {
      id: 107,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 9: Пхукет',
      date: '22 декабря 2025',
      duration: '45 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/316c17bd-f40f-49b3-baad-2dba188770bf.jpg',
      category: 'Travel Show',
      description: 'Тропический рай - остров Пхукет. Бирюзовая вода, белый песок, известняковые скалы и острова Пи-Пи. Идеальное место для отдыха в Таиланде. Воскресенье, 10:00.'
    },
    {
      id: 108,
      title: 'Travel Show Поехали. Сезон 4, Эпизод 10: Екатеринбург (ФИНАЛ)',
      date: '29 декабря 2025',
      duration: '55 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/a76f2799-3517-49c0-a077-587a87147381.jpg',
      category: 'Travel Show',
      description: 'Финальный выпуск сезона! Екатеринбург - столица Урала. Храм на Крови, современный деловой центр, река Исеть и Уральские горы. Завершение невероятного путешествия по миру. Воскресенье, 10:00.'
    },
    {
      id: 200,
      title: 'ФИНАЛ Талант-Шоу Сезон 3 - ПРЯМОЙ ЭФИР',
      date: '2 ноября 2025',
      duration: '2 часа 40 мин (20:20-23:00)',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/8b2efea9-a31e-48df-b870-ee784eb2c3b2.jpg',
      category: 'Талант-шоу',
      description: '🔴 ПРЯМОЙ ЭФИР из Государственного Кремлёвского Дворца! Грандиозный финал 3 сезона! Голосуйте ПРЯМО СЕЙЧАС за участников! Голосование закрывается сегодня в 22:00. Победитель определяется зрительским голосованием и голосами зала. Воскресенье, 20:20 на канале НОВЫЕ ДРУЗЬЯ ТВ.'
    },
    {
      id: 1,
      title: 'Завтрак с Максимом Зуевым: Французские блинчики',
      date: '1 ноября 2025',
      duration: '2 часа 1 мин',
      image: 'https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/6643130c-d232-4352-a3ae-eb579c0ae313.jpg',
      category: 'Кулинарное шоу',
      description: 'Ведущий Максим Зуев готовит французские блинчики со сливочным маслом и красной икрой, а также с кленовым соусом. Суббота, 10:00-12:01.'
    },
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
      image: 'https://cdn.poehali.dev/files/adebf983-eabd-4647-9dce-6a7d08c84498.jpg',
      category: 'Реалити-шоу'
    }
  ];

  const schedule = [
    { time: '10:00', program: 'Завтрак с Максимом Зуевым: Французский завтрак', duration: '2 часа 1 мин (до 12:01)', highlight: true, isPremiere: true },
    { time: '12:30', program: 'Документальный фильм', duration: '1 час' },
    { time: '13:30', program: 'Новости', duration: '30 мин' },
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

          <div className="mt-12">
            <div className="bg-gradient-to-r from-red-600/30 to-purple-600/30 rounded-2xl overflow-hidden border-2 border-red-500 shadow-2xl animate-pulse-slow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto">
                  <img
                    src="https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/8b2efea9-a31e-48df-b870-ee784eb2c3b2.jpg"
                    alt="Финал Талант-Шоу"
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white text-xl px-6 py-3 animate-pulse">
                    🔴 ПРЯМОЙ ЭФИР
                  </Badge>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-red-950/50 to-purple-950/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Trophy" size={40} className="text-yellow-500" />
                    <Badge className="text-sm bg-yellow-500 text-black font-bold">ГРАНДИОЗНЫЙ ФИНАЛ</Badge>
                  </div>
                  <h3 className="text-4xl font-bold mb-4 text-white">ФИНАЛ Талант-Шоу Сезон 3</h3>
                  <p className="text-xl text-gray-200 mb-6">
                    Прямая трансляция из Государственного Кремлёвского Дворца! Определим победителя вместе!
                  </p>
                  <div className="bg-black/40 rounded-xl p-6 mb-6 border border-red-500/50">
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-300 mb-2">До начала финала осталось:</p>
                      <div className="text-6xl font-bold text-red-500 mb-1">4 дня</div>
                      <div className="text-3xl font-semibold text-yellow-400">120 часов</div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-lg text-white">
                      <Icon name="Calendar" size={20} className="text-red-500" />
                      <span className="font-semibold">Воскресенье, 2 ноября 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg text-white">
                      <Icon name="Clock" size={20} className="text-red-500" />
                      <span className="font-semibold">20:20-23:00 МСК (2 часа 40 мин)</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg text-white">
                      <Icon name="MapPin" size={20} className="text-red-500" />
                      <span>Кремлёвский Дворец</span>
                    </div>
                  </div>
                  <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4 mb-6">
                    <p className="text-yellow-200 text-sm font-semibold flex items-center gap-2">
                      <Icon name="AlertCircle" size={18} />
                      Голосование закрывается сегодня в 22:00! Голосуйте СЕЙЧАС!
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white text-xl py-6 animate-pulse"
                    onClick={() => scrollToSection('live')}
                  >
                    <Icon name="Vote" size={24} className="mr-2" />
                    Голосовать за участника
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl overflow-hidden border-2 border-orange-500/50 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto">
                  <img
                    src="https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/0f78df40-13ee-485c-aa81-cab7ca72057e.jpg"
                    alt="Завтрак с Максимом Зуевым"
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white text-lg px-4 py-2 animate-pulse">
                    ПРЕМЬЕРА
                  </Badge>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Coffee" size={32} className="text-orange-500" />
                    <Badge variant="outline" className="text-sm">Новое шоу</Badge>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Завтрак с Максимом Зуевым</h3>
                  <p className="text-xl text-muted-foreground mb-6">
                    Премьерный выпуск! Максим Зуев готовит французские блинчики со сливочным маслом, красной икрой и кленовым соусом.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-lg">
                      <Icon name="Calendar" size={20} className="text-orange-500" />
                      <span className="font-semibold">Суббота, 1 ноября 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                      <Icon name="Clock" size={20} className="text-orange-500" />
                      <span className="font-semibold">10:00 МСК</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                      <Icon name="ChefHat" size={20} className="text-orange-500" />
                      <span>Ведущий: Максим Зуев</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg"
                    onClick={() => scrollToSection('live')}
                  >
                    <Icon name="Play" size={24} className="mr-2" />
                    Смотреть премьеру
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
                onClick={() => setSelectedEpisode(episode.id)}
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

      {selectedEpisode !== null && (() => {
        const episode = episodes.find(ep => ep.id === selectedEpisode);
        if (!episode) return null;
        return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-6xl bg-card rounded-xl overflow-hidden">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedEpisode(null)}
              >
                <Icon name="X" size={24} />
              </Button>
              <div className="aspect-video bg-black relative">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary rounded-full p-8 cursor-pointer hover:scale-110 transition-transform">
                    <Icon name="Play" size={64} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                    {episode.category}
                  </Badge>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{episode.title}</h2>
                <div className="flex items-center space-x-6 text-muted-foreground mb-6">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    {episode.date}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Clock" size={20} className="mr-2" />
                    {episode.duration}
                  </span>
                </div>
                {episode.description && (
                  <p className="text-lg text-muted-foreground mb-6">
                    {episode.description}
                  </p>
                )}
                <div className="flex space-x-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Icon name="Play" size={20} className="mr-2" />
                    Смотреть выпуск
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Share2" size={20} className="mr-2" />
                    Поделиться
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      })()}

      <section id="schedule" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Расписание передач</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-md transition-shadow animate-fade-in bg-card ${
                  item.highlight ? 'border-orange-500 border-2' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`${item.highlight ? 'bg-orange-500/20' : 'bg-primary/10'} rounded-lg p-3`}>
                      <Icon 
                        name={item.highlight ? 'Star' : 'Clock'} 
                        size={24} 
                        className={item.highlight ? 'text-orange-500' : 'text-primary'} 
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{item.program}</h3>
                        {item.isPremiere && (
                          <Badge className="bg-red-500 text-white text-xs">ПРЕМЬЕРА</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.duration}</p>
                      {item.isPremiere && (
                        <p className="text-xs text-orange-500 font-medium mt-1">Каждую субботу в 10:00</p>
                      )}
                    </div>
                  </div>
                  <div className={`text-2xl font-bold ${item.highlight ? 'text-orange-500' : 'text-primary'}`}>
                    {item.time}
                  </div>
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
                СУББОТА 1 НОЯБРЯ 10:00
              </Badge>
            </div>
            <Card className="overflow-hidden bg-card border-border">
              <div className="aspect-video bg-black relative">
                {showIntro ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-600 flex items-center justify-center animate-fade-in">
                    <div className="text-center">
                      <img
                        src="https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/8261c3f6-94be-4ab9-b603-26124a1dcf27.jpg"
                        alt="Заставка - Завтрак с Максимом Зуевым"
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div className="relative z-10 animate-pulse">
                        <h2 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">Завтрак с Максимом Зуевым</h2>
                        <p className="text-2xl text-white drop-shadow-lg">Ведущий: Максим Зуев, 9 лет</p>
                        <div className="mt-8">
                          <Icon name="Coffee" size={80} className="text-white mx-auto drop-shadow-xl animate-bounce" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : !isLiveStreaming ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="bg-orange-500/20 rounded-full p-6 inline-block mb-4">
                        <Icon name="Coffee" size={80} className="text-orange-500 mx-auto" />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Завтрак с Максимом Зуевым</h3>
                      <p className="text-xl text-muted-foreground mb-2">Суббота, 1 ноября 2025</p>
                      <p className="text-2xl font-bold text-primary mb-6">10:00 МСК</p>
                      <Badge className="bg-red-500 text-white mb-4">ПРЕМЬЕРА</Badge>
                      <Button 
                        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={() => {
                          setShowIntro(true);
                          setTimeout(() => {
                            setShowIntro(false);
                            setIsLiveStreaming(true);
                          }, 5000);
                        }}
                      >
                        <Icon name="Play" size={20} className="mr-2" />
                        Смотреть премьеру
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
                    <img
                      src="https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/7a5b6cbe-0fc3-4cb9-941c-d3fdfbccb3e9.jpg"
                      alt="Прямой эфир - Завтрак с Максимом"
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
                        <span className="text-sm font-medium">Камера 1 • Кухня</span>
                      </div>
                    </div>
                    <div className="absolute bottom-20 left-4 right-4">
                      <div className="bg-black/80 text-white px-6 py-4 rounded-lg backdrop-blur-sm border-2 border-orange-500/50 max-w-2xl">
                        <div className="flex items-center space-x-4">
                          <Icon name="Coffee" size={32} className="text-orange-500" />
                          <div className="flex-1">
                            <div className="text-xs text-gray-300 mb-1">ЗАВТРАК С МАКСИМОМ ЗУЕВЫМ • ПРЕМЬЕРА</div>
                            <div className="font-bold text-lg mb-2">Французские блинчики</div>
                            <div className="text-sm text-gray-300">
                              🥞 Сейчас на экране: Максим готовит тесто для блинчиков
                            </div>
                          </div>
                          <div className="text-center bg-orange-500/20 px-4 py-2 rounded">
                            <div className="text-xs text-gray-300">ОКОНЧАНИЕ</div>
                            <div className="text-xl font-bold text-orange-500">12:01</div>
                          </div>
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
                        className="bg-orange-500/80 hover:bg-orange-600 backdrop-blur-sm text-white"
                        onClick={() => setShowCredits(true)}
                      >
                        <Icon name="Film" size={20} className="mr-2" />
                        Титры
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="icon"
                        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                      >
                        <Icon name="Maximize" size={20} />
                      </Button>
                    </div>
                    {showCredits && (
                      <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden z-10">
                        <div className="absolute top-4 right-4 z-20">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                            onClick={() => setShowCredits(false)}
                          >
                            <Icon name="X" size={24} />
                          </Button>
                        </div>
                        <div className="w-full max-w-3xl px-8 animate-credits-scroll">
                          <div className="space-y-8 text-center text-white">
                            <div className="mb-12">
                              <Icon name="Coffee" size={80} className="text-orange-500 mx-auto mb-4" />
                              <h2 className="text-5xl font-bold mb-2">ЗАВТРАК С МАКСИМОМ ЗУЕВЫМ</h2>
                              <p className="text-2xl text-orange-500">Премьера • Французские блинчики</p>
                            </div>

                            <div className="space-y-2 mb-8">
                              <p className="text-xl text-gray-400">Премьера</p>
                              <p className="text-2xl font-bold">1 ноября 2025 • Суббота</p>
                              <p className="text-xl text-gray-400">Время выхода</p>
                              <p className="text-2xl font-bold">10:00 - 12:01 МСК</p>
                            </div>

                            <div className="border-t border-gray-700 pt-8 space-y-6">
                              <div>
                                <p className="text-gray-400 text-sm mb-2">ВЕДУЩИЙ</p>
                                <p className="text-3xl font-bold text-orange-500">Максим Зуев, 9 лет</p>
                              </div>

                              <div>
                                <p className="text-gray-400 text-sm mb-2">РЕЖИССЁР</p>
                                <p className="text-xl font-semibold">Анна Кулинарова</p>
                              </div>

                              <div>
                                <p className="text-gray-400 text-sm mb-2">ПРОДЮСЕР</p>
                                <p className="text-xl font-semibold">Сергей Вкусов</p>
                              </div>

                              <div>
                                <p className="text-gray-400 text-sm mb-2">ОПЕРАТОР</p>
                                <p className="text-lg">Дмитрий Камеров</p>
                              </div>

                              <div>
                                <p className="text-gray-400 text-sm mb-2">ЗВУКОРЕЖИССЁР</p>
                                <p className="text-lg">Елена Звукова</p>
                              </div>

                              <div>
                                <p className="text-gray-400 text-sm mb-2">МОНТАЖ</p>
                                <p className="text-lg">Павел Монтажников</p>
                              </div>

                              <div>
                                <p className="text-gray-400 text-sm mb-2">ХУДОЖНИК-ДЕКОРАТОР</p>
                                <p className="text-lg">Ольга Декорова</p>
                              </div>

                              <div>
                                <p className="text-gray-400 text-sm mb-2">КОНСУЛЬТАНТ ПО КУЛИНАРИИ</p>
                                <p className="text-lg">Виктор Шеф-Поваров</p>
                              </div>
                            </div>

                            <div className="border-t border-gray-700 pt-8 mt-8">
                              <div className="flex items-center justify-center space-x-3 mb-6">
                                <Icon name="Tv" size={48} className="text-primary" />
                                <div className="text-left">
                                  <p className="text-3xl font-bold">Новые друзья ТВ</p>
                                  <p className="text-gray-400">Кулинарное шоу каждую субботу</p>
                                </div>
                              </div>
                              
                              <div className="border-t border-gray-700 pt-6 mt-6 space-y-3">
                                <div className="flex items-center justify-center mb-4">
                                  <Icon name="Music" size={40} className="text-orange-500 animate-pulse" />
                                </div>
                                <p className="text-sm text-gray-400 italic">♫ Музыкальная тема программы ♫</p>
                                <p className="text-lg text-gray-300">Композитор: Игорь Музыкантов</p>
                                
                                <div className="border-t border-gray-700 pt-6 mt-6 space-y-3">
                                  <p className="text-lg text-gray-300">Производство:</p>
                                  <p className="text-2xl font-bold text-orange-500">ООО «Почтальон Медиа»</p>
                                  <p className="text-lg text-gray-300 mt-4">По заказу:</p>
                                  <p className="text-2xl font-bold">Телеканал «Новые друзья ТВ»</p>
                                  <p className="text-sm text-gray-500 mt-8">© 2025 ООО «Почтальон Медиа». Все права защищены.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showAwardCeremony && (
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black flex items-center justify-center overflow-y-auto z-10 p-8">
                        <div className="absolute inset-0 z-0">
                          <img 
                            src="https://cdn.poehali.dev/projects/ceb65ec6-9cc6-44cc-8baf-1cef258052ca/files/bf9b01f4-419c-4367-9c3a-f49834a406db.jpg"
                            alt="Церемония награждения"
                            className="w-full h-full object-cover opacity-20"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-blue-900/80 to-black/90"></div>
                        </div>
                        <div className="absolute top-4 right-4 z-20">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                            onClick={() => setShowAwardCeremony(false)}
                          >
                            <Icon name="X" size={24} />
                          </Button>
                        </div>
                        <div className="w-full max-w-5xl animate-fade-in relative z-10">
                          <div className="text-center text-white mb-12">
                            <div className="mb-6">
                              <Icon name="Sparkles" size={60} className="text-yellow-400 mx-auto mb-4 animate-pulse" />
                              <h2 className="text-5xl font-bold mb-2">ТОРЖЕСТВЕННАЯ ЦЕРЕМОНИЯ</h2>
                              <p className="text-2xl text-yellow-400">Награждение команд турнира "Большой футбол"</p>
                              <p className="text-lg text-gray-300 mt-4">Финальный счёт: <span className="font-bold text-orange-400">6:2</span></p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <Card className="bg-gradient-to-br from-orange-900/40 to-orange-700/20 border-2 border-orange-600/50 backdrop-blur-sm">
                              <CardContent className="p-6 text-center text-white">
                                <div className="text-6xl mb-3">🥉</div>
                                <p className="text-orange-400 text-sm font-semibold mb-2">3 МЕСТО</p>
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                  <h3 className="text-2xl font-bold">Зелёные Квадратики</h3>
                                </div>
                                <p className="text-sm text-gray-300">Бронзовые призёры турнира</p>
                              </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-gray-700/40 to-gray-600/20 border-2 border-gray-500/50 backdrop-blur-sm">
                              <CardContent className="p-6 text-center text-white">
                                <div className="text-4xl mb-3">4️⃣</div>
                                <p className="text-gray-400 text-sm font-semibold mb-2">4 МЕСТО</p>
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                  <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                                  <h3 className="text-xl font-bold">Персиковые Знаки</h3>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-gray-600/40 to-gray-500/20 border-2 border-gray-400/50 backdrop-blur-sm">
                              <CardContent className="p-6 text-center text-white">
                                <div className="text-4xl mb-3">5️⃣</div>
                                <p className="text-gray-400 text-sm font-semibold mb-2">5 МЕСТО</p>
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                  <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                                  <h3 className="text-xl font-bold">Рыжие Знаки</h3>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-gray-500/40 to-gray-400/20 border-2 border-gray-300/50 backdrop-blur-sm">
                              <CardContent className="p-6 text-center text-white">
                                <div className="text-4xl mb-3">6️⃣</div>
                                <p className="text-gray-400 text-sm font-semibold mb-2">6 МЕСТО</p>
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                  <h3 className="text-xl font-bold">Огненные Мысли</h3>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <Card className="bg-gradient-to-br from-gray-400/40 to-gray-300/20 border-2 border-gray-300/50 backdrop-blur-sm mb-6">
                            <CardContent className="p-8 text-center text-white">
                              <div className="text-6xl mb-4">🥈</div>
                              <p className="text-gray-300 text-lg font-semibold mb-3">2 МЕСТО • СЕРЕБРЯНЫЕ ПРИЗЁРЫ</p>
                              <div className="flex items-center justify-center space-x-2 mb-3">
                                <div className="w-5 h-5 rounded-full bg-orange-600"></div>
                                <h3 className="text-3xl font-bold">Рыжие Крутышки</h3>
                              </div>
                              <p className="text-gray-300">Достойные соперники в финальной битве</p>
                            </CardContent>
                          </Card>

                          <Card className="bg-gradient-to-br from-yellow-500/50 to-yellow-600/30 border-4 border-yellow-400 backdrop-blur-sm animate-scale-in shadow-2xl shadow-yellow-500/50">
                            <CardContent className="p-10 text-center text-white">
                              <div className="mb-4">
                                <Icon name="Trophy" size={100} className="text-yellow-300 mx-auto animate-pulse" />
                              </div>
                              <div className="text-8xl mb-4">🏆</div>
                              <p className="text-yellow-300 text-2xl font-bold mb-4">🎉 ЧЕМПИОНЫ ТУРНИРА 🎉</p>
                              <p className="text-yellow-200 text-lg font-semibold mb-4">1 МЕСТО • ОБЛАДАТЕЛИ КУБКА БОЛЬШОГО ФУТБОЛА</p>
                              <div className="flex items-center justify-center space-x-3 mb-4">
                                <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                                <h3 className="text-5xl font-bold">Малиновые Цветочки</h3>
                              </div>
                              <p className="text-xl text-yellow-100 mb-6">Триумфаторы первого сезона!</p>
                              <div className="flex items-center justify-center space-x-2 text-sm text-yellow-200">
                                <Icon name="Star" size={20} className="text-yellow-300" />
                                <span>Лучшая команда сезона</span>
                                <Icon name="Star" size={20} className="text-yellow-300" />
                              </div>
                            </CardContent>
                          </Card>

                          <div className="text-center mt-8 text-white">
                            <p className="text-lg mb-2">Поздравляем всех участников турнира!</p>
                            <p className="text-gray-400">Большой футбол • Сезон 1 • Новые друзья ТВ</p>
                            <Button
                              className="mt-6 bg-orange-500 hover:bg-orange-600"
                              onClick={() => {
                                setShowAwardCeremony(false);
                                setShowCredits(true);
                              }}
                            >
                              <Icon name="Film" size={20} className="mr-2" />
                              Смотреть титры
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">Завтрак с Максимом Зуевым: Французские блинчики</h3>
                  <Badge className="bg-red-500">ПРЕМЬЕРА</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Ведущий Максим Зуев готовит французские блинчики со сливочным маслом и красной икрой, а также с кленовым соусом. Премьерный выпуск нового кулинарного шоу!
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground flex-wrap gap-2">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    Суббота, 1 ноября 2025
                  </span>
                  <span className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    10:00 МСК
                  </span>
                  <span className="flex items-center">
                    <Icon name="Timer" size={16} className="mr-1" />
                    2 часа 1 мин (до 12:01)
                  </span>
                  <span className="flex items-center">
                    <Icon name="ChefHat" size={16} className="mr-1" />
                    Максим Зуев
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