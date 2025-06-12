// This file defines the HotelInfo component which displays detailed information about Villa Serenity
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { hotelInfoTranslations } from "@/lib/hotelInfoTranslations";
import { 
  MapPin, 
  Utensils, 
  Waves, 
  Plane, 
  BedDouble, 
  Bath, 
  Coffee, 
  Clock, 
  Heart, 
  Baby, 
  ScrollText, 
  Car, 
  HelpCircle,
  Wifi,
  ParkingSquare,
  Users,
  Plane as PlaneIcon,
  Cigarette,
  Shrub,
  GlassWater,
  Stars
} from "lucide-react";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title }) => (
  <div className="flex items-center mb-6 border-b border-serenity-blue pb-2">
    <div className="mr-2 text-serenity-darkblue">
      {icon}
    </div>
    <h2 className="text-2xl font-bold font-playfair text-gray-800">{title}</h2>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);

const AmenityItem = ({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <div className="mr-2 text-serenity-darkblue">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-1 pl-9">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600">
          {item.includes("(Additional charge)") ? (
            <>
              {item.replace(" (Additional charge)", "")} <span className="text-xs text-gray-500">*</span>
            </>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  </div>
);

const HotelInfo = () => {
  const { t, language } = useTranslation();
  const hotelInfo = hotelInfoTranslations[language as keyof typeof hotelInfoTranslations] || hotelInfoTranslations.en;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Accommodation Overview */}
      <section className="mb-12">
        <SectionTitle 
          icon={<Heart size={24} />} 
          title={hotelInfo.accommodationOverview} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-semibold text-serenity-darkblue mb-4">{hotelInfo.exceptionalFacilities}</h3>
            <p className="text-gray-600 mb-4">{hotelInfo.reviewScore}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Wifi className="h-5 w-5 mr-2 text-serenity-darkblue" />
                <span>{hotelInfo.freeWifi}</span>
              </div>
              <div className="flex items-center">
                <ParkingSquare className="h-5 w-5 mr-2 text-serenity-darkblue" />
                <span>{hotelInfo.freeParking}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-serenity-darkblue" />
                <span>{hotelInfo.familyRooms}</span>
              </div>
              <div className="flex items-center">
                <PlaneIcon className="h-5 w-5 mr-2 text-serenity-darkblue" />
                <span>{hotelInfo.airportShuttle}</span>
              </div>
              <div className="flex items-center">
                <Cigarette className="h-5 w-5 mr-2 text-serenity-darkblue" />
                <span>{hotelInfo.nonSmokingRooms}</span>
              </div>
              <div className="flex items-center">
                <Shrub className="h-5 w-5 mr-2 text-serenity-darkblue" />
                <span>{hotelInfo.terrace}</span>
              </div>
              <div className="flex items-center">
                <GlassWater className="h-5 w-5 mr-2 text-serenity-darkblue" />
                <span>{hotelInfo.bar}</span>
              </div>
              <div className="flex items-center">
                <Coffee className="h-5 w-5 mr-2 text-serenity-darkblue" />
                <span>{hotelInfo.excellentBreakfast}</span>
              </div>
            </div>
            
            <button className="bg-serenity-darkblue text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
              {hotelInfo.checkAvailability}
            </button>
          </Card>
          
          <div className="flex flex-col space-y-4">
            <Card className="flex-1">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 mr-2 text-serenity-darkblue mt-1" />
                <div>
                  <h3 className="font-semibold">{hotelInfo.excellentLocation}</h3>
                  <p className="text-gray-600 text-sm">{hotelInfo.guestsLoved}</p>
                </div>
              </div>
              <button className="text-serenity-darkblue hover:underline text-sm font-medium">
                {hotelInfo.checkAvailability}
              </button>
            </Card>
            
            <Card className="flex-1">
              <h3 className="font-semibold mb-2">{hotelInfo.addRequest}</h3>
              <button className="bg-serenity-darkblue text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                {hotelInfo.checkAvailability}
              </button>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Nearby Attractions */}
      <section className="mb-12">
        <SectionTitle 
          icon={<MapPin size={24} />} 
          title={hotelInfo.locationAndNearby} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold mb-4 text-gray-800">{hotelInfo.nearbyAttractions}</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex">
                <Stars className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Lëkurësi Castle – 2.7 km</span>
              </li>
              <li className="flex">
                <Stars className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Synagogue Basilica – 3.3 km</span>
              </li>
              <li className="flex">
                <Stars className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Butrint National Park – 4.5 km</span>
              </li>
            </ul>
            
            <h3 className="font-semibold mb-4 text-gray-800">{hotelInfo.nearbyRestaurants}</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex">
                <Utensils className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Café/Bar Lulu Cafe – 2.4 km</span>
              </li>
              <li className="flex">
                <Utensils className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Café/Bar Lëkurësi Castle – 2.7 km</span>
              </li>
              <li className="flex">
                <Utensils className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Café/Bar Lbc – 2.5 km</span>
              </li>
            </ul>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <h3 className="font-semibold mb-4 text-gray-800">{hotelInfo.nearbyBeaches}</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <Waves className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                  <span className="text-gray-600">Saranda City Beach – 2.8 km</span>
                </li>
                <li className="flex">
                  <Waves className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                  <span className="text-gray-600">La Petite Beach – 2.9 km</span>
                </li>
                <li className="flex">
                  <Waves className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                  <span className="text-gray-600">Maestral Beach – 2.9 km</span>
                </li>
                <li className="flex">
                  <Waves className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                  <span className="text-gray-600">Santa Quaranta Beach – 3.4 km</span>
                </li>
                <li className="flex">
                  <Waves className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                  <span className="text-gray-600">VIP Beach – 3.5 km</span>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="font-semibold mb-4 text-gray-800">{hotelInfo.nearestAirports}</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <Plane className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                  <span className="text-gray-600">Corfu International Airport – 38 km</span>
                </li>
                <li className="flex">
                  <Plane className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                  <span className="text-gray-600">Ioannina Airport – 93 km</span>
                </li>
                <li className="flex">
                  <Plane className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                  <span className="text-gray-600">Tirana Airport – 262 km</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-500 mt-4 italic">
                {hotelInfo.distanceNote}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Breakfast & Dining Options */}
      <section className="mb-12">
        <SectionTitle 
          icon={<Coffee size={24} />} 
          title={hotelInfo.breakfastAndDining} 
        />
        <Card>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{hotelInfo.breakfastQuestion}</h3>
            <p className="text-gray-600 mb-3">{hotelInfo.breakfastAnswer}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {hotelInfo.breakfastTypes.map((type, index) => (
                <span key={index} className="bg-blue-50 text-serenity-darkblue px-3 py-1 rounded-full text-sm">
                  {type}
                </span>
              ))}
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{hotelInfo.foodAndDrink}</h3>
            <ul className="space-y-2">
              <li className="flex">
                <Coffee className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Coffee house on site</span>
              </li>
              <li className="flex">
                <GlassWater className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">
                  Wine/Champagne <span className="text-xs text-gray-500">*</span>
                </span>
              </li>
              <li className="flex">
                <GlassWater className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">
                  Bar <span className="text-xs text-gray-500">*</span>
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              <span className="text-xs text-gray-500">*</span> {hotelInfo.additionalCharge}
            </p>
          </div>
        </Card>
      </section>

      {/* Room Types */}
      <section className="mb-12">
        <SectionTitle 
          icon={<BedDouble size={24} />} 
          title={hotelInfo.roomTypes} 
        />
        <Card>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{hotelInfo.roomTypesQuestion}</h3>
          <p className="text-gray-600 mb-3">{hotelInfo.roomTypesAnswer}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {hotelInfo.availableRoomTypes.map((type, index) => (
              <div key={index} className="border rounded-lg p-4 hover:border-serenity-darkblue transition-colors">
                <BedDouble className="h-6 w-6 mb-2 text-serenity-darkblue" />
                <h4 className="font-medium">{type}</h4>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Amenities & Facilities */}
      <section className="mb-12">
        <SectionTitle 
          icon={<Heart size={24} />} 
          title={hotelInfo.amenitiesAndFacilities} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <AmenityItem 
              icon={<Bath size={20} />}
              title={hotelInfo.bathroom}
              items={["Toilet paper", "Towels", "Private bathroom", "Bathtub"]}
            />
            
            <AmenityItem 
              icon={<BedDouble size={20} />}
              title={hotelInfo.bedroom}
              items={["Linen", "Wardrobe", "Extra-large beds (>2 meters)"]}
            />
            
            <AmenityItem 
              icon={<MapPin size={20} />}
              title={hotelInfo.view}
              items={["View"]}
            />
            
            <AmenityItem 
              icon={<Shrub size={20} />}
              title={hotelInfo.outdoors}
              items={[
                "Outdoor furniture", 
                "Sun terrace", 
                "BBQ facilities (Additional charge)", 
                "Terrace", 
                "Garden"
              ]}
            />
          </Card>
          
          <Card>
            <AmenityItem 
              icon={<Wifi size={20} />}
              title={hotelInfo.internet}
              items={["Wi-Fi is available in all areas and is free of charge."]}
            />
            
            <AmenityItem 
              icon={<ParkingSquare size={20} />}
              title={hotelInfo.parking}
              items={["Private parking is available on-site (reservation not needed) and is free of charge."]}
            />
            
            <AmenityItem 
              icon={<GlassWater size={20} />}
              title={hotelInfo.services}
              items={[
                "Daily housekeeping",
                "Shared lounge/TV area",
                "Trouser press (Additional charge)",
                "Private check-in/check-out",
                "Ironing service (Additional charge)",
                "Dry cleaning (Additional charge)",
                "Laundry (Additional charge)",
                "Airport shuttle (Additional charge)"
              ]}
            />
            
            <p className="text-xs text-gray-500 mt-4">
              <span className="text-xs text-gray-500">*</span> {hotelInfo.additionalCharge}
            </p>
          </Card>
        </div>
      </section>

      {/* Check-in / Check-out Policy */}
      <section className="mb-12">
        <SectionTitle 
          icon={<Clock size={24} />} 
          title={hotelInfo.checkInOutPolicy} 
        />
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Check-in</h3>
              <p className="text-gray-600 mb-6">{hotelInfo.checkInTime}</p>
              
              <h3 className="font-medium mb-2">Check-out</h3>
              <p className="text-gray-600">{hotelInfo.checkOutTime}</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Cancellation/Prepayment</h3>
              <p className="text-gray-600">{hotelInfo.cancellationPolicy}</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">{hotelInfo.checkTimesQuestion}</p>
            <p className="text-gray-600 mt-2">{hotelInfo.checkTimesAnswer}</p>
          </div>
        </Card>
      </section>

      {/* Children & Bed Policy */}
      <section className="mb-12">
        <SectionTitle 
          icon={<Baby size={24} />} 
          title={hotelInfo.childrenAndBedPolicy} 
        />
        <Card>
          <h3 className="font-medium mb-2">Children policy</h3>
          <p className="text-gray-600 mb-4">{hotelInfo.childrenPolicy}</p>
          <p className="text-gray-600 mb-6">{hotelInfo.childrenPriceNote}</p>
          
          <h3 className="font-medium mb-2">Crib and extra bed policy</h3>
          <p className="text-gray-600 mb-6">{hotelInfo.cribPolicy}</p>
          
          <h3 className="font-medium mb-2">Age restriction</h3>
          <p className="text-gray-600">{hotelInfo.ageRestriction}</p>
        </Card>
      </section>

      {/* House Rules */}
      <section className="mb-12">
        <SectionTitle 
          icon={<ScrollText size={24} />} 
          title={hotelInfo.houseRules} 
        />
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Pets</h3>
              <p className="text-gray-600 mb-4">{hotelInfo.petsPolicy}</p>
              
              <h3 className="font-medium mb-2">Smoking</h3>
              <p className="text-gray-600 mb-4">{hotelInfo.smokingPolicy}</p>
              
              <h3 className="font-medium mb-2">Parties</h3>
              <p className="text-gray-600">{hotelInfo.partiesPolicy}</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">{hotelInfo.importantInfo}</h3>
              <p className="text-gray-600 mb-4">{hotelInfo.bachelorParties}</p>
              
              <h3 className="font-medium mb-2">{hotelInfo.languagesSpoken}</h3>
              <p className="text-gray-600">Greek, English, Swedish</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <button className="bg-serenity-darkblue text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors">
              {hotelInfo.checkAvailability}
            </button>
          </div>
        </Card>
      </section>

      {/* Transportation & Airport Info */}
      <section className="mb-12">
        <SectionTitle 
          icon={<Car size={24} />} 
          title={hotelInfo.transportationAndAirport} 
        />
        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{hotelInfo.nearestAirports}</h3>
            <ul className="space-y-2">
              <li className="flex">
                <Plane className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Corfu International Airport – 38 km</span>
              </li>
              <li className="flex">
                <Plane className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Ioannina Airport – 93 km</span>
              </li>
              <li className="flex">
                <Plane className="h-5 w-5 mr-3 text-serenity-darkblue flex-shrink-0" />
                <span className="text-gray-600">Tirana Airport – 262 km</span>
              </li>
            </ul>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Airport Transportation</h3>
            <div className="flex items-center">
              <Plane className="h-5 w-5 mr-3 text-serenity-darkblue" />
              <span className="text-gray-600">
                Airport shuttle (Additional charge)
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              <span className="text-xs text-gray-500">*</span> {hotelInfo.additionalCharge}
            </p>
          </div>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <SectionTitle 
          icon={<HelpCircle size={24} />} 
          title={hotelInfo.faq} 
        />
        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{hotelInfo.breakfastQuestion}</h3>
            <p className="text-gray-600 mb-4">{hotelInfo.breakfastAnswer}</p>
            
            <div className="flex flex-wrap gap-2">
              {hotelInfo.breakfastTypes.map((type, index) => (
                <span key={index} className="bg-blue-50 text-serenity-darkblue px-3 py-1 rounded-full text-sm">
                  {type}
                </span>
              ))}
            </div>
          </Card>
          
          <Card>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{hotelInfo.roomTypesQuestion}</h3>
            <p className="text-gray-600 mb-4">{hotelInfo.roomTypesAnswer}</p>
            
            <div className="flex flex-wrap gap-2">
              {hotelInfo.availableRoomTypes.map((type, index) => (
                <span key={index} className="bg-blue-50 text-serenity-darkblue px-3 py-1 rounded-full text-sm">
                  {type}
                </span>
              ))}
            </div>
          </Card>
          
          <Card>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{hotelInfo.checkTimesQuestion}</h3>
            <p className="text-gray-600">{hotelInfo.checkTimesAnswer}</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HotelInfo; 