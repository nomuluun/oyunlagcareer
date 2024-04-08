const jobList = [
  {
    id: "job1",
    jobTitle: "Хот төлөвлөгч",
    aboutJob:
      "Хот суурин газрын тогтвортой, үйл ажиллагаатай, тохиромжтой амьдрах орчныг бүрдүүлэх зорилготой хот, орон нутгийн хөгжлийг тодорхойлдог. Хүн ам зүй, газар ашиглалт, тээврийн хэв маягийн талаар судалгаа, шинжилгээ хийж хот байгуулалтын цогц төлөвлөгөө, бүсчлэлийн зохицуулалтыг боловсруулан хөгжлийн санаачилгын байгаль орчинд үзүүлэх нөлөөллийг үнэлэж хямд үнэтэй орон сууц, тээврийн дэд бүтэц зэрэг хотын тулгамдсан асуудлыг шийдвэрлэх бодлогын зөвлөмж гаргадаг. Мөн хэрэгжилтэд хяналт тавьж, зохицуулалтын шаардлагуудын хэрэгжилтийг хангадаг.",
    type: "zugnugch",
    workingTime: "9:00-18:00",
    pros: [
      "том үр нөлөөтэй",
      "төрөл бүрийн туршлагатай болно",
      "асуудлыг бүтээлчээр шийднэ",
      "ажлын тогтвортой байдал",
    ],
    cons: [
      "асуудал шийдвэрлэхэд цаг их шаарддаг",
      "улс төрийн нөлөө их",
      "хязгаарлагдмал нөөц, санхүүжилттэй",
      "дарамт их",
    ],
    lesson: ["mat", "ski"],
    university: ["muis", "shutis", "hais"],
    img: "/svg/jobs/hottuluv.png"
  },
  {
    id: "job2",
    jobTitle: "сэргээгдэх эрчим хүчний инженер",
    aboutJob:
      "Сэргээгдэх эрчим хүчний инженерүүд салхи, нар, усан цахилгаан станц зэрэг тогтвортой эрчим хүчний системийг зохион бүтээж, хэрэгжүүлж, оновчтой болгодог. Тэд ТЭЗҮ-ийг хийж, зохицуулалтын хэрэгжилтийг хангаж, төслийг төлөвлөхөөс эхлээд хэрэгжүүлэх хүртэл удирддаг. Сэргээгдэх нөөцийг ашигласнаар чулуужсан түлшний хамаарлыг бууруулах, уур амьсгалын өөрчлөлтийг бууруулах, Монгол Улсын эрчим хүчний тогтвортой байдлыг дэмжихэд хувь нэмрээ оруулдаг. ",
    type: "zugnugch",
    workingTime: "9:00-18:00",
    pros: [
      "Тогтвортой хөгжилд оруулах хувь нэмэр их",
      "Сүүлийн үеийн технологитой ажиллана",
      "Олон улсын чадвартай болно",
      "Эрэлт ихтэй",
    ],
    cons: [
      "Найдвартай байдал бага",
      "Нөөциийн хувьд хязгаарлагдмал",
      "Техникийн төвөгтэй байдал их",
      "Санхүүгийн дэмжлэг их шаардагдана",
    ],
    lesson: ["mat", "phy", "eng"],
    university: ["muis", "shutis", "hais"],
    img: "/svg/jobs/sergegdeh.png"
  },
  {
    id: "job3",
    jobTitle: "хиймэл оюун ухаан хөгжүүлэгч",
    aboutJob:
      "Хиймэл оюун ухаан хөгжүүлэгчид нарийн төвөгтэй асуудлуудыг шийдвэрлэх, шинэлэг шийдлүүдийг боловсруулахад хиймэл оюун ухаан, машин сургалтын арга техникийг ашиглах үүрэгтэй. Өгөгдөлтэй ажиллан шийдвэр гаргах үйл явцыг сайжруулах алгоритм, загвар зохион бүтээж хөгжүүлдэг. Үүний тулд Python, Java, C++ зэрэг хэлээр програмчлах, өгөгдөлд дүн шинжилгээ хийх, урьдчилан боловсруулах, үнэлэх, бэлтгэгдсэн загваруудыг үйлдвэрлэлийн орчинд байрлуулах зэрэг зүйлсийг хийнэ. Мөн хиймэл оюун ухааны шийдлүүдийг програм эсвэл системд нэгтгэхийн тулд хөндлөнгийн багуудтай хамтран ажилладаг. ",
    type: "zugnugch",
    workingTime: "9:00-18:00",
    pros: [
      "Хамгийн сүүлийн үеийн, хурдацтай хөгжиж буй салбар",
      "Дэлхийд эрэлттэй",
      "Цалин өндөр",
      "Хэрэглээ их",
    ],
    cons: [
      "Олон төрлийн чадвар шаардагдана",
      "Нарийн төвөгтэй байдал их",
      "Технологийн хурдацтай өөрчлөлтөөс болж олон өөрчлөлт шаардагдана",
    ],
    lesson: ["mat", "phy", "eng"],
    university: ["muis", "shutis", "hais"],
    img: "/svg/jobs/ai hugjulegch.png"
  },
  {
    id: "job4",
    jobTitle: "маркетинг",
    aboutJob:
      "Маркетингийн мэргэжилтнүүд нь зар сурталчилгаа, олон нийттэй харилцах, дижитал медиа гэх мэт янз бүрийн сувгаар дамжуулан зорилтот үзэгчдэд бүтээгдэхүүн, үйлчилгээ, санаагаа сурталчилдаг. Тэд зах зээлийн судалгаа хийж, стратеги боловсруулж, кампанит ажил явуулж, олон нийттэй харилцах харилцааг удирдаж, борлуулалт, брэндийн мэдлэгийг дээшлүүлэхийн тулд хэрэглэгчийн зан төлөвт дүн шинжилгээ хийдэг.",
    type: ["chigluulegch", "huviaraa"],
    workingTime: "9:00-18:00",
    pros: ["Төрөл бүрийн боломжоор дүүрэн", "Өндөр орлого", "Хөрвөх боломж их"],
    cons: [
      "Өрсөлдөөн их",
      "Дарамт их",
      "Ажлын цаг их",
      "Нийгмийн сонирхол хурдацтай өөрчлөгддөг",
    ],
    lesson: ["mat", "eng"],
    university: ["sezis", "muis", "shutis"],
    img: "/svg/jobs/market.png"
  },
  {
    id: "job5",
    jobTitle: "улс төрч",
    aboutJob:
      "Улс төрчид хууль тогтоох, сонгогчдын эрх ашгийг төлөөлөх, бодлого боловсруулах, дипломат үйл ажиллагаа явуулах, төрийн үйл ажиллагаанд хяналт тавих зэрэг ажлыг хийдэг. Тэд хууль боловсруулж, иргэдийн санал хүсэлтийг шийдвэрлэж, бодлого хэрэгжүүлж, Монгол Улсыг олон улсад төлөөлж, засаглалын хариуцлагатай байдлыг хангадаг.",
    type: "zahiragch",
    workingTime: "",
    pros: [
      "Ард түмний эрх ашиг, дуу хоолойг илэрхийлж, хүн амд тустай бодлогыг сурталчлах боломжтой.",
      "Олон улсын тавцанд Монгол Улсыг төлөөлж, дипломат үйл ажиллагаа явуулж, бусад улс оронтой харилцаа холбоо тогтоодог.",
      "Зөв бодлого, хөрөнгө оруулалтаар эдийн засгийн өсөлт, хөгжлийг бий болгож чадна.",
    ],
    cons: [
      "Авлига нь улс төрчдийн дунд асуудал болж, төрд итгэх итгэлийг бууруулж, хөгжилд саад учруулдаг.",
      "Байнга олон нийтийн хяналтад байдаг бөгөөд үйлдэл, шийдвэр нь иргэд болон хэвлэл мэдээллийн байгууллагуудын хүчтэй шүүмжлэлд өртдөг.",
      "Хувийн аюулгүй байдал сул",
      "Стресс, ажлын ачаалал их",
    ],
    lesson: ["soc", "mon"],
    university: ["muis", "shutis", "mubis", "hais"],
    img: "/svg/jobs/ulsturch.png"
  },
  {
    id: "job6",
    jobTitle: "найруулагч",
    aboutJob:
      "Найруулагч кино, телевиз, тайзны бүтээлийг удирдан чиглүүлж, уран сайхны алсын харааг бүрдүүлж, логистикийг удирдан чиглүүлдэг. Тэд багуудтай хамтран ажиллаж, бүтээлч шийдвэр гаргаж, зохиолоос эхлээд дэлгэцийн бүтээл хүртэлх бүхий л үйл явцыг хянадаг. Тэд олон цагаар ажилласнаар төслүүдийг хуваарийн дагуу, төсөвт багтааж, урлагийн болон арилжааны амжилтанд хүрэхийг зорьдог.",
    type: " zahiragch",
    workingTime: "",
    pros: [
      "Салбарын авъяаслаг мэргэжилтнүүдтэй хамтран ажиллах боломжтой",
      "Хийсэн ажлаараа хүлээн зөвшөөрөгдөж нэр хүндтэй болно.",
      "Өөрийн санаагаа дэлгэц эсвэл тайзан дээр хэрэгжүүлэх боломжтой.",
    ],
    cons: [
      "Их стресс, шахуу цагийн хуваарьтай",
      "Санхүүгийн хувьд эрсдэлтэй",
      "Үл ойлголцол, зөрчилдөөн их гардаг.",
    ],
    lesson: ["soc", "mon", "ski"],
    university: ["", "", "",""],
    img: "/svg/jobs/nairu.png"
  },
  {
    id: "job7",
    jobTitle: "сувилагч",
    aboutJob:
      "Эрүүл мэндийн орчинд өвчтөнд эмнэлгийн тусламж, дэмжлэг үзүүлж, эмч нарт тусалж, эмчилгээ хийдэг.",
    type: "sanaa tavigch",
    workingTime: "",
    pros: [
      "Өвчтөнүүдийн амьдралд эерэг нөлөө үзүүлэх боломж.",
      "Тогтвортой ажлын хэтийн төлөв, албан тушаал ахих боломж.",
      "Шаардлагатай хүмүүст шууд тусламж, дэмжлэг үзүүлэх ажлыг гүйцэтгэх.",
    ],
    cons: [
      "Биеийн болон сэтгэл санааны хувьд хүнд ажил.",
      "Халдварт өвчин, өндөр стресстэй нөхцөл байдалд өртөх.",
      "Ээлжийн ажил нь ажил амьдралын тэнцвэрт байдлыг алдагдуулж болзошгүй.",
    ],
    lesson: ["chem", "bio"],
    university: ["ashius", "muis", "shutis"],
    img: "/src/jobs/suvilagch.png"
  },
  {
    id: "job8",
    jobTitle: "эх баригч",
    aboutJob:
      "Жирэмсэн эх, нярайд анхаарал халамж тавих, жирэмслэлт, төрөлт, төрсний дараах нөхөн сэргээхэд дэмжлэг үзүүлэх чиглэлээр мэргэшсэн.",
    type: "sanaa tavigch",
    workingTime: "",
    pros: [
      "Онцгой цаг үед жирэмсэн эхчүүд болон нярайд дэмжлэг үзүүлэх боломж.",
      "Төрөлт болон төрсний дараах үеийн тусламж үйлчилгээний бэрхшээлийг даван туулахад гэр бүлүүдэд туслах урамшуулах ажил.",
      "Эх нялхсын эрүүл мэндийг дэмжих ажлын сэтгэл ханамж.",
    ],
    cons: [
      "Ялангуяа хүндрэл, алдагдал гарсан тохиолдолд сэтгэл хөдлөлийг шаарддаг.",
      "Шөнийн ээлжийг оруулаад тогтмол бус цаг.",
      "Эх, нярайн тусламж үйлчилгээний талаар тусгайлсан сургалт, мэдлэг шаарддаг.",
    ],
    lesson: ["chem", "bio"],
    university: ["ashius", "muis", "shutis"],
    img: "/svg/jobs/ehbarigch.png"
  },
  {
    id: "job9",
    jobTitle: "сэтгэл зүйч",
    aboutJob:
      "Хувь хүн, хосууд, гэр бүлүүдэд сэтгэл санааны болон сэтгэл зүйн бэрхшээлийг шийдвэрлэхэд нь туслах зөвлөгөө, сэтгэцийн эрүүл мэндийн дэмжлэг үзүүлдэг.",
    type: "sanaa tavigch",
    workingTime: "",
    pros: ["Хувь хүний ​​сэтгэцийн эрүүл мэнд, сайн сайхан байдлыг сайжруулахад туслах.", "Ажлын уян хатан байдал.", "Үйлчлүүлэгчдийн хувийн өсөлтийг дэмжих ажил мэргэжлийн урамшуулал."],
    cons: ["Сэтгэл хөдлөлөө шавхах ажил.", "Байнгын боловсрол, сургалт шаардлагатай.", "Сэтгэцийн эрүүл мэндийн үйлчилгээний хязгаарлагдмал даатгалд хамрагдах."],
    lesson: ["soc", "mat", "mon", "eng"],
    university: ["ashius", "muis", "shutis"],
    img: "/svg/jobs/setgelzuich.png"
  },
  {
    id: "job10",
    jobTitle: "хүний нөөц",
    aboutJob:
      "Байгууллагуудын боловсон хүчний асуудал, үүнд ажилд авах, ажилчдын харилцаа, сургалт, тэтгэмжийн удирдлага зэрэг асуудлыг удирдан чиглүүлдэг.",
    type: "hyanagch",
    workingTime: "",
    pros: ["Байгууллагын соёл, хөгжлийг төлөвшүүлэх.", "Төрөл бүрийн карьерын боломжууд.", "Ажилчдын сайн сайхан байдлыг дэмжих бодлогыг хэрэгжүүлэхэд үзүүлэх нөлөө."],
    cons: ["Захиргааны дарамт.", "Зөрчилдөөн, гомдлыг шийдвэрлэх.", "Байгууллагын зорилготой ажилчдын хэрэгцээг тэнцвэржүүлэх."],
    lesson: ["mat", "soc", "eng"],
    university: ["muis", "sezis", "shutis"],
    img: "/svg/jobs/nuuts.png"
  },
  {
    id: "job11",
    jobTitle: "зураг аваач",
    aboutJob:
      "Кино, баримтат кино, видео бүтээж, зохиол бичих, найруулах, найруулах, монтаж хийх хүртэлх бүхий л үйл ажиллагааг хянадаг.",
    type: "hugjuugch",
    workingTime: "",
    pros: ["Хүлээн зөвшөөрөгдөх, сайшаагдах боломжууд.", "Бүтээлч илэрхийлэл, түүхийг өгүүлэх.", "Уран бүтээлийн хамтын ажиллагаа, сүлжээ."],
    cons: ["Санхүүгийн тодорхойгүй байдал ба өрсөлдөөн.", "Олон цаг, өндөр стресс.", "Бүтээлч ялгаа ба буулт."],
    lesson: ["mon", "soc", "ski"],
    university: ["suis", "muis", "shutis"],
    img: "/svg/jobs/zurgavgch.png"
  },
  {
    id: "job12",
    jobTitle: "дуучин",
    aboutJob:
      "Гоцлол тоглолтоос эхлээд поп, ардын, сонгодог урлаг гэх мэт төрөл бүрийн төрлөөр уран бүтээлээ туурвиж, дууны тоглолтоороо үзэгчдийг баясгадаг.",
    type: "hugjuugch",
    workingTime: "",
    pros: ["Хөгжмийн авьяас, хүсэл тэмүүллийг хуваалцах.", "Хүлээн зөвшөөрөх боломж.", "Уран сайхны илэрхийлэл хийх боломжууд."],
    cons: ["Өрсөлдөхүйц салбар.", "Урьдчилан таамаглах боломжгүй орлого.", "Сэтгэл зүйн дарамт их."],
    lesson: ["mon", "soc", "ski"],
    university: ["muis", "suis", "shutis"],
    img: "/svg/jobs/duuchn.png"
  },
  {
    id: "job13",
    jobTitle: "бүжигчин",
    aboutJob:
      "Уламжлалт болон орчин үеийн хэв маягаар бүжиг дэглээч, соёлын өв, урлагийн илэрхийлэлийг харуулдаг.",
    type: "hugjuugch",
    workingTime: "",
    pros: ["Хөдөлгөөнөөр дамжуулан уран сайхны илэрхийлэл.", "Биеийн тамир, бие бялдар.", "Аялал, соёлын солилцоо хийх боломжууд."],
    cons: ["Биеийн ачаалал ихтэй.", "Өрсөлдөөнт талбар.", "Санхүүгийн тогтворгүй байдал."],
    lesson: ["mon", "soc", "ski"],
    university: ["suis", "muis", "shutis"],
    img: "/svg/jobs/bujigchn.png"
  },
  {
    id: "job14",
    jobTitle: "бизнесийн удирдагч",
    aboutJob:
      "Бизнес эрхэлж, аж ахуйн нэгж байгуулан удирдаж, ашиг орлого олж, эдийн засгийн өсөлтөд хувь нэмрээ оруулдаг.",
    type: "huviaraa",
    workingTime: "",
    pros: ["Амжилттай аж ахуйн нэгжүүдийг байгуулж, тэргүүлэх.", "Санхүүгийн урамшуулал ба бие даасан байдал.", "Шийдвэр гаргахад хараат бус байх."],
    cons: ["Амжилтгүй болох өндөр эрсдэлтэй.", "Олон цаг, стресс.", "Ажилчдын амьжиргааг хариуцах."],
    lesson: ["mat", "soc", "eng"],
    university: ["muis", "sezis", "shutis"],
    img: "/svg/jobs/bisnes.png"
  },
  {
    id: "job15",
    jobTitle: "компьютерийн сүлжээ",
    aboutJob:
      "Компьютерийн технологи, программ хангамж, алгоритмыг судалж, хөгжүүлж, хиймэл оюун ухаан, кибер аюулгүй байдал зэрэг салбарын нарийн төвөгтэй асуудлыг шийддэг.",
    type: "bodogch",
    workingTime: "",
    pros: ["Инноваци, асуудлыг шийдвэрлэх чадвартай.", "Өндөр эрэлт, өрсөлдөх чадвартай цалин.", "Төрөл бүрийн карьерын боломжууд."],
    cons: ["Тасралтгүй суралцах шаардлагатай хурдацтай хөгжиж буй салбар.", "Олон цагаар ажиллах, өндөр даралттай орчинд.", "Ёс суртахууны үүднээс авч үзэх, буруугаар ашиглах боломж."],
    lesson: ["mat", "phy", "eng"],
    university: ["shutis", "muis", "mvis"],
    img: "/svg/jobs/comsulje.png"
  },
  {
    id: "job16",
    jobTitle: "биохимич",
    aboutJob:
      "Амьд организмын доторх химийн процесс, бодисыг судалж, генетик, анагаах ухаан, биотехнологи зэрэг чиглэлээр мэдлэгийг дээшлүүлэх зорилгоор судалгаа хийдэг.",
    type: "bodogch",
    workingTime: "",
    pros: ["Шинжлэх ухааны судалгааны дэвшил.", "Оюуны сорилт, нээлт.", "Ажил мэргэжлийн хувьд өсөх боломж."],
    cons: ["Ажлын боломж хязгаарлагдмал өрсөлдөөнт талбар.", "Санхүүжилтийн хязгаарлалт, тодорхойгүй байдал.", "Нарийвчилсан боловсрол, судалгаа шаардлагатай."],
    lesson: ["bio", "mat"],
    university: ["shutis", "muis"],
    img: "/svg/jobs/biohimich.png"
  },
  {
    id: "job17",
    jobTitle: "философич",
    aboutJob:
      "Оршихуй, мэдлэг, ёс зүй, нийгмийн талаархи үндсэн асуултуудыг судалж, оюуны яриа, эрдэм шинжилгээний судалгаанд хувь нэмрээ оруулдаг.",
    type: "bodogch",
    workingTime: "",
    pros: ["Үндсэн асуултуудын араас хөөцөлдөж байна.", "Оюуны эрх чөлөө, нөлөөлөл.", "Нийгэмд үзүүлэх нөлөө."],
    cons: ["Академиас гадуур ажиллах боломж хязгаарлагдмал.", "Санхүүгийн аюулгүй байдал бага.", "Онолыг практик хэрэглээтэй холбоход бэрхшээлтэй."],
    lesson: ["soc", "eng"],
    university: ["muis", "humuunleg", "suis", "ashius"],
    img: "/svg/jobs/phil.png"
  },
  {
    id: "job18",
    jobTitle: "график дизайнер",
    aboutJob:
      "Компьютерийн программ хангамж, уран сайхны ур чадвар ашиглан зар сурталчилгаа, вэб сайт, хэвлэл зэрэг төрөл бүрийн мэдээллийн хэрэгслээр визуал ойлголт, дизайныг бүтээдэг.",
    type: "uran buteelch",
    workingTime: "",
    pros: ["Бүтээлч илэрхийлэл, дүрслэлийн харилцаа холбоо.", "Төрөл бүрийн ажил мэргэжлийн боломж.", "Төрөл бүрийн салбарт эрэлт ихтэй."],
    cons: ["Хатуу хугацаа, өндөр даралттай орчин.", "Субъектив байдал, үйлчлүүлэгчийн хүсэл сонирхол.", "Сурах, дасан зохицох байнгын хэрэгцээ."],
    lesson: ["mat", "eng", "ski"],
    university: ["suis", "muis", "shutis"],
    img: "/svg/jobs/graphic.png"
  },
  {
    id: "job19",
    jobTitle: "гар урлаач",
    aboutJob:
      "Уламжлалт урлал, соёлын өвийг хадгалан нэхмэл эдлэл, керамик, модон эдлэл зэрэг гар урлалын бүтээгдэхүүн үйлдвэрлэдэг.",
    type: "darhan",
    workingTime: "",
    pros: ["Соёлын өвийг хамгаалах.", "Уран сайхны илэрхийлэл.", "Бизнес эрхлэх боломж."],
    cons: ["Зах зээлийн эрэлт хэрэгцээ хязгаарлагдмал.", "Санхүүгийн тогтворгүй байдал.", "Биеийн ачаалал."],
    lesson: ["mon", "soc", "ski"],
    university: ["suis", "muis", "shutis"],
    img: "/svg/jobs/garurlaach.png"
  },
  {
    id: "job20",
    jobTitle: "архетиктур",
    aboutJob:
      "Барилга байгууламжийн дизайныг гоо зүйн үзэмжийг функциональ байдал, аюулгүй байдалтай хослуулж, амьдрах, ажиллах, амрах орон зайг бий болгодог.",
    type: "darhan",
    workingTime: "",
    pros: ["Функциональ болон гоо зүйн бүтцийг төлөвлөх.", "Нийгэмд үзүүлэх нөлөө.", "Хамтран ажиллах боломж."],
    cons: ["Олон цаг, ачаалал ихтэй.", "Хариуцлага, зохицуулалтын хязгаарлалт.", "Эрэлтэд нөлөөлж буй эдийн засгийн уналт."],
    lesson: ["mat", "ski"],
    university: ["shutis", "muis", "mvis"],
    img: "/svg/jobs/architect.png"
  },
  {
    id: "job21",
    jobTitle: "барилгын инженер",
    aboutJob:
      "Зам, гүүр, барилга байгууламж зэрэг барилгын төслүүдийг төлөвлөж, зураг төсөл боловсруулж, хяналт тавьж, дэд бүтцийг техникийн болон зохицуулалтын стандартад нийцүүлэн хангадаг.",
    type: "darhan",
    workingTime: "",
    pros: ["Дэд бүтэц, амьдралын чанарыг сайжруулах.", "Асуудлыг шийдвэрлэх, инноваци хийх.", "Ажил мэргэжлийн өсөлтийн боломжууд."],
    cons: ["Аюултай орчинд өртөх.", "Олон цагаар ажиллаж, эцсийн хугацааг шаарддаг.", "Техникийн мэдлэгийг төсвийн хязгаарлалттай тэнцвэржүүлэх."],
    lesson: ["mat", "phy"],
    university: ["shutis", "muis", "mvis"],
    img: "/svg/jobs/barilgaenginer.png"
  },
  {
    id: "job22",
    jobTitle: "хэрэглээний математикч",
    aboutJob:
      "Физик, инженерчлэл, санхүү, криптограф зэрэг салбарт судалгаа хийж, математикийн зарчмуудыг ашигладаг.",
    type: "stra",
    workingTime: "",
    pros: ["Оюуны сорилт, асуудлыг шийдвэрлэх.", "Төрөл бүрийн салбарт оруулсан хувь нэмэр.", "Эрдэм шинжилгээ хийх, багшлах боломж."],
    cons: ["Академиас гадуур ажиллах боломж хязгаарлагдмал.", "Өрсөлдөөнт эрдэм шинжилгээний орчин.", "Боловсрол, судалгааны байнгын хэрэгцээ."],
    lesson: ["mat", "phy"],
    university: ["shutis", "muis", "mubis"],
    img: "/svg/jobs/maths.png"
  },
  {
    id: "job23",
    jobTitle: "эдийн засагч",
    aboutJob:
      "Эдийн засгийн мэдээлэл, чиг хандлагад дүн шинжилгээ хийж, засгийн газрын бодлого, бизнесийн шийдвэр, санхүүгийн стратегид тусгахын тулд ойлголт, таамаглал дэвшүүлдэг.",
    type: "stra",
    workingTime: "",
    pros: ["Эдийн засгийн мэдээлэлд дүн шинжилгээ хийж, бодлого мэдээлэл өгөх.", "Төрийн бодлого, бизнесийн стратегид үзүүлэх нөлөө.", "Төрөл бүрийн салбарт ажиллах боломж."],
    cons: ["Эдийн засгийн таамаглал тодорхойгүй байна.", "Олон цагаар ажиллах, өндөр даралттай орчинд.", "Онолыг практик хэрэглээтэй тэнцвэржүүлэх."],
    lesson: ["mat", "eng", "phy"],
    university: ["muis", "sezis", "shutis"],
    img: "/svg/jobs/edzasag.png"
  },
  {
    id: "job24",
    jobTitle: "цахилгааны инженер",
    aboutJob:
      "Эрчим хүч үйлдвэрлэх, дамжуулах, түгээх сүлжээ зэрэг цахилгааны систем, тоног төхөөрөмжийн зураг төсөл боловсруулах, хөгжүүлэх, засвар үйлчилгээ хийдэг.",
    type: "stra",
    workingTime: "",
    pros: ["Цахилгааны систем, технологийг хөгжүүлэх.", "Инноваци хийх боломжууд.", "Төрөл бүрийн салбарт эрэлт ихтэй."],
    cons: ["Систем, технологийн нарийн төвөгтэй байдал.", "Ажлын байрны аюулын эрсдэл.", "Төслийн эцсийн хугацааг биелүүлэх дарамт."],
    lesson: ["mat", "phy"],
    university: ["shutis", "muis", "gmit"],
    img: "/svg/jobs/tsahilganenginer.png",
  },
  {
    id: "job25",
    jobTitle: "аялал жуучлагч",
    aboutJob:
      "Хувь хүн болон бүлэг хүмүүст нислэг, буудал, аялал, унаа зэрэг аялалын зохион байгуулалтыг төлөвлөх, захиалахад тусалдаг.",
    type: "zuvlugch",
    workingTime: "",
    pros: ["Үйлчлүүлэгчдэд аяллын туршлагаа төлөвлөхөд нь туслах.", "Уян хатан байдал, алсаас ажиллах боломжтой.", "Аялал жуулчлалын хөнгөлөлт, урамшуулал."],
    cons: ["Шимтгэлд суурилсан орлого.", "Борлуулалтын зорилтот түвшинд хүрэх дарамт.", "Үйлчлүүлэгчийн сэтгэл ханамжийн өндөр хариуцлага."],
    lesson: ["geo", "eng"],
    university: ["muis", "shutis", "mvis"],
    img: "/svg/jobs/aylal.png"
  },
  {
    id: "job26",
    jobTitle: "кибер аюулгүй байдал хангагч",
    aboutJob:
      "Компьютерийн систем, сүлжээ, өгөгдлийг кибер аюул, халдлагаас хамгаалж, тоон хөрөнгийг хамгаалахын тулд аюулгүй байдлын арга хэмжээ, протоколуудыг хэрэгжүүлдэг.",
    type: "ajiglagch",
    workingTime: "",
    pros: ["Байгууллагуудыг кибер аюулаас хамгаалах.", "Ур чадварын эрэлт хэрэгцээ өндөр.", "Ажил албан тушаал ахих боломжтой."],
    cons: ["Тасралтгүй суралцах хэрэгцээ.", "Аюулгүй байдлын ослын үед өндөр даралттай орчин.", "Ёс суртахууны асуудал, хууль эрх зүйн үр дагавар."],
    lesson: ["soc", "bio"],
    lesson: ["mat", "phy", "eng"],
    university: ["shutis", "muis", "mvis"],
    img: "/svg/jobs/cyber.png"
  },
  {
    id: "job27",
    jobTitle: "архелогич",
    aboutJob:
      "Олдвор, археологийн дурсгалт газруудад малтлага хийх, шинжлэх, тайлбарлах замаар өнгөрсөн үеийн хүн төрөлхтний нийгэм, соёлыг судалдаг.",
    type: "ajiglagch",
    workingTime: "",
    pros: ["Соёлын өвийг олж илрүүлэх, хамгаалах.", "Янз бүрийн байршилд хээрийн ажил.", "Судалгаа, боловсролд оруулсан хувь нэмэр."],
    cons: ["Хязгаарлагдмал ажлын байр, санхүүжилт.", "Малтлагын биет шаардлага.", "Өрсөлдөөнт эрдэм шинжилгээний орчин."],
    university: ["muis", "humuunleg", "suis"],
    img: "/svg/jobs/arhi.png"
  },
  {
    id: "job28",
    jobTitle: "нано инженер",
    aboutJob:
      "Электроник, анагаах ухаан, сэргээгдэх эрчим хүч зэрэг салбарт шинэ технологи, хэрэглээг бий болгохын тулд материалыг нано хэмжүүрээр удирддаг.",
    type: "ajiglagch",
    workingTime: "",
    pros: ["Технологи, инновацийн дэвшил.","Янз бүрийн салбарт нээлт хийх боломж.","Салбар хоорондын судалгаа хийх боломж."],
    cons: ["Хязгаарлагдмал ажлын байр.","Үнэтэй тоног төхөөрөмж, тоног төхөөрөмж.","Ёс зүй, аюулгүй байдлын асуудал."],
    lesson: ["mat", "chem", "phy"],
    university: ["shutis", "muis", "gmit"],
    img: "/svg/jobs/nanoenginer.png"
  },
];
const lesson = [
  {
    lessonId: "mat",
    lessonName: "Математик",
    img:"/svg/subject/mat.png"
  },
  {
    lessonId: "eng",
    lessonName: "Англи хэл",
    img:"/svg/subject/eng.png"
  },
  {
    lessonId: "bio",
    lessonName: "Биологи",
    img:"/svg/subject/bio.png"
  },
  {
    lessonId: "chem",
    lessonName: "Хими",
    img:"/svg/subject/chem.png"
  },
  {
    lessonId: "phy",
    lessonName: "Физик",
    img:"/svg/subject/phy.png"
  },
  {
    lessonId: "Geo",
    lessonName: "Газарзүй",
    img:"/svg/subject/geo.png"
  },
  {
    lessonId: "Mon",
    lessonName: "Монгол хэл",
    img:"/svg/subject/mon.png"
  },
  {
    lessonId: "soc",
    lessonName: "Нийгмийн ухаан",
    img:"/svg/subject/soc.png"
  },
  {
    lessonId: "his",
    lessonName: "Түүх",
    img:"/svg/subject/his.png"
  },
  {
    lessonId: "rus",
    lessonName: "Орос хэл",
    img:"/svg/subject/rus.png"
  },
  {
    lessonId: "ski",
    lessonName: "Ур чадвар",
  },
];
const uni = [
  {
    uniId: "muis",
    uniName: "МУИС",
  },
  {
    uniId: "shutis",
    uniName: "ШУТИС",
  },
  {
    uniId: "sezis",
    uniName: "СЭЗИС",
  },
  {
    uniId: "mubis",
    uniName: "МУБИС",
  },
  {
    uniId: "hais",
    uniName: "ХААИС",
  },
  {
    uniId: "bhis",
    uniName: "БХИС",
  },
  {
    uniId: "ashius",
    uniName: "АШУҮИС",
  },
  {
    uniId: "humuunleg",
    uniName: "ХУИС",
  },
  {
    uniId:"mvis",
    uniName: "МҮИС",
  }
];
const careerTestData = [
  {
    que: "Ямар нэг үдэшлэг, олон нийтийн арга хэмжээнд ",
    a1: "шинэ хүмүүстэй танилцах нь дээр ",
    a2: "ганцаараа эсвэл дотны хэдэн найзтайгаа байсан нь дээр",
    score: [
      [2, 4, 3.5, 3, 1, 1, 1, 1, 5, 5, 5, 4, 4, 3.5, 2, 4],
      [4, 2, 2, 3, 5, 5, 5, 4, 3.5, 1, 1, 3, 2, 3, 4, 1],
    ],
  },
  {
    que: "Аль нь илүү сонирхолтой вэ? ",
    a1: "бодит амьдрал, шинжлэх ухаан, түүхийн талаар судлах",
    a2: "янз янзын боломжуудыг төсөөлж шинэ санаа гаргах",
    score: [
      [4, 3, 3, 5, 1, 1, 1, 3, 3, 2, 4, 3, 3, 4, 3, 3],
      [3, 4, 3, 1, 5, 5, 5, 3, 3, 5, 2, 3, 3, 3, 5, 3],
    ],
  },
  {
    que: "Шийдвэр гаргахдаа юун дээр тулгуурладаг вэ?",
    a1: "логиктойгоор хамгийн утга учиртайг нь сонгодог ",
    a2: "бусдын болон өөрийнхөө мэдрэмж дээр тулгуурлаж сонгодог",
    score: [
      [4, 2, 5, 5, 2, 2, 3, 5, 5, 2, 2, 4, 2, 5, 2, 5],
      [1, 4, 1, 2, 4, 4, 3, 2, 2, 4, 4, 2, 5, 1, 5, 1],
    ],
  },
  {
    que: "Санал хүсэлт өгөхдөө",
    a1: "үнэнээр, нөхцөл байдалд тус болох зүйл хэлдэг",
    a2: "бусдын сэтгэлийг бодож магтдаг",
    score: [
      [4, 2, 5, 5, 3, 3, 3, 4, 5, 2, 3, 4, 2, 4, 3, 5],
      [2, 4, 1, 1, 3, 4, 4, 2, 2, 4, 3, 2, 4, 2, 3, 1],
    ],
  },
  {
    que: "Юунаас илүү энерги авдаг вэ? ",
    a1: "шинэ зүйл, адал явдал",
    a2: "юм бодож, амрах чимээгүй орчин",
    score: [
      [2, 3, 2.5, 3, 2, 4, 2, 2, 3, 5, 3, 2.5, 3, 3.5, 2, 4],
      [4, 3, 3.5, 3, 5, 1.5, 5, 5, 4, 1, 3, 3.5, 4, 2.5, 4, 2],
    ],
  },
  {
    que: "Шинэ нөхцөл байдал ямар байвал дээр вэ?",
    a1: "өмнө хийж байсан зүйлтэй ойролцоо, тухтай мэдрэмж өгч байвал",
    a2: "шинэ зүйлээр дүүрэн, догдлуулж байвал",
    score: [
      [3.5, 3.5, 3.5, 3.5, 3, 1, 2.5, 3.5, 2, 2, 2, 4, 4, 2.5, 2, 2.5],
      [2.5, 2.5, 2.5, 2.5, 4, 5, 3.5, 2.5, 4, 4, 4, 2, 2, 3.5, 4, 3.5],
    ],
  },
  {
    que: "Аливаа зүйлийн эцсийн хугацааг хэрхэн хүргэдэг вэ?",
    a1: "урьдчилан төлөвлөж, төлөвлөгөөний дагуу ",
    a2: "уян хатан байж, урсгалаар нь ",
    score: [
      [4, 3, 3, 5, 5, 4, 3, 5, 5, 3, 2, 4, 3, 4, 3, 5],
      [3, 3, 3, 1, 2, 2, 5, 1, 2, 3, 4, 1, 3, 3, 5, 4],
    ],
  },
  {
    que: "Асуудалтай тулгарсан үед ямар хандлагатай байдаг вэ? ",
    a1: "шийдлийг олохын тулд баримт, нарийн зүйл дээр анхаарлаа төвлөрүүлдэг",
    a2: "зөн совиндоо итгэж, зөв гэж бодож байгаа зүйлээ дагадаг",
    score: [
      [5, 2, 2, 5, 3, 3, 2, 5, 5, 2, 1, 5, 3, 4, 2, 4],
      [1, 5, 5, 1, 4, 5, 5, 2, 2, 4, 5, 1, 3, 3, 5, 3],
    ],
  },
  {
    que: "Чамайг юу илүү зоригжуулдаг вэ? ",
    a1: "зорилгодоо хүрч, хийх ёстой зүйлээ дуусгах ",
    a2: "бусдад эерэг нөлөө үзүүлж, туслах ",
    score: [
      [5, 2, 2, 5, 4, 3, 2, 4, 5, 2, 3, 3, 3, 4, 2, 5],
      [3, 5, 5, 3, 2, 2, 3, 3, 3, 4.5, 4.5, 3.5, 5, 4, 2, 5],
    ],
  },
  {
    que: "Зөвлөлдөөний үед",
    a1: "тохиромжтой, зөв гаргалгааг олоход анхаардаг",
    a2: "бусад хүмүүсийн сэтгэлийг ойлгоход анхаардаг",
    score: [
      [5, 2, 2, 5, 4.5, 4.5, 2, 4, 5, 2, 2, 3.5, 3.5, 3, 2, 4],
      [4, 5, 5, 3, 3, 3, 3, 4, 2.5, 4, 5, 3, 5, 3, 3, 5],
    ],
  },
  {
    que: "Сургууль дээрээ яаж ажиллахыг илүүд үздэг вэ?",
    a1: "багаараа үйл ажиллагаанд оролцож, багийн ажил хийх",
    a2: "бие даан, ганцаар ажиллах ",
    score: [
      [4, 5, 5, 5, 3.5, 4.5, 3, 3, 1, 4, 4, 2, 5, 4.5, 2, 5],
      [5, 1, 1, 5, 4.5, 4.5, 3.5, 4.5, 5, 3, 3, 5, 2.5, 5, 2.5, 5],
    ],
  },
  {
    que: "Яаж ажиллахыг илүүд үздэг вэ? ",
    a1: "бүтээлч байх боломжтой уян хатан орчинд",
    a2: "тодорхой зорилго, чиг баримжаатай орчинд",
    score: [
      [4, 3, 3, 3, 5, 5, 5, 4, 3, 4, 3, 2, 2, 3, 5, 3],
      [5, 1, 1, 5, 3, 3, 3, 5, 5, 2, 3, 5, 2.5, 5, 1, 5],
    ],
  },
  {
    que: "Аль нь танд илүү таалагддаг вэ?",
    a1: "бодит зүйл дээр тулгуурласан үйл ажиллагаа",
    a2: "бүтээлч, уран сэтгэмжээ ашигласан үйл ажиллагаа",
    score: [
      [3, 3, 3.5, 4, 2, 1, 1, 2, 4, 3.5, 4, 4, 3, 4, 5, 4],
      [3, 2, 2, 3.5, 5, 5, 5, 5, 2, 3, 2, 1, 3, 1, 1, 2],
    ],
  },
  {
    que: "Шинэ хүнтэй уулзахад ямар мэдрэмж төрдөг вэ? ",
    a1: "тав тухтай, тэдэнтэй шууд ярилцахад бэлэн байдаг",
    a2: "жаахан ичимхий, тэдэнтэй танилцахад илүү цаг зарцуулдаг",
    score: [
      [2, 3.5, 4, 2, 1, 1, 1, 1, 4.5, 5, 4.5, 4, 4, 4, 3.5, 3],
      [3, 2.5, 2, 4, 5, 5, 5, 5, 1, 1, 2, 2, 2.5, 1, 3, 2],
    ],
  },
  {
    que: "Бусад хүмүүстэй хэрхэн харилцдаг вэ?",
    a1: "юу бодож байгаагаа шулуухан хэлдэг",
    a2: "нөгөө хүмүүсийнхээ сэтгэлийг бодож эелдэг байхыг хичээдэг",
    score: [
      [2, 3, 5, 5, 2, 2, 1, 1, 5, 4, 4, 5, 3.5, 5, 3, 4.5],
      [4, 3.5, 1, 1, 4, 4, 5, 5, 1, 2, 3, 2, 4, 1, 3, 2.5],
    ],
  },
  {
    que: "Ном уншиж байхдаа зохиолыг нь : ",
    a1: "тодорхой бөгөөд ойлгомжтой байхыг хүсдэг",
    a2: "уран зөгнөлтэй бөгөөд гүн утгатай байхыг хүсдэг ",
    score: [
      [2, 3, 4, 3, 1, 1, 1, 1, 5, 3, 4, 4, 3, 4, 2, 4],
      [4, 3, 2, 3, 5, 5, 5, 5, 1, 3, 2, 2, 3, 2, 4, 2],
    ],
  },
  {
    que: "Гэнэтийн өөрчлөлтийг хэрхэн хүлээн авдаг вэ? ",
    a1: "аливаа зүйлд заавал нэмэлт төлөвлөгөөтэй байдаг ",
    a2: "өөрчлөлтөд дасан зохицож, шинэ зүйл туршихад дуртай байдаг",
    score: [
      [4, 2, 4, 5, 2, 1, 2, 2, 4, 1, 3, 4, 2, 4, 5, 4],
      [2, 4, 2, 1, 4, 5, 4, 4, 2, 5, 3, 2, 4, 2, 1, 2],
    ],
  },
  {
    que: "Найзыгаа хүлээж байхдаа",
    a1: "түүнийг цагтаа ирж, цаг баримтлахыг хүсдэг",
    a2: "түүнийг хоцорсон ч тоохгүй",
    score: [
      [2.5, 1, 4, 4.5, 2, 1.5, 2, 2, 4.5, 3, 2, 5, 2, 5, 3.5, 4.5],
      [3.5, 5, 2, 1.5, 4, 4.5, 4, 4, 1.5, 3, 4, 2, 4, 1, 1.5, 1.5],
    ],
  },
  {
    que: "Амралтын өдрийн төлөвлөгөө гаргахдаа та юуг илүүд үздэг вэ? ",
    a1: "найзуудтайгаа гадуур явж, хүмүүсийн дэргэд байх",
    a2: "өөрийн дуртай зүйлээ хийж өөртөө цаг гаргах",
    score: [
      [2, 3, 3.5, 2, 1, 1, 1, 1, 4.5, 5, 3.5, 4.5, 4, 3.5, 2, 4],
      [4, 3, 2.5, 4, 5, 5, 5, 5, 1.5, 1, 2.5, 1.5, 2, 2.5, 4, 2],
    ],
  },
  {
    que: "Аль нь таныг илүү сайн дүрсэлсэн байна вэ?  ",
    a1: "аливаа зүйлийг байгаагаар нь байлгах дуртай ",
    a2: "шинэ зүйлсд дуртай",
    score: [
      [4, 3, 4, 5, 2, 2, 1, 2, 4.5, 2, 3, 4.5, 3, 5, 2.5, 3],
      [2, 3, 2, 1, 4, 4, 5, 4, 1.5, 4, 3, 1.5, 3, 1, 1.5, 3],
    ],
  },
];
let CareerType = [
  {
    score: 0,
    typeId: "ajiglagch",
    nme: "ажиглагч",
    aboutType:
      "Таны нарийн ширийн зүйлд чиглэсэн, хариуцлагатай зан чанар таныг найдвартай, нямбай хувь хүн гэдгээрээ ялгаруулдаг. Мэдээлэлд дүн шинжилгээ хийх, тууштай байх, дүрэм журмыг дагаж мөрдөх чадвар нь таныг янз бүрийн даалгаварт үнэн зөв, нарийвчлалтай байх чадвартай жинхэнэ ажиглагч болгодог. Та мэргэжлийн болон хувийн орчинд дэг журам, бүтцийг бий болгох онцгой авьяастай.",
  },
  {
    typeId: "demjigch",
    score: 0,
    nme: "дэмжигч",
    aboutType:
      "Таны халуун дулаан, өрөвдөх сэтгэлтэй, халамжтай зан чанар нь таныг эргэн тойрныхоо хүмүүст туслах тулгуур багана болгон бусдаас ялгаруулдаг. Бусдад туслах, эв найрамдлыг хадгалах чин хүсэл тань таныг ямар ч баг, хамт олонд үнэлж баршгүй хөрөнгө болгодог. Хүмүүсийг гүн гүнзгий ойлгох, харилцах онцгой чадвараараа та тааралдсан хүн бүрийг хүмүүжүүлж, угтах орчинг бүрдүүлдэг.",
  },
  {
    typeId: "zuvlugch",
    score: 0,
    nme: "зөвлөгч",
    aboutType:
      "Таны өрөвдөх сэтгэл, ухаарал, энэрэнгүйэнгүй зан чанар таныг гүн гүнзгий, халамжтай гэдгээр ялгаруулдаг. Бусдыг гүн гүнзгий ойлгож, холбогдох чадвар тань таныг үнэ цэнтэй итгэлт хүн, удирдамж эрэлхийлж буй хүмүүст туслах гэрэлт цамхаг болгодог. Та эргэн тойрныхоо хүмүүсийн нуугдмал сэтгэл хөдлөл, хэлээгүй бодлыг олж хардаг төрөлхийн авьяастай бөгөөд таныг жинхэнэ эмпат болгодог.",
  },
  {
    typeId: "stra",
    score: 0,
    nme: "стратегич",
    aboutType:
      "Таны аналитик, логик, бүтээлч сэтгэлгээ таныг алсын хараатай сэтгэгч, мастер стратегич гэдгээрээ ялгаруулдаг. Том дүр зургийг харж, нарийн төлөвлөгөө боловсруулах чадвар нь таныг нарийн төвөгтэй сорилтуудыг даван туулах гайхалтай хүч болгодог. Та оюун ухаан, бүтээлч байдал, шийдэмгий байдлын ховор хослолыг эзэмшдэг бөгөөд энэ нь танд боломжийн талбарт гүн гүнзгий нэвтэрч, шинэлэг шийдлүүдийг нээх боломжийг олгодог.",
  },
  {
    typeId: "darhan",
    score: 0,
    nme: "дархан",
    aboutType:
      "Таны практик, авхаалжтай зан чанар таныг гар урлалын мастер гэдгээрээ ялгаруулдаг. Таны юмс хэрхэн явагддагийг ойлгох чадвар, нарийн ширийн зүйлийг нарийн ширтэх чадвар нь таныг бодит бүтээлээр дамжуулан санаагаа амьдралд хэрэгжүүлэх чадвартай жинхэнэ гар урчууд болгодог. Та техникийн ур чадвар, урлагийн авъяас чадварын хосгүй хослолыг эзэмшдэг бөгөөд энэ нь таныг аливаа бүтээлч үйл ажиллагаанд үнэлж баршгүй хөрөнгө болгодог.",
  },
  {
    typeId: "uran buteelch",
    score: 0,
    nme: "уран бүтээлч",
    aboutType:
      "Таны бүтээлч, мэдрэмжтэй, илэрхийлэлтэй зан чанар таныг жинхэнэ мөрөөдөгч, сэтгэл татам түүхч гэдгээрээ ялгаруулдаг. Хорвоо ертөнцийг өвөрмөц нүдээр харж, сэтгэл хөдлөлөө сэтгэл татам урлагийн бүтээл болгон хувиргах чадвар таныг бусдад урам зориг өгч, гүн гүнзгий сэтгэл хөдлөлийг төрүүлэх хүчирхэг хүч болгодог. Та хүний сэтгэл хөдлөлийн гүнтэй холбогдож, амьдралын мөн чанараас гоо сайхныг урлах гайхалтай авьяастай.",
  },
  {
    typeId: "muruudugch",
    score: 0,
    nme: "мөрөөдөгч",
    aboutType:
      "Таны дотоод сэтгэлтэй, энэрэнгүй, уран сэтгэмжтэй зан чанар таныг гүн гүнзгий сэтгэгч, алсын хараатай мөрөөдөгч гэдгээрээ ялгаруулдаг. Таны сэтгэл хөдлөл, санаа бодлын талбарт гүн шумбах чадвар нь таныг сэтгэл татам үлгэр зохиож, гүн гүнзгий үнэнийг урлаг, ойлголтоороо илэрхийлэх чадвартай, жинхэнэ сэтгэлийн яруу найрагч болгодог. Та хүний туршлагыг гүн гүнзгий, эмпатик түвшинд ойлгох ховор авьяастай.",
  },
  {
    typeId: "bodogch",
    score: 0,
    nme: "бодогч",
    aboutType:
      "Таны дотоод сэтгэлтэй, энэрэнгүй, уран сэтгэмжтэй зан чанар таныг гүн гүнзгий сэтгэгч, алсын хараатай мөрөөдөгч гэдгээрээ ялгаруулдаг. Таны сэтгэл хөдлөл, санаа бодлын талбарт гүн шумбах чадвар нь таныг сэтгэл татам үлгэр зохиож, гүн гүнзгий үнэнийг урлаг, ойлголтоороо илэрхийлэх чадвартай, жинхэнэ сэтгэлийн яруу найрагч болгодог. Та хүний туршлагыг гүн гүнзгий, эмпатик түвшинд ойлгох ховор авьяастай.",
  },
  {
    typeId: "huviaraa",
    score: 0,
    nme: "хувиараа бизнес эрхлэгч",
    aboutType:
      "Таны сэтгэл татам, шинийг эрэлхийлдэг, эрсдэлд ордог зан чанар нь таныг анхдагч, төрөлхийн удирдагч гэдгээрээ ялгаруулдаг. Бусдын сорилт бэрхшээлийг олж хардаг боломжийг олж харах чадвар, санаагаа бодит болгох хүсэл эрмэлзэл таныг бизнес, инновацийн ертөнцөд эрч хүчтэй болгодог. Та бүтээлч байдал, стратегийн сэтгэлгээний өвөрмөц хослолыг эзэмшсэн тул өөрчлөлтийг жолоодох жинхэнэ анхдагч болно.",
  },
  {
    typeId: "hugjuugch",
    score: 0,
    nme: "хөгжөөгч",
    aboutType:
      "Таны сэргэлэн цовоо, илэрхий, нийтэч зан чанар таныг сэтгэл татам жүжигчний хувьд бусдаас ялгаруулдаг. Та ямар ч өрөөг гэрэлтүүлж, амьд оршихуйгаараа бусдад баяр баясгаланг авчрах чадвар нь таныг үзэгчдийг байлдан дагуулж, мөнхийн сэтгэгдэл үлдээх чадвартай, төрөлхийн хөгжөөн дэмжигч болгодог. Та анхаарлын төвд байж, хором бүрийг сэтгэл хөдөлгөм, урам зоригоор дүүргэх онцгой авьяастай.",
  },
  {
    typeId: "zorigjuulagch",
    score: 0,
    nme: "зоригжуулагч",
    aboutType:
      "Таны өрөвдөх сэтгэлтэй, дур булаам, алсын хараатай зан чанар таныг эерэг өөрчлөлтийн төрөлхийн өдөөгч, хурдасгагч гэдгээрээ ялгаруулдаг. Бусадтай гүн гүнзгий холбогдож, тэдний сэтгэл санааг дээшлүүлэх чадвар нь таныг хүсэл тэмүүллийг бадрааж, хүмүүст урам зориг өгөх чадвартай, жинхэнэ нөлөөлөгч болгодог. Та хаа ч явсан эргэн тойрныхоо хүмүүсийг ойлгож, тэдэнд урам зориг өгөх онцгой авьяастай. ",
  },
  {
    typeId: "hyanagch",
    score: 0,
    nme: "хянагч",
    aboutType:
      "Таны практик, хариуцлагатай, зохион байгуулалттай зан чанар таныг төрөлхийн удирдагч, найдвартай байдлын тулгуур багана гэдгээрээ ялгаруулдаг. Бүтэц тогтоох, дэг журмыг сахиулах чадвар нь таныг зорилгодоо хүрэхийн тулд багуудыг удирдан чиглүүлж, дэмжих чадвартай үр дүнтэй удирдагч болгодог. Өөрчлөлт илүү их зорилгод нийцэх үед та уламжлалаа сахин хамгаалах онцгой авьяастай.",
  },
  {
    typeId: "sanaa tavigch",
    score: 0,
    nme: " санаа тавигч",
    aboutType:
      "Таны халуун дулаан, энэрэнгүй зан чанар таныг төрөлхийн асран хамгаалагч, эргэн тойрныхоо хүмүүст тайтгарлын эх үүсвэр болгон бусдаас ялгаруулдаг. Бусадтай гүн гүнзгий холбогдож, гуйвшгүй дэмжлэг үзүүлэх чадвар нь таныг бие махбодийн болон сэтгэл санааны хэрэгцээг хангах чадвартай жинхэнэ асран хамгаалагч болгодог. Та эв найртай орчинг бий болгож, харьяалагдах мэдрэмжийг төрүүлэх онцгой авьяастай.",
  },
  {
    typeId: "zahiragch",
    score: 0,
    nme: "захирагч",
    aboutType:
      "Таны стратеги, тууштай, зорилгодоо чиглэсэн зан чанар таныг төрөлхийн удирдагч, алсын хараатай төлөвлөгч гэдгээрээ ялгаруулдаг. Нөхцөл байдалд дүн шинжилгээ хийх, үр дүнтэй стратеги боловсруулах, өөртөө итгэлтэй манлайлах чадвар нь таныг баг, байгууллагыг амжилтанд хүргэх чадвартай жинхэнэ удирдах ажилтан болгодог. Та хүнд хэцүү шийдвэр гаргаж, бусдад урам зориг өгөх онцгой авьяастай.",
  },
  {
    typeId: "zugnugch",
    score: 0,
    nme: "зөгнөгч",
    aboutType:
      "Таны шинийг эрэлхийлэгч, сониуч зан чанар таныг шинэ санааны анхдагч, анхдагч гэдгээрээ ялгаруулдаг. Мэдлэгт ханашгүй өлсгөлөн, хоорондоо уялдаа холбоогүй мэт санагдах ухагдахуунуудыг хооронд нь холбох чадвар таныг бусад хүмүүсийн үл тоомсорлож болзошгүй боломжуудыг төсөөлөх чадвартай, жинхэнэ алсын хараатай болгодог. Та статус кво-г сорьж, шинэлэг алсын хараагаараа дэлхийг өөрчлөх онцгой авьяастай.",
  },
  {
    typeId: "chigluulegch",
    score: 0,
    nme: "чиглүүлэгч",
    aboutType:
      "Таны өрөвдөх сэтгэл, дэмжлэг, урам зориг нь таныг эргэн тойрныхоо хүмүүст чиглүүлэгч гэрэл, урам зориг өгөх эх үүсвэр болгон бусдаас ялгаруулдаг. Бусдыг ойлгож, өөдрөг болгох чадвар чинь таныг хувь хүмүүст боломжоо нээж, зорилгодоо хүрэхэд нь туслах чадвартай жинхэнэ зөвлөгч болгодог. Та хувийн өсөлтийг дэмжих, утга учиртай харилцаа холбоог бий болгох онцгой авьяастай.",
  },
];
const scholarship = [
  {
    scholarTitle: "Fulbright Foreign Student Program ",
    pros: [
      "Бүх тээврийн зардал ",
      "Бүх тээврийн зардал ",
      "Сургалтын төлбөр ",
      "Эрүүл мэндийн даатгал ",
      "Визний зардал ",
      "Аяллын тэтгэмж ",
      "Суурьших зардал ",
    ],
    require: [
      "1.5 болон түүнээс дээш жилийн бүтэн цагаар ажилласан ажлын туршлагатай байх ",
      "Дээд боловсролтой байх (бакалаврын эсвэл дүйх зэрэг) ",
      "Англи хэлний чадвар сайтай байж, мэргэжлийн чиглэлээсээ хамааран TOEFL IBT 80-90, TOEFL PBT/ITP 550-575, or IELTS 6.5-7.0 оноотой байх ",
      "АНУ-ын ногоон карт эзэмшигч монголчууд өргөдөл гаргах эрхгүй болохыг анхаарна уу. ",
    ],
    aboutScholar:
      "Fulbright Foreign Student Program нь магистрын зэрэг олгох бүрэн хэмжээний тэтгэлэг юм. Хөтөлбөрийн сонгон шалгаруулалт нэг жилийн хугацаанд үргэлжилж, шалгарсан оролцогчид өргөдөл гаргасны дараа жилийн зун хөтөлбөрөө эхлүүлнэ. Энэхүү тэтгэлэгт манай улсын оюутнууд түгээмэл хамрагддаг бөгөөд жил бүр Дэлхийн хэмжээнд 1800 гаруй залууст үнэ төлбөргүй магистраа хамгаалах боломжийг өгдөг аж. (АНУ-д магистр 1-2 жилээр суралцдаг) ",
    amount: "287",
    accept: "1800",
    sum: "9000",
    country: "АНУ",
  },
];
export { CareerType, careerTestData, uni, lesson, jobList };
