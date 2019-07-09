module.exports = {
  sanitizeShops: shops => shops.map(shop => ({
    ...shop,
    paymentMethodsList: shop.paymentMethodsList.split(','),
    withLogistics: shop.withLogistics || false,
    logoUrl: `https://d1v73nxuzaqxgd.cloudfront.net/restaurants/${shop.logo}`,
  })),

  sanitizePaymentMethods: paymentMethods => paymentMethods.map(paymentMethod => ({
    value: paymentMethod.id,
    label: paymentMethod.descriptionES,
  })),

  sortableFields: [
    { label: 'Sin ordenar', value: null },
    { label: 'Ordenar por puntaje', value: 'ratingScore' },
    { label: 'Ordenar por tiempo de entrega', value: 'deliveryTimeMinMinutes' },
  ],
};
