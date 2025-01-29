const soruListesi = [
    new Soru("1-Yağ pompasının pompaladığı yağı süzerek, içindeki yabancı maddeleri temizleyen yağlama sistemi parçası aşağıdakilerden hangisidir?", { A: "Enjektör", B: "Hava filtresi", C: "Yağ filtresi", D: "Yakıt filtresi"}, "C"),
    new Soru("2-Motordaki yağ basıncını sürücüye bildiren gösterge aşağıdakilerden hangisidir?", { A: "Yağ göstergesi", B: "Yakıt göstergesi", C: "Hararet göstergesi", D:"Motor devir göstergesi"}, "A"),
    new Soru("3-Motor çalıştığı hâlde akü şarj ikaz ışığı yanıyorsa sebebi aşağıdakilerden hangisidir?", { A: "Endüksiyon bobini arızalıdır", B: "Vantilatör kayışı gevşektir", C: "Marş motoru arızalıdır", D: "Akünün suyu fazladır"}, "B"),
    new Soru("4-Aşağıdaki taşıtların hangisinde takograf cihazının bulundurulması zorunlu değildir?", { A: "Çekici", B: "Otomobil", C: "Otobüs", D: "Kamyon"}, "B"),
    new Soru("5-Motor çalışmazken akünün görevi aşağıdakilerden hangisidir?", { A: "Aydınlatma sistemi ve özel alıcıları çalıştırmak", B: "Diferansiyeli çalıştırmak", C: "Yağlamayı sağlamak", D: "Vites kutusunu çalıştırmak"}, "A"),
    new Soru("6-Aşağıdakilerden hangisi abs fren sisteminin avantajlarından biri değildir?",{ A: "Kaygan zeminlerde aracın kaymasını önler", B: "Yol kontrolünü sağlar", C: "Aracın durma, manevra ve kararlılığını artırır", D: "Yakıt tüketimini azaltır"}, "D"),
    new Soru("7-Monoküler (tek gözü gören) kişiler, aşağıda verilen sürücü belgesi sınıflarından hangisini almak için başvuru yapabilir?", { A: "B", B: "C", C: "D", D: "E"}, "A"),
    new Soru("8-Aşağıdakilerden hangisi, delici karın yaralanmalarında yapılan doğru bir ilk yardım uygulamasıdır?", { A: "Enfeksiyonu engellemek için yara bölgesinin sıcak sabunlu su ile yıkanması", B: "Organlar dışarı çıkmış ise içeri sokulmayıp, üzerinin temiz ve nemli bir bez ile örtülmesi", C: "Kazazedenin bilinci yerinde ise yüz üstü pozisyonda yatırılması", D: "Sıvı kaybını önlemek için ağızdan ılık içecekler verilmesi"}, "B"),
    new Soru("9-Şok pozisyonunda hastanın ayaklarının yukarıya kaldırılmasının amacı nedir?", { A: "Sindirime yardımcı olmak", B: "Vücut sıcaklığını düşürmek", C: "Beyne yeterince kan gitmesini sağlamak", D: "Solunumun düzenli olmasını sağlamak"}, "C"),
    new Soru("10-Araçlar yüklenirken aşağıdakilerden hangisinin yapılması yasaktır?", { A: "Gabarinin aşınması", B: "Araç dengesinin korunması", C: "Trafik güvenliğinin dikkate alınması", D: "Taşıma sınırına ve dingil ağırlığına uyması"}, "A"),
    new Soru("11-Aşağıdakilerden hangisi, dış kanamalarda yapılacak ilk yardım uygulamalarındandır?", { A: "Uzuv kopması durumunda turnike uygulamaktan kaçınılması", B: "Kanama durmazsa ikinci bir bez koyarak basıncın arttırılması", C: "Kanayan yere en uzak basınç noktasına baskı uygulanması", D: "Kanayan bölgenin kalp hizasının altına indirilmesi"}, "B"),
    new Soru("12-Aşağıdakilerden hangisi geçiş üstünlüğüne sahip araçlardandır?", { A: "İtfaiye aracı", B: "Motosiklet", C: "Tarım traktörü", D: "Toplu taşıma aracı"}, "A"),
    new Soru("13-Bazı dış kanamalarda, yara üzerine basınç uygulamaktaki amaç aşağıdakilerden hangisidir?", { A: "Psikolojik destek sağlamak", B: "Yaralı bölgenin sıcaklığını korumak", C: "Damarı genişletip kan basıncının azalmasını sağlamak", D: "Damarı sıkıştırarak kanın dışarıya akmasını engellemek"}, "D"),
    new Soru("14-Delici karın yaralanması olan bir kazazedeye ilk yardım olarak aşağıdakilerden hangisinin yapılması yanlıştır?", { A: "Şoka karşı önlem alınması", B: "Yaşam bulgularının kontrol edilmesi", C: "Dışarı çıkan organlarının içeri sokulmaya çalışılması", D: "Bilinci yerinde ise bacakları bükülmüş olarak sırtüstü yatırılması"}, "C"),
    new Soru("15-İnsan vücudunda bulunan damarlarla ilgili olarak aşağıda verilen bilgilerden hangisi yanlıştır?", { A: "Atardamarlar, kanı kalpten dokulara taşır.", B: "Toplardamarlar, kanı kalpten vücuda taşır.", C: "Kılcal damarlardaki kan basıncı diğer damarlardakinden azdır.", D: "Atardamarlardaki kan basıncı, toplardamarlardakinden fazladır."}, "B"),
    new Soru("16-Aşağıdaki durumların hangisinde kazazedenin bacaklarının 30 cm yukarı kaldırılması doğru bir ilk yardım uygulamasıdır?", { A: "Şok durumu", B: "Beyin kanaması", C: "Ayak bölgesinden yılan sokması", D: "Akciğer zedelenmesi ve kanaması"}, "A"),
    new Soru("17-Aşağıdakilerden hangisi, marş motoruna ilk hareket için elektrik verir?", { A: "Akü", B: "Buji", C: "Distribütör", D: "Endüksiyon bobini"}, "A"),
    new Soru("18-Aşağıdakilerden hangisi motora ilk hareketi verir?", { A: "Konjektör", B: "Marş motoru", C: "Alternatör", D: "Şarj dinamosu"}, "B"),
    new Soru("19-Karlı ve buzlu yol kesimlerinde, araçların kaymasını önlemek amacıyla öncelikle motordan güç alan tekerleklerine, aşağıdakilerden hangisi takılır?", { A: "Çekme halatı", B: "Patinaj zinciri", C: "Hız sınırlayıcı cihaz", D: "Lastik basınç sensörü"}, "B"),
    new Soru("20-Egzoz emisyon ölçümünün yapılması, araçların çevreye verdiği zararlardan hangisini önlemeye yönelik bir uygulamadır?", { A: "Görüntü kirliliğini", B: "Gürültü kirliliğini", C: "Hava kirliliğini", D: "Su kirliliğini"}, "C"),
    new Soru("21-Buji kablolarından biri çıkmış ise motor nasıl çalışır?", { A: "Çalışmaz", B: "Sarsıntılı", C: "Sarsıntısız", D: "Yüksek rölantide"}, "B"),
    new Soru("22-Aşağıdakilerden hangisinin trafikteki araçlarda bulunması zorunludur?", { A: "Kasko poliçesi", B: "Yağ değişim kartı", C: "Araç tescil belgesi", D: "Periyodik bakım kartı"}, "C"),
    new Soru("23-Aşağıdakilerden hangisi ilk yardımın hedeflerinden biri değildir?", { A: "Şokun önlenmesi", B: "Bulaşıcı hastalıkların önlenmesi", C: "Acil yardım istenmesi", D: "Kanamanın durdurulması"}, "B"),
    new Soru("24-Trafikte heyecan ve zevk verici davranışları yapma eğiliminde olan bir sürücünün aşağıdaki davranışlardan hangisini gösterme olasılığı yüksektir?", { A: "Hız sınırına uyma", B: "Yayaya yol verme", C: "Trafik levhalarını okuma", D: "Sürekli şerit değitirerek araç kullanma"}, "D"),
    new Soru("25-Aşağıdakilerden hangisi burkulma belirtilerinden biri değildir?", { A: "Şişlik", B: "Kızarma", C: "İşlev kaybı", D: "Hareket ile azalan ağrı"}, "D"),
    new Soru("26-Okul taşıtının arkasındaki DUR işaretinin yandığını gören, arkadan gelen sürücü nasıl hareket etmelidir?", { A: "Aracını durdurmalıdır.", B: "Dikkatli ve yavaş geçmelidir.", C: "Diğer sürücüleri uyarmalıdır.", D: "Hızını artırarak uzaklaşmalıdır."}, "A"),
    new Soru("27-Aşağıdakilerden hangisi fren sisteminin görevlerinden biri değildir?", { A: "Duran aracı sabitlemek", B: "Aracın hızını düşürmek", C: "Aracın durma mesafesini artırmak", D: "Aracı güvenli bir şekilde durdurmak"}, "C"),
    new Soru("28-Bir sürücünün, emniyet kemeri kullanmaya özen göstermesinin esas nedeni ne olmalıdır?", { A: "Trafik kazalarında koruyucu önlem olarak görmek", B: "Araçta bulunan uyarı sistemini susturmak", C: "Denetimlerde problem yaşamamak", D: "Ceza almaktan çekinmek"}, "A"),
    new Soru("29-Araç ilk yardım çantasında bulunması gereken malzemenin miktarını etkileyen, aşağıdakilerden hangisidir?", { A: "Sürücünün isteği", B: "Aracın Büyüklüğü", C: "Taşınan yolcu sayısı", D: "Aracın yeniliği"}, "C"),
    new Soru("30-Marşa basıldığında motor dönüyor ancak çalışmıyorsa ilk olarak aşağıdakilerden hangisi kontrol edilmelidir?", { A: "Bujiler", B: "Akü suyu", C: "Motor yağ seviyesi", D: "Depodaki Yakıt seviyesi"}, "D"),
];
   
const quiz = new Quiz(soruListesi);
const ui = new UI();

ui.btnStart.addEventListener("click", function() {
    startTimer(10);
    startTimerLine();
    ui.quizBox.classList.add("active");
    ui.buttonBox.classList.remove("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btnNext.classList.remove("show");
});

ui.btnNext.addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex) {
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btnNext.classList.remove("show");
    } else {
        ui.scoreBox.classList.add("active");
        ui.quizBox.classList.remove("active");
        ui.skoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length);
    }
});

function optionSelected(e) {
    clearInterval(counter);
    clearInterval(counterLine);
    let selectedElement = e.target;

    if(selectedElement.nodeName == "SPAN") {
        selectedElement = selectedElement.parentElement;
    }
    const cevap = e.target.textContent[0];
    const soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1;
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        selectedElement.classList.add("incorrect");
        selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }

    quiz.soruIndex += 1;
    ui.disableAllOption();
    ui.btnNext.classList.add("show");
}

ui.btnQuit.addEventListener("click", function() {
    window.location.reload();
});

ui.btnReplay.addEventListener("click", function() {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    // start button
    ui.btnStart.click();
    ui.scoreBox.classList.remove("active");
});

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.timeSecond.textContent = time;
        time--;

        if(time < 0) {
            clearInterval(counter);
            ui.timeText.textContent = "Süre Bitti";

            ui.disableAllOption();
            quiz.soruIndex += 1;

            ui.btnNext.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 20);

    function timer() {
        line_width += 1;

        ui.timeLine.style.width = line_width + "px";

        if(line_width > 549) {
            clearInterval(counterLine);
        }
    }
}