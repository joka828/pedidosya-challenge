const { sanitizeShops, sanitizePaymentMethods, sortableFields } = require('./helpers');
const listData = require('../../../response');
const paymentMethodsConfig = require('../../../paymentMethods');

const shops = (req, res, next) => {
  const { shopName, paymentMethods, sortField } = req.query;

  let responseData = listData.data;
  const queryRegex = new RegExp(shopName || '', 'i');

  if (shopName || paymentMethods) {
    responseData = listData.data.reduce((collector, item) => {
      if (shopName && !queryRegex.test(item.name)) return collector;

      if (paymentMethods) {
        const hasPaymentMethods = paymentMethods.some(
          paymentMethod => !!item.paymentMethods.find(
            itemPaymentMethod => itemPaymentMethod.id === paymentMethod,
          ),
        );
        if (!hasPaymentMethods) return collector;
      }

      collector.push(item);
      return collector;
    }, []);
  }

  if (sortField) {
    if (sortField === 'ratingScore') {
      responseData.sort((itemA, itemB) => (
        parseFloat(itemB[sortField]) - parseFloat(itemA[sortField])
      ));
    } else if (sortField === 'deliveryTimeMinMinutes') {
      responseData.sort((itemA, itemB) => (
        parseFloat(itemA[sortField]) - parseFloat(itemB[sortField])
      ));
    }
  }

  res.send({
    shops: sanitizeShops(responseData),
  });
  next();
};

const filters = (req, res, next) => {
  res.send([
    {
      name: 'shopName',
      type: 'text',
    },
    {
      name: 'paymentMethods',
      type: 'checkbox',
      config: sanitizePaymentMethods(paymentMethodsConfig),
    },
    {
      name: 'sortField',
      type: 'radio',
      config: sortableFields,
      value: null,
    },
  ]);
  next();
};

module.exports = { shops, filters };
