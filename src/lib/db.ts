// Имитация базы данных для сохранения прогресса сбора средств
// В реальном приложении здесь должен быть код для работы с реальной базой данных

interface Fundraiser {
  id: string;
  name: string;
  description: string;
  goal: number;
  raised: number;
  imageUrl: string;
}

// Начальные данные для фандрайзеров (все с нулевым прогрессом)
let fundraisers: Fundraiser[] = [
  {
    id: "educational",
    name: "Educational Support",
    description: "Providing scholarships and educational materials to underprivileged children.",
    goal: 25000,
    raised: 0,
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2309&q=80"
  },
  {
    id: "healthcare",
    name: "Healthcare Access",
    description: "Bringing medical care and supplies to communities without adequate healthcare.",
    goal: 15000,
    raised: 0,
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80"
  },
  {
    id: "facility",
    name: "Facility Renovation",
    description: "Renovating community centers to create safe spaces for education and support.",
    goal: 50000,
    raised: 0,
    imageUrl: "https://images.unsplash.com/photo-1531956003775-1b2dae38d5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: "recreational",
    name: "Recreational Fund",
    description: "Support sports equipment, art supplies, and field trips to enrich children's lives through recreation and creativity.",
    goal: 10000,
    raised: 0,
    imageUrl: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
];

// Получить все фандрайзеры
export const getAllFundraisers = (): Fundraiser[] => {
  return fundraisers;
};

// Получить фандрайзер по ID
export const getFundraiserById = (id: string): Fundraiser | undefined => {
  return fundraisers.find(f => f.id === id);
};

// Обновить сумму собранных средств
export const updateFundraiserAmount = (id: string, amount: number): Fundraiser | undefined => {
  const index = fundraisers.findIndex(f => f.id === id);
  if (index !== -1) {
    // Обновляем сумму
    fundraisers[index].raised += amount;
    console.log(`Updated fundraiser ${id} progress to ${fundraisers[index].raised}`);
    return fundraisers[index];
  }
  return undefined;
};

// Сохранить все фандрайзеры (например, в localStorage для демо)
export const saveFundraisers = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('fundraisers', JSON.stringify(fundraisers));
  }
};

// Загрузить фандрайзеры (например, из localStorage для демо)
export const loadFundraisers = (): void => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('fundraisers');
    if (saved) {
      fundraisers = JSON.parse(saved);
    }
  }
};

// Инициализация - загружаем сохраненные данные при старте
if (typeof window !== 'undefined') {
  loadFundraisers();
} 