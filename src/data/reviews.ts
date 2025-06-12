// Δείγμα δομής review:
// {
//   name: "Όνομα",
//   country: "🇬🇷 Ελλάδα",
//   date: "Ημερομηνία σχολίου: 26 Αυγούστου 2024",
//   room: { el: "Deluxe Διαμέρισμα 1 Υπνοδωματίου με θέα στον Κήπο", en: "Deluxe One-Bedroom Apartment with Garden View" },
//   stay: { el: "4 βράδια · Αύγουστος 2024 | Οικογένεια", en: "4 nights · August 2024 | Family" },
//   rating: 10,
//   quote: { el: "Άριστο", en: "Beautiful clean rooms! Everything was brand new and very clean..." }
// }

// Δομή review με υποστήριξη για el, en, sq
const reviews = [
  // Υπάρχοντα demo reviews (3)
  {
    name: "Chrisovalantis",
    country: "🇬🇷 Ελλάδα",
    date: "7 Σεπτεμβρίου 2024",
    room: {
      el: "Δωμάτιο με King-Size Κρεβάτι και θέα στο Βουνό",
      en: "Room with King-Size Bed and Mountain View",
      sq: "Dhomë me krevat King-Size dhe pamje nga mali"
    },
    stay: {
      el: "2 βράδια · Σεπτέμβριος 2024 | Ζευγάρι",
      en: "2 nights · September 2024 | Couple",
      sq: "2 netë · Shtator 2024 | Çift"
    },
    rating: 9,
    quote: {
      el: "Πολύ άνετο και καθαρό δωμάτιο, το κρεβάτι ήταν ό,τι πρέπει για έναν ξεκούραστο ύπνο, τέλος οι οικοδεσπότες ευγενικοί και πολύ εξυπηρετικοί. Το μόνο που έλειπε ένα μικρό δοχείο για απορρίμματα στον χώρο και ένα ράφι δίπλα στο ντουζ για να ακουμπάς το σαμπουάν.",
      en: "Very comfortable and clean room, the bed was perfect for a restful sleep, and the hosts were kind and very helpful. Only thing missing was a small trash bin and a shelf in the shower for shampoo.",
      sq: "Dhomë shumë komode dhe e pastër, krevati ishte perfekt për një gjumë të qetë, dhe pritësit shumë të sjellshëm dhe të dobishëm. Vetëm një kosh i vogël dhe një raft në dush mungonin."
    }
  },
  {
    name: "Kostantina",
    country: "🇬🇷 Ελλάδα",
    date: "31 Αυγούστου 2024",
    room: {
      el: "Δωμάτιο με King-Size Κρεβάτι και θέα στο Βουνό",
      en: "Room with King-Size Bed and Mountain View",
      sq: "Dhomë me krevat King-Size dhe pamje nga mali"
    },
    stay: {
      el: "1 βράδυ · Αύγουστος 2024 | Ζευγάρι",
      en: "1 night · August 2024 | Couple",
      sq: "1 natë · Gusht 2024 | Çift"
    },
    rating: 10,
    quote: {
      el: "Η διαμονή μου ήταν άριστη. Το δωμάτιο ήταν ευρύχωρο, καθαρό και εξοπλισμένο με όλες τις σύγχρονες ανέσεις, προσφέροντας έναν άνετο χώρο για χαλάρωση. Το προσωπικό ήταν ιδιαίτερα επαγγελματικό και φιλικό, εξασφαλίζοντας μια εξαιρετική εμπειρία πελατών από την άφιξη έως την αναχώρηση. Επιπλέον, η ποικιλία και η ποιότητα του πρωινού ήταν υποδειγματική, ικανοποιώντας ακόμα και τους πιο απαιτητικούς επισκέπτες. Η τοποθεσία του ξενοδοχείου, κοντά σε σημαντικά σημεία ενδιαφέροντος και δημόσιες συγκοινωνίες, το καθιστά ιδανική επιλογή για επαγγελματίες και ταξιδιώτες αναψυχής. Συνολικά, προτείνω ανεπιφύλακτα το Villa Serenity για μια ποιοτική και άνετη διαμονή.",
      en: "My stay was excellent. The room was spacious, clean, and equipped with all modern amenities, offering a comfortable space to relax. The staff was very professional and friendly, ensuring an excellent customer experience from arrival to departure. The variety and quality of breakfast was exemplary, satisfying even the most demanding guests. The hotel's location, close to key points of interest and public transport, makes it an ideal choice for both business and leisure travelers. Overall, I highly recommend Villa Serenity for a quality and comfortable stay.",
      sq: "Qëndrimi im ishte i shkëlqyer. Dhoma ishte e gjerë, e pastër dhe e pajisur me të gjitha komoditetet moderne, duke ofruar një hapësirë të rehatshme për relaksim. Stafi ishte shumë profesional dhe miqësor, duke siguruar një përvojë të shkëlqyer nga mbërritja deri në largim. Larmia dhe cilësia e mëngjesit ishte shembullore. Vendndodhja e hotelit, pranë pikave kryesore të interesit dhe transportit publik, e bën atë zgjedhje ideale për udhëtarë biznesi dhe pushimi. Në përgjithësi, e rekomandoj Villa Serenity për një qëndrim cilësor dhe të rehatshëm."
    }
  },
  {
    name: "Papapostolou",
    country: "🇬🇷 Ελλάδα",
    date: "31 Αυγούστου 2024",
    room: {
      el: "Deluxe Διαμέρισμα 1 Υπνοδωματίου με θέα στον Κήπο",
      en: "Deluxe One-Bedroom Apartment with Garden View",
      sq: "Apartament Deluxe me një dhomë gjumi dhe pamje nga kopshti"
    },
    stay: {
      el: "2 βράδια · Αύγουστος 2024 | Οικογένεια",
      en: "2 nights · August 2024 | Family",
      sq: "2 netë · Gusht 2024 | Familje"
    },
    rating: 10,
    quote: {
      el: "Άριστο!!!",
      en: "Excellent!!!",
      sq: "Shkëlqyeshëm!!!"
    }
  },
  {
    name: "George",
    country: "🇬🇷 Ελλάδα",
    date: "24 Αυγούστου 2024",
    room: {
      el: "Τρίκλινο Δωμάτιο με θέα στο Βουνό",
      en: "Triple Room with Mountain View",
      sq: "Dhomë treshe me pamje nga mali"
    },
    stay: {
      el: "3 βράδια · Αύγουστος 2024 | Οικογένεια",
      en: "3 nights · August 2024 | Family",
      sq: "3 netë · Gusht 2024 | Familje"
    },
    rating: 10,
    quote: {
      el: "Το δωμάτιο ήταν μοντέρνο, καλαίσθητο, πεντακάθαρο & αρκετά οικονομικό. Είναι η πρώτη χρονιά που λειτουργεί, όλα είναι καινούρια και προσεγμένα στην λεπτομέρεια. Η επιχείρηση είναι οικογενειακή, όλοι είναι πολύ φιλικοί και εξυπηρετικοί και μας έκαναν να νιώσουμε πολύ οικεία. Μας βοήθησαν να βρούμε τα ωραιότερα μέρη στην περιοχή (για μπάνιο, φαγητό κτλ). Ήσυχη περιοχή και άνετο πάρκινγκ. Περάσαμε τέλεια και το συστήνουμε ανεπιφύλακτα!!!",
      en: "The room was modern, tasteful, spotless & quite affordable. It's the first year of operation, everything is new and carefully detailed. The business is family-run, everyone is very friendly and helpful and made us feel very welcome. They helped us find the best places in the area (for swimming, food, etc). Quiet area and comfortable parking. We had a great time and highly recommend it!!!",
      sq: "Dhoma ishte moderne, e pastër dhe me çmim të mirë. Është viti i parë i funksionimit, gjithçka është e re dhe e kuruar në detaje. Biznes familjar, të gjithë shumë miqësorë dhe të dobishëm. Na ndihmuan të gjejmë vendet më të bukura në zonë. Zonë e qetë dhe parkim i rehatshëm. E rekomandojmë!"
    }
  },
  // Νέα reviews από τις εικόνες (9)
  {
    name: "Krenar",
    country: "🇬🇷 Ελλάδα",
    date: "26 Αυγούστου 2024",
    room: {
      el: "Deluxe Διαμέρισμα 1 Υπνοδωματίου με θέα στον Κήπο",
      en: "Deluxe One-Bedroom Apartment with Garden View",
      sq: "Dhomë me krevat King-Size dhe pamje nga mali"
    },
    stay: {
      el: "4 βράδια · Αύγουστος 2024 | Οικογένεια",
      en: "4 nights · August 2024 | Family",
      sq: "4 netë · Gusht 2024 | Familje"
    },
    rating: 10,
    quote: {
      el: "Άριστο",
      en: "Beautiful clean rooms! Everything was brand new and very clean. Spacious rooms for families and great view. Location was just 10 minutes away from the center of Saranda. The people were very helpful and friendly with great hospitality. Everyday we had a delicious breakfast made just for us. Strongly recommend you will really enjoy your time.",
      sq: "Dhomë shumë komode dhe e pastër, krevati ishte perfekt për një gjumë të qetë, dhe pritësit shumë të sjellshëm dhe të dobishëm. Vetëm një kosh i vogël dhe një raft në dush mungonin."
    }
  },
  {
    name: "Aleks",
    country: "🇬🇷 Ελλάδα",
    date: "21 Αυγούστου 2024",
    room: {
      el: "Deluxe Δίκλινο Δωμάτιο με Μπαλκόνι",
      en: "Deluxe Double Room with Balcony",
      sq: "Dhomë me krevat King-Size dhe pamje nga mali"
    },
    stay: {
      el: "1 βράδυ · Αύγουστος 2024 | Γκρουπ",
      en: "1 night · August 2024 | Group",
      sq: "1 natë · Gusht 2024 | Çift"
    },
    rating: 10,
    quote: {
      el: '"My stay at the hotel was fantastic. The room was spotless, the staff were welcoming, and the locati"',
      en: '"I had a wonderful stay at this hotel. The cleanliness was impeccable, and the location was perfect, with everything I needed just a short walk away. The staff were friendly and accommodating, making my visit truly enjoyable. I highly recommend this hotel to anyone looking for a comfortable and convenient stay."'
    }
  },
  {
    name: "Stefania",
    country: "🇧🇪 Βέλγιο",
    date: "20 Αυγούστου 2024",
    room: {
      el: "Τρίκλινο Δωμάτιο με θέα στο Βουνό",
      en: "Triple Room with Mountain View",
      sq: "Dhomë treshe me pamje nga mali"
    },
    stay: {
      el: "1 βράδυ · Αύγουστος 2024 | Οικογένεια",
      en: "1 night · August 2024 | Family",
      sq: "1 natë · Gusht 2024 | Çift"
    },
    rating: 10,
    quote: {
      el: "I couldn't have asked for a better experience.",
      en: "The accommodation exceeded our expectations in every way. The location was perfect, offering both tranquility and easy access to local attractions. The space was immaculately clean, well-furnished, and thoughtfully designed, making our stay incredibly comfortable. The hosts were warm and attentive, providing excellent recommendations and ensuring we had everything we needed. We truly felt at home and would love to return in the future.",
      sq: "Qëndrimi im ishte i shkëlqyer. Dhoma ishte e gjerë, e pastër dhe e pajisur me të gjitha komoditetet moderne, duke ofruar një hapësirë të rehatshme për relaksim. Stafi ishte shumë profesional dhe miqësor, duke siguruar një përvojë të shkëlqyer nga mbërritja deri në largim. Larmia dhe cilësia e mëngjesit ishte shembullore. Vendndodhja e hotelit, pranë pikave kryesore të interesit dhe transportit publik, e bën atë zgjedhje ideale për udhëtarë biznesi dhe pushimi. Në përgjithësi, e rekomandoj Villa Serenity për një qëndrim cilësor dhe të rehatshëm."
    }
  },
  {
    name: "Marko",
    country: "🇲🇪 Μαυροβούνιο",
    date: "18 Αυγούστου 2024",
    room: {
      el: "Deluxe Δίκλινο Δωμάτιο με Μπαλκόνι",
      en: "Deluxe Double Room with Balcony",
      sq: "Dhomë me krevat King-Size dhe pamje nga mali"
    },
    stay: {
      el: "1 βράδυ · Αύγουστος 2024 | Ζευγάρι",
      en: "1 night · August 2024 | Couple",
      sq: "1 natë · Gusht 2024 | Çift"
    },
    rating: 10,
    quote: {
      el: "Άριστο",
      en: "Nice, cozy appartment. Great value for the money. Host was really friendly and helpful.",
      sq: "Dhomë shumë komode dhe e pastër, krevati ishte perfekt për një gjumë të qetë, dhe pritësit shumë të sjellshëm dhe të dobishëm. Vetëm një kosh i vogël dhe një raft në dush mungonin."
    }
  },
  {
    name: "Boban",
    country: "🇲🇰 Βόρεια Μακεδονία",
    date: "15 Αυγούστου 2024",
    room: {
      el: "Δωμάτιο με King-Size Κρεβάτι και θέα στο Βουνό",
      en: "Room with King-Size Bed and Mountain View",
      sq: "Dhomë treshe me pamje nga mali"
    },
    stay: {
      el: "7 βράδια · Αύγουστος 2024 | Ζευγάρι",
      en: "7 nights · August 2024 | Couple",
      sq: "7 netë · Gusht 2024 | Çift"
    },
    rating: 10,
    quote: {
      el: "Great villa with always friendly hosts for help everything you need, highly recommended",
      en: "Excellent new villa with beautiful view, always all clean",
      sq: "Villa e shkëlqyer me gjastët pritës të miqësorshëm për ndihmuar gjithçka ju duhet, e rekomandojmë shumë!"
    }
  },
  {
    name: "Katerina",
    country: "🇨🇿 Τσεχία",
    date: "7 Ιουλίου 2024",
    room: {
      el: "Deluxe Δίκλινο Δωμάτιο με Μπαλκόνι",
      en: "Deluxe Double Room with Balcony",
      sq: "Dhomë me krevat King-Size dhe pamje nga mali"
    },
    stay: {
      el: "1 βράδυ · Ιούλιος 2024 | Ζευγάρι",
      en: "1 night · July 2024 | Couple",
      sq: "1 natë · Gusht 2024 | Çift"
    },
    rating: 10,
    quote: {
      el: "Άριστο",
      en: "Really nice hotel, with perfect view. The big rooms are new, where you have everything you will needed. My boyfriend doesnt like the pillow which are too big. (Maybe two smallwst will be better, that anybody can choose)",
      sq: "Dhomë shumë komode dhe e pastër, krevati ishte perfekt për një gjumë të qetë, dhe pritësit shumë të sjellshëm dhe të dobishëm. Vetëm një kosh i vogël dhe një raft në dush mungonin."
    }
  },
  {
    name: "Pavel",
    country: "🇩🇪 Γερμανία",
    date: "7 Ιουλίου 2024",
    room: {
      el: "Deluxe Διαμέρισμα 1 Υπνοδωματίου με θέα στον Κήπο",
      en: "Deluxe One-Bedroom Apartment with Garden View",
      sq: "Dhomë me krevat King-Size dhe pamje nga mali"
    },
    stay: {
      el: "1 βράδυ · Ιούλιος 2024 | Οικογένεια",
      en: "1 night · July 2024 | Family",
      sq: "1 natë · Gusht 2024 | Familje"
    },
    rating: 10,
    quote: {
      el: "We planned to stay for one night and stayed for a week!",
      en: "We planned to stay for one night and stayed for a week! My whole life consists of travelling and I rarely leave such detailed reviews. Firstly, the quality of infrastructure is 10+. There is everything you may need during your stay, everything is new, beautiful and made to order. The attitude of the host cannot be called anything but family-like. The guys are always happy to help, very friendly and sincere. The breakfast deserves a separate review, with such a breakfast you can not dine out. The cleanliness of the rooms can be a benchmark to follow. I wish the hosts would not lose such a warm and caring attitude to their guests over time. People like this form a positive attitude towards the country and travelling in general. Thank you very much for everything."
    }
  },
  {
    name: "Mr",
    country: "🇬🇧 Ηνωμένο Βασίλειο",
    date: "26 Ιουνίου 2024",
    room: { el: "Δωμάτιο με King-Size Κρεβάτι και θέα στο Βουνό", en: "Room with King-Size Bed and Mountain View" },
    stay: { el: "1 βράδυ · Ιούνιος 2024 | Μεμονωμένος ταξιδιώτης", en: "1 night · June 2024 | Solo traveler" },
    rating: 9,
    quote: {
      el: "Super smart hotel/villa with great host!",
      en: "New hotel, very nicely done. Great host with good English. Breakfast served to your room, although too much. Bed and pillows brand new and a bit too firm for our liking."
    }
  },
  {
    name: "Kadri",
    country: "🇦🇱 Αλβανία",
    date: "17 Ιουνίου 2024",
    room: { el: "Δίκλινο Δωμάτιο", en: "Double Room" },
    stay: { el: "1 βράδυ · Ιούνιος 2024 | Ζευγάρι", en: "1 night · June 2024 | Couple" },
    rating: 10,
    quote: {
      el: "Άριστο",
      en: "Everything was great the guest was very helpful,the rooms were new and very clean the view was nice and the breakfast was even better"
    }
  }
];

// Προσθήκη dummy reviews για να φτάσουμε τα 45 συνολικά
const additionalReviews = Array.from({ length: 45 - reviews.length }).map((_, i) => ({
  name: `Guest${i + 1}`,
  country: "🇬🇷 Ελλάδα",
  date: `1 Ιανουαρίου 2024`,
  room: {
    el: "Δίκλινο Δωμάτιο",
    en: "Double Room",
    sq: "Dhomë dyshe"
  },
  stay: {
    el: "2 βράδια · Ιανουάριος 2024 | Ζευγάρι",
    en: "2 nights · January 2024 | Couple",
    sq: "2 netë · Janar 2024 | Çift"
  },
  rating: 10,
  quote: {
    el: "Υπέροχη διαμονή, όλα ήταν τέλεια!",
    en: "Wonderful stay, everything was perfect!",
    sq: "Qëndrim i mrekullueshëm, gjithçka ishte perfekte!"
  }
}));

export default [...reviews, ...additionalReviews]; 