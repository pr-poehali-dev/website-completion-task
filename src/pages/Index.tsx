import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Category =
  | "home"
  | "interior"
  | "exterior"
  | "electronics"
  | "care"
  | "season";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState<Category>("home");

  const categories = [
    {
      id: "interior",
      name: "Интерьер",
      image:
        "https://cdn.poehali.dev/files/575d2c64-2cd3-4306-8b26-596d4cbe3bf4.jpg",
    },
    {
      id: "exterior",
      name: "Экстерьер",
      image:
        "https://cdn.poehali.dev/files/fb878725-90de-4529-b733-5cf735b4de74.jpg",
    },
    {
      id: "electronics",
      name: "Электроника",
      image:
        "https://cdn.poehali.dev/files/2adc1237-1c7e-49f9-9d33-c8a5eab0c0e5.jpg",
    },
    {
      id: "care",
      name: "Уход",
      image:
        "https://cdn.poehali.dev/files/67f34b9e-d140-4a73-87ac-5b1518de6bf4.jpeg",
    },
    {
      id: "season",
      name: "Сезонные",
      image:
        "https://cdn.poehali.dev/files/5ec7bc5c-dee4-4566-a228-b43f20bdbef2.jpg",
    },
  ];

  const products: Record<string, Product[]> = {
    interior: [
      {
        id: "1",
        name: "Автоковрики EVA",
        price: 2500,
        image:
          "https://cdn.poehali.dev/files/575d2c64-2cd3-4306-8b26-596d4cbe3bf4.jpg",
        alt: "Коврики",
      },
      {
        id: "2",
        name: "Чехлы на сиденья",
        price: 3200,
        image:
          "https://cdn.poehali.dev/files/0a7b93e6-8238-4c5b-8e2c-75606ec5a8f3.jpg",
        alt: "Чехлы",
      },
    ],
    exterior: [
      {
        id: "3",
        name: "Спойлер универсальный",
        price: 4500,
        image:
          "https://cdn.poehali.dev/files/fb878725-90de-4529-b733-5cf735b4de74.jpg",
        alt: "Спойлер",
      },
      {
        id: "4",
        name: "Дефлекторы окон",
        price: 1200,
        image:
          "https://cdn.poehali.dev/files/f9d56a14-4d0b-4f94-ba7a-6aea450bb018.jpg",
        alt: "Дефлекторы",
      },
    ],
    electronics: [
      {
        id: "5",
        name: "Видеорегистратор",
        price: 5000,
        image:
          "https://cdn.poehali.dev/files/2adc1237-1c7e-49f9-9d33-c8a5eab0c0e5.jpg",
        alt: "Видеорегистратор",
      },
    ],
    care: [
      {
        id: "6",
        name: "Полироль для кузова",
        price: 800,
        image:
          "https://cdn.poehali.dev/files/67f34b9e-d140-4a73-87ac-5b1518de6bf4.jpeg",
        alt: "Полироль",
      },
    ],
    season: [
      {
        id: "7",
        name: "Накидка с подогревом",
        price: 1800,
        image:
          "https://cdn.poehali.dev/files/5ec7bc5c-dee4-4566-a228-b43f20bdbef2.jpg",
        alt: "Накидка с подогревом",
      },
    ],
  };

  const renderHome = () => (
    <div className="space-y-8">
      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Добро пожаловать!</h2>
        <p className="text-lg">
          Улучшите комфорт и безопасность своего автомобиля
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Популярные категории
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setActiveSection(category.id as Category)}
            >
              <CardContent className="p-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <p className="text-center font-medium">{category.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProducts = (categoryKey: string, title: string) => (
    <div>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products[categoryKey]?.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-4">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-40 object-cover rounded-md"
              />
            </CardHeader>
            <CardContent className="px-4 pb-2">
              <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
              <p className="text-2xl font-bold text-red-600">
                {product.price.toLocaleString()} ₽
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Купить
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return renderHome();
      case "interior":
        return renderProducts("interior", 'Товары категории "Интерьер"');
      case "exterior":
        return renderProducts("exterior", 'Товары категории "Экстерьер"');
      case "electronics":
        return renderProducts("electronics", 'Товары категории "Электроника"');
      case "care":
        return renderProducts("care", 'Товары категории "Уход и обслуживание"');
      case "season":
        return renderProducts("season", "Сезонные товары");
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-sky-200">
      {/* Header */}
      <header className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center mb-4">
            Интернет-магазин АвтоАксессуары
          </h1>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              {[
                { id: "home", name: "Главная" },
                { id: "interior", name: "Интерьер" },
                { id: "exterior", name: "Экстерьер" },
                { id: "electronics", name: "Электроника" },
                { id: "care", name: "Уход" },
                { id: "season", name: "Сезонные" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id as Category)}
                    className={`hover:underline transition-colors ${
                      activeSection === item.id ? "text-blue-200" : "text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4 mt-auto">
        <p>&copy; 2025 АвтоАксессуары</p>
      </footer>
    </div>
  );
};

export default Index;
