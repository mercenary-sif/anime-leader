import './header.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { opz , nodet , kutsho , unohana, nobara } from './import';
import { Homecard } from '../../Components';

const data =[
  {
    'Title': ' ثلاثي اقوى جهاز استخباراتي اقل من مستوى نائب اليونكو !',
    'Episode': '1116',
    'Publication': 'Review ch',
    'Anime': 'One Piece',
    'Introduction': '- يستمر جهاز المخابرات 0 و بالتحديد رقم اثنان كاكو بمواجهة احد قادة اليونكو ملك الجحيم و الجدير للملاحظة هو دخول كاكو مباشرة في اقوى طور له " الايقاظ " لمواجهة الوحش الذي قطعه قبل سنتين اين كان صيت طاقم ضعيفا جدا بالمقارنة بما هم عليه الآن !',
    'Cover': opz
  },
  {
    'Anime': 'Bleach',
    'Episode': '06',
    'Publication': 'Review ep',
    'Title': ' اس نوت  و فلسفة الخوف!',
    'Introduction': ' في صفوف جيش باخ و ربما باخ نفسه لا يمكن لأحد ان يقدم أداءا حواريا قويا و فلسفة عميقة جدا و ليست بعيدة ابدا عن الواقع كما فعل ايس نوت و شرحه لأسس اهم الغرائز الدفاعية لدى الإنسان - الغريزة التي اساسها شعور #الخوف ! ',
    'Cover': nodet
  },
  {
    'Anime': 'kemitsunoyaiba S4 ',
    'Episode': '3',
    'Publication': 'Review ep',
    'Title': ' - كوتشو شينوبو - قناع يتزعزع بقوة  امام تحالف غير سار !',
    'Introduction': '- اكتشاف المخبأ و توجيه دعوة مفاجئة و غير اعتيادية ابدا لإنشاء تحالف بين الصياد و الفريسة لصيد الملك الذي بدأ كل شيء ، بعد ان وجد مقر الاقامة بطريقة تجعله من أذكى العناصر في فرع الارسال المعلوماتي و التواصل لفليق الشياطين و حتما هو القائد على الفرع الذي عناصره هي طيور الغراب السوداء قدرته على الكلام غير طبيعية في عالم العمل بشكل عام فلم نشهد غرابا قادرا على التكلم بلغة الانسان من قبل لكن المفاجئ هو الاداء الصوتي الذي رفع قوة حضور هذا الطائر اذ ان مؤدي صوته هو المؤدي الشهير جدا في احد اقوى اعمال الأنمي بين الجيل القديم و المشهور بالمقولة المتداولة بشكل هائل : " كل هذا جزء من خطتي " - من خلال الصوت فقط حصل مجرد غراب على حضور  طاغي فخم فقط لأنه يتشارك الصوت مع ايزن سوسكي من أنمي بليتش ! بأي حال ليس هذا موضوعنا في هذا المقال القصير بل بطبيعة الطلب الذي اتى قائد الغربان حاملا اياه شخصيا لأحد الاشخاص التي تندرج و بكل تأكيد ضمن خانة الأعداء ! ',
    'Cover': kutsho
  },
  {
    'Anime': 'Bleach',
    'Episode': '07',
    'Publication': 'Article',
    'Title': ' -  الكينباتشي الأول : اونوهانا ياتشيرو !!',
    'Introduction': '- احد اعضاء الغوتي 13 الأصلية و قد ضاع صيتها بقوة حتى بين زمرة السفاحين هاته لتعرف بالشينيغامي الاكثر اجراما في تاريخ السول سوسايتي ، تتقن العديد من اساليب السيف و فن القتل و هو ما يدل عليه اسمها ياتشيرو : 8 آلاف اسلوب !',
    'Cover': unohana
  },
  {
    'Anime': 'Jujitsu Kaisen',
    'Episode': '07',
     'Publication': 'Article',
    'Title': ' -  نوبارا كوغيساكي!',
    'Introduction': '- شخصية نسائية ضمن ابطال القصة خرجت عن القالب المألوف الذي نراه بالشونين من صراخ و استنجاد ببطل القصة وسط المعارك و الحروب ، هدوء ، شجاعة ، تهور و عزيمة و غيرها من الصفات التي يتمتع بها اي شامان وسط هذه الحرب ، رغم انه عرض عليها فرصة للخروج و الهرب مبتعدة عن شيبويا رفقة المشرفين المصابين الا انها رفضت الانسحاب و عدم القيام بشيء بينما رفيقاها يقاتلان للموت ! ',
    'Cover': nobara
  }
]
const Header = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className : "slide",
    autoplay: true,
    speed: 250,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
    return (
      <div className='Leader__header section__pedding'>
      <Slider {...settings}>
      {
        data.map((item , i)=> 
          <Homecard key={i} imageUrl={item.Cover} Episode={item.Episode} 
        anime={item.Anime} Introduction={item.Introduction} Title={item.Title} Publication={item.Publication} />) 
      }
      </Slider>
    </div>
  )
}

export default Header