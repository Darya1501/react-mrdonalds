export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = string => string.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })