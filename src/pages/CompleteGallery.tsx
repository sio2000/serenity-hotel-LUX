import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const imageFiles = [
  // Existing images
  "45.jpg", "44.jpg", "43.jpg", "42.jpg", "41.jpg", "40.jpg", "39.jpg", "38.jpg", "37.jpg", "36.jpg", "35.jpg", "34.jpg", "33.jpg", "32.jpg", "31.jpg", "30.jpg", "29.jpg", "28.jpg", "27.jpg", "26.jpg", "25.jpg", "24.jpg", "23.jpg", "22.jpg", "21.jpg", "20.jpg", "19.jpg", "18.jpg", "17.jpg", "16.jpg", "15.jpg", "14.jpg", "13.jpg", "12.jpg", "11.jpg", "10.jpg", "9.jpg", "8.jpg", "7.jpg", "6.jpg", "5.jpg", "4.jpg", "3.jpg", "2.jpg", "1.jpg", "room6.jpg", "bath2.jpg", "room5.jpg", "room4.jpg", "room3.png", "outside2.png", "outside.png", "room2.png", "room1.png", "bath.png",
  "f2165585-e25c-43ce-a953-0fcd10590628.png", "af75c345-8ae7-43c9-ae35-811e84e17bb9.png", "c5e90ece-244e-4d89-bb9e-b40235a77525.png", "acd3abb4-d1f7-44fe-a91b-0f2467f36916.png", "57475bff-7167-4a6b-8694-93dd7c72ba8c.png", "86d9639c-4497-4529-8893-41d267f68fd7.png", "21434ff3-4ef9-4eb6-97ac-b8aca2c6ed11.png", "9c226fe2-4c4f-4c85-810f-373ddf2769c7.png", "1c226b57-a854-4dfb-a454-fcf1dd80cb8d.png", "12ae632d-259d-4e39-91b3-e717fd854052.png",
  "494327844_1299285061615658_5864455081137713466_n.jpg", "494327844_669190925950512_1235441802037293140_n.jpg", "494328396_1029282901964363_391478354432372583_n.jpg", "494813032_2761568627369389_4330548771959777053_n.jpg", "494813032_4036115826656520_7532054270792403889_n.jpg", "494813069_1055763326088343_5384221894803640263_n.jpg", "494813069_1229473452246582_1132016176710367482_n.jpg", "494813069_2428528344192723_5933324210564657514_n.jpg", "494813078_23991629183755330_4990595418854528778_n.jpg", "494813103_1597245970949089_2581355061460035550_n.jpg",
  "494813879_738881651897812_7462320347399722002_n.jpg", "494814057_736030559117423_7301534809188595379_n.jpg", "494814490_677157585115076_8169069267714822921_n.jpg", "494814827_24375591788694016_2266307193775593422_n.jpg", "494814870_1131782182311433_5117326656181442582_n.jpg", "494815769_712392404516271_623807811441867226_n.jpg", "494816035_735092328908846_7220208265832282153_n.jpg", "494816039_1448883142966039_2806917307557082099_n.jpg", "494816046_4174097099579861_8084618563329289104_n.jpg", "494816055_705383898750968_1194511428223602412_n.jpg",
  "494816067_3991081817814558_3514026253986319842_n.jpg", "494817130_1222591579399040_1500506731540465548_n.jpg", "494817144_3727782410845560_6260216994744733316_n.jpg", "494817194_1723448248251076_7564051161960586931_n.jpg", "494817236_686391820674680_4686677389871312398_n.jpg", "494817255_1226772365556497_8887158612022230908_n.jpg", "494817285_1068735068445495_3278804198859031447_n.jpg", "494817287_1379108099972343_7285441172856321594_n.jpg", "494817299_1755980628651143_7916843093685849924_n.jpg", "494817355_1174779691089173_2862761849647253026_n.jpg",
  "494818549_2727485317449138_3975805042548624914_n.jpg", "494818571_1080708077315635_2708076042869898551_n.jpg", "494818571_683987864610687_9038353736535108501_n.jpg", "494818602_1405361557272957_1227799286267584719_n.jpg", "494818676_1048552837224795_1381322344464136570_n.jpg", "494818687_681687891309592_1482854697988617189_n.jpg", "494818725_1068365161845393_4283358356187942054_n.jpg", "494818725_1438077584099723_2155249800100132242_n.jpg", "494818735_1229042484718708_5891259769769711521_n.jpg", "494818816_727836089686576_4810984797479590804_n.jpg",
  "494818829_1656119375095244_7722601099487328100_n.jpg", "494818883_1193515269187388_2629852425617145651_n.jpg", "494818946_1147362337431418_8391968267549773210_n.jpg", "494819026_1842636919941928_8963857615366496111_n.jpg", "494819031_1465503447766649_5103585585094123939_n.jpg", "494819077_1022702039844034_1620571510108628134_n.jpg", "494819171_716895430702802_2027317334914239744_n.jpg", "494819365_3925498117690618_1414130322947111155_n.jpg", "494819379_1979804045885694_1917540459873795354_n.jpg", "494820498_3962797477326644_7933589735810184285_n.jpg",
  "494820499_1189247306217425_1551138574658579096_n.jpg", "494820499_1442200567142376_1717521875017762003_n.jpg", "494820512_1769569653994166_6451576697489968379_n.jpg", "494820565_1065998132119263_8887066375359677002_n.jpg", "494820565_1805737029975614_3196926130989331584_n.jpg", "494820588_1016526393899203_8160168584938879497_n.jpg", "494820626_1626770144698455_675294280883286176_n.jpg", "494820797_2024048988083825_6242085514089909970_n.jpg", "494820908_732518769459569_5240800842388671394_n.jpg", "494822128_1201719007886585_7162329624464181183_n.jpg",
  "494822141_23974895382172512_2790613629077243565_n.jpg", "494822188_1057709729021653_7355113085770091224_n.jpg", "494822188_725867436787775_1449559029743886758_n.jpg", "494822212_9777387512330100_3398434357574826994_n.jpg", "494822222_2471407356550514_6829206573494380157_n.jpg", "494822312_596198936278168_4397017623592018507_n.jpg", "494823090_1205845371016322_6740189622596014603_n.jpg", "494823090_1373996040376175_5332158057662407651_n.jpg", "494823114_562764703293898_3558323120285560943_n.jpg", "494823134_1383220099556409_3427716456301733956_n.jpg",
  "494823178_2040497263105305_2445253101501637459_n.jpg", "494823260_9992866070829595_8502586154304846020_n.jpg", "494823311_1346249829784318_2228478526358948228_n.jpg", "494823311_2140471013091668_2343387035886898494_n.jpg", "494823333_1822693668302892_6391439447406834043_n.jpg", "494823333_23901737616105098_5701353928423441540_n.jpg", "494824550_1041894240809736_2854960687982388670_n.jpg", "494825097_1823465641550315_3612323414120346136_n.jpg", "494825704_2085427491966913_4678193321387204188_n.jpg", "494825745_1840513446801053_487272873105929402_n.jpg",
  "494825779_1326918478401908_7581169809527962663_n.jpg", "494825801_1742704369665746_1923874379073549977_n.jpg", "494825838_1385898409351297_869568383145554788_n.jpg", "494826301_600709489131443_8538731909454878601_n.jpg", "494827999_1376725990232375_5756448025343050484_n.jpg", "494828003_1422210492420272_6759894636382063772_n.jpg", "494828015_1432445634841802_1724797763364745587_n.jpg", "494828462_1152685723281941_2058762210043615844_n.jpg", "500449172_963622392377956_3315582418072958711_n.jpg", "500451133_874281314899765_7507181016940548727_n.jpg",
  "500460997_1124865079660272_4579235851694570732_n.jpg", "500474056_1416455756038211_5349338355521651446_n.jpg", "500483107_1221690515614219_5463822732227265478_n.jpg", "500497468_1826101084975551_841603177483135831_n.jpg", "500799231_1585394399512538_2226746928657770221_n.jpg", "500823553_3233872463430695_3577564699997696030_n.jpg", "501004684_691458573489773_845142504679505855_n.jpg", "501006784_723356697518587_7452278343054334283_n.jpg", "501008842_1359294362009702_3579850747895990434_n.jpg", "501012747_1900474974133039_3698343802452454776_n.jpg",
  "501012747_615256530848558_8208839597241569736_n.jpg", "501012747_634393429650778_7626566080641915521_n.jpg", "501014811_1258619655845271_509833787889462861_n.jpg", "501027760_1758573834746268_8400582531117287817_n.jpg", "501123524_1279858137046771_2097176010727532367_n.jpg", "501123524_1452764199232237_3965323420698253950_n.jpg", "501126207_1013821567617960_4263601680816346560_n.jpg", "501137804_2511303032544560_3144677382010930680_n.jpg", "501165675_1228702538651949_4497961024559440326_n.jpg", "501271916_1358501122105507_413485371166895633_n.jpg",
  "501271916_717371380828605_2239184987681251415_n.jpg", "501274293_2160591824368629_2213762484545926948_n.jpg", "501278523_1809424772949979_755285431951520264_n.jpg", "501284692_1395606325103355_5861613689542994756_n.jpg", "501347073_1632529564055891_5928745456778534842_n.jpg", "501377583_1501841287462915_4359012376190511165_n.jpg", "501377583_643584352016766_6879654020351080334_n.jpg", "501390244_1082959636984509_2329153066006422351_n.jpg", "501775838_729615059750664_1404179831580515743_n.jpg", "502038075_1727699377847894_8230172128663070832_n.jpg",
  "502054202_1465223101126054_4254896848290198251_n.jpg", "502079763_1640863613145626_5026232609515732909_n.jpg", "502129668_557407433884464_1911854196830401944_n.jpg", "503333392_1073298767553324_3111363396857792761_n.jpg", "503599447_1105847694924425_5947834335194062425_n.jpg", "q1.jpg",
  
  // Missing images from public/images folder
  "pool.JPG", "pool1.JPG", "pool2.JPG", "pool3.JPG", "pool4.JPG", "pool5.JPG",
  "494820499_1189247306217425_1551138574658579096_n (1).jpg", "494825779_1326918478401908_7581169809527962663_n (1).jpg",
  
  // Yliko folder images
  "yliko/Photo (218).jpg", "yliko/Photo (217).jpg", "yliko/Photo (216).jpg", "yliko/Photo (215).jpg", "yliko/Photo (214).jpg", "yliko/Photo (213).jpg", "yliko/Photo (212).jpg", "yliko/Photo (211).jpg", "yliko/Photo (210).jpg", "yliko/Photo (209).jpg", "yliko/Photo (208).jpg", "yliko/Photo (207).jpg", "yliko/Photo (206).jpg", "yliko/Photo (205).jpg", "yliko/Photo (204).jpg", "yliko/Photo (203).jpg", "yliko/Photo (202).jpg", "yliko/Photo (201).jpg", "yliko/Photo (200).jpg", "yliko/Photo (199).jpg", "yliko/Photo (198).jpg", "yliko/Photo (197).jpg", "yliko/Photo (196).jpg", "yliko/Photo (195).jpg", "yliko/Photo (194).jpg", "yliko/Photo (193).jpg", "yliko/Photo (192).jpg", "yliko/Photo (191).jpg", "yliko/Photo (190).jpg", "yliko/Photo (189).jpg", "yliko/Photo (188).jpg", "yliko/Photo (187).jpg", "yliko/Photo (186).jpg", "yliko/Photo (185).jpg", "yliko/Photo (184).jpg", "yliko/Photo (183).jpg", "yliko/Photo (182).jpg", "yliko/Photo (181).jpg", "yliko/Photo (180).jpg", "yliko/Photo (179).jpg", "yliko/Photo (178).jpg", "yliko/Photo (176).jpg", "yliko/Photo (175).jpg", "yliko/Photo (174).jpg", "yliko/Photo (173).jpg", "yliko/Photo (172).jpg", "yliko/Photo (171).jpg", "yliko/Photo (170).jpg", "yliko/Photo (169).jpg", "yliko/Photo (168).jpg", "yliko/Photo (167).jpg", "yliko/Photo (166).jpg", "yliko/Photo (165).jpg", "yliko/Photo (164).jpg", "yliko/Photo (163).jpg", "yliko/Photo (162).jpg", "yliko/Photo (161).jpg", "yliko/Photo (160).jpg", "yliko/Photo (159).jpg", "yliko/Photo (158).jpg", "yliko/Photo (157).jpg", "yliko/Photo (156).jpg", "yliko/Photo (155).jpg", "yliko/Photo (154).jpg", "yliko/Photo (153).jpg", "yliko/Photo (152).jpg", "yliko/Photo (151).jpg", "yliko/Photo (150).jpg", "yliko/Photo (149).jpg", "yliko/Photo (148).jpg", "yliko/Photo (147).jpg", "yliko/Photo (146).jpg", "yliko/Photo (145).jpg", "yliko/Photo (144).jpg", "yliko/Photo (143).jpg", "yliko/Photo (142).jpg", "yliko/Photo (141).jpg", "yliko/Photo (140).jpg", "yliko/Photo (139).jpg", "yliko/Photo (138).jpg", "yliko/Photo (137).jpg", "yliko/Photo (136).jpg", "yliko/Photo (135).jpg", "yliko/Photo (134).jpg", "yliko/Photo (133).jpg", "yliko/Photo (132).jpg", "yliko/Photo (131).jpg", "yliko/Photo (130).jpg", "yliko/Photo (129).jpg", "yliko/Photo (128).jpg", "yliko/Photo (42.1).jpg", "yliko/Photo (37.1).jpg", "yliko/Photo (23.1).jpg", "yliko/Photo (14.1).jpg", "yliko/Photo (13.1).jpg", "yliko/a (38).JPG", "yliko/a (36).JPG", "yliko/a (33).JPG", "yliko/pool5.JPG", "yliko/a (30).JPG"
];

const CompleteGallery = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = (idx: number) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? imageFiles.length - 1 : prev - 1));
  };
  const nextImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev === imageFiles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black py-16 px-2 md:px-0">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-10 drop-shadow-goldGlow text-center">
          {t('complete_gallery_title')}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageFiles.map((img, idx) => (
            <div
              key={img}
              className="bg-luxury-black/80 border border-luxury-gold/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-goldGlow transition-all duration-300 cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <img
                src={`/images/${img}`}
                alt={img}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Modal για fullscreen προβολή και carousel */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-8 text-luxury-gold hover:text-white text-4xl z-20 focus:outline-none"
            aria-label="Κλείσιμο"
          >
            ×
          </button>
          <button
            onClick={prevImg}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-black/80 hover:bg-luxury-gold/80 text-luxury-gold hover:text-luxury-black rounded-full p-3 z-20 shadow-lg transition-colors border border-luxury-gold"
            aria-label="Προηγούμενη εικόνα"
          >
            &#8592;
          </button>
          <img
            src={`/images/${imageFiles[currentIdx]}`}
            alt={imageFiles[currentIdx]}
            className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl border-4 border-luxury-gold/60 animate-fade-in bg-black"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={nextImg}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-black/80 hover:bg-luxury-gold/80 text-luxury-gold hover:text-luxury-black rounded-full p-3 z-20 shadow-lg transition-colors border border-luxury-gold"
            aria-label="Επόμενη εικόνα"
          >
            &#8594;
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-luxury-gold text-lg font-semibold select-none">
            {currentIdx + 1} / {imageFiles.length}
          </div>
        </div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default CompleteGallery; 