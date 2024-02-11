

export const formatPrice = (price: number) => {
    return price.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
    });
};