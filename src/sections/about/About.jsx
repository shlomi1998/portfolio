import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/Shlomi_Azenkot_CV.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>קצת לגביי</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                שלום, שמי שלמה אזנקוט.

בוגר תואר ראשון בהצטיינות במדעי המחשב במכללת אשקלון. בנוסף, סיימתי בהצלחה קורס התמחות בפיתוח full stack במכללת INT.
                </p>
                <p>
                אני בעל ניסיון עשיר בפיתוח פרויקטים מקצה לקצה - החל משלבי התכנון והאפיון, דרך פיתוח הקוד והממשקים, ועד להטמעה והדרכה. שאפתנות, יצירתיות ואהבת העשייה מניעות אותי למצוינות בכל פרויקט שאני לוקח חלק בו.

אני בעל יכולת הסתגלות גבוהה לטכנולוגיות וסביבות עבודה חדשות, וידוע כמי שיודע להתמודד היטב עם אתגרים טכנולוגיים. כמו כן, אני מאופיין בדייקנות ושאיפה לפרפקציוניזם.

אשמח להצטרף לצוות שלכם ולתרום מהידע והניסיון שצברתי במהלך השנים בתחום הפיתוח. בטוחני כי אוכל לספק ערך רב לחברה, ולקדם את יעדיה ואתגריה הטכנולוגיים.


                </p>
                <a href={CV} download className='btn primary'> להורדת קורות החיים <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About