import { Hotel } from '../data classes/hotel';
import { Room } from '../data classes/room';
import { CitiesService } from './cities.service';

export class HotelsData {

    // tslint:disable:max-line-length
    static getHotelsData(cs: CitiesService): Hotel[] {
        const hotels: Hotel[] = [];
        hotels.push(new Hotel('Radisson Blu Hotel Lietuva', 'Konstitucijos pr. 20, Snipiskes', cs.getCity('Vilnius'),
            4, {avgRating: 9, reviewsNumber: 1493}, 'The elegant 4-star Radisson Blu Hotel Lietuva is located on the banks of the River Neris in the center of Vilnius. It offers on-site parking, spacious rooms with free Wi-Fi, and a fitness center.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Airport Shuttle'], ['Club', 'Fitness Centre', 'Hot tub', 'Cycling'],
            [new Room(1, 'Standard Room', 2, 129, 'assets/rooms/radisson-standard-room.jpg'),
             new Room(2, 'Superior Room', 2, 135, 'assets/rooms/radisson-superior-room.jpg')],
            'assets/hotels/radisson-blu.jpg', 'assets/hotels/radisson-blu-big.jpg'));
        hotels.push(new Hotel('Hotel Zemaites', 'Zemaites g. 15, Vilkpede', cs.getCity('Vilnius'),
            3, {avgRating: 8.3, reviewsNumber: 1316}, 'Located a 15-minute bus ride from the Vilnius\' Old Town, Hotel Zemaites offers simple, air-conditioned rooms with cable TV, a refrigerator, a private bathroom and free Wi-Fi.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Airport Shuttle'], ['Bar', 'Swimming pool', 'Sauna', 'Spa'],
            [new Room(3, 'Twin room', 2, 48.60, 'assets/rooms/zemaites-twin.jpg'),
             new Room(4, 'Deluxe Double Room', 2, 80, 'assets/rooms/zemaites-deluxe.jpg')],
            'assets/hotels/zemaites.jpg', 'assets/hotels/zemaites-big.jpg'));

        hotels.push(new Hotel('The Langham London', 'Portland Place, Westminster Borough', cs.getCity('London'),
            5, {avgRating: 9.3, reviewsNumber: 1879}, 'Located at the top of Regent Street, the prestigious Langham offers an award-winning glamorous bar, Artesian, and a stylish restaurant, Roux at the Landau.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Swimming pool', 'Fitness Centre', 'Spa'],
            [new Room(5, 'Superior Double Room', 2, 632, 'assets/rooms/langham-double.jpg'),
             new Room(6, 'Superior Twin Room', 2, 632, 'assets/rooms/langham-twin.jpg')],
            'assets/hotels/langham.jpg', 'assets/hotels/langham-big.jpg'));
        hotels.push(new Hotel('The Landmark London', '222 Marylebone Road, Westminster Borough', cs.getCity('London'),
            5, {avgRating: 9, reviewsNumber: 1036}, 'In the heart of London’s fashionable Marylebone, this deluxe hotel has a stunning glass-roofed 8-story atrium with towering palm trees, an award-winning restaurant, luxurious bedrooms and an indoor pool and spa.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Swimming pool', 'Fitness Centre', 'Spa'],
            [new Room(7, 'Double Room', 2, 292, 'assets/rooms/landmark-double.jpg'),
             new Room(8, 'Executive Double Room', 2, 364, 'assets/rooms/landmark-executive.jpg')],
            'assets/hotels/landmark.jpg', 'assets/hotels/landmark-big.jpg'));
        hotels.push(new Hotel('Mondrian London', '20 Upper Ground, Southwark', cs.getCity('London'),
            5, {avgRating: 9.1, reviewsNumber: 3103}, 'Located on the banks of the River Thames in the famed Sea Containers building, Mondrian London is just a 7-minute walk from the Tate Modern and Shakespeare\'s Globe Theater.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Massage', 'Fitness Centre', 'Spa'],
            [new Room(9, 'Standard Room', 2, 221, 'assets/rooms/mondrian-standard.jpg'),
             new Room(10, 'Superior Room', 2, 322, 'assets/rooms/mondrian-superior.jpg')],
            'assets/hotels/mondrian.jpg', 'assets/hotels/mondrian-big.jpg'));

        hotels.push(new Hotel('Hotel Excelsior Latin', '20 rue Cujas, 5th arr.', cs.getCity('Paris'),
            3, {avgRating: 8.2, reviewsNumber: 1995}, 'Located 650 ft from the Luxembourg Gardens, the second largest public park in Paris, Hotel Excelsior Latin features 24-hour front desk and elegant, air-conditioned rooms and suites.',
            ['Airport Shuttle', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Wine/Champagne', 'Terrace'],
            [new Room(11, 'Classic Double Room', 2, 158, 'assets/rooms/excelsior-double.jpg'),
             new Room(12, 'Classic Twin Room', 2, 168, 'assets/rooms/excelsior-twin.jpg')],
            'assets/hotels/excelsior-latin.jpg', 'assets/hotels/excelsior-latin-big.jpg'));
        hotels.push(new Hotel('Hotel Regina Louvre', '2 place des Pyramides, 1st arr,', cs.getCity('Paris'),
            5, {avgRating: 9.1, reviewsNumber: 1119}, 'The luxurious Hôtel Regina Louver is located in the heart of Paris in the fashion, shopping and museum district, overlooking the Louver.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Cycling', 'Restaurant'],
            [new Room(13, 'Deluxe Double Room', 2, 540, 'assets/rooms/regina-double.jpg'),
             new Room(14, 'Prestige Suite', 2, 855, 'assets/rooms/regina-suite.jpg')],
            'assets/hotels/regina.jpg', 'assets/hotels/regina-big.jpg'));
        hotels.push(new Hotel('La Clef Tour Eiffel', '83 avenue Kléber, 16th arr.,', cs.getCity('Paris'),
            5, {avgRating: 8.6, reviewsNumber: 1430}, 'Located in the 16th district of Paris, La Clef Tour Eiffel is just 2953 feet from the Eiffel Tower and 2.7 mi from Parc des Princes Stadium.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Steam Room', 'Fitness Centre', 'Massage'],
            [new Room(15, 'Classic Double or Twin Room', 2, 390, 'assets/rooms/la-clef-tour-double.jpg'),
             new Room(16, 'Executive Studio', 2, 446, 'assets/rooms/la-clef-tour-studio.jpg')],
            'assets/hotels/la-clef-tour.jpg', 'assets/hotels/la-clef-tour-big.jpg'));

        hotels.push(new Hotel('Leonardo Royal Hotel Berlin Alexanderplatz', 'Otto-Braun-Str. 90, Friedrichshain-Kreuzberg', cs.getCity('Berlin'),
            4, {avgRating: 8.6, reviewsNumber: 6251}, 'This 4-star Superior hotel features a top-floor sauna and fitness area, and air-conditioned rooms with free WiFi. It stands in Berlin\'s Mitte district, a 15-minute walk from Alexanderplatz.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Cycling', 'Fitness Centre', 'Spa'],
            [new Room(17, 'Classic Double Room', 2, 89.10, 'assets/rooms/leonardo-double.jpg'),
             new Room(18, 'Junior Suite', 2, 149, 'assets/rooms/leonardo-suite.jpg')],
            'assets/hotels/leonardo-berlin.jpg', 'assets/hotels/leonardo-berlin-big.jpg'));
        hotels.push(new Hotel('H4 Hotel Berlin Alexanderplatz', 'Karl-Liebknecht-Strasse 32, Mitte', cs.getCity('Berlin'),
            4, {avgRating: 8.6, reviewsNumber: 7965}, 'Just a 2-minute walk from Alexanderplatz, this hotel offers a rich breakfast buffet and modern, soundproofed rooms with a flat-screen TV. It has great transport links to all parts of Berlin.',
            ['Parking', 'Food and drink', 'Free WiFi', 'Non-smoking Rooms'], ['Bar', 'Cycling', 'Fitness Centre', 'Spa'],
            [new Room(19, 'Comfort Double or Twin Room', 2, 96.05, 'assets/rooms/h4-double.jpg'),
             new Room(20, 'Suite', 2, 181.05, 'assets/rooms/h4-suite.jpg')],
            'assets/hotels/h4-berlin.jpg', 'assets/hotels/h4-berlin-big.jpg'));

        return hotels;
    }
}
