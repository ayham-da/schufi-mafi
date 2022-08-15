import WSPGallery from '../../components/Gallery/WSPGallery';
import './GalleryPage.css';

import community1 from '../../assets/gallery/Community1.jpg'
import community2 from '../../assets/gallery/Community2.jpg'
import community3 from '../../assets/gallery/Community3.jpg'
import community4 from '../../assets/gallery/Community4.jpg'

import IstSyrienSicher1 from '../../assets/gallery/IstSyrienSicher1.jpg'
import IstSyrienSicher2 from '../../assets/gallery/IstSyrienSicher2.jpg'

import Yalla1 from '../../assets/gallery/Yalla1.jpg'
import Yalla2 from '../../assets/gallery/Yalla2.jpg'
import Yalla3 from '../../assets/gallery/Yalla3.jpg'
import Yalla4 from '../../assets/gallery/Yalla4.jpg'
import Yalla5 from '../../assets/gallery/Yalla5.jpg'
import Yalla6 from '../../assets/gallery/Yalla6.jpg'

import Iwan from '../../assets/gallery/Iwan.jpg'
import Layali from '../../assets/gallery/Layali.png'
import Hakaya1 from '../../assets/gallery/Hakaya1.jpg'

import Workshop1 from '../../assets/gallery/Workshop1.jpg'
import Workshop2 from '../../assets/gallery/Workshop2.jpg'
import Musiqana1 from '../../assets/gallery/Musiqana1.png'
import CommunityPage from "./Community/Community";




function GalleryPage() {

    const galleryImages = [

        {
            img: community1,
            title: 'community',
            description: "Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen\nTreffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle\nBiographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft\nwie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges\nKonzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie\nfolgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo\nTheaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu\nseinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.",

        },
        {
            img: IstSyrienSicher1,
            title: 'Ist Syrien Sicher',
            description: "Im Zuge des „Syrian Prisoner Day“ lädt euch das syrische Kollektiv „Schu Fi Ma Fi“ in Kooperation mit\nAmnesty International (Asylgruppe) und mit „Adopt a Revolution“ am 17.09 zu einem Workshop und\nanschließend zu einem Podiumsgespräch ein. In dem Workshop werden wir gemeinsam Beutel mit\nverschiedenen Sprüchen bedrucken, um uns mit den syrischen Verschwunden und ihren Angehörigen zu\nsolidarisieren. Wir werden Beutel zur Verfügung stellen, aber ihr könnt auch eure eigenen T-Shirts oder\nTextilien zum Bedrucken mitbringen.\nIn dem Podiumsgespräch werden wir mit unseren Gästen über die Frage diskutieren: Ist Syrien aktuell\nein sicheres Land?\nDazu sind die Amnesty-Asylgruppe und die Geschäftsführerin von Adopt a Revolution Christin Lüttich\nsowie der syrische Menschenrechtsaktivist Anwar Al Bounni (Syrian Center for Legal Studies and\nResearches) und Wafa Moustafa von der Frauengruppe (Families for Freedom) eingeladen",


        },

        {
            img: Iwan,
            title: 'Iwan',
            description: "Iwan ist ein sozialer Salon für Syrer und Syrerinnen, um zusammenzukommen, zu reden und zu\ndiskutieren in demokratischen Rahmen.\nAls Syrer hatten wir in Syrien nicht den Luxus, unter einem Diktatur frei zu diskutieren und uns frei\nauszudrücken. Das wollen wir mit dem Iwan Projekt ändern, denn Iwan ermächtigt die Syrer und\nSyrerinnen sich über aktuellen Themen ins Gespräch zu kommen und somit werden sie selber die\nDemokratie und die Freiheit erleben. hoffentlich kommen wir danach mit Vorstellungen über\numstrittene Themen aus syrischem perspektiv.",


        },
        {
            img: Hakaya1,
            title: 'Hakaya',
            description: "Zahlreiche talentierte Schriftsteller*innen mit Fluchtgeschichte nutzen das Schreiben als bedeutsames\nWerkzeug, um ihre eigene Geschichte niederzuschreiben und das System der alten und neuen Heimat\nfrei zu kritisieren. Hakaya (Geschichten) soll der Förderung von Schriftsteller*innen und dem\ninterkulturellen Dialog dienen. Außerdem ermutigt diese Plattform Menschen mit Fluchterfahrung, ihre\neigenen Geschichten zu erzählen.\nHakaya ist eine Plattform, in der die hier lebenden Syrer*innen ihre Geschichten, Erlebnissen und\nTräume in orientalischer Atmosphäre mit euch teilen.",


        },
        {
            img: Workshop2,
            title: 'Workshop',
            description:''

        },
        {
            img: community2,
            title: 'community',
            description: "Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen\nTreffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle\nBiographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft\nwie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges\nKonzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie\nfolgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo\nTheaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu\nseinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.",

        },
        {
            img: Yalla1,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: community3,
            title: 'community',
            description: "Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen\nTreffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle\nBiographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft\nwie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges\nKonzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie\nfolgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo\nTheaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu\nseinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.",

        },
        {
            img: IstSyrienSicher2,
            title: 'Ist Syrien Sicher',
            description: "Im Zuge des „Syrian Prisoner Day“ lädt euch das syrische Kollektiv „Schu Fi Ma Fi“ in Kooperation mit\nAmnesty International (Asylgruppe) und mit „Adopt a Revolution“ am 17.09 zu einem Workshop und\nanschließend zu einem Podiumsgespräch ein. In dem Workshop werden wir gemeinsam Beutel mit\nverschiedenen Sprüchen bedrucken, um uns mit den syrischen Verschwunden und ihren Angehörigen zu\nsolidarisieren. Wir werden Beutel zur Verfügung stellen, aber ihr könnt auch eure eigenen T-Shirts oder\nTextilien zum Bedrucken mitbringen.\nIn dem Podiumsgespräch werden wir mit unseren Gästen über die Frage diskutieren: Ist Syrien aktuell\nein sicheres Land?\nDazu sind die Amnesty-Asylgruppe und die Geschäftsführerin von Adopt a Revolution Christin Lüttich\nsowie der syrische Menschenrechtsaktivist Anwar Al Bounni (Syrian Center for Legal Studies and\nResearches) und Wafa Moustafa von der Frauengruppe (Families for Freedom) eingeladen",


        },
        {
            img: community4,
            title: 'community',
            description: "Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen\nTreffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle\nBiographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft\nwie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges\nKonzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie\nfolgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo\nTheaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu\nseinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.",

        },


        {
            img: Workshop1,
            title: 'Workshop',
            description:''

        },

        {
            img: Yalla2,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla3,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla4,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla5,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla6,
            title: 'Yalla',
            description:'Yalla'

        },

        {
            img: Layali,
            title: 'Layali',
            description: "Layali (Nächte) ist ein Syrisches Cafe, indem Syrer und Syrerinnen sowie auch Düsseldorfer und\nDüsseldorferinnen sich ein syrisches Atmosphäre mit Musik, Getränke und dem Zusammenkommen\ngenießen können. Beim Layali gibt’s ein Open Stage, wo man vor dem lokalen Community singen,\nschauspielern oder eine Geschichte erzählen kann. Am Ende wird immer auf die Rhythmus der syrischen\nVolksmusik (Dabke) zusammen getanzt wird.",


        },

        {
            img: Musiqana1,
            title: 'Musiqana',
            description: "Musiqana (Unsere Musik) ist ein musikalisches Projekt, das die nachwuchs Künstler und Künstlerinnen\nmit Migrationshintergrund im Schwerpunkt die Syrische Diaspora dadurch fördert, dass es sie\nzusammenbringt und sie die Möglichkeit gibt, andere Künstler*innen kennenzulernen, eine Band zu\ngestalten und zusammen neue Songs zu komponieren. Wir hatten viel Erfolg mit dem ersten Kick-off Day\nund es wurden schon zwei Bands gegründet, die gerade sich regelmäßig treffen um sich für deren ersten\nKonzert vorzubereiten.حل",

        },
    ]

    return (
        <div className="GalleryPage">
            <br />
            <CommunityPage/>

        </div>
    );
}

export default GalleryPage;
