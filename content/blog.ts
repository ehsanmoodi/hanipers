import { StaticImageData } from "next/image";
import uniqueRandomArray from "unique-random-array";

// Thumbnails
import image1 from "../public/images/blog/1.jpg";
import image2 from "../public/images/blog/2.jpg";
import image3 from "../public/images/blog/3.jpg";
import image4 from "../public/images/blog/4.png";
import image5 from "../public/images/blog/5.png";
export interface BlogItemType {
  slug: string;
  title: {
    fa: string;
    en: string;
  };
  thumbnail: StaticImageData | string;
  featureImage: StaticImageData | string;
  date: {
    fa: string;
    en: string;
  };
  views: string;
  content: {
    fa: string;
    en: string;
  };
  tags: {
    en: string[];
    fa: string[];
  };
  buyLink: string;
}

export const emptyBlogItem = {
  slug: "",
  title: {
    fa: "",
    en: "",
  },
  thumbnail: "",
  featureImage: "",
  date: {
    fa: "",
    en: "",
  },
  views: "",
  content: {
    fa: "",
    en: "",
  },
  tags: {
    en: [""],
    fa: [""],
  },
  buyLink: "",
};

export const blogItems: BlogItemType[] = [
  {
    slug: "first-blog-post",
    title: {
      en: "It’s time to take a bite and get ready for the journey",
      fa: "کیکتو گاز بزن و آماده‌ی سفر به دنیای هانیپرز شو",
    },
    thumbnail: image1,
    featureImage: image1,
    date: {
      en: "17 oct 2022",
      fa: "۲۰ آذر ۱۴۰۱",
    },
    views: "14",
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      `,
      fa: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
    },
    tags: { en: ["tag1", "teg2"], fa: ["تگ۱", "تگ۲"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "second-blog-post",
    title: {
      en: "Hanipers; The great sense of lightness and pleasuring",
      fa: "هانیپرز، حس بی‌نظیر سبکی",
    },
    thumbnail: image2,
    featureImage: image2,
    date: {
      en: "16 Jan 2023",
      fa: "16 ژانویه 2023",
    },
    views: "24",
    content: {
      en: `Hanipers is light, and what do we mean by light?
Well, remember there was a question of which one is heavier? A kilogram of cotton or a kilogram of metal bars; if you were one of those neat students sitting at the front, you would probably say they have the same weight and pass the test with an A+, or you would get the point the questions with an ahaaa sound of surprise. It may seem physically impossible but let me tell you that a kilogram of Hanipers is for sure lighter than a kilogram of iron bars, and why? We suggest you taste it once and give it a try! 
Hanipers, the lightest creamy cake ever
Hanipers is made of great quality sponge cake with a generous amount of cream filling it all along. There are 2 things you cannot forget about this cake and its super light delight, the fact that no matter how much you have, you won’t feel heavy at all; but here’s the best part, you will find the cream filling you with joy and delight from the first bite to the last one. 
A drink-friendly snack for every occasion 
Hanipers is also the most drink-friendly snack you have ever had in your life, trust us and try it with whatever you want, every new drink is a new experience of joy with great taste and delight. You can have Hanipers with milk, tea, coffee, and every cold and hot drink you want. Dear passengers get ready, open the package and welcome to the world of happiness and delight, take a bite, enjoy your Hanipers, and wish you a great flight!
`,
      fa: `
وقتی از سَبُکی یه خوراکی حرف می‌زنیم «هانیپرز» اولین اسمیه که به ذهنمون می‌رسه. حالا این سوال مطرحه که چقدر سبک؟ خب احتمالا اون سوال عجیب و هوشمندانه‌ی دوران مدرسه رو یادتونه که می‌پرسید یک کیلوگرم آهن سنگین‌تره یا یک کیلوگرم پنبه؟ اگر شما از اون دانش‌آموزای نکته‌سنج ردیف جلوی کلاس بودید، قطعا جواب می‌دادید که باهم هم‌وزن‌اند و نمره‌ی بیست می‌گرفتید. یا شاید به نظرتون یک کیلو آهن‌ سنگین‌تر می‌اومد و بعد از امتحان با گفتن «آهاااا»، تازه متوجه جواب درست می‌شدید.
شاید از نظر علم فیزیک غیرممکن به نظر بیاد، اما باید بگیم یک کیلوگرم هانیپرز از یک کیلوگرم پنبه هم سبکتره، چطور ممکنه؟ باید امتحانش کنید تا سبکی فوق‌العاده‌ی هانیپرز رو متوجه بشید.

کیک اسفنجی هانیپرز، یه کیک خامه‌ای سبک
دو تا نکته رو هیچ‌وقت درمورد هانیپرز فراموش نکنید: هانیپرز، یه کیک اسفنجی باکیفیت و سبک همراه با مقدار مناسبی از کِرِمه که کیک رو به صورت سرتاسری پر کرده. 
یعنی یکی اینکه هر چندتا هانیپرز هم بخورید، باز هم به هیچ‌وجه احساس سنگینی نمی‌کنید. و دوما؛ کرم سبک و هوادهی شده‌ی هانیپرز رو می‌تونید از اولین تا آخرین گازی که بهش می‌‌زنید حس کنید و ببینید.

هانیپرز همراه با نوشیدنی، یه میان‌وعده‌ی کامله
هانیپرز بهترین دوست همه نوشیدنی‌هاییه که تا حالا امتحان کردید. به ما اعتماد کنید و هانیپرز رو با شیر، چای، قهوه و بقیه‌ی نوشیدنی‌های سرد و گرمی که دوست دارید، امتحان کنید تا هر بار، یه حس جدید و تازه رو تجربه کنید. پس کیکتون رو گاز بزنید و برای سفر به دنیای شادی و لذت آماده بشید.
`,
    },
    tags: {
      en: ["hanipers", "cake", "light_cake", "creamy_cake"],
      fa: ["هانیپرز", "کیک", "کیک_سبک", "لایت_کیک", "کیک_خامه_ای"],
    },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "third-blog-post",
    title: {
      en: "Flying without wings as light as a little piece of cloud",
      fa: "هانیپرز، لایت کیکی با کرم سرتاسری",
    },
    thumbnail: image4,
    featureImage: image4,
    date: {
      en: "17 oct 2022",
      fa: "30 بهمن ۱۴۰۱",
    },
    views: "18",
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat`,
      fa: `<p dir="RTL">علاقه ما به خوراکی&zwnj;های شیرین خصوصا انواع کیک، تاریخ مصرف نداره و کوچیک و بزرگ عاشق انواع کیک هستیم. اگر سراغ کیک&zwnj;های هانیپرز اومده باشین، متوجه شدین که این کیک&zwnj;ها حس و حالِ کیک&zwnj;های کرم دار دارن، با این تفاوت که خیلی بافت سبکی دارن و با وجود حجم بالای کرم که در هر برش کیک پخش شده، اما خیلی سبک هستن. در واقع همین ویژگی&zwnj;ها باعث شدن که کیک&zwnj;های هانیپرز در دسته لایت کیک&zwnj;ها قرار بگیرن و طرفداراش هم زیاد باشن.</p>

<h2 dir="RTL">حجم بالای کرم که در هر برش کیک<span dir="LTR">&zwnj;</span>های هانیپرز</h2>

<p dir="RTL">هانیپرز، یه کیک اسفنجی باکیفیت و سبکه که داخلش رو مقدار مناسبی از کرم به صورت سرتاسری پر کرده. این یعنی با اولین گازی که به این کیک می&zwnj;زنین، می&zwnj;تونین مزه&zwnj;ی لذیذ کرم داخل کیک رو حس کنین. این کار توسط دستگاه&zwnj;های خاص انجام میشه که کرم رو از سه نقطه به کیک تزریق می&zwnj;کنن. لابد به این فکر می&zwnj;کنین که این حجم از کرم باید کیک هانیپرز رو سنگین کنه! نه اینطور نیست.</p>

<p dir="RTL">کرم داخل کیک&zwnj;های هانیپرز سبک و هوادهی شده&zwnj;اس و در عین حال که بسیار سبکه، اما کاملا مزه و حس حال شیرینی&zwnj;ها و کیک&zwnj;های خامه&zwnj;ای رو داره. به همین خاطر میشه کیک&zwnj;های هانیپرز رو به عنوان میان وعده، عصرانه و صبحانه استفاده و طعم&zwnj;های مختلف اون رو در کنار چای و قهوه امتحان کرد.</p>

<p dir="RTL">علاوه بر این، بعضی از شیرینی&zwnj;ها و کیک&zwnj;های خامه&zwnj;ای به دلیل پخش نبودن خامه، کمی خشک و سفت میشن. اما این موضوع در هانیپرز وجود نداره. وجود سرتاسری کرم داخل کیک اسفنجی هانیپرز، این کیک رو خیلی نرم و لطیف کرده.</p>

<h2 dir="RTL">طعم&zwnj;های متنوع در کرم&zwnj;های هانیپرز</h2>

<p dir="RTL">مدل&zwnj;های مختلف هانیپرز دارای یه کیک اسفنجی سبک هستن که مغزی&zwnj;های شکلات، وانیل دارن. هر کدوم از این کرم&zwnj;ها عاشقان بسیار دارن و ترکیب کیک اسفنجی سبک در کنار این کرم&zwnj;ها، دل بسیاری رو با ذائقه&zwnj;های مختلف به&zwnj;دست آورده. خصوصا بچه&zwnj;ها که عاشق کرم&zwnj;های داخل این کیک هستن.</p>

<p dir="RTL">اگر دوست دارین تا به دنیای هیجان&zwnj;انگیز هانیپرز سفر کنین و یه لایت کیک با لایت کرم به عنوان میان وعده داشته باشین، روی لینک زیر کلیک کنین و همین امروز هانیپرز رو با کرم مورد علاقه&zwnj;ات سفارش بده.</p>
`,
    },
    tags: { en: ["tag4", "tag5"], fa: ["تگ۴", "تگ۵"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "fourth-blog-post",
    title: {
      en: "Hanipers; The great sense of lightness and pleasuring",
      fa: "سبک عین کیک‌های هانیپرز",
    },
    thumbnail: image5,
    featureImage: image5,
    date: {
      en: "17 feb 2023",
      fa: "30 بهمن ۱۴۰۱",
    },
    views: "24",
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat`,
      fa: `<p dir="RTL">همه ما با طعم و مزه کیک&zwnj;ها خاطره داریم. هانیپرز یکی از محبوب&zwnj;ترین لایت کیک&zwnj;هاس. وقتی از سبک بودن یه خوراکی حرف می&zwnj;زنیم، مطمئنا هانیپرز اولین اسمیه که به ذهنمون می&zwnj;رسه.&nbsp;</p>

<h2 dir="RTL">هانیپرز، یه کیک خامه&zwnj;ای سبک</h2>

<p dir="RTL">هانیپرز یه لایت کیکِ هیجان&zwnj;انگیزه. وجود کرم و کیک اسفنجی در این کیک باعث سنگین شدن اون نشده. کیک اسفنجی یکی از سبک&zwnj;ترین مدل&zwnj;های کیکه که در هانیپرز استفاده شده. همچنین با اینکه حجم بالایی از کرم در انواع مدل&zwnj;های هانیپرز پخش شده. دلیل لایت بودن این کیک، کیک اسفنجی و مغزی هوادهی شده داخل اونه.</p>

<p dir="RTL">هانیپرز طعم&zwnj;های مختلفی مثل شکلات و وانیل داره. این یعنی هر چندتا هانیپرز هم بخوری، باز هم به هیچ&zwnj;وجه احساس سنگینی نمی&zwnj;کنی. این در حالیه که، همزمان می&zwnj;تونی از مزه&zwnj;ی خامه&zwnj;ای این لایت کیک لذت ببری.</p>

<h2 dir="RTL">آماده&zwnj;ی سفر به دنیای هانیپرز شو</h2>

<p dir="RTL">شاید عجیب به نظر برسه، اما یک کیلوگرم هانیپرز از یک کیلوگرم پنبه هم سبک&zwnj;تره و تا وقتی این لایت کیک رو نخوری متوجه این موضوع نمیشی. بنابراین، اگر دوست داری برای میان وعده&zwnj;ات، صبحانه&zwnj;ات، عصرونه&zwnj;ات و یا حتی مهمونی&zwnj;ها یه کیک سبک داشته باشی. حتما هانیپرز رو امتحان کن. برای داشتن هانیپرز، روی لینک خرید کلیک کن و برای سفر به دنیای شادی و لذت این لایت کیک آماده شو.</p>
`,
    },
    tags: { en: ["tag1", "tag5"], fa: ["تگ۱", "تگ۵"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "fifth-blog-post",
    title: {
      en: "Flying without wings as light as a little piece of cloud",
      fa: "سفری به دنیای کیک Twinkie",
    },
    thumbnail: image3,
    featureImage: image3,
    date: {
      en: "17 oct 2022",
      fa: "۲۰ آذر ۱۴۰۱",
    },
    views: "18",
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat`,
      fa: `<p align="center">&nbsp;</p>

<p dir="RTL"><span dir="LTR">Twinkie</span>، یه کیک اسفنجی پر شده با خامه وانیلی، از زمان اختراعش در سال 1930 به عنوان یه خوراکی محبوب و نمادی از فرهنگ آمریکا شناخته میشه. ایده&zwnj;ی تهیه این کیک اولین بار توسط جیمز دوار، مدیر شرکت کانتیننتال، ارائه شد و نقشه اون پخت کیک&zwnj;هایی بود که با خامه&zwnj;ی موزی پر می&zwnj;شدن. جیمز دوار، اسم این کیک رو از تبلیغی الهام گرفت که اسمش &laquo;<span dir="LTR">Twinkle Toe Shoes</span>&raquo; بود و کیک&zwnj;هاشو به قیمت پنج سنت در بسته&zwnj;های دوتایی می&zwnj;فروخت.</p>

<p dir="RTL">در طول جنگ جهانی دوم، موز در آمریکا جیره&zwnj;بندی شد، بنابراین برای تولید این کیک مجبور شدن به کرم وانیلی روی بیارن. طعم جدید وانیلی در این کیک اونقدر مورد توجه قرار گرفت و موفق شد که این برند رو وادار کرد که این ترکیب رو نگه داره و ساختار کیک <span dir="LTR">Twinkies</span> و مواد تشکیل&zwnj;دهنده اون رو هرگز تغییر نده.</p>

<h2 dir="RTL"><span dir="LTR">Twinkies</span> در فرهنگ آمریکا</h2>

<p dir="RTL">قریب به صد ساله که کیک <span dir="LTR">Twinkies</span> به میان وعده&zwnj;ی مورد علاقه آمریکایی&zwnj;ها و همچنین به بخشِ دائمی از فرهنگ پاپ این کشور تبدیل شده. از جعبه&zwnj;ی میان وعده دانش آموزا گرفته تا افسانه&zwnj;های شهری و داستان&zwnj;های جنایی، <span dir="LTR">Twinkies</span> بسیار بیشتر از یه خوراکی برای آمریکایی&zwnj;ها اهمیت داره.</p>

<p dir="RTL">اما باید به این نکته هم اشاره کرد که برندِ تولیدکننده کیک توئینکی، حاشیه هم داشت. در سال 1979، زمانی که دن وایت به اتهام قتل محاکمه می&zwnj;شد، ادعا کرد که ذهن او به دلیلِ زیاده&zwnj;روی در مصرفِ غذاهای ناسالم مانند <span dir="LTR">Twinkies</span> دچار زوال شده. این اقدام اون در دادگاه به قدری عجیب و غریب بود که باعث به وجود اومدن لقبِ &laquo;دفاعیات توئینکی&raquo; شد. با اینکه این اصطلاح جنبه&zwnj;ی حقوقی نداره، اما در میان وکلا و افراد حقوقی در آمریکا به عنوان یه اصطلاح طنزِ حقوقی شناخته می&zwnj;شه.</p>

<p dir="RTL">در سال 1999، رئیس جمهور آمریکا بیل کلینتون، کیک&zwnj;های توئینکی رو در کپسولِ زمان هزاره به عنوان نمادی از فرهنگ غذایی آمریکا قرار داد.</p>

<h2 dir="RTL">ورشکستگی و بازگشت به بازار</h2>

<p dir="RTL">هنگامی که <span dir="LTR">Hostess</span> در سال 2012 اعلام ورشکستگی کرد، کیک&zwnj;های <span dir="LTR">Twinkie</span> از قفسه فروشگاه&zwnj;ها برداشته شدن و همین موضوع باعث عصبانیت و خشمِ بسیاری از طرفدارای این کیک&zwnj;ها شد. به نحوی که وقتی کارخانه<span dir="LTR"> Twinkie </span>در آستانه&zwnj;ی بسته شدن قرار گرفت، مردم در اطراف کارخانه تجمع کردن تا مانع از بسته شدن بشن.</p>

<p dir="RTL">سال بعد، زمانی که <span dir="LTR">Hostess</span> به دلیل ورشکستگی توسط <span dir="LTR">Apollo Global Management</span> و <span dir="LTR">Metropoulos &amp; Co</span> به قیمت 410 میلیون دلار خریداری شد، کیک&zwnj;های <span dir="LTR">Twinkies</span> به بازار برگشتن و در قفسه فروشگاه&zwnj;ها قرار گرفتن.</p>

<p dir="RTL">امروزه، از کیک&zwnj;های <span dir="LTR">Twinkies</span> به روش&zwnj;های خلاقانه&zwnj;ای استفاده می&zwnj;شه. این کیک&zwnj;ها توسط آشپزهای غذاهای خیابانی سرخ و به یه غذا و خوراکی جدید تبدیل می&zwnj;شن. حتی افراد بسیاری که طرفدار پروپاقرص این کیک&zwnj;ها هستن، از لایه&zwnj;های توئینکی برای ساخت کیک تولد و عروسی استفاده می&zwnj;کنن. شاید عجیب به نظر برسه، اما از کیک&zwnj;های <span dir="LTR">Twinkies</span> برای غذاهای مختلف دیگری مانند پای، سوشی و تیرامیسو نیز استفاده می&zwnj;شه.</p>

<h2 dir="RTL">هانیپرز، کیکی با حس و حال کیک&zwnj;های <span dir="LTR">Twinkies</span></h2>

<p dir="RTL">اگر به دنبال یه کیک با طعم، بافت و مزه&zwnj;ی کیک&zwnj;های <span dir="LTR">Twinkies</span> هستین، باید بگیم که هانیپرز می&zwnj;تونه انتخاب شما باشه. کیک هانیپرز با لایه وانیل، دقیقا حس و حال کیک <span dir="LTR">Twinkies</span> رو داره و می&zwnj;شه به عنوان میان وعده&zwnj;ای هیجان&zwnj;انگیز و لذیذ استفاده بشه. هانیپرز، یه لایت کیک با لایت کرمه که از ترکیبِ کیک اسفنجی همراه با مغزی وانیل درست شده. البته مغزی&zwnj;های هانیپرز تنوع هم داره و شکلات و کره بادام زمینی هم دو مدل مغزی دیگه&zwnj;ی کیک&zwnj;های هانیپرزه.</p>

<p dir="RTL">علاوه بر اینکه این کیک کاملا شبیه به کیک&zwnj;های توئینکیه، ویژگی&zwnj;های دیگه&zwnj;ای هم داره. دو ویژگیِ مهم هانیپرز که باعث محبوب این کیک شده، اسفنجی بودن، سبک بودن و همچنین وجود میزانِ مناسبی از کرم خامه&zwnj;ایه که داخل کیک رو پر کرده. یعنی هر اندازه افراد از این کیک بخورن، به هیچ&zwnj;وجه احساس سنگینی نمی&zwnj;کنن. اگر دلت می&zwnj;خواد کیکی رو امتحان کنی که حس و طعم مشابه با کیک&zwnj;های <span dir="LTR">Twinkies</span> داره و لحظاتت رو شیرین کنی، همین الان روی دکمه خرید کلیک کن.</p>
`,
    },
    tags: { en: ["tag2", "tag4"], fa: ["تگ۲", "تگ۴"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "sixth-blog-post",
    title: {
      en: "It’s time to take a bite and get ready for the journey",
      fa: "کیکتو گاز بزن و آماده‌ی سفر به دنیای هانیپرز شو",
    },
    thumbnail: image1,
    featureImage: image1,
    date: {
      en: "17 oct 2022",
      fa: "۲۰ آذر ۱۴۰۱",
    },
    views: "14",
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      `,
      fa: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
    },
    tags: { en: ["tag3", "tag6"], fa: ["تگ۳", "تگ۶"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
];

export const getRandomBlogItem = (exceptSlug: string) => {
  const availableBlogItems = blogItems.filter(
    (item) => item.slug !== exceptSlug
  );

  const randomIndex = Math.floor(Math.random() * availableBlogItems.length);

  return availableBlogItems[randomIndex];
};

export const getRelatedBlogItems = (exceptSlug?: string) => {
  const availableBlogItems = exceptSlug
    ? blogItems.filter((item) => item.slug !== exceptSlug)
    : blogItems;
  const random = uniqueRandomArray(availableBlogItems);

  return [random(), random(), random()];
};

export const getLatestBlogItems = () => {
  return [blogItems[0], blogItems[1], blogItems[2]];
};

export const getBlogItemsWithTag = (tag: string, locale: string) => {
  return blogItems.filter((item) =>
    locale === "en" ? item.tags.en.includes(tag) : item.tags.fa.includes(tag)
  );
};
