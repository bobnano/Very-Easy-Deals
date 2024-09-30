const reviews = [
    {
      id: 1011,
      title: "Safari Pentagon Set of 3 (Cabin + Medium + Large)",
      summary: "Trolley Bags Hard Case Polypropylene 4 Wheels 360 Degree Wheeling Luggage, Travel Bags, Suitcase for Travel, Trolley Bags for Travel, Dusk Green",
      link: "https://amzn.to/3ZCXdCk",
      img:"https://m.media-amazon.com/images/I/61QJwcthVZL._SL1500_.jpg",
      category: "Bags"
    },
    {
      id: 155011,
      title: "ASTRIDE Ergofit Ergonomic Office Chair for Home",
      summary: "with 3-Years Warranty, 2D Headrest, Adjustable Arms & Lumbar Support, Tilt Lock Mechanism",
      link: "https://amzn.to/3Bldim5",
      img:"https://m.media-amazon.com/images/I/814cP2DsD2L._SL1500_.jpg",
      category: "Office Chair"
    },
    {
      id: 1022,
      title: "Wakefit Mattress | 7 Years Warranty",
      summary: "Dual Comfort with Hard & Soft Foam",
      link: "https://amzn.to/4gCkE4P",
      img:"https://m.media-amazon.com/images/I/71uRujmmaZL._SL1500_.jpg",
      category: "Home"
    },
    {
      id: 34032,
      title: "Yellow Weaves 5 Seater Sofa and chair Cover Set with 6 Arm Covers",
      summary: "budget cover with Pack of 12 Pcs",
      link: "https://amzn.to/3BnwK1y",
      img:"https://m.media-amazon.com/images/I/91AI43FV0JL._SL1500_.jpg",
      category: "Car Accessories"
    },
    {
      id: 34022,
      title: "Godrej aer O – Hanging Car Air Freshener",
      summary: "Assorted Pack of 3 (22.5g) | Gel Lasts up to 30 days | Car Accessories",
      link: "https://amzn.to/4gEW833",
      img:"https://m.media-amazon.com/images/I/61CyCZvdAqL._SL1500_.jpg",
      category: "Car Accessories"
    },
    {
      id: 33022,
      title: "IDELLA Car Windshield Glass Concentrated Washer Tablets Solid Car",
      summary: "Effervescent Tablets Glass Solid Wiper Cleaning Tablets for Car Window (15)",
      link: "https://amzn.to/4eF84Qx",
      img:"https://m.media-amazon.com/images/I/819Uq6BBFOL._SL1280_.jpg",
      category: "Car Accessories"
    },
    {
      id: 32022,
      title: "EGOTUDE Ultra Hybrid Matte Frosted Cover Case for iPhone 13",
      summary: "Frost Black, TPU+Polycarbonate, Translucent Back",
      link: "https://amzn.to/4ecaiHf",
      img:"https://m.media-amazon.com/images/I/61KGy9XNXdL._SL1500_.jpg",
      category: "Cases and Covers"
    },
    {
      id: 31022,
      title: "ACTIVE Washing Machine Cleaner Descaler 24 Pack",
      summary: "Deep Cleaning Tablets For HE Front Loader & Top Load Washer",
      link: "https://amzn.to/3XB4kIU",
      img:"https://m.media-amazon.com/images/I/81ROAg8vJdL._SL1500_.jpg",
      category: "Home"
    },
    {
      id: 2022,
      title: "Amazon Basics Back Case Cover for S23Fe",
      summary: "Transparent Case for S23 FE",
      link: "https://amzn.to/4egBK6T",
      img:"",
      category: "Cases and Covers"
    },
    {
      id: 1023,
      title: "Wakefit 100% Waterproof Premium Cotton Mattress Protector",
      summary: "Breathable and Hypoallergenic Ultra Soft Fitted Bed Protector Single, Grey",
      link: "https://amzn.to/47FTfLi",
      img:"https://m.media-amazon.com/images/I/61l+kVrCBVL._SL1000_.jpg",
      category: "Home"
    },
    {
      id: 1021,
      title: "The Derma Co Hyaluronic Sunscreen Aqua Ultra Light Gel With Spf 50 Pa++++ For Broad Spectrum, ",
      summary: "UV A, UV B & Blue Light Protection For Oily Skin - 50G(Dermaco), Pack Of 1",
      link: "https://amzn.to/3zCh8qv",
      img:"https://m.media-amazon.com/images/I/51x3cj+-iUL._SL1200_.jpg",
      category: "Beauty"
    },
    {
      id: 1024,
      title: "RENEE Eau De Parfum Bloom 15ml",
      summary: "UV A, UV B & Blue Light Protection For Oily Skin - 50G(Dermaco), Pack Of 1",
      link: "https://amzn.to/3ZIBN6P",
      img:"https://m.media-amazon.com/images/I/61ca8gP2e+L._SL1500_.jpg",
      category: "Beauty"
    },
    {
      id: 101,
      title: "Lloyd 1.5 Ton 5 Star Inverter Split AC ",
      summary: "5 in 1 Convertible, Anti Corrosion Coating, Copper, PM 2.5 Filter, 2024 Model, White with Chrome Deco Strip, GLS18I5FWBEW",
      link: "https://amzn.to/4dtJ2D6",
      img:"https://m.media-amazon.com/images/I/61Ka87z2DSL._SL1500_.jpg",
      category: "AC"
    },
    {
      id: 1021,
      title: "The Derma Co Hyaluronic Sunscreen Aqua Ultra Light Gel With Spf 50 Pa++++ For Broad Spectrum, ",
      summary: "UV A, UV B & Blue Light Protection For Oily Skin - 50G(Dermaco), Pack Of 1",
      link: "https://amzn.to/3zCh8qv",
      img:"https://m.media-amazon.com/images/I/51x3cj+-iUL._SL1200_.jpg",
      category: "Beauty"
    },
    {
      id: 102,
      title: "Sony WH-CH720N",
      summary: "Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 35 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
      link: "https://amzn.to/3zmuffu",
      img:"https://m.media-amazon.com/images/I/51rpbVmi9XL._SL1200_.jpg",
      category: "Sound"
    },
    {
      id: 11101,
      title: "realme Buds T310 Truly Wireless",
      summary: "Best TWS under 2000 hurry up",
      link: "https://amzn.to/3N19N75",
      img:"https://m.media-amazon.com/images/I/61kDfm8FD7L._SL1500_.jpg",
      category: "Sound"
    },
    {
      id: 11102,
      title: "OnePlus Buds Z2 ANC",
      summary: "Best Neckband under 2k Worth It Hurry up",
      link: "https://amzn.to/3N0jPoZ",
      img:"https://m.media-amazon.com/images/I/51sZ0bOotML._SL1500_.jpg",
      category: "Sound"
    },
    {
      id: 123102,
      title: "BOULT K40",
      summary: "Best TWS under 1k Worth It Hurry up",
      link: "https://amzn.to/3Bo1XSg",
      img:"",
      category: "Sound"
    },
    {
      id: 1,
      title: "OnePlus Buds 3",
      summary: "These wireless earbuds have amazing sound quality...",
      link: "https://amzn.in/d/8ORkMw0",
      img:"https://m.media-amazon.com/images/I/51h7CQTRJ1L._SL1500_.jpg",
      category: "Sound"
    },
    {
      id: 2,
      title: "Acer Aspire Lite 12th Gen Intel Core i5-1235U Thin and Light Laptop",
      summary: "This laptop has been a game-changer for my productivity...",
      link: "https://amzn.in/d/86aq6GN",
      img:"https://m.media-amazon.com/images/I/71czGb00k5L._SL1500_.jpg",
      category: "Laptop"
    },
    {
      id: 3,
      title: "JBL Tune 760NC",
      summary: "Top-notch noise cancellation and crystal-clear sound...",
      link: "https://amzn.to/4etC9Cs",
      img:"https://m.media-amazon.com/images/I/61QZnJ+vJyL._SL1500_.jpg",
      category: "Sound"
    },
    {
      id: 4,
      title: "Samsung Galaxy Watch 6",
      summary: "A great smartwatch for fitness and daily use...",
      link: "https://amzn.to/3XzQ6YT",
      img:"https://m.media-amazon.com/images/I/61fDRIfPQEL._SL1500_.jpg",
      category: "Smart Watch"
    },
    {
      id: 5,
      title: "Oneplus 12R 5G",
      summary: "The best Mobile around 35k alrounder",
      link: "https://amzn.to/3Bm9Kjk",
      img:"https://m.media-amazon.com/images/I/71XNeka-BRL._SL1500_.jpg",
      category: "Mobiles"
    },
    {
      id: 6,
      title: "Samsung M35 5G",
      summary: "The best Mobile below 15k",
      link: "https://amzn.to/4e8BEht",
      img:"https://m.media-amazon.com/images/I/81K450cOJML._SL1500_.jpg",
      category: "Mobiles"
    },
    {
      id: 7,
      title: "Poco X6 5G",
      summary: "The best Mobile around 15k alrounder",
      link: "https://amzn.to/4dftvGw",
      img:"https://m.media-amazon.com/images/I/71mh+ppnQsL._SL1500_.jpg",
      category: "Mobiles"
    },
    {
      id: 8,
      title: "Tcl V68 4K TV",
      summary: "The best 43 inch 4K Tv budget Andriod tv",
      link: "https://amzn.to/47CdBoP",
      img:"https://m.media-amazon.com/images/I/71zFdS29uFL._SL1500_.jpg",
      category: "Television"
    },
    {
      id: 9,
      title: "Redmi Xiaomi 10",
      summary: "The best Tv under 20k with fireTv OS",
      link: "https://amzn.to/3Y2oRYt",
      img:"https://m.media-amazon.com/images/I/81sQWfxGDRL._SL1500_.jpg",
      category: "Television"
    },
    {
      id: 10,
      title: "Xiaomi 108 cm (43 inches) A Pro",
      summary: "The best 43 inch Tv with Dolby Vision Google pro",
      link: "https://amzn.to/3XxtjwQ",
      img:"https://m.media-amazon.com/images/I/71HI+VF6ZXL._SL1500_.jpg",
      category: "Television"
    },
    {
      id: 11,
      title: "Redmi 32 inch HD ready TV",
      summary: "The best budget smart Tv with firetv os",
      link: "https://amzn.to/4ey8Mik",
      img:"https://m.media-amazon.com/images/I/71MwDnn-ZaL._SL1500_.jpg",
      category: "Television"
    },
    {
      id: 12,
      title: "Amazon firetv stick lite",
      summary: "A smart home essential for tv with Alexa...",
      link: "https://amzn.to/3BeSxsj",
      img:"https://m.media-amazon.com/images/I/41gW30cZcLL.jpg",
      category: "Smart Home"
    },
    {
      id: 562,
      title: "Orient Electric 9W High Glow LED bulb",
      summary: "180-degree wide beam angle, Cool White color Pack of 2",
      link: "https://amzn.to/4gBuYKt",
      img:"https://m.media-amazon.com/images/I/71jPHlyQpjL._SL1500_.jpg",
      category: "Home"
    },
    {
      id: 662,
      title: "Pillow Set of 2 Soft Pillows",
      summary: "Cloth Fusion Microfiber Bed Pillow Set of 2 Soft Pillows for Sleeping",
      link: "https://amzn.to/4gGXWsh",
      img:"https://m.media-amazon.com/images/I/813+9DJ+VaL._SL1500_.jpg",
      category: "Home"
    },
    {
      id: 762,
      title: "Bajaj LEDZ 8.5W Rechargeable Emergency Inverter LED Bulb",
      summary: "Budget Rechargble budget emergency led buld",
      link: "https://amzn.to/3THUXWL",
      img:"https://m.media-amazon.com/images/I/71y1PJ2BCKL._SL1500_.jpg",
      category: "Home"
    },
    {
      id: 862,
      title: "Amazon Brand - Solimo Stainless Steel Cubix Water Bottles Set of 3, 1L Each",
      summary: "Budget Rust-Resistant, Shatter-Proof, Spill-Proof, Food Grade Steel, Office, School, Travel and Dishwasher Safe (Silver)",
      link: "https://amzn.to/3N4rD90",
      img:"https://m.media-amazon.com/images/I/61u3AljyeTL._SL1500_.jpg",
      category: "Home"
    },
    {
      id: 1262,
      title: "Pigeon by Stovekraft Inox hydra steel bottle",
      summary: "700ml pack of 4 Stainless Steel Drinking Water Bottle 700ml Flipper Cap",
      link: "https://amzn.to/3BzYwYA",
      img:"https://m.media-amazon.com/images/I/61wqWkXNQiL._SL1080_.jpg",
      category: "Home"
    },
    {
      id: 1062,
      title: "Lucky Bamboo Plant for home with Pot",
      summary: "Under 250 grab it",
      link: "https://amzn.to/3zLhESX",
      img:"https://m.media-amazon.com/images/I/41-knssZyGL.jpg",
      category: "Home"
    },
    {
      id: 1162,
      title: "Portronics Key7 Combo Wireless Keyboard & Mouse",
      summary: "10m Working Range, 12 Shortcut Keys, Adjustable DPI, 10 Million Key Life & Click Life for PC, Laptop, Mac",
      link: "https://amzn.to/3N4dOHO",
      img:"https://m.media-amazon.com/images/I/61urVxLeYPL._SL1500_.jpg",
      category: "Home"
    },
    {
      id: 13,
      title: "Oneplus Nord Buds 2r",
      summary: "Best budget tws under 2000",
      link: "https://amzn.to/3zvdZbT",
      img:'https://m.media-amazon.com/images/I/61-ZYvldY+L._SL1500_.jpg',
      category: "Sound"
    },
    {
      id: 14,
      title: "Samsung buds 2 Pro",
      summary: "Best budget tws under 2000",
      link: "https://amzn.to/4e9KeN2",
      img:"https://m.media-amazon.com/images/I/61Qqg+T8nsL._SL1500_.jpg",
      category: "Sound"
    },
    {
      id: 15,
      title: "Oneplus Buds 2 ANC",
      summary: "Best Neckband in the Segment",
      link: "https://amzn.to/3zuVbto",
      img:"https://m.media-amazon.com/images/I/51sZ0bOotML._SL1500_.jpg",
      category: "Sound"
    },
    {
      id: 16,
      title: "Realme buds T300",
      summary: "Best TWS under 1800",
      link: "https://amzn.to/4eeVKGI",
      img:"https://m.media-amazon.com/images/I/61ZEQXGTepL._SL1500_.jpg",
      category: "Sound" 
     },
     {
      id: 17,
      title: "SONY home theatre with Sub woofer",
      summary: "Best Home Theatre around 13K",
      link: "https://amzn.to/3zq2umb",
      img:"https://m.media-amazon.com/images/I/71h7fLNEQPL._SL1500_.jpg",
      category: "Sound"
     },
     {
      id: 18,
      title: "Apple ipad 9 th gen 64Gb",
      summary: "Best ipad under 20K budget",
      link: "https://amzn.to/3zwrs3g",
      img:"https://m.media-amazon.com/images/I/61NGnpjoRDL._SL1500_.jpg",
      category: "Tablets"
     },
     {
      id: 19,
      title: "Samsung Tab S9 FE",
      summary: "Best android Tablet under 20K with Spen",
      link: "https://amzn.to/3TE5QJg",
      img:"https://m.media-amazon.com/images/I/61gVQJ5Yy0L._SL1500_.jpg",
      category: "Tablets"
     },
     {
      id: 20,
      title: "Boat smart call 3",
      summary: "Best smart watch under 1K",
      link: "https://amzn.to/4ebfA5H",
      img:"https://m.media-amazon.com/images/I/815eFTfcXGL._SL1500_.jpg",
      category: "Smart Watch"
     },
     {
      id: 21,
      title: "ASTRIDE Office Chair-BLACK",
      summary: "Best office Chair",
      link: "https://amzn.to/3zAqVxh",
      img:"https://m.media-amazon.com/images/I/811n0hWxo9L._SL1500_.jpg",
      category: "Office Chair"
     },
     {
      id: 22,
      title: "CELLBELL Grey Office Chair",
      summary: "Best office Chair",
      link: "https://amzn.to/4egC85e",
      img:"https://m.media-amazon.com/images/I/61NrewVn63L._SL1000_.jpg",
      category: "Office Chair"
     },
     {
      id: 23,
      title: "Redmi 13C 5G",
      summary: "Best Mobile under 10K",
      link: "https://amzn.to/3BkSifd",
      img:"https://m.media-amazon.com/images/I/81nMsYgIHdL._SL1500_.jpg",
      category: "Mobiles"
     },
     {
      id: 24,
      title: "Samsung Original 25W Type-C",
      summary: "Samsung Original 25W Type-C",
      link: "https://amzn.to/4eAZS3Q",
      img:"https://m.media-amazon.com/images/I/512UVkoMMEL._SL1500_.jpg",
      category: "Smart Watch"
     },
     {
      id: 25,
      title: "realme Buds Wireless 3",
      summary: "Headphones,30dB ANC, Spatial Audio,13.6mm Dynamic Bass Driver,Upto 40 Hours Playback, Fast Charging, 45ms Low Latency",
      link: "https://amzn.to/3MXDvtp",
      img:"https://m.media-amazon.com/images/I/61xqefY2rZL._SL1500_.jpg",
      category: "Sound"
     },
     {
      id: 26,
      title: "OnePlus Bullets Wireless Z2 ANC",
      summary: "Bluetooth in Ear Earphones with Mic, 45dB Hybrid ANC, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 28 Hrs Battery",
      link: "https://amzn.to/3ZIStvb",
      img:"https://m.media-amazon.com/images/I/51sZ0bOotML._SL1500_.jpg",
      category: "Sound"
     },
     {
      id: 27,
      title: "Nova NHP-8103 1300 Watts",
      summary: "Hot and Cold Foldable Hair Dryer (White/Red)",
      link: "https://amzn.to/3THZWqd",
      img:"https://m.media-amazon.com/images/I/61QW83sQIBL._SL1500_.jpg",
      category: "Beauty"
     },
     {
      id: 28,
      title: "Luminous Zelio+ 1100 Inverter for Home, Office & Shops",
      summary: "900VA/12V Pure Sinewave | Reliable Power Backup | Supports 1 Inverter Battery | LCD Display | Easy Installation | with 36 Months",
      link: "https://amzn.to/3zAl7DY",
      img:"https://m.media-amazon.com/images/I/51qsB-hH5PL._SL1500_.jpg",
      category: "Home Appliances"
     },
     {
      id: 29,
      title: "Samsung 43 Inches D Series",
      summary: "LED 4K Ultra HD TV | Crystal | Black | Smart",
      link: "https://amzn.to/3XXXcry",
      img:"https://m.media-amazon.com/images/I/81nikv9C6lL._SL1500_.jpg",
      category: "Television"
     },
     {
      id: 30,
      title: "Amazon Brand - Presto! Active Wash Detergent Powder Twin Pack (4 kg + 4 Kg)",
      summary: "Tough on Stains | Gentle on Fabrics | Colour-Safe | Refreshing Fragrance | Machine and Hand Wash",
      link: "https://amzn.to/3BdpDbS",
      img:"https://m.media-amazon.com/images/I/71XRgDNXulL._SL1500_.jpg",
      category: "Home Appliances"
     },
     {
      id: 31,
      title: "Spigen 3in1 10000mAh Wireless Charging Power Bank with USB-A",
      summary: "USB-C 20W Fast Charging, Included USB-C to USB-C Cable, Lithium Polymer - Black",
      link: "https://amzn.to/4gH62B0",
      img:"https://m.media-amazon.com/images/I/61xWw8MHLGL._SL1500_.jpg",
      category: "Mobile Accesories"
     },
     {
      id: 32,
      title: "Samsung 22-inch (54.6cm) FHD Flat 1,920 x 1,080 Monitor",
      summary: "IPS, 75 Hz, Bezel Less Design, AMD FreeSync, Flicker Free, HDMI, D-sub, (LS22C310EAWXXL, Black)",
      link: "https://amzn.to/3XDRslo",
      img:"https://m.media-amazon.com/images/I/713ReREvBnL._SL1500_.jpg",
      category: "Monitors"
     },
     {
      id: 33,
      title: "RE' EQUIL Oxybenzone and OMC Free Sunscreen",
      summary: "Sunscreen For Oily, Sensitive & Acne Prone Skin | Prevents Acne Breakouts | No White Cast | SPF 50 PA+++ | 50g",
      link: "https://amzn.to/4gChj5M",
      img:"https://m.media-amazon.com/images/I/51a0hzsYORL._SL1500_.jpg",
      category: "Beauty"
     },
     {
      id: 34,
      title: "Puma Men's Dazzler Sneaker",
      summary: "Best Puma Sneakers at 1100",
      link: "https://amzn.to/3Y0ARZh",
      img:"https://m.media-amazon.com/images/I/51GOpp8rAJL._SY695_.jpg",
      category: "FootWear"
     },
     {
      id: 35,
      title: "Sony WF-C700N Bluetooth Truly Wireless",
      summary: "Active Noise Cancellation in Ear Earbuds,360 RA, Multipoint Connection, 10 mins Super Quick Charge, 15hrs Battery, IPX4 Rating, Fast Pair, App Support-Black",
      link: "https://amzn.to/4djtQYX",
      img:"https://m.media-amazon.com/images/I/41l+GRy9UsL._SL1200_.jpg",
      category: "Sound"
     },
     {
      id: 36,
      title: "Sony Wf-C500 Truly Wireless",
      summary: "Bluetooth in Ear Earbuds with 20Hrs Battery,True Wireless Earbuds with Mic for Phone Calls,Quick Charge,Fast Pair,360 Reality",
      link: "https://amzn.to/3ZGsggy",
      img:"https://m.media-amazon.com/images/I/51sj+JxisFL._SL1500_.jpg",
      category: "Sound"
     },
     {
      id: 37,
      title: "Amazfit Active 42mm AMOLED Smart Watch",
      summary: "Built in GPS, 14day Battery, 5ATM Water Resistant, for iOS & Android, Accurate Readings, BT Calls, Strava Support, Temperature Sensor, VO2 Max (Midnight Black)",
      link: "https://amzn.to/3BgtwNj",
      img:"https://m.media-amazon.com/images/I/61vyWLAQjnL._SL1500_.jpg",
      category: "Smart Watch"
     },
     {
      id: 38,
      title: "Aquaguard Delight NXT Lite RO+MC Water Purifier",
      summary: "Free Service Plan worth ₹2000 | India’s #1 Water Purifier | Suitable for Borewell, Tanker & Municipal Water | 30x Impurity Removal vs Local Purifiers",
      link: "https://amzn.to/4ecjSd8",
      img:"https://m.media-amazon.com/images/I/51azW1nqt6L._SL1100_.jpg",
      category: "Home Appliances"
     },
     {
      id: 39,
      title: "Da URBAN Office Grey Chair | Merlion",
      summary: "High Back | Mesh | Adjustable Armrests, Adjustable Lumbar Support | 3 Years Warranty | Tilt Lock Mechanism",
      link: "https://amzn.to/4enEWgT",
      img:"https://m.media-amazon.com/images/I/61qEhDtYkRL._SL1100_.jpg",
      category: "Office Chair"
     },
     {
      id: 339,
      title: "Liquid Detergent",
      summary: "6l for under 500 best deal",
      link: "https://amzn.to/3N2S6no",
      img:"",
      category: "Home"
     },
     {
      id: 3439,
      title: "Card Holder",
      summary: "budget card holder RFID bloker",
      link: "https://amzn.to/3N2qb79",
      img:"",
      category: "Men"
     }
  ];
  
  export default reviews;
  