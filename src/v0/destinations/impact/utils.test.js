const { populateProductProperties } = require('./util');
// Generated by CodiumAI

describe('populateProductProperties', () => {
  // Given a valid productsMapping and properties, it should return product properties with default mappings and configured mappings from RudderStack dashboard
  it('should return product properties with default and configured mappings', () => {
    // Arrange
    const productsMapping = [
      { to: 'ItemBrand', from: 'Brand' },
      { to: 'ItemCategory', from: 'Category' },
      { to: 'ItemName', from: 'Name' },
      { to: 'ItemPrice', from: 'Price' },
      { to: 'ItemPromoCode', from: 'PromoCode' },
      { to: 'ItemQuantity', from: 'Quantity' },
      { to: 'ItemSku', from: 'Sku' },
      { to: 'dummyRHS', from: 'dummyLHS' },
    ];
    const properties = {
      products: [
        {
          Brand: 'Brand1',
          Category: 'Category1',
          Name: 'Name1',
          Price: 10,
          PromoCode: 'PromoCode1',
          Quantity: 1,
          Sku: 'Sku1',
          dummyLHS: 'DummyValue',
        },
        {
          Brand: 'Brand2',
          Category: 'Category2',
          Name: 'Name2',
          Price: 20,
          PromoCode: 'PromoCode2',
          Quantity: 2,
        },
      ],
      brand: 'Brand3',
      category: 'Category3',
      name: 'Name3',
      price: 30,
      coupon: 'PromoCode3',
      quantity: 3,
      sku: 'Sku3',
    };

    // Act
    const result = populateProductProperties(productsMapping, properties);

    // Assert
    expect(result).toEqual({
      ItemBrand1: 'Brand1',
      ItemCategory1: 'Category1',
      ItemName1: 'Name1',
      ItemPrice1: 10,
      ItemPromoCode1: 'PromoCode1',
      ItemQuantity1: 1,
      ItemSku1: 'Sku1',
      ItemBrand2: 'Brand2',
      ItemCategory2: 'Category2',
      ItemName2: 'Name2',
      ItemPrice2: 20,
      ItemPromoCode2: 'PromoCode2',
      ItemQuantity2: 2,
      dummyRHS1: 'DummyValue',
    });
  });

  // Given an empty productsMapping and valid properties, it should return product properties with default mappings from properties
  it('should return product properties with default mappings from properties when products array is not available', () => {
    // Arrange
    const productsMapping = [];
    const properties = {
      brand: 'Brand3',
      category: 'Category3',
      name: 'Name3',
      price: 30,
      coupon: 'PromoCode3',
      quantity: 3,
      sku: 'Sku3',
    };

    // Act
    const result = populateProductProperties(productsMapping, properties);

    // Assert
    expect(result).toEqual({
      ItemBrand1: 'Brand3',
      ItemCategory1: 'Category3',
      ItemName1: 'Name3',
      ItemPrice1: 30,
      ItemPromoCode1: 'PromoCode3',
      ItemQuantity1: 3,
      ItemSku1: 'Sku3',
    });
  });
  it('should return product properties with custom mappings', () => {
    const productsMapping = [
      {
        from: 'dummy_LHS',
        to: 'dummy_RHS',
      },
    ];
    const properties = {
      products: [
        {
          brand: 'Brand3',
          category: 'Category3',
          name: 'Name3',
          price: 30,
          coupon: 'PromoCode3',
          quantity: 3,
          sku: 'Sku3',
          dummy_LHS: 'DummyValue',
        },
      ],
    };

    const result = populateProductProperties(productsMapping, properties);

    // Assert
    expect(result).toEqual({
      ItemBrand1: 'Brand3',
      ItemCategory1: 'Category3',
      ItemName1: 'Name3',
      ItemPrice1: 30,
      ItemPromoCode1: 'PromoCode3',
      ItemQuantity1: 3,
      ItemSku1: 'Sku3',
      dummy_RHS1: 'DummyValue',
    });
  });
});
