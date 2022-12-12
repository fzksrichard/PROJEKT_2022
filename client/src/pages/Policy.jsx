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


const Policy = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Title>ADATVÉDELEM</Title>
                <SubTitle>Adatkezelési Tájékoztató</SubTitle>
                <Text>
                    Az adatok kezelésével összefüggésben DAC Kft. (továbbiakban: Szolgáltató) mint adatkezelő, ezúton tájékoztatja a weboldalszerkesztő programot igénybevevő érintetteket (a továbbiakban Felhasználó) honlapon (a továbbiakban Honlap) általa kezelt személyes adatokról, a személyes adatok kezelése körében követett elveiről és gyakorlatáról, valamint az érintettek jogai gyakorlásának módjáról és lehetőségeiről.
                    Érintett magára nézve kötelezőnek ismeri el jelen jogi közlemény tartalmát. Kötelezettséget vállal arra, hogy tevékenységével kapcsolatos minden adatkezelés megfelel a jelen szabályzatban és a hatályos jogszabályokban meghatározott elvárásoknak.
                    Amennyiben az Érintett a szolgáltatás igénybevételéhez harmadik fél adatait adta meg vagy a Honlap használata során bármilyen módon kárt okozott, a Szolgáltató jogosult Érintettel szembeni kártérítés érvényesítésére. A Szolgáltató ilyen esetben minden tőle telhető segítséget megad az eljáró hatóságoknak a jogsértő személy személyazonosságának megállapítása céljából.
                    Jelen Adatkezelési Tájékoztató 2021.09.05. napjától érvényes.
                    Az Adatkezelési Tájékoztató elérhető és letölthető itt. www.designandcreate.hu/adatkezelesi-tajekoztato
                    Érintett a Honlap használatával elfogadja az alábbiakat, és hozzájárul az alábbiakban meghatározott adatkezelésekhez.
                </Text>
                <SubTitle>1. Definíciók</SubTitle>
                <List>
                    <li>Érintett: bármely meghatározott, személyes adat alapján azonosított vagy - közvetlenül vagy közvetve - azonosítható természetes személy.</li>
                    <li>Személyes adat: az érintettel kapcsolatba hozható adat - különösen az érintett neve, azonosító jele, valamint egy vagy több fizikai, fiziológiai, mentális, gazdasági, kulturális vagy szociális azonosságára jellemző ismeret -, valamint az adatból levonható, az érintettre vonatkozó következtetés;
                    </li>
                    <li>Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok - teljes körű vagy egyes műveletekre kiterjedő - kezeléséhez;
                    </li>
                    <li>
                        Tiltakozás: az érintett nyilatkozata, amellyel személyes adatainak kezelését kifogásolja, és az adatkezelés megszüntetését, illetve a kezelt adatok törlését kéri;
                    </li>
                    <li>
                        Adatkezelő: az a természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet - jelen esetben a Szolgáltató -, aki vagy amely önállóan vagy másokkal együtt az adatok kezelésének célját meghatározza, az adatkezelésre (beleértve a felhasznált eszközt) vonatkozó döntéseket meghozza és végrehajtja, vagy az általa megbízott adatfeldolgozóval végrehajtatja;
                    </li>
                    <li>
                        Adatkezelés: az alkalmazott eljárástól függetlenül az adatokon végzett bármely művelet vagy a műveletek összessége, így különösen gyűjtése, felvétele, rögzítése, rendszerezése, tárolása, megváltoztatása, felhasználása, lekérdezése, továbbítása, nyilvánosságra hozatala, összehangolása vagy összekapcsolása, zárolása, törlése és megsemmisítése, valamint az adatok további felhasználásának megakadályozása, fénykép-, hang- vagy képfelvétel készítése, valamint a személy azonosítására alkalmas fizikai jellemzők (pl. ujj- vagy tenyérnyomat, DNS-minta, íriszkép) rögzítése;
                    </li>
                    <li>
                        Adatfeldolgozás: az adatkezelési műveletekhez kapcsolódó technikai feladatok elvégzése, függetlenül a műveletek végrehajtásához alkalmazott módszertől és eszköztől, valamint az alkalmazás helyétől, feltéve hogy a technikai feladatot az adatokon végzik;
                    </li>
                    <li>
                        Adatfeldolgozó: az a természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet, aki vagy amely az adatkezelővel kötött szerződése alapján - beleértve a jogszabály rendelkezése alapján történő szerződéskötést is - adatok feldolgozását végzi;
                    </li>
                    <li>Adattovábbítás: az adat meghatározott harmadik személy számára történő hozzáférhetővé tétele;</li>
                    <li>Nyilvánosságra hozatal: az adat bárki számára történő hozzáférhetővé tétele;</li>
                    <li>Adattörlés: az adatok felismerhetetlenné tétele oly módon, hogy a helyreállításuk többé nem lehetséges;</li>
                    <li>Adatzárolás: az adat azonosító jelzéssel ellátása további kezelésének végleges vagy meghatározott időre történő korlátozása céljából;</li>
                    <li>Adatmegsemmisítés: az adatokat tartalmazó adathordozó teljes fizikai megsemmisítése;</li>
                    <li>Harmadik személy: olyan természetes vagy jogi személy, illetve jogi személyiséggel nem rendelkező szervezet, aki vagy amely nem azonos az érintettel, az adatkezelővel vagy az adatfeldolgozóval;</li>
                </List>
                <SubTitle>2. Az adatkezelés elvei és céljai</SubTitle>
                <Text>A Szolgáltató a személyes adatok kezelése során a jóhiszeműség és a tisztesség követelményeinek megfelelően, az Érintettekkel együttműködve jár el.
                    A Szolgáltató személyes adatot kizárólag meghatározott célból, jog gyakorlása és kötelezettség teljesítése érdekében kezel. A Szolgáltató törekszik arra, hogy csak olyan személyes adat kezelésére kerüljön sor, amely az adatkezelés céljának megvalósulásához elengedhetetlen, a cél elérésére alkalmas. A Szolgáltató által folytatott adatkezelés célja:
                </Text>
                <List>
                    <li>
                        Érintettel a szerződéskötést követő kapcsolattartás, illetve a Érintett egyértelmű azonosítása,
                    </li>
                    <li>
                        Érintettel kötött szerződés alapján a Szolgáltatás nyújtása, a Érintett elszámolásainak kezelése, számla kiállítása,
                    </li>
                    <li>
                        Érintett panaszainak, bejelentéseinek, igényeinek kezelése, ezek nyilvántartása, kivizsgálása,
                    </li>
                </List>
                <SubTitle>3. Az adatkezelés jogalapja</SubTitle>
                <Text>A Szolgáltató általi adatkezelésekre az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (a továbbiakban: Infotv) 5. § (1) bekezdés a) pontja szerint az Érintettek önkéntes hozzájárulása alapján, valamint az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvény alapján kerül sor. A hozzájárulást az Érintett az egyes adatkezelések tekintetében a Honlap használatával, a regisztrációval, illetve a kérdéses adatok önkéntes megadásával adja meg.
                </Text>
                <SubTitle>4. Az adatokat megismerő személyek köre, adatbiztonság</SubTitle>
                <Text>
                    Az adatokat elsődlegesen a Szolgáltató illetve a Szolgáltató belső munkatársai jogosultak megismerni, azokat nem teszik közzé, harmadik személyek részére nem adják át és csak az Adatkezelési Tájékoztatóban meghatározott célokra használják, illetve használhatják fel.
                    Az alapul fekvő informatikai rendszer üzemeltetése, a megrendelések teljesítése, az elszámolás rendezése körében a Szolgáltató adatfeldolgozót (pl. rendszerüzemeltető, könyvelő) vehet igénybe. Szolgáltató az ilyen külső szereplők adatkezelési gyakorlatáért nem felelős.
                    Adatállományok kezelése és védelme
                    A Szolgáltató, mint adatkezelő gondoskodik az adatok biztonságáról. Ennek érdekében megteszi azokat a technikai és szervezési intézkedéseket, kialakítja azokat az eljárási szabályokat, amelyek az irányadó jogszabályok, adat- és titokvédelmi szabályok érvényre juttatásához szükségesek. A Szolgáltató az adatokat megfelelő intézkedésekkel védi a jogosulatlan hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés vagy megsemmisítés, valamint a véletlen megsemmisülés és sérülés, továbbá az alkalmazott technika megváltozásából fakadó hozzáférhetetlenné válás ellen.
                </Text>
                <SubTitle>5. Adatkezelés időtartama</SubTitle>
                <Text>
                    A regisztrációs folyamat során megadott személyes adatok kezelése a regisztrációval kezdődik és annak kérelemre történő törléséig tart. A regisztráció Érintett általi törlésére bármikor, az Általános Szerződési Feltételekben rögzített esetben és módon kerülhet sor.
                    Adat törlésének határideje a kérelem beérkezését követő 2 munkanap.
                    Fenti rendelkezések nem érintik a jogszabályban (pl. számviteli jogszabályokban) meghatározott megőrzési kötelezettségek teljesítését, valamint a honlapon történő regisztráció során vagy egyéb módon adott további hozzájárulások alapján történő adatkezeléseket.
                    A naplózott adatokat a rendszer – az utolsó látogatás dátumának kivételével, amelyet automatikusan felülír – a naplózás időpontjától számított 6 hónapig tárolja.
                </Text>
                <SubTitle>6. Érintett jogai és jogérvényesítési lehetőségek</SubTitle>
                <Text>
                    Érintett bármikor jogosult tájékoztatást kérni a Szolgáltató által kezelt, rá vonatkozó személyes adatokról, továbbá – a regisztráció során megadott e-mail cím kivételével – bármikor módosíthatja azokat a felhasználói fiókjában.
                    Szolgáltató az Érintett kérésére tájékoztatást ad a rá vonatkozó, általa kezelt adatokról, az adatkezelés céljáról, jogalapjáról, időtartamáról, továbbá arról, hogy kik és milyen célból kapják vagy kapták meg adatait. Szolgáltató a kérelem benyújtásától számított 30 napon belül írásban adja meg a kért tájékoztatást.
                    Az Érintett bármely, az adatkezeléssel kapcsolatos kérdéssel, illetve észrevétellel a Szolgáltató munkatársához fordulhat az alább megjelölt elérhetőségeken keresztül.
                </Text>
                <Text>Az Érintett bármikor jogosult a helytelenül rögzített adatainak helyesbítését vagy azok törlését kérni az alább megjelölt elérhetőségek valamelyikén. Szolgáltató a kérelem beérkezésétől számított 2 munkanapon belül törli az adatokat, ez esetben azok nem lesznek újra helyreállíthatók. A törlés nem vonatkozik a jogszabály (pl. számviteli szabályozás) alapján szükséges adatkezelésekre, azokat Szolgáltató a szükséges időtartamig megőrzi.
                    Érintett kérheti továbbá, adatainak zárolását. A Szolgáltató zárolja a személyes adatot, ha az érintett ezt kéri, vagy ha a rendelkezésére álló információk alapján feltételezhető, hogy a törlés sértené az Érintett jogos érdekeit. Az így zárolt személyes adat kizárólag addig kezelhető, ameddig fennáll az az adatkezelési cél, amely a személyes adat törlését kizárta.
                    A helyesbítésről, a zárolásról és a törlésről az Érintettet, továbbá mindazokat értesíteni kell, akiknek korábban az adatot adatkezelés céljára továbbították. Az értesítés mellőzhető, ha ez az adatkezelés céljára való tekintettel az Érintett jogos érdekét nem sérti.
                    Ha az adatkezelő az érintett helyesbítés, zárolás vagy törlés iránti kérelmét nem teljesíti, a kérelem kézhezvételét követő 30 napon belül írásban közli a helyesbítés, zárolás vagy törlés iránti kérelem elutasításának ténybeli és jogi indokait.
                </Text>
                <Text>
                Érintett tiltakozhat személyes adatának kezelése ellen. Szolgáltató a tiltakozást a kérelem benyújtásától számított legrövidebb időn belül, de legfeljebb 15 nap alatt megvizsgálja, annak megalapozottsága kérdésében döntést hoz, és döntéséről a kérelmezőt írásban tájékoztatja.
                </Text>
                <SubTitle>7. Hírlevél</SubTitle>
                <Text>
                    Szolgáltató a Honlapon lehetővé teszi Érintett számára, hogy a regisztráció során feliratkozzon a hírlevélre. A hírlevél direkt marketing elemekkel rendelkezik és reklámot tartalmaz. Szolgáltató a hírlevél igénybevétele során az Érintett által megadott adatokat kezeli.
                    Az Érintett korlátozás és indokolás nélkül, bármikor, ingyenesen leiratkozhat a hírlevelek küldéséről. Ezt megteheti a hírlevelek alján található „Leiratkozás” linkre történő kattintással vagy a Szolgáltató részére küldött törlési kérelemmel (emailben vagy postai úton). Ebben az esetben Szolgáltató minden - a hírlevelek küldéséhez szükséges - személyes adatát törli nyilvántartásából és további hírleveleivel, ajánlataival nem keresi meg az Érintettet. A regisztráció során megadott elektronikus levélcímekre hirdetést vagy reklámot (hírlevél) tartalmazó leveleket a Szolgáltató csak az Érintett kifejezett hozzájárulásával, a jogszabályi előírásoknak megfelelő esetekben és módon küld.
                </Text>
                <SubTitle>8. Egyéb rendelkezések</SubTitle>
                <Text>
                    Szolgáltató fenntartja a jogot, hogy jelen Adatkezelési Tájékoztatót az Érintettek előzetes értesítése mellett egyoldalúan módosítsa. A módosítás hatályba lépését követően Érintett a szolgáltatás használatával ráutaló magatartással elfogadja a módosított Adatkezelési Tájékoztatóban foglaltakat.
                    Amennyiben az Érintett szolgáltatás igénybevételéhez a regisztráció, illetve a hírlevélre történő feliratkozás során harmadik fél adatait adta meg, vagy a Honlap használata során bármilyen módon kárt okozott, a Szolgáltató jogosult az Érintettel szembeni kártérítés érvényesítésére.
                    Szolgáltató a neki megadott személyes adatokat nem ellenőrzi. A megadott adatok megfelelősségéért kizárólag az azt megadó személy felel. Bármely Érintett e-mail címének megadásakor egyben felelősséget vállal azért, hogy a megadott e-mail címről kizárólag ő vesz igénybe szolgáltatást. E felelősségvállalásra tekintettel egy megadott e-mail címen történt belépésekkel összefüggő mindennemű felelősség kizárólag azt az Érintettet terheli, aki az e-mail címet regisztrálta.
                    Regisztrált Érintett a Honlap használatával kötelezettséget vállal továbbá arra, hogy az általa szerkeszthető és Honlapon megjelenő tartalmak, megadott adatok, információk harmadik fél és Szolgáltató jogát illetve jogos érdekeit nem sértik.
                    A Szolgáltató fenti esetekben minden tőle telhető segítséget megad az eljáró hatóságoknak a jogsértő személy személyazonosságának megállapítása céljából. Szolgáltató a fenti esetekben, illetve az ÁSZF be nem tartása esetén jogosult az Érintett regisztrációját, illetve hírlevélre történő feliratkozását törölni; ebben az esetben Szolgáltató az Érintettet a törlésből fakadóan ért károkért nem felel.
                </Text>
            </Container>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Policy
