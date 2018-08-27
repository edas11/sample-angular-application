import { Hotel } from '../data classes/hotel';
import { Room } from '../data classes/room';
import { CitiesService } from './cities.service';

export class HotelsData {

    // tslint:disable:max-line-length
    static getHotelsData(cs: CitiesService): Hotel[] {
        const hotels: Hotel[] = [];
        hotels.push(new Hotel('Radisson Blu Hotel Lietuva', 'Konstitucijos pr. 20, Snipiskes', cs.getCity('Vilnius'),
            4, [9, 1493], 'The elegant 4-star Radisson Blu Hotel Lietuva is located on the banks of the River Neris in the center of Vilnius. It offers on-site parking, spacious rooms with free Wi-Fi, and a fitness center.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Airport shuttle'], ['Club', 'Fitness Centre', 'Hot tub', 'Cycling'],
            [new Room(), new Room()], 'assets/hotels/radisson blu.jpg'));
        hotels.push(new Hotel('Hotel Zemaites', 'Zemaites g. 15, Vilkpede', cs.getCity('Vilnius'),
            3, [8.3, 1316], 'Located a 15-minute bus ride from the Vilnius\' Old Town, Hotel Zemaites offers simple, air-conditioned rooms with cable TV, a refrigerator, a private bathroom and free Wi-Fi.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Airport shuttle'], ['Bar', 'Swimming pool', 'Sauna', 'Spa'],
            [new Room(), new Room()], 'assets/hotels/zemaites.jpg'));

        hotels.push(new Hotel('The Langham London', 'Portland Place, Westminster Borough', cs.getCity('London'),
            5, [9.3, 1879], 'Located at the top of Regent Street, the prestigious Langham offers an award-winning glamorous bar, Artesian, and a stylish restaurant, Roux at the Landau.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Swimming pool', 'Fitness Centre', 'Spa'],
            [new Room(), new Room()], 'assets/hotels/langham.jpg'));
        hotels.push(new Hotel('The Landmark London', '222 Marylebone Road, Westminster Borough', cs.getCity('London'),
            5, [9, 1036], 'In the heart of London’s fashionable Marylebone, this deluxe hotel has a stunning glass-roofed 8-story atrium with towering palm trees, an award-winning restaurant, luxurious bedrooms and an indoor pool and spa.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Swimming pool', 'Fitness Centre', 'Spa'],
            [new Room(), new Room()], 'assets/hotels/landmark.jpg'));
        hotels.push(new Hotel('Mondrian London', '20 Upper Ground, Southwark', cs.getCity('London'),
            5, [9.1, 3103], 'Located on the banks of the River Thames in the famed Sea Containers building, Mondrian London is just a 7-minute walk from the Tate Modern and Shakespeare\'s Globe Theater.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Massage', 'Fitness Centre', 'Spa'],
            [new Room(), new Room()], 'assets/hotels/mondrian.jpg'));

        hotels.push(new Hotel('Hotel Excelsior Latin', '20 rue Cujas, 5th arr.', cs.getCity('Paris'),
            3, [8.2, 1995], 'Located 650 ft from the Luxembourg Gardens, the second largest public park in Paris, Hotel Excelsior Latin features 24-hour front desk and elegant, air-conditioned rooms and suites.',
            ['Airport Shuttle', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Wine/Champagne', 'Terrace'],
            [new Room(), new Room()], 'assets/hotels/excelsior latin.jpg'));
        hotels.push(new Hotel('Hôtel Regina Louvre', '2 place des Pyramides, 1st arr,', cs.getCity('Paris'),
            5, [9.1, 1119], 'The luxurious Hôtel Regina Louver is located in the heart of Paris in the fashion, shopping and museum district, overlooking the Louver.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Bicycle', 'Restaurant'],
            [new Room(), new Room()], 'assets/hotels/regina.jpg'));
        hotels.push(new Hotel('La Clef Tour Eiffel', '83 avenue Kléber, 16th arr.,', cs.getCity('Paris'),
            5, [8.6, 1430], 'Located in the 16th district of Paris, La Clef Tour Eiffel is just 2953 feet from the Eiffel Tower and 2.7 mi from Parc des Princes Stadium.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Yoga', 'Fitness Centre', 'Board Games'],
            [new Room(), new Room()], 'assets/hotels/la clef tour.jpg'));

        hotels.push(new Hotel('Leonardo Royal Hotel Berlin Alexanderplatz', 'Otto-Braun-Str. 90, Friedrichshain-Kreuzberg', cs.getCity('Berlin'),
            4, [8.6, 6251], 'This 4-star Superior hotel features a top-floor sauna and fitness area, and air-conditioned rooms with free WiFi. It stands in Berlin\'s Mitte district, a 15-minute walk from Alexanderplatz.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Cycling', 'Fitness Centre', 'Spa'],
            [new Room(), new Room()], 'assets/hotels/leonardo berlin.jpg'));
        hotels.push(new Hotel('H4 Hotel Berlin Alexanderplatz', 'Karl-Liebknecht-Strasse 32, Mitte', cs.getCity('Berlin'),
            4, [8.6, 7965], 'Just a 2-minute walk from Alexanderplatz, this hotel offers a rich breakfast buffet and modern, soundproofed rooms with a flat-screen TV. It has great transport links to all parts of Berlin.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Cycling', 'Fitness Centre', 'Spa'],
            [new Room(), new Room()], 'assets/hotels/h4 berlin.jpg'));

        return hotels;
    }
}
