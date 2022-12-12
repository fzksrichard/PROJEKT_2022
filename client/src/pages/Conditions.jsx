import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`
    margin: 0 100px;
    font-size: 13px;
`

const Title = styled.h1`
    text-align: center;
    margin: 20px;
`

const SubTitle = styled.h2`
`

const Text = styled.div`
    margin: 10px 0px;
    text-align: justify;
    line-height: 1.4;
`
const List = styled.ul`
margin: 10px 0px;
line-height: 1.4;
text-align: justify;
`

const Conditions = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Title>ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</Title>
                <Text>(Díjköteles szolgáltatás igénybevételére vonatkozóan)
                    Jelen Általános Szerződési Feltételek (továbbiakban: ÁSZF) tartalmazza a oldal weboldalon (a továbbiakban: Honlap) elérhető díjköteles webtárhely és szoftver valamint weboldalszerkesztő szolgáltatás (továbbiakban: Szolgáltatás) igénybevevő (továbbiakban: Felhasználó) általi használatára vonatkozó feltételeket.
                    Felhasználó lehet minden nagykorú, cselekvőképes, magyar illetve külföldi állampolgárságú természetes személy vagy egyéni vállalkozó illetve minden magyar illetve bármely külföldi székhelyű jogi személy, vagy jogi személyiség nélküli gazdasági tevékenységet üzletszerűen, vagy másodlagos jelleggel végző szervezet lehet.
                    Az Internet globális jellege miatt Felhasználó elfogadja, hogy a Honlap használata során a vonatkozó nemzeti jogszabályok rendelkezéseit is figyelembe véve jár el. Amennyiben a Honlap használatával összefüggő bármely tevékenység a Felhasználó államának joga szerint nem megengedett, a használatért kizárólag Felhasználót terheli a felelősség.
                    A Szolgáltató kifejezetten felhívja a Felhasználó figyelmét az ÁSZF tényleges elolvasására, tekintettel arra, hogy jelen ÁSZF tartalmazza azon alapvető jogokat és kötelezettségeket, amelyek a jelen jogviszony tekintetében irányadóak lesznek.
                    Felhasználó a Honlap használatával illetve a regisztrációval kijelenti, hogy a jelen ÁSZF rendelkezéseit a szerződéskötést megelőzően átolvasta és annak tartalmát megértette, így annak rendelkezéseit kifejezetten elfogadja, azt magára nézve kötelezően érvényűnek tekinti.
                </Text>
                <SubTitle>1. Szolgáltató adatai</SubTitle>
                <Text>
                    <List>
                        <li>
                            Név: DAC
                        </li>
                        <li>
                            Székhely és levelezési cím: 9011 Győr Bárányréti út 41/b
                        </li>
                        <li>
                            Cégjegyzékszám: 01-01-010101
                        </li>
                        <li>
                            Bejegyző Bíróság neve: XY Bíróság
                        </li>
                        <li>
                            Adószám: 01234567-0-01
                        </li>
                        <li>
                            Számlaszám:11773377-01234567-00000000
                        </li>
                        <li>
                            E-mail cím: dac@gmail.com
                        </li>
                        <li>
                            Telefonszám: 06202553697
                        </li>
                    </List>
                </Text>
                <SubTitle>2. Általános rendelkezések</SubTitle>
                <Text>
                    Szolgáltató Szolgáltatását kizárólag jelen ÁSZF - ben meghatározott feltételek alapján nyújtja, amely ÁSZF mindenkor hatályos szövege bárki számára korlátlanul elérhető az alábbi linken: www.designandcreate.hu/aszf
                    Szolgáltató Szolgáltatásának keretében és a jelen ÁSZF -ben meghatározottak szerint biztosítja a Felhasználó által kialakított egyedi weblap(ok)nak/honlap(ok)nak a szerver tárhelyet, a folyamatos tartalom frissítés lehetőségét és a kapcsolódó szoftvert.
                    A Felhasználó által megrendelhető és igénybe vehető csomagok és a bennük szereplő funkciók, korlátozások pontos listáját és részletes leírását Felhasználó a Honlapon vagy a következő linken keresztül tekintheti meg: www.designandcreate.hu/tervezés
                    Felhasználó tudomásul veszi, hogy a Szolgáltatás web alapú, Internet kapcsolatot igénylő szolgáltatás, amely keretében a Szolgáltató a Felhasználó egyedi weboldalát/honlapját az általa biztosított szervereken üzemelteti. A Szolgáltatás Felhasználó által biztosított, nem a Szolgáltató tulajdonát képező szervereken történő üzemeltetésére nincs lehetőség.
                    Szolgáltató haladéktalanul értesíti Felhasználót a tudomására jutott minden olyan körülményről, amely a Szolgáltatás teljesítését megakadályozná, vagy hátráltatná. Az értesítési kötelezettség elmulasztásával összefüggésbe hozható szolgáltatási szint csökkenés miatti felelősség a Szolgáltatót terheli.

                </Text>
                <SubTitle>3. A Szolgáltatás megrendelésének menete, feltételei</SubTitle>
                <Text>
                    A Honlap tartalmának jelentős része elérhető minden Felhasználó számára, regisztráció nélkül is.
                    Regisztrálni kizárólag a Honlapon keresztül, on-line regisztráció útján lehetséges.
                    A Felhasználó kifejezetten tudomásul veszi, hogy amennyiben a regisztráció során úgy nyilatkozik, hogy az ÁSZF –et elolvasta, későbbiekben nem hivatkozhat arra, hogy annak tartalmát vele ténylegesen nem ismertetették, vagy azt nem ismerte meg.
                    Felhasználó regisztrálni a kezdőoldal jobb felső sarkában található ember ikonra kattintva, majd a  „Regisztráció” feliratra kattintva tud. A regisztráció során Felhasználó köteles a regisztrációs adatlapot teljes körűen és szabályszerűen kitölteni és a jelen ÁSZF -et a kérelem elküldését megelőzően elolvasni azzal, hogy amennyiben azt nem fogadja el, úgy Szolgáltató nem fogadja el a regisztrációját és nem jogosult a Szolgáltatás igénybevételére sem.
                </Text>
                <Text>
                    Felhasználó az adatbeviteli hibákat a megrendelés elküldését megelőzően bármikor javítani tudja a Honlapon, a „Profil” menüpontban. Ha Felhasználó a megrendelését már elküldte és a visszaigazoló emailben vesz észre hibát rendelésével kapcsolatban, akkor haladéktalanul vegye fel a Szolgáltatóval a kapcsolatot a probléma orvoslása és a nem kívánt megrendelések teljesítésének, szolgáltatás nyújtásának elkerülése érdekében.
                </Text>
                <Text>
                    Felhasználó a kezdő oldal fejlécében található „Tervezés” menüpont alatt tudja elkezdeni a tervezést sablonok alapján.
                    Megrendelést csak regisztrált Felhasználók kezdeményezhetnek, akkor, ha bejelentkezett a Honlapra és rákattint, az „Tervezés” gombra. A számlázási adatok bármikor módosíthatóak a „Profilom” menüponton belül.
                    A megrendelés tehát az „Előfizetek” gombra kattintással történik, ami a Felhasználó részére fizetési kötelezettséget keletkeztet.
                    Az előfizetés sikerességéről Szolgáltató emailben és a Honlap felületén egyaránt tájékoztatja a Felhasználót.

                </Text>
                <Text>
                    Szolgáltató legkésőbb az ajánlat (megrendelés) megérkezését követő 48 órán belül automatikus visszaigazoló e-mail útján visszaigazolja a Felhasználó részére, hogy megrendelését a rendszer rögzítette. Az automatikus visszaigazoló email Felhasználóhoz történő megérkezésével érvényes szerződés jön létre Szolgáltató és Felhasználó között. Amennyiben a visszaigazoló email nem érkezik meg 48 órán belül a Felhasználóhoz, Felhasználó mentesül ajánlati kötöttsége alól, vagyis nem köteles a Szolgáltatás ellenértékét megfizetni és a Szolgáltatást igénybe venni.
                </Text>
                <Text>

                </Text>
                <SubTitle>4. Felmondási Jog</SubTitle>
                <Text>
                    Az e pontban foglaltak kizárólag a szakmája, önálló foglalkozása vagy üzleti tevékenysége körén kívül eljáró természetes személyre vonatkoznak, aki árut vesz, rendel, kap, használ, igénybe vesz, valamint az áruval kapcsolatos kereskedelmi kommunikáció, ajánlat címzettje (fogyasztó).
                    Céges vásárlókat a 45/2014 (II.26.) kormányrendelet alapján, a 14 napon belüli felmondási jog nem illeti meg.
                    A fogyasztók és vállalkozások közötti szerződések részletes szabályairól szóló 45/2014 (II.26.) Korm.rendelet értelmében a fogyasztónak minősülő Felhasználó a szolgáltatás nyújtására irányuló szerződés esetében a szerződés megkötésének napjától számított tizennégy napon belül gyakorolhatja felmondási jogát.
                    Fogyasztót azonban nem illeti meg a felmondási jog a szolgáltatás nyújtására irányuló szerződés esetében a szolgáltatás egészének teljesítését követően, ha a Szolgáltató a teljesítést a Felhasználó kifejezett, előzetes beleegyezésével kezdte meg, és a Felhasználó tudomásul vette, hogy a Szolgáltatás egészének teljesítését követően felmondási jogát elveszíti.
                    Ha a Felhasználó kifejezett, előzetes beleegyezését nem adja ahhoz, hogy a Szolgáltató a Szolgáltatást a 14 nap lejártát megelőzően nyújtsa részére, akkor a Felhasználót megilleti a felmondás joga. Ez esetben a Felhasználó a felmondási szándékát tartalmazó egyértelmű nyilatkozatát köteles eljuttatni (postán, telefaxon vagy elektronikus úton küldött levél útján) a jelen ÁSZF 1. pontjában feltüntetett elérhetőségek igénybevételével a Szolgáltató részére. Ebből a célból Felhasználó felhasználhatja a következő linken [link beillesztése] keresztül elérhető felmondási nyilatkozat - mintát is. Felhasználó határidőben gyakorolja felmondási jogát, ha a 14 naptári nap lejárta előtt elküldi nyilatkozatát a Szolgáltató részére.
                    Ha a Felhasználó beleegyezett abba, hogy a Szolgáltató a 14 nap lejárta előtt részére a Szolgáltatás nyújtását megkezdje és a teljesítés megkezdését követően él felmondási jogával, a Felhasználó köteles egy a szolgáltatás igénybevételéért járó arányos díj fizetésére. A Felhasználó által arányosan fizetendő összeget az ÁSZF-ben az adott Szolgáltatásra vonatkozó díj adóval növelt teljes összege alapján számolja ki a Szolgáltató. Ha azonban a Felhasználó bizonyítja, hogy a teljes összeg túlzottan magas, az arányos összeget a szerződés megszűnésének időpontjáig teljesített szolgáltatások piaci értéke alapján kell kiszámítani. A piaci érték megállapításánál az azonos tevékenységet végző vállalkozások azonos szolgáltatásának a szerződés megkötésének időpontja szerinti ellenértékét kell figyelembe venni.
                    A Szolgáltató tehát követelheti az ésszerű költségeinek megtérítését, ha szolgáltatásnyújtásra irányuló szerződés teljesítését a Fogyasztó kifejezett kérésére a határidő lejárta előtt megkezdte és a Fogyasztó gyakorolja felmondási jogát - megtérítését.
                    A Felhasználót terheli annak bizonyítása, hogy elállási jogát az e pontban meghatározott rendelkezéseknek megfelelően gyakorolta.
                    Szolgáltató emailben haladéktalanul visszaigazolja a Felhasználó elállási nyilatkozatának megérkezését.
                    Írásban történő elállás esetén azt határidőben érvényesítettnek kell tekinteni, ha Felhasználó az erre irányuló nyilatkozatát 14 naptári napon belül (akár a 14. naptári napon) elküldi a Szolgáltatónak.
                    Postai úton történő jelzés alkalmával a postára adás dátumát, e-mail vagy telefaxon keresztül történő értesítés esetén az e-mail illetve a fax küldésének idejét veszi figyelembe Szolgáltató a határidő számítás szempontjából. A Felhasználó levelét ajánlott küldeményként adja postára, hogy hitelt érdemlően bizonyítható legyen a feladás dátuma.
                    Ha Felhasználó él felmondási jogával, Szolgáltató haladéktalanul, de legkésőbb a Felhasználó felmondási nyilatkozatának kézhezvételétől számított 14 napon belül visszatéríti a Felhasználó által teljesített valamennyi ellenszolgáltatást.
                    A visszatérítés során az eredeti ügylet során alkalmazott fizetési móddal egyező fizetési módot alkalmaz a Szolgáltató, kivéve, ha Felhasználó más fizetési mód igénybevételéhez kifejezetten a hozzájárulását adja; e visszatérítési mód alkalmazásából kifolyólag Felhasználót semmilyen többletköltség nem terheli.
                    A Szolgáltató követelheti ésszerű költségeinek – ha szolgáltatásnyújtásra irányuló szerződés teljesítését a Fogyasztó kifejezett kérésére a határidő lejárta előtt megkezdte és gyakorolja felmondási jogát - megtérítését.
                </Text>
                <SubTitle>5. Szavatosság</SubTitle>
                <Text>
                    Felhasználó a teljesítés időpontjától számított hat hónapos elévülési határidő alatt érvényesítheti szavatossági jogait, vagyis a rendszer használatához szükséges szoftver és egyéb anyagok letöltésétől számítva. A szavatossági idő fogyasztói szerződések esetén 2 év.
                    Ha Felhasználónak a szoftver működésével kapcsolatban bármilyen problémája van, akkor megilleti az a jog, hogy azt a Szolgáltatónak kijavításra visszaadja vagy elálljon a szerződéstől illetve árleszállítást kérni.
                    Ha a szoftver kijavítása nem vezet eredményre, a probléma továbbra is fent áll, és a Felhasználó az elállási jogát gyakorolja, abban az esetben a Szolgáltató köteles az eredeti állapotot visszaállítani és a Felhasználónak a kifizetett díjat visszafizetni.
                    Jogszavatosság. A Szolgáltató garantálja, hogy a Honlapon keresztül értékesített Szolgáltatást jogosult értékesíteni, arra harmadik személynek nem áll fent olyan joga, és nincs olyan jogosultsága, amely Szolgáltatás jelen feltételek szerinti felhasználását kizárná vagy korlátozná.

                </Text>
                <SubTitle>6. Hibabejelentés</SubTitle>
                <Text>
                    Hibabejelentésre az e-mail email címen van lehetősége a Felhasználónak.
                    Hibabejelentés esetén a bejelentő levélnek tartalmaznia kell a hiba előfordulása alkalmával használt operációs rendszert, annak verziószámát, esetleges frissítéseinek adatait, a böngésző nevét és pontos verziószámát, a hiba előidézésének idejét, az addig tett lépéseket.
                    A bejelentett hiba tekintetében Szolgáltató ügyfélszolgálata 48 órán belül visszajelzést küld Felhasználó részére, és lehetőség szerint 48 órán belül meg is kezdi a hibaelhárítást.
                </Text>
                <SubTitle>7. Felelősség</SubTitle>
                <Text>
                    Szolgáltató a webtárhely, illetve a szoftver nem megfelelő felhasználásából eredő károkért felelősséget nem vállal. Szolgáltató szintén nem felel a Felhasználó egyedi weboldalához/honlapjához kapcsolódó, esetlegesen elmaradt haszonért.
                    Felhasználó tudomásul veszi, hogy az általa kialakított egyedi weboldal/honlap tartalmának kezelése, felrögzítése, adminisztrálása minden esetben a Felhasználó feladata.
                    Szolgáltató a Felhasználó regisztrált egyedi weboldalán/honlapján történő esetleges értékesítési folyamatban nem vesz részt, nincs semmilyen formában kapcsolata a Felhasználó potenciális vásárlóival, azokkal kizárólag Felhasználó áll szerződéses jogviszonyban.
                    A Felhasználó egyedi weboldalán/honlapján keresztül lebonyolított kereskedelmi tevékenységhez kapcsolódó esetleges jogviták rendezése csak és kizárólag Felhasználó és az adott vevő, illetve Felhasználó és az adott szakhatóság között zajlik.
                    Felhasználó köteles minden, a weblap/honlap üzemeltetéssel, illetve az elektronikus kereskedelmi tevékenység végzésével kapcsolatos törvényi kötelezettségének (mindenkori valós cég adatok feltüntetése, szállítási és fizetési módok, valamint az elállási és garanciális jogok közzététele stb.) eleget tenni, valamint a céges adataiban történő esetleges változásokat a weboldala/honlapja adminisztrációs felületén beállítani.
                    Amennyiben a Felhasználónak jelen szerződéssel kapcsolatos valamilyen jogának, vagy kötelezettségének teljesítéséhez, illetve az egyedi weboldal/honlap működtetéséhez valamilyen közigazgatási engedély, vagy egyéb engedély, hozzájárulás szükséges, úgy ennek beszerzése – saját költségén – a Felhasználó feladata. Ugyanezen szabály alkalmazandó, amennyiben az Felhasználónak jelen szerződéssel kapcsolatos valamilyen jogának, vagy kötelezettségének teljesítéséhez, illetve az egyedi weboldal/honlap működtetéséhez valamilyen jogcselekmény elvégzése szükséges (pl.: közösségi adószám beszerzése, munkavállalóinak társadalombiztosítás szempontjából történő bejelentése, stb).
                    Felhasználó tudomásul veszi, hogy amennyiben az általa létrehozott egyedi weboldalán/honlapján reklámtevékenységet végez, úgy köteles a mindenkor hatályos reklámjogi jogszabályok – így különösen, de nem kizárólagosan a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól szóló 2008. évi XLVIII. törvény és a tisztességtelen piaci magatartás és a versenykorlátozás tilalmáról szóló 1996. évi LVII. törvény – rendelkezéseit betartani.
                    Amennyiben a Felhasználó a fentiekben meghatározott valamely kötelezettségének nem tenne eleget, abban az esetben a Szolgáltató jogosult a Felhasználó felhasználói fiókját felfüggeszteni és hozzáférését korlátozni.
                    A fentiekre tekintettel Felhasználó kifejezetten tudomásul veszi, hogy a Szolgáltató által nyújtott szolgáltatás nem tartalomszolgáltatás, hanem csak és kizárólag tárhely szolgáltatás, erre tekintettel a Felhasználó egyedi weboldalán/honlapján elhelyezett tartalmakért a Szolgáltatót felelősség nem terheli, az ezzel összefüggésben keletkezett valamennyi igény tekintetében harmadik személyekkel szemben a Felhasználó köteles helytállni.
                    Tilos a Felhasználónak tevékenysége során harmadik személy jogát, vagy jogos érdekét megsérteni, az érvényes jogszabályi előírásokat megszegni, tevékenységet egyéb jogellenes módon, vagy eszközzel végezni.
                    Tilos a jelen szerződés szerinti tevékenység visszaélésszerű vagy jogellenes folytatása, így például tisztességtelen piaci magatartás tanúsítása, jogellenes reklám használata, engedélyköteles tevékenység engedélynélküli végzése, vagy egyéb jogellenes magatartás tanúsítása.
                    Különösen tilos a Szolgáltatóról vagy Szolgáltatásáról valótlan, hamis vagy megtévesztő adatokat terjeszteni, vagy ilyen adatok közzétételében, megalkotásában közreműködni.
                    Az egyedi weboldalon/honlapon található tartalmak és szolgáltatások valódiságával kapcsolatban kizárólag Felhasználó tartozik felelősséggel.
                </Text>
                <SubTitle>8. Jogérvényesítési Lehetőségek</SubTitle>
                <Text>
                    Felhasználó a szolgáltatással vagy a Szolgáltató tevékenységével kapcsolatos fogyasztói kifogásait az alábbi elérhetőségeken terjesztheti elő:
                    <List>
                        <li>Levelezési cím: 9011 Győr Bárányréti út 41/b</li>
                        <li>Telefonszám: 06202553697</li>
                        <li>E-mail: dac@gmail.com</li>
                    </List>
                    Szolgáltató a szóbeli panaszt, amennyiben arra lehetősége van, azonnal orvosolja. Ha a szóbeli panasz azonnali orvoslására nincs lehetőség, a panasz jellegéből adódóan, vagy ha a Felhasználó a panasz kezelésével nem ért egyet, akkor a Szolgáltató a panaszról jegyzőkönyvet – melyet öt évig, a panaszra tett érdemi válaszával együtt megőrzi - vesz fel.
                    Szolgáltató a jegyzőkönyv egy példányát személyesen közölt (üzlethelyiségben) szóbeli panasz esetén helyben a Felhasználónak átadni, vagy ha ez nem lehetséges, akkor az alább részletezett írásbeli panaszra vonatkozó szabályok szerint köteles eljárni;
                    Szolgáltató a telefonon vagy egyéb elektronikus hírközlési szolgáltatás felhasználásával közölt szóbeli panasz esetén a Felhasználónak legkésőbb az érdemi válasszal egyidejűleg megküldi a jegyzőkönyv másolati példányát.
                    Minden egyéb esetben a Szolgáltató az írásbeli panaszra vonatkozó szabályok szerint jár el.
                    A telefonon, vagy más hírközlési eszköz segítségével rögzített panaszt a Szolgáltató egyedi azonosítóval látja el, mely a későbbiekben egyszerűsíti a panasz visszakeresését.
                    Szolgáltató a hozzá írásban érkezett panaszt 30 napon belül érdemben megválaszolja. Az intézkedés jelen szerződés értelmében a postára adást jelenti.
                    A panasz elutasítása esetén Szolgáltató az elutasítás indokáról tájékoztatja a Felhasználót.
                </Text>
                <SubTitle>9. Az Általános Szerződési Feltételek egyoldalú módosítása</SubTitle>
                <Text>
                    Szolgáltató jogosult jelen Általános Szerződési Feltételeket a felhasználók előzetes tájékoztatása mellett, egyoldalúan is módosítani. A tájékoztatást Szolgáltató a módosított ÁSZF hatálybalépést megelőző 15 naptári nappal Honlapján közzéteszi, erről a Felhasználót közvetlenül is értesíti.
                    Amennyiben a Felhasználó a módosított ÁSZF rendelkezéseit nem fogadja el, jogosult az előfizetői szerződést 15 napos felmondási idő figyelembe vétele mellett - a szolgáltatási díjnak az felmondás napját követő előfizetői időszakra vonatkozó visszatérítési igény mellett - felmondani.
                    Amennyiben a Felhasználó a fenti időszakon belül felmondási jogát nem gyakorolja, a módosított rendelkezések az értesítést követő 16. napon hatályba lépnek a Felhasználóval szemben.
                </Text>
                <SubTitle>10. Egyéb rendelkezések</SubTitle>
                <Text>
                    Szolgáltató fenntartja a jogot, hogy bármikor, bármilyen változtatást, javítást hajtson végre a Honlapon, Szolgáltatáson előzetes figyelmeztetés nélkül. A Szolgáltató továbbá fenntartja a jogot, hogy a Honlapot más Domain név alá helyezze át. A Honlap és a Szolgáltatás szerzői jogvédelem alatt áll. Szolgáltató a szerzői jogi jogosultja vagy a feljogosított felhasználója a Honlapon, valamint a Honlapon keresztül elérhető szolgáltatások nyújtása során megjelenített valamennyi tartalomnak: bármely szerzői műnek, illetve más szellemi alkotásnak (ideértve többek közt valamennyi grafikát és egyéb anyagokat, a Honlap felületének elrendezését, szerkesztését, a használt szoftveres és egyéb megoldásokat, ötletet, megvalósítást). Tehát a Honlap, annak grafikus elemei, szövege és technikai megoldásai a szolgáltató szellemi termékei szerzői jog védelme alatt állnak. Másolásuk akár teljes egészében, akár részleteiben szerzői jogokat sért.
                    A Honlap tartalmának valamint egyes részeinek merevlemezre ssd-re, usb-re, sd kártyára mentése vagy kinyomtatása saját felhasználás céljából engedélyezett.
                    A saját felhasználáson túli felhasználás – pl. adatbázisban történő tárolására, továbbadás, közzé vagy letölthetővé tétel, kereskedelmi forgalomba hozatal – kizárólag a szolgáltató előzetes írásbeli engedélyével lehetséges.
                    A Szolgáltató fenntartja minden jogát szolgáltatásának minden elemére, különös tekintettel a kereső motorjaira és egyéb internetes szoftvereire, az oladlneve domain nevére, az ehhez tartozó al-domainekre, al-oldalakra, valamint az internetes reklámfelületeire. Tilos minden olyan tevékenység, amely a Szolgáltató adatbázisának kilistázására, rendszerezésére, archiválására, feltörésére (hack), forráskódjainak visszafejtésére irányul, kivéve, ha erre a Szolgáltató külön engedélyt nem ad.
                    Külön megállapodás, vagy az erre a célra szolgáló szolgáltatás igénybevétele nélkül tilos a Szolgáltató által rendelkezésre bocsátott hirdetéskezelő-felület, illetve keresőmotorok megkerülésével a Szolgáltató adatbázisát módosítani, lemásolni, abban új adatokat elhelyezni, vagy meglévő adatokat felülírni.
                    Jelen Általános Szerződési Feltételek hatályba lépésének ideje: 2021.09.05.
                </Text>
            </Container>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Conditions
