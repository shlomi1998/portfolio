import Image1 from "../../assets/project1.jpg";
import Image2 from "../../assets/project2.jpg";
import Image3 from "../../assets/project3.jpg";
import Image4 from "../../assets/project4.jpg";
import Image5 from "../../assets/project5.jpg";
import Image6 from "../../assets/project6.jpg";
import Image7 from "../../assets/project7.jpg";
import Image8 from "../../assets/project8.jpg";
import Image9 from "../../assets/project9.jpg";

const data = [
  {
    id: 1,
    category: "uiux",
    image: Image1,
    title: "Workie (UIUX)",
    desc: "הביקוש הגובר לעבודה מיידית וקצרת מועד בישראל יצר חוסר התאמה לפלטפורמות קיימות לחיפוש עבודה המותאמות למשרות קבועות. כדי להתמודד עם זה,פיתחתי את Workie - פלטפורמת אינטרנט ומובייל המתמקדת אך ורק בהזדמנויות עבודה מיידיות",
    demo: "https://www.figma.com/proto/UASZqvozPrPSpf6IRRAv3u/Workie---Quick-Jobs?node-id=186-1059&starting-point-node-id=186%3A1059",
    github: "https://github.com/egattor",
  },
  {
    id: 8,
    category: "frontend",
    image: Image6,
    title: "YumEats (Frontend)",
    desc: " אתר רספונסיבי ויפה מאוד מבחינה חזותית, על מנת להדגים את היכולות שלי בתחום ה-Frontend תוך שימוש בטכנולוגיות React  ו-Tailwind CSS הממשק המעוצב היטב והאינטראקציות החלקות מציגים היטב את הכישורים שלי ביצירת חוויית משתמש מעולה (אציין הייתי רעב מאוד באותו זמן😅😂)      ",
    demo: "https://yumeast-sa.onrender.com/",
    github: "https://github.com/shlomi1998/yumEast-frontend",
  },
  {
    id: 3,
    category: "Full Stack",
    image: Image5,
    title: "AI Chat Bot (Full Stack)",
    desc: "אתר Chat Bot חתיך ברמות עם שימוש ב-OpenAi של GPT-4 עם מירב הטכנולוגיות קוד סופר נקי וסופר מאובטח 💫 (ממליץ להציץ בגיטהאב) שימוש ב-MERN+TypeScript+MUI ועוד... ניתן להשתמש בו אחרי רישום, מומלץ לשאול שאלות קוד כי זה פשוט נראה טוב  (לא יותר משתי שאלות אין לי הרבה אסימונים חחח 😬😅)",
    demo: "https://chat-bot-v1-4eip.onrender.com",
    github: "https://github.com/shlomi1998/AI-ChatBot",
  },
  {
    id: 4,
    category: "Full Stack",
    image: Image4,
    title: "Workie (Full Stack)",
    desc: "workie זה פלטפורמת אינטרנט ומובייל המתמקדת בהזדמנויות עבודה מיידיות הפלטפורמה  כתובה בשלל שפות וספריות כגון Mern-->TypeScript-->Redux-->Socket io ועוד",
    demo: "https://www.youtube.com/watch?v=_7FP9JmaKmE&t=21s",
    github: "https://github.com/shlomi1998/workie-fe-be",
  },
  {
    id: 5,
    category: "Full Stack",
    image: Image3,
    title: "Blog App (Full Stack)",
    desc: "אתר blog נחמד שבנוי ב React+Nod.js+MySql (יש כניסה למשתמש ורישום בנוסף ניתן להעלות תמונה וכן יש שימוש ב-Rich Text Editor)",
    demo: "https://www.youtube.com/watch?v=5lTh9tgRrO8",
    github: "https://github.com/shlomi1998/Blog-App-React-Node.js-MySQL",
  },
  {
    id: 6,
    category: "frontend",
    image: Image7,
    title: "Weather App (Frontend)",
    desc: `שואלים מה "המצב רוח" שלי ??? למה שלא תשאלו את האפלקציה 😌💡 ? מדובר באפליקציית מזג אוויר שמציגה נתונים חיים ותחזית לשבוע הקרוב. היא מראה את הטמפרטורה הנוכחית, מהירות הרוח, רמת הלחות ואינדקס החום. יש גם תחזית יומית עם סמלים ויזואליים שמתארים את מזג האוויר - שמש, גשם, עננים - ואת הטמפרטורות המשוערות לכל יום. הממשק מעוצב עם תמונות רקע מתחלפות בהתאם לתחזית`,
    demo: "https://weather-application-2023.onrender.com",
    github:"https://github.com/shlomi1998/Weather-Application",
  },
  {
    id: 7,
    category: "frontend",
    image: Image2,
    title: "Nike (Frontend)",
    desc: "אתר nike רספונסיבי שילוב של React+TypeScript+Tailwind+Vite",
    demo: "https://github.com/shlomi1998/Nike-Website-React.-TypeScript-Tailwind",
    github:
      "https://github.com/shlomi1998/Nike-Website-React.-TypeScript-Tailwind",
  },

  {
      id: 9,
      category: 'frontend',
      image: Image8,
      title:"Rummikub (Frontend)",
      desc: "מטרת המשחק היא להניח את כל אריחי המשחק הממוספרים על הלוח. את האריחים יש להניח ברצפים של מספרים עוקבים באותו הצבע או בקבוצות של מספרים זהים בצבעים שונים. היעזרו בג'וקר למילוי מקום וקחו אריחים מהקופה במידה ונתקעתם הקוד נכתב ב- TypeScript",
      demo: 'https://github.com/shlomi1998/rummikub',
      github: 'https://github.com/shlomi1998/rummikub'
  },

  {
      id: 2,
      category: 'frontend',
      image: Image9,
      title: "Chess (Frontend)",
      desc: "קצת לוגיקה  😊 אתר שחמט רספונסיבי שבנוי ב-React js (תזוזת השחקנים עובדת עם גרירה)",
      demo: 'https://chess-shlomi-a.onrender.com/',
      github: 'https://github.com/shlomi1998/chess'
  }
];

export default data;
