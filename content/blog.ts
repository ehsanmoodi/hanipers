import { StaticImageData } from "next/image";
import uniqueRandomArray from "unique-random-array";

// Thumbnails
import image1 from "../public/images/blog/1.jpg";
import image2 from "../public/images/blog/2.jpg";
import image3 from "../public/images/blog/3.jpg";
import image4 from "../public/images/blog/4.png";
import image5 from "../public/images/blog/5.png";
import image6 from "../public/images/blog/6.jpg";
import image7 from "../public/images/blog/7.jpg";
import image9 from "../public/images/blog/9.jpg";
import image10 from "../public/images/blog/10.jpg";

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
  buyLink: "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
};

export const blogItems: BlogItemType[] = [
  {
    slug: "kids-and-hanipers",
    title: {
      en: "It’s time to take a bite and get ready for the journey",
      fa: "چرا بچه‌ها هانیپرز دوست دارند؟!",
    },
    thumbnail: image7,
    featureImage: image7,
    date: {
      en: "17 oct 2022",
      fa: "20 بهمن 1401",
    },
    views: "653",
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      `,
      fa: `
<p dir="RTL">امکان ندارد در مورد انواع شیرینی و کیک صحبت کنیم و به علاقه بیش از حد بچه&zwnj;ها به این خوراکی&zwnj;ها جذاب اشاره&zwnj;ای نکنیم. اما نکته&zwnj;ای که در مورد علاقه بچه&zwnj;ها به کیک وجود دارد، این است که بچه&zwnj;ها معمولا عاشق تمام کیک&zwnj;ها نمی&zwnj;شوند. برخی از کیک&zwnj;ها به دلیل وجود خامه&zwnj;ی بسیار و حتی شیرینی بیش از حد، دل را می&zwnj;زنند و همین موضوع می&zwnj;تواند آنها را از لیست کیک&zwnj;های محبوب بچه&zwnj;ها خارج کند.</p>

<p dir="RTL">یکی از کیک&zwnj;های محبوب این روزها میان بچه&zwnj;ها کیک هانیپرز است که در عین حال که مزه&zwnj;ای جذاب و طعم&zwnj;های متنوعی دارد، اما بیشتر به خاطر بافت اسفنجی و سبکی که دارد معروف است. در این مقاله قرار است در مورد محبوبیت این کیک صحبت کنیم و دلایل انتخاب این کیک توسط بچه&zwnj;ها را بازگو کنیم.</p>

<h2 dir="RTL">دلایل محبوبیت کیک هانیپرز</h2>

<p dir="RTL">یکی از مهم&zwnj;ترین دلایل برای محبوبیت این کیک نزد کودکان، اندازه مناسب و کوچک آن است. علاوه بر این، تنوع در لایه&zwnj;ی درون این کیک نیز به محبوبیت آن افزوده و بچه&zwnj;ها و حتی بزرگ&zwnj;ترها با ذائقه&zwnj;های مختلف، می&zwnj;توانند عاشق این کیک شوند. کیک هانیپرز با مغز وانیل، شکلات و کره بادام&zwnj;زمینی وجود دارد و همین موضوع، دایره افرادِ عاشق این کیک را بیشتر کرده است. از دیگر ویژگی&zwnj;های این کیک که بچه&zwnj;ها عاشق آن هستند، می&zwnj;توان به موارد زیر اشاره کرد:</p>

<ol>
\t<li dir="RTL">هانیپرز از کیک اسفنجی ساخته شده و همین موضوع، آن را به یک میان وعده، عصرانه و صبحانه سبک تبدیل کرده است. به همین خاطر، می&zwnj;توان این کیک را به عنوان یک میان وعده برای مدرسه&zwnj;ی کودکان در نظر گرفت.</li>
\t<li dir="RTL">در صورتی که کیک&zwnj;های متنوعی را در بازار امتحان کرده باشید، احتمالا متوجه پخش نبودن کرم داخل برخی کیک&zwnj;ها شده&zwnj;اید. بچه&zwnj;ها عاشق آن لایه کرمی داخل کیک هستند و همچنین دوست دارند که این کرم را از اولین گازی که به کیک می&zwnj;زنند، مزه کنند. در هر برش کیک هانیپرز، حجم بالایی از کرم پخش شده است و بچه&zwnj;ها می&zwnj;توانند از مزه&zwnj;ی شکلات، وانیل و کره بادام زمینی در هر گاز لذت ببرند.</li>
\t<li dir="RTL">شیرینی خامه&zwnj;ای محبوبیت بسیاری میان بچه&zwnj;ها و بزرگسالان دارد. اما همان&zwnj;طور که همه می&zwnj;دانند، شیرینی خامه&zwnj;ای بسیار سنگین است و کالری بالایی دارد. کرم موجود در کیک هانیپرز، هوادهی شده و و بسیار سبک است، اما از نظر حس و حال و مزه می&zwnj;تواند تداعی&zwnj;کننده شیرینی خامه&zwnj;ای باشد. علاوه بر این، کیک هانیپرز کالری کمتری با حس و طعم مشابه کیک &zwnj;خامه&zwnj;ای دارد.</li>
\t<li dir="RTL">بافت این کیک بسیار سبک است و به همین دلیل به آن لایت کیک نیز می&zwnj;گویند.</li>
</ol>

<p align="center" dir="RTL">&nbsp;</p>

<h2 dir="RTL">هانیپرز، کیک سبک با مزه&zwnj;های جذاب برای بچه&zwnj;ها</h2>

<p dir="RTL">بچه&zwnj;ها نیز مانند بزرگسالان معیارهایی برای انتخاب خوراکی&zwnj;های مختلف دارند و کیک هانیپرز توانسته تمام معیارهای کیک محبوبِ بچه&zwnj;ها را داشته باشد. این کیک بافت سبکی دارد و در اندازه&zwnj;ی بسیار مناسبی ارائه می&zwnj;شود. علاوه بر این کرم شکلاتی، کرم وانیلی و کره بادام&zwnj;زمینی، طعم&zwnj;های متنوع این کیک هستند که در هر برش کیک حس می&zwnj;شوند. با کلیک روی دکمه خرید، می&zwnj;توانید کیک بسیار خوشمزه و سبک برای بچه خود بخرید که کالری آن نسبت به بسیاری از شیرینی&zwnj;های خامه&zwnj;ای قنادی&zwnj;ها کمتر است، اما حس و طعم مشابه آنها را دارد.</p>

`,
    },
    tags: { en: ["tag1", "teg2"],
      fa: ["کیک", "هانیپرز", "کیک سبک", "کیک وانیلی", "لایت کیک"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "lightness-of-hanipers",
    title: {
      en: "Hanipers; The great sense of lightness and pleasuring",
      fa: "هانیپرز، حس بی‌نظیر سبکی",
    },
    thumbnail: image2,
    featureImage: image2,
    date: {
      en: "16 Jan 2023",
      fa: "30 بهمن 1401",
    },
    views: "926",
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
      fa: ["هانیپرز", "کیک", "کیک_سبک", "لایت_کیک" ],
    },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "light-cake-with-light-cream",
    title: {
      en: "Flying without wings as light as a little piece of cloud",
      fa: "هانیپرز، لایت کیکی با کرم سرتاسری",
    },
    thumbnail: image3,
    featureImage: image3,
    date: {
      en: "17 oct 2022",
      fa: "30 بهمن 1401",
    },
    views: "899",
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
    tags: { en: ["tag4", "tag5"],
      fa: ["کیک", "هانیپرز", "کیک سبک", "کیک وانیلی", "لایت کیک"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "explore-with-hanipers",
    title: {
      en: "Hanipers; The great sense of lightness and pleasuring",
      fa: "آماده‌ی سفر به دنیای هانیپرز شو",
    },
    thumbnail: image5,
    featureImage: image5,
    date: {
      en: "17 feb 2023",
      fa: "30 بهمن 1401",
    },
    views: "369",
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
    tags: { en: ["tag1", "tag5"],
      fa: ["کیک", "هانیپرز", "کیک سبک", "کیک وانیلی", "لایت کیک"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "history-of-twinkie",
    title: {
      en: "Flying without wings as light as a little piece of cloud",
      fa: "سفری به دنیای کیک Twinkie",
    },
    thumbnail: image6,
    featureImage: image6,
    date: {
      en: "17 oct 2022",
      fa: "1 اسفند 1401",
    },
    views: "1065",
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
    tags: { en: ["tag2", "tag4"],
      fa: ["کیک", "هانیپرز", "کیک سبک", "کیک وانیلی", "لایت کیک"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "the-best-cocoa-filled-vanilla-cake",
    title: {
      en: "It’s time to take a bite and get ready for the journey",
      fa: "خوشمزه‌ترین کیک وانیلی با مغزی کرم کاکائویی",
    },
    thumbnail: image9,
    featureImage: image9,
    date: {
      en: "17 oct 2022",
      fa: "29 بهمن 1401",
    },
    views: "1149",
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      `,
      fa: `
<p dir="RTL">ویژگیِ یه کیک خوب چی می&zwnj;تونه باشه؟ شیرین باشه؟ خیلی خامه&zwnj;ای باشه؟ اندازه مناسبی داشته باشه؟ یا اینکه سبک باشه و شکلات یا کاکائو داشته باشه؟ ویژگی یه کیک خوب، می&zwnj;تونه سبک بودن و لذیذ بودن اون باشه. چیزی که هانیپرز داره و هر یک کیلوگرم هانیپرز از یک کیلوگرم پنبه هم سبک&zwnj;تره. حالا اگر کرم کاکائویی هم داشته باشه که نورعلانوره.</p>

<h2 dir="RTL">هانیپرز، کیک وانیلی با مغزی کرم کاکائویی</h2>

<p dir="RTL">از میان تمام طعم&zwnj;های محبوبِ کیک و دسر در دنیا، دو طعم وجود داره که در کنار هم معجزه می&zwnj;کنن: وانیل و کاکائو. هانیپرز، یه کیک اسفنجیِ وانیلی و بسیار خوشمزه و لذیذه که اندازه بسیار خوب و سبک بودن اون، باعث شده که به یه میان وعده محبوب تبدیل بشه. یکی از ویژگی&zwnj;هایی که این کیک رو به یکی از خوشمزه&zwnj;ترین کیک&zwnj;های این روزا تبدیل کرده، اینه که کرم و مغزی داخلش به صورت سرتاسری پر شده و مزه&zwnj;ی این کرم رو میشه تو هر گازی که به کیک می&zwnj;زنین، حس کنین.</p>

<p dir="RTL">هانیپرز مدل&zwnj;های مختلفی داره که در همه مدل&zwnj;ها کیک اسفنجی پایِ ثابته و مغزی داخل کیک فرق می&zwnj;کنه. یکی از محبوب&zwnj;ترین مدل&zwnj;های هانیپرز، کیک اسفنجی با مغزی کرم کاکائوییه که مزه&zwnj;ی بسیار هیجان&zwnj;انگیز و وصف&zwnj;ناپذیری داره.</p>

<p dir="RTL">با اینکه این کیک در دسته کیک&zwnj;های کرم&zwnj;دار حساب میشه، اما چون کرم کاکائویی داخل این کیک سبک و هوادهی شده&zwnj;اس، بنابراین خوردن این کیک اصلا با احساس سنگینی همراه نیست و هر اندازه از این کیک بخورین، باز هم حالت سنگینی نخواهید داشت.</p>

<h2 dir="RTL">هانیپرز میان وعده&zwnj;ای کامل و سبک</h2>

<p dir="RTL">اگر به دنبال کیکی هستین که همراه با چای و قهوه خود بخورین و از طعم وانیل در کنار کرم کاکائویی لذت ببرین، به شما کیک هانیپرز رو پیشنهاد می&zwnj;کنیم. ترکیبِ هانیپرز با مغزی کاکائو، با هر نوع نوشیدنی مثل چای و قهوه، یه ترکیب عالی میشه و می&zwnj;تونین عصرونه&zwnj;تون رو با این کیک، به یه حس جدید و تازه تبدیل کنین. برای اینکه به دنیای هانیپرز سفر کنی، روی لینک زیر کلیک کن و لایت کیکی خوشمزه با مغزی کاکائو سفارش بده.</p>

`,
    },
    tags: { en: ["tag3", "tag6"],
      fa: ["کیک", "هانیپرز", "کیک سبک", "کیک وانیلی", "لایت کیک"] },
    buyLink:
      "https://www.digikala.com/product/dkp-9264868/%DA%A9%DB%8C%DA%A9-%D9%88%D8%A7%D9%86%DB%8C%D9%84%DB%8C-%D8%A8%D8%A7-%D9%85%D8%BA%D8%B2%DB%8C-%DA%A9%D8%B1%D9%85-%D9%88%D8%A7%D9%86%DB%8C%D9%84-%D9%87%D8%A7%D9%86%DB%8C%D9%BE%D8%B1%D8%B2-36-%DA%AF%D8%B1%D9%85/",
  },
  {
    slug: "hanipers-fantastic-light-cake",
    title: {
      en: "It’s time to take a bite and get ready for the journey",
      fa: "سبک مثل کیک‌های هانیپرز",
    },
    thumbnail: image10,
    featureImage: image10,
    date: {
      en: "17 oct 2022",
      fa: "30 بهمن 1401",
    },
    views: "1149",
    content: {
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat blandit volutpat maecenas volutpat
      `,
      fa: `<p dir="RTL">تصورِ عصرانه و میان&zwnj;وعده بدون کیک سخت است. این خوراکی&zwnj;ها شیرینیِ تمام لحظات ما هستند و علاوه بر مزه&zwnj;ی عالی، باعث شادی و نشاط نیز می&zwnj;شوند. اما برخی کیک&zwnj;ها بسیار سنگین و حجیم هستند و نمی&zwnj;توان از آنها به عنوان میان وعده و حتی عصرانه کنارِ&zwnj; یک فنجان چای و قهوه استفاده کرد. در این مطلب قصد داریم تا یکی از کیک&zwnj;های محبوب این روزها را معرفی کنیم. این کیک با بافت اسفنجی و سبک، می&zwnj;تواند برای عصرانه، میان&zwnj;وعده و حتی در مهمانی&zwnj;ها استفاده شود.</p>

<p align="center" dir="RTL"><span dir="LTR"></span></p>

<h2 dir="RTL"><strong>هانیپرز: لایت کیک خوشمزه</strong></h2>

<p dir="RTL">وقتی صحبت از کیک&zwnj;های سبک یا همان لایت کیک&zwnj;ها می&zwnj;شود، اولین نامی که به ذهن خطور می&zwnj;کند، <a href=""><strong>هانیپرز</strong></a> است.</p>

<p dir="RTL">هانیپرز یکی از محصولات شرکت زرکام است که کیفیت بالایی دارد و توانسته در میان علاقه&zwnj;مندان کیک&zwnj;های عصرانه، جایگاه خود را به&zwnj;دست آورد.</p>

<p dir="RTL">هانیپرز یک کیک اسفنجی سبک است که مقدار مناسبی از کرم به صورت سرتاسری داخل آن را پر کرده است. این ویژگی باعث شده که مزه&zwnj;ی مغزیِ داخل کیک، در تمام نقاط کیک احساس شود و خوشمزگی این کیک&zwnj;ها را دو چندان کند.</p>

<p dir="RTL">لایت کیک هانیپرز چند ویژگی دارد:</p>

<ul>
\t<li dir="RTL">عدم استفاده از رنگ مصنوعی</li>
\t<li dir="RTL">وجود حجم بالای مغزی در کیک</li>
\t<li dir="RTL">بافت خامه&zwnj;ای و سبک کرم</li>
\t<li dir="RTL">توزیع مناسب و یکسان کرم در کیک</li>
\t<li dir="RTL">بافت نرم و سبک کیک</li>
</ul>

<p align="center" dir="RTL"><span dir="LTR"></span></p>

<h2 dir="RTL"><strong>انواع طعم&zwnj;های هانیپرز</strong></h2>

<p dir="RTL">در حال حاضر، هانیپرز در دو طعم متفاوت تولید شده است. پایه هر دو طعم، کیک اسفنجی وانیلی است و تفاوت آنها وجود مغزی&zwnj;های&zwnj; مختلف کرم شکلات و کرم وانیل است.</p>

<p dir="RTL">از مهم&zwnj;ترین دلایل سبکی این کیک، وجود کیک اسفنجی و همچنین کرمِ سبک و هوادهی شده&zwnj;ی داخل این کیک&zwnj;ها است. این دو ویژگی، کیک&zwnj;های هانیپرز را بسیار سبک کرده&zwnj;اند، به طوری که می&zwnj;توانیم بگوییم یک کیلوگرم هانیپرز از یک کیلوگرم پنبه هم سبک&zwnj;تر است.</p>

<h2 dir="RTL"><strong>از کرم سبک کیک&zwnj;های هانیپرز چه می&zwnj;دانیم؟</strong></h2>

<p dir="RTL">بهترین و به&zwnj;روزترین تجهیزات برای تولید کیک&zwnj;های هانیپرز به کار گرفته شده&zwnj;اند. این دستگاه&zwnj;ها به صورت سرتاسری کیک&zwnj;ها را از کرم پر می&zwnj;کنند. به این معنا که کرم از سه نقطه متفاوت به کیک تزریق می&zwnj;شود و همین موضوع باعث شده که مزه&zwnj;ی کرم وانیل و کرم شکلات، در تمام نقاط کیک حس شود.</p>

<h2 dir="RTL"><strong>با ما به دنیای هانیپرز سفر کنید</strong></h2>

<p dir="RTL">طعم&zwnj;های مختلف هانیپرز با کیفیت بالا و منحصربه&zwnj;فرد هم برای عشاق شکلات و هم برای افرادی که به طعم وانیل علاقه دارند، مناسب هستند. ترکیب کیک اسفنجی و این دو نوع کرم&zwnj;، یکی از خوشمزه&zwnj;ترین میان&zwnj;وعده&zwnj;ها را به وجود آورده است. با داشتن هانیپرز می&zwnj;توانید یکی از سبک&zwnj;ترین، لذیذترین و البته باکیفیت&zwnj;ترین کیک&zwnj;ها را تجربه کنید.</p>

`,
    },
    tags: { en: ["tag3", "tag6"],
      fa: ["کیک", "هانیپرز", "کیک سبک", "کیک وانیلی", "لایت کیک"] },
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
