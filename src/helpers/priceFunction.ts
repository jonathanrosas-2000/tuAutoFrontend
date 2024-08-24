

export const formatPrice = (price: number): string => {
    return price.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
    });
};

export const formateMielage = (mileage: string): string => {
    return Number(mileage).toLocaleString('es-MX') + ' KM';
}