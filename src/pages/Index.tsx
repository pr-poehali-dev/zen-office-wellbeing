import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const offerDocumentUrl = '/offer-agreement.pdf';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: 'Hand',
      title: 'Корпоративный массаж',
      description: 'Профессиональный массаж прямо в офисе. Снимаем напряжение и повышаем продуктивность сотрудников.',
      benefits: ['Снятие стресса', 'Улучшение кровообращения', 'Повышение концентрации'],
      image: 'https://cdn.poehali.dev/projects/49bc154a-8b05-4d5a-8ffe-2b909da8a9b0/files/7905a7be-8dcc-47a6-825c-2a76144fa9c3.jpg'
    },
    {
      icon: 'Sparkles',
      title: 'Йога и медитация',
      description: 'Групповые занятия йогой для баланса тела и ума. Создаём пространство для внутренней гармонии.',
      benefits: ['Гибкость тела', 'Ясность ума', 'Эмоциональный баланс'],
      image: 'https://cdn.poehali.dev/projects/49bc154a-8b05-4d5a-8ffe-2b909da8a9b0/files/2383b124-e246-43d6-b6dc-faf6451fdb84.jpg'
    },
    {
      icon: 'Dumbbell',
      title: 'Пилатес и функциональные тренировки',
      description: 'Укрепление мышц и улучшение осанки. Эффективные тренировки для здоровой спины и энергии.',
      benefits: ['Укрепление мышц', 'Правильная осанка', 'Заряд энергии'],
      image: 'https://cdn.poehali.dev/projects/49bc154a-8b05-4d5a-8ffe-2b909da8a9b0/files/69d53068-643a-41a7-9a8e-39d9cd9f025e.jpg'
    }
  ];

  const pricingPlans = [
    {
      name: 'Start',
      price: 'от 64 000 ₽',
      period: 'в месяц',
      features: [
        '4 выезда специалиста по уходу за телом в месяц',
        'Выезд с занятостью специалиста от 4х часов',
        'Гибкий график',
        'Персональный менеджер'
      ],
      highlight: false
    },
    {
      name: 'Balance',
      price: 'от 88 000 ₽',
      period: 'в месяц',
      features: [
        '4 выезда специалиста по уходу за телом в месяц',
        'Выезд специалиста с занятостью от 4-х часов',
        '4 выезда тренера в месяц',
        'До 10 сотрудников на групповой тренировке',
        'Персональный менеджер'
      ],
      highlight: false
    },
    {
      name: 'Balance+',
      price: 'от 156 000 ₽',
      period: 'в месяц',
      features: [
        '8 выездов специалиста по уходу за телом в месяц',
        'Выезд специалиста с занятостью от 4-х часов',
        '4 выезда тренера в месяц',
        'До 15 человек на групповой тренировке',
        'Персональный менеджер'
      ],
      highlight: true
    },
    {
      name: 'Premium',
      price: 'от 192 000 ₽',
      period: 'в месяц',
      features: [
        '8 выездов специалиста по уходу за телом в месяц',
        'Выезд специалиста с занятостью от 4-х часов',
        '8 выездов тренера в месяц',
        'Неограниченное количество сотрудников на групповых тренировках',
        'Персональный менеджер',
        'Приоритетный статус для выезда специалистов'
      ],
      highlight: false
    }
  ];

  const faqs = [
    {
      question: 'Как быстро запустить программу well-being в компании?',
      answer: 'После согласования деталей мы запускаем программу в течение 3-5 рабочих дней. Первая встреча включает знакомство с командой, оценку потребностей и составление индивидуального графика.'
    },
    {
      question: 'Какое оборудование нужно для занятий?',
      answer: 'Мы привозим всё необходимое оборудование: массажные кресла, коврики для йоги, инвентарь для тренировок. От вас требуется только помещение площадью от 20 кв.м с хорошей вентиляцией.'
    },
    {
      question: 'Можно ли попробовать услуги перед оплатой?',
      answer: 'Да, мы предлагаем бесплатное пробное занятие для вашей команды. Это позволит оценить качество услуг и понять, подходит ли формат вашим сотрудникам.'
    },
    {
      question: 'Как происходит оплата — полная или частичная от компании?',
      answer: 'Мы предлагаем гибкие схемы оплаты: полная оплата компанией, частичная оплата (например, 70/30 или 50/50), или добровольное участие сотрудников. Выбирайте удобный для вас формат.'
    },
    {
      question: 'Сколько времени занимает один сеанс?',
      answer: 'Массаж: 30 или 60 минут для каждого сотрудника. Групповые занятия: 1 час, включая 10 минут на подготовку. Мы подстраиваемся под ваш рабочий график, чтобы минимально влиять на рабочий процесс.'
    },
    {
      question: 'Есть ли у ваших специалистов сертификаты?',
      answer: 'Все наши специалисты имеют профильное образование, сертификаты государственного образца и опыт работы от 5+ лет. Мы регулярно проводим повышение квалификации команды.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group text-[#65e887]">
              <div className="relative">
                <Icon name="Sparkles" className="text-secondary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" size={32} />
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h1 className="text-2xl tracking-tight bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text bg-[length:200%_auto] animate-gradient font-light text-[#000000]">
                ОфисДзен
              </h1>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors">О сервисе</a>
              <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">Услуги</a>
              <a href="#pricing" className="text-sm font-medium hover:text-secondary transition-colors">Цены</a>
              <a href="#faq" className="text-sm font-medium hover:text-secondary transition-colors">Вопросы</a>
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <a href="#contact">Оставить заявку</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Забота о здоровье
                <span className="block text-gray-300">вашей команды</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Корпоративная система well-being: массаж в офисе, йога, пилатес и функциональные тренировки. 
                Создаём культуру заботы о сотрудниках.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg" asChild>
                  <a href="#contact">Попробовать бесплатно</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#services">Узнать больше</a>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/49bc154a-8b05-4d5a-8ffe-2b909da8a9b0/files/e13bfff1-3ffc-4166-a759-4328b2f45174.jpg" 
                alt="Wellness" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О сервисе</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ОфисДзен — это комплексная система заботы о физическом и ментальном здоровье сотрудников. 
              Мы создаём пространство для восстановления энергии прямо в вашем офисе.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Target" className="text-secondary mb-4" size={40} />
                <CardTitle>Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Создавать здоровую рабочую среду, где сотрудники чувствуют заботу компании и раскрывают свой потенциал.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Award" className="text-secondary mb-4" size={40} />
                <CardTitle>Опытные специалисты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работаем со специалистами и тренерами со стажем работы от 5+ лет.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Heart" className="text-secondary mb-4" size={40} />
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Разрабатываем программы с учётом специфики вашего бизнеса и потребностей команды.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр программ для физического и эмоционального благополучия команды
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Icon name={service.icon} className="absolute bottom-4 left-4 text-white" size={40} />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-secondary" size={20} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Тарифы</h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий пакет для вашей компании. Оплата полная или частичная в виде скидки для сотрудников от 50% до 100%.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlight ? 'border-secondary border-4 shadow-2xl scale-105' : 'border-2'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-300">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" className="text-secondary mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-8 ${plan.highlight ? 'bg-secondary hover:bg-secondary/90' : ''}`}
                    variant={plan.highlight ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="#contact">Выбрать тариф</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-base">
              Не нашли подходящий тариф? <a href="#contact" className="hover:underline px-0 py-0 rounded-none text-[#000000] font-medium">Оставьте заявку</a> для составления индивидуального пакета услуг!
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на частые вопросы о программах well-being и процессе подключения
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-xl px-6 bg-white">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Оставьте заявку</CardTitle>
              <CardDescription className="text-base">
                Мы свяжемся с вами в течение 24 часов и предложим бесплатное пробное занятие
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Петров"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Компания</label>
                    <Input 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="ООО Компания"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="info@company.ru"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о ваших потребностях и количестве сотрудников"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <h3 className="text-xl font-bold">ОфисДзен</h3>
              </div>
              <p className="text-sm opacity-80">
                Корпоративная система well-being для заботы о здоровье вашей команды
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Корпоративный массаж</li>
                <li>Йога и медитация</li>
                <li>Пилатес</li>
                <li>Функциональные тренировки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:opacity-100">О нас</a></li>
                <li><a href="#pricing" className="hover:opacity-100">Тарифы</a></li>
                <li><a href="#faq" className="hover:opacity-100">FAQ</a></li>
                <li><a href={offerDocumentUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Договор оферты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:officedzen@mail.ru" className="hover:opacity-100">officedzen@mail.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79095900078" className="hover:opacity-100">+7 909 5-9000-78</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  <a href="https://t.me/officedzen" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Telegram</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Санкт-Петербург, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 ОфисДзен. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}