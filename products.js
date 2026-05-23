const productsData = {
    // Nuts
    "almond-butter": { title: "زبدة اللوز", brand: "الشركة أ", price: "0 د.ج", img: "[صورة زبدة اللوز]", category: "المكسرات والبذور", categoryLink: "category-nuts.html" },
    "pistachio-butter": { title: "زبدة الفستق", brand: "الشركة ب", price: "0 د.ج", img: "[صورة زبدة الفستق]", category: "المكسرات والبذور", categoryLink: "category-nuts.html" },
    "tahini": { title: "الطحينة (سمسم)", brand: "الشركة ج", price: "0 د.ج", img: "[صورة الطحينة]", category: "المكسرات والبذور", categoryLink: "category-nuts.html" },
    "hazelnut-butter": { title: "زبدة البندق", brand: "الشركة د", price: "0 د.ج", img: "[صورة زبدة البندق]", category: "المكسرات والبذور", categoryLink: "category-nuts.html" },
    "cashew-butter": { title: "زبدة الكاجو", brand: "الشركة أ", price: "0 د.ج", img: "[صورة زبدة الكاجو]", category: "المكسرات والبذور", categoryLink: "category-nuts.html" },
    "raw-almonds": { title: "لوز طبيعي نيء", brand: "الشركة ب", price: "0 د.ج", img: "[صورة اللوز]", category: "المكسرات والبذور", categoryLink: "category-nuts.html" },
    "walnuts": { title: "جوز (عين الجمل)", brand: "الشركة ج", price: "0 د.ج", img: "[صورة الجوز]", category: "المكسرات والبذور", categoryLink: "category-nuts.html" },
    "premium-cashews": { title: "كاجو فاخر", brand: "الشركة د", price: "0 د.ج", img: "[صورة الكاجو]", category: "المكسرات والبذور", categoryLink: "category-nuts.html" },
    
    // Grains
    "bulgur": { title: "برغل خشن طبيعي", brand: "الشركة أ", price: "0 د.ج", img: "[صورة برغل]", category: "الحبوب والبقوليات", categoryLink: "category-grains.html" },
    "brown-rice": { title: "أرز أسمر كامل", brand: "الشركة ب", price: "0 د.ج", img: "[صورة أرز أسمر]", category: "الحبوب والبقوليات", categoryLink: "category-grains.html" },
    "oats": { title: "شوفان عضوي", brand: "الشركة ج", price: "0 د.ج", img: "[صورة شوفان]", category: "الحبوب والبقوليات", categoryLink: "category-grains.html" },
    "quinoa": { title: "كينوا بيضاء", brand: "الشركة د", price: "0 د.ج", img: "[صورة كينوا]", category: "الحبوب والبقوليات", categoryLink: "category-grains.html" },
    "black-rice": { title: "أرز أسود بري", brand: "الشركة هـ", price: "0 د.ج", img: "[صورة أرز أسود]", category: "الحبوب والبقوليات", categoryLink: "category-grains.html" },
    
    // Water
    "rose-water": { title: "ماء الورد الطبيعي", brand: "الشركة أ", price: "0 د.ج", img: "[صورة ماء الورد]", category: "الماء", categoryLink: "category-water.html" },
    "orange-blossom-water": { title: "ماء الزهر المقطر", brand: "الشركة ب", price: "0 د.ج", img: "[صورة ماء الزهر]", category: "الماء", categoryLink: "category-water.html" },
    "thyme-water": { title: "ماء الزعتر الصافي", brand: "الشركة ج", price: "0 د.ج", img: "[صورة ماء الزعتر]", category: "الماء", categoryLink: "category-water.html" },
    "frankincense-water": { title: "ماء اللبان العضوي", brand: "الشركة د", price: "0 د.ج", img: "[صورة ماء اللبان]", category: "الماء", categoryLink: "category-water.html" },
    "coconut-water": { title: "ماء جوز الهند العضوي", brand: "الشركة هـ", price: "0 د.ج", img: "[صورة ماء جوز الهند]", category: "الماء", categoryLink: "category-water.html" },
    
    // Oils
    "olive-oil": { title: "زيت زيتون بكر ممتاز", brand: "الشركة أ", price: "0 د.ج", img: "[صورة زيت زيتون]", category: "الزيوت والدهون الصحية", categoryLink: "category-oils.html" },
    "sesame-oil": { title: "زيت سمسم طبيعي", brand: "الشركة ب", price: "0 د.ج", img: "[صورة زيت سمسم]", category: "الزيوت والدهون الصحية", categoryLink: "category-oils.html" },
    "coconut-oil": { title: "زيت جوز الهند العضوي", brand: "الشركة ج", price: "0 د.ج", img: "[صورة زيت جوز الهند]", category: "الزيوت والدهون الصحية", categoryLink: "category-oils.html" },
    "butter": { title: "زبدة طبيعية نقية", brand: "الشركة د", price: "0 د.ج", img: "[صورة زبدة]", category: "الزيوت والدهون الصحية", categoryLink: "category-oils.html" },
    "animal-ghee": { title: "سمن حيواني", brand: "الشركة هـ", price: "0 د.ج", img: "[صورة سمن]", category: "الزيوت والدهون الصحية", categoryLink: "category-oils.html" },
    
    // Honey
    "pure-honey": { title: "عسل طبيعي أصلي", brand: "الشركة أ", price: "0 د.ج", img: "[صورة عسل]", category: "العسل والمحليات الطبيعية", categoryLink: "category-honey.html" },
    "date-molasses": { title: "دبس التمر الخالص", brand: "الشركة ب", price: "0 د.ج", img: "[صورة دبس التمر]", category: "العسل والمحليات الطبيعية", categoryLink: "category-honey.html" },
    "pomegranate-molasses": { title: "دبس الرمان الطبيعي", brand: "الشركة ج", price: "0 د.ج", img: "[صورة دبس الرمان]", category: "العسل والمحليات الطبيعية", categoryLink: "category-honey.html" },
    "date-sugar": { title: "سكر التمر البديل الصحي", brand: "الشركة د", price: "0 د.ج", img: "[صورة سكر التمر]", category: "العسل والمحليات الطبيعية", categoryLink: "category-honey.html" },
    
    // Bakery
    "barley-bread": { title: "خبز الشعير الصحي", brand: "الشركة أ", price: "0 د.ج", img: "[صورة خبز الشعير]", category: "مخبوزات صحية", categoryLink: "category-bakery.html" },
    "sourdough-bread": { title: "خبز بالخميرة الطبيعية", brand: "الشركة ب", price: "0 د.ج", img: "[صورة خبز بالخميرة الطبيعية]", category: "مخبوزات صحية", categoryLink: "category-bakery.html" },
    
    // Pastries
    "barley-couscous": { title: "كسكس الشعير", brand: "الشركة أ", price: "0 د.ج", img: "[صورة كسكس الشعير]", category: "معجنات", categoryLink: "category-pastries.html" },
    "acorn-couscous": { title: "كسكس البلوط", brand: "الشركة ب", price: "0 د.ج", img: "[صورة كسكس البلوط]", category: "معجنات", categoryLink: "category-pastries.html" },
    "carob-couscous": { title: "كسكس الخروب", brand: "الشركة ج", price: "0 د.ج", img: "[صورة كسكس الخروب]", category: "معجنات", categoryLink: "category-pastries.html" },
    "whole-wheat-spaghetti": { title: "سباغيتي قمح الكامل", brand: "الشركة د", price: "0 د.ج", img: "[صورة سباغيتي]", category: "معجنات", categoryLink: "category-pastries.html" },
    "whole-wheat-rechta": { title: "رشتة القمح الكامل", brand: "الشركة هـ", price: "0 د.ج", img: "[صورة رشتة]", category: "معجنات", categoryLink: "category-pastries.html" },
    
    // Dairy
    "white-cheese": { title: "جبن أبيض طبيعي", brand: "الشركة أ", price: "0 د.ج", img: "[صورة جبن أبيض]", category: "ألبان وأجبان", categoryLink: "category-dairy.html" },
    "greek-yogurt": { title: "زبادي يوناني أصلي", brand: "الشركة ب", price: "0 د.ج", img: "[صورة زبادي يوناني]", category: "ألبان وأجبان", categoryLink: "category-dairy.html" },
    "edam-cheese": { title: "جبن إيدام معتق", brand: "الشركة ج", price: "0 د.ج", img: "[صورة جبن إيدام]", category: "ألبان وأجبان", categoryLink: "category-dairy.html" },
    "coconut-milk": { title: "حليب جوز الهند", brand: "الشركة د", price: "0 د.ج", img: "[صورة حليب جوز الهند]", category: "ألبان وأجبان", categoryLink: "category-dairy.html" },
    
    // Default placeholder
    "default": { title: "منتج طبيعي", brand: "العلامة المميزة", price: "0 د.ج", img: "[صورة المنتج]", category: "منتجات عامة", categoryLink: "store.html" }
};
