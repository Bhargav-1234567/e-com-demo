export async function GET() {
  let catList = [
    {
      browsePath: "5122348031",
      categoryId: "5122349031",
      sellable: false,
      displayPath: "",
      label: "Appliances",
      itemType: "null",
      productType: "MEASURING_CUP",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "5122349031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1571274031",
      categoryId: "1571275031",
      sellable: false,
      displayPath: "",
      label: "Baby",
      itemType: "null",
      productType: "BIOMETRIC_MONITOR",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1571275031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "2454169031",
      categoryId: "2454170031",
      sellable: false,
      displayPath: "",
      label: "Bags, Wallets and Luggage",
      itemType: "null",
      productType: "KITCHEN",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "2454170031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1355016031",
      categoryId: "1355017031",
      sellable: false,
      displayPath: "",
      label: "Beauty",
      itemType: "null",
      productType: "SUNSCREEN",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1355017031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "976389031",
      categoryId: "976390031",
      sellable: false,
      displayPath: "",
      label: "Books",
      itemType: "null",
      productType: "ABIS_BOOK",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "976390031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "4772060031",
      categoryId: "4772061031",
      sellable: false,
      displayPath: "",
      label: "Car & Motorbike",
      itemType: "null",
      productType: "BRAKE_ROTOR",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "4772061031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1571271031",
      categoryId: "1571272031",
      sellable: false,
      displayPath: "",
      label: "Clothing & Accessories",
      itemType: "null",
      productType: "COAT",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1571272031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "13712257031",
      categoryId: "13712258031",
      sellable: false,
      displayPath: "",
      label: "Collectibles & Fine Art",
      itemType: "null",
      productType: "FINE_ART_EDITIONED",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "13712258031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "976392031",
      categoryId: "976393031",
      sellable: false,
      displayPath: "",
      label: "Computers & Accessories",
      itemType: "null",
      productType: "STORAGE_COVER",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "976393031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "976419031",
      categoryId: "976420031",
      sellable: false,
      displayPath: "",
      label: "Electronics",
      itemType: "null",
      productType: "VIRTUAL_REALITY_HEADSET",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "976420031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "6648217031",
      categoryId: "6648218031",
      sellable: false,
      displayPath: "",
      label: "Fashion",
      itemType: "null",
      productType: "UMBRELLA",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "6648218031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "3704982031",
      categoryId: "3704983031",
      sellable: false,
      displayPath: "",
      label: "Gift Cards",
      itemType: "null",
      productType: "PHYSICAL_GIFT_CARD",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "3704983031",
      confidence: "null",
      authorized: false,
      handmade: false,
    },
    {
      browsePath: "2454178031",
      categoryId: "2454179031",
      sellable: false,
      displayPath: "",
      label: "Grocery & Gourmet Foods",
      itemType: "null",
      productType: "ADVENT_CALENDAR",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "2454179031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1350384031",
      categoryId: "1350385031",
      sellable: false,
      displayPath: "",
      label: "Health & Personal Care",
      itemType: "null",
      productType: "CANDLE",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1350385031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "976442031",
      categoryId: "976443031",
      sellable: false,
      displayPath: "",
      label: "Home & Kitchen",
      itemType: "null",
      productType: "AIR_PURIFIER",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "976443031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "3704992031",
      categoryId: "3704993031",
      sellable: false,
      displayPath: "",
      label: "Home Improvement",
      itemType: "null",
      productType: "INDUSTRIAL_WHEELS",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "3704993031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "5866078031",
      categoryId: "5866079031",
      sellable: false,
      displayPath: "",
      label: "Industrial & Scientific",
      itemType: "null",
      productType: "BRAKE_ROTOR",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "5866079031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1951048031",
      categoryId: "1951049031",
      sellable: false,
      displayPath: "",
      label: "Jewellery",
      itemType: "null",
      productType: "BRACELET",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1951049031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "976416031",
      categoryId: "976417031",
      sellable: false,
      displayPath: "",
      label: "Movies & TV Shows",
      itemType: "null",
      productType: "VIDEO_DVD",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "976417031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "976445031",
      categoryId: "976446031",
      sellable: false,
      displayPath: "",
      label: "Music",
      itemType: "null",
      productType: "ABIS_MUSIC",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "976446031",
      confidence: "null",
      authorized: false,
      handmade: false,
    },
    {
      browsePath: "3677697031",
      categoryId: "3677698031",
      sellable: false,
      displayPath: "",
      label: "Musical Instruments",
      itemType: "null",
      productType: "MUSICAL_INSTRUMENTS",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "3677698031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "2454172031",
      categoryId: "2454173031",
      sellable: false,
      displayPath: "",
      label: "Office Products",
      itemType: "null",
      productType: "DESK_PAD",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "2454173031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "2454175031",
      categoryId: "2454176031",
      sellable: false,
      displayPath: "",
      label: "Outdoor Living",
      itemType: "null",
      productType: "STORAGE_COVER",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "2454176031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "2454181031",
      categoryId: "4740420031",
      sellable: false,
      displayPath: "",
      label: "Pet Supplies",
      itemType: "null",
      productType: "PET_FOOD",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "4740420031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1571283031",
      categoryId: "1571284031",
      sellable: false,
      displayPath: "",
      label: "Shoes & Handbags",
      itemType: "null",
      productType: "SHOELACE",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1571284031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "976451031",
      categoryId: "976452031",
      sellable: false,
      displayPath: "",
      label: "Software",
      itemType: "null",
      productType: "PHYSICAL_SOFTWARE",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "976452031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1984443031",
      categoryId: "1984444031",
      sellable: false,
      displayPath: "",
      label: "Sports, Fitness & Outdoors",
      itemType: "null",
      productType: "BRAKE_ROTOR",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1984444031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1350380031",
      categoryId: "1350381031",
      sellable: false,
      displayPath: "",
      label: "Toys & Games",
      itemType: "null",
      productType: "MAGNIFIER",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1350381031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "976460031",
      categoryId: "976461031",
      sellable: false,
      displayPath: "",
      label: "Video Games",
      itemType: "null",
      productType: "VIDEO_GAME_CONTROLLER",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "976461031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
    {
      browsePath: "1350387031",
      categoryId: "1350388031",
      sellable: false,
      displayPath: "",
      label: "Watches",
      itemType: "null",
      productType: "BATTERY",
      numberOfAuthorizedChildren: 1,
      level: 0,
      recommendedBrowseNode: "1350388031",
      confidence: "null",
      authorized: true,
      handmade: false,
    },
  ];
  return Response.json(catList);
}
