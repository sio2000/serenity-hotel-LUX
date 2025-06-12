import React from "react";
import { Diamond, Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";

const reviews = {
  el: [
    { id: 1, author: "Dimitra Tagka", date: "πριν από 9 μήνες", rating: 5, text: "Εξαιρετική διαμονή!!! Πρόκειται για οικογενειακή επιχείρηση, πάρα πολύ φιλόξενη και όλοι πρόθυμοι να σε βοηθήσουν σε ότι χρειαστείς!!! Τα δωμάτια μεγάλα, άνετα και το κυριότερο πεντακάθαρα!!! Το πρωινό ήταν νοστιμότατο με αλμυρές και γλυκές επιλογές!", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 2, author: "Euaggelia Gialama", date: "πριν από 9 μήνες", rating: 5, text: "Μπράβο το συνιστώ !!!!! το δωμάτιο πεντακάθαρο και πολύ ωραία διακοσμημένο , το πρωινό επίσης ήταν πολύ ωραίο είχε αλμυρά και γλυκά φαγητά. Η εξυπηρέτηση άψογη από τα παιδιά , μας βοήθησαν προτείνοντας μας να πάμε σε διάφορα μέρη.", type: "Διακοπές ❘ Φίλοι" },
    { id: 3, author: "ΠΑΝΑΓΙΩΤΗΣ ΚΟΝΤΑΡΙΝΗΣ", date: "πριν από 7 μήνες", rating: 5, text: "Τρομερή εμπειρία. Όλα περιποιημένα και δεν έλειπε τίποτα. Το συνιστώ!!! Δωμάτια5,0 Υπηρεσία5,0 Τοποθεσία5,0", type: "-" },
    { id: 4, author: "Φωτεινη Χριστοπουλου", date: "πριν από 7 μήνες", rating: 5, text: "Όλα εξαιρετικά! σε θεμα καθαριότητας και η εξυπηρέτηση απο το προσωπικο άψογη και πολυ βοηθητικοί!! Δωμάτια5,0 Υπηρεσία5,0 Τοποθεσία5,0 Κορυφαίες παροχές ξενοδ.Φοβερή θέα", type: "-" },
    { id: 5, author: "Κασιματησ Λευτερης", date: "πριν από 2 μήνες", rating: 5, text: "Δεν υπάρχει τίποτα αρνητικό!!! Δωμάτια5,0 Υπηρεσία5,0 Τοποθεσία5,0 Κορυφαίες παροχές ξενοδ.Πολυτελές · Φοβερή θέα · Ρομαντικό · Ήσυχο · Κατάλληλο για παιδιά · Χαμηλή τιμή · Υψηλή τεχνολογία", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 6, author: "mikialiss", date: "πριν από έναν χρόνο", rating: 5, text: "Πολύ καθαρό και ήρεμο περιβάλλον με πολύ καλή εξυπηρέτηση και πρόθυμοι να Προσφέρουν το οτιδήποτε", type: "-" },
    { id: 7, author: "Αντωνιος Εττζογλου", date: "πριν από 11 μήνες", rating: 5, text: "Άψογο δωμάτιο, θέα και οικοδεσπότης!! Ότι πρέπει για τις διακοπές να χαλαρώσεις. Εξαιρετικό το δωμάτιο και πεντακάθαρο. Δωμάτια5,0 Υπηρεσία5,0 Τοποθεσία5,0", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 8, author: "Angelo Tufano", date: "πριν από 10 μήνες", rating: 5, text: "Μακριά από το χάος του κέντρου, ήσυχη τοποθεσία. Όλα τα νέα, πρόσφατα χτισμένα, ευρύχωρα, καθαρά δωμάτια με όλες τις ανέσεις. Η διοίκηση είναι οικογενειακή, σας κάνει να νιώσετε σαν στο σπίτι σας, διαθέσιμοι για οτιδήποτε χρειάζεστε.", type: "Διακοπές ❘ Οικογένεια" },
    { id: 9, author: "Walter Van Leemputten", date: "πριν από 9 μήνες", rating: 5, text: "Ξενοδοχείο ακριβώς έξω από το πολυσύχναστο κέντρο των Αγίων Σαράντα. Ωραία, ευρύχωρα δωμάτια, εξοπλισμένα με όλες τις ανέσεις.", type: "Διακοπές ❘ Οικογένεια" },
    { id: 10, author: "Anna Anna", date: "πριν από 9 μήνες", rating: 5, text: "Πολύ ήσυχο μέρος! Το προσωπικό ήταν υπέροχο. Κατάφερα πραγματικά να χαλαρώσω. Το φαγητό είναι μια διαφορετική ιστορία. Απίστευτα νόστιμο και πολύ, πολύ πλούσιο! Σίγουρα θα επιστρέψω ξανά.", type: "-" },
    { id: 11, author: "Pati Lalaj", date: "πριν από 9 μήνες", rating: 5, text: "Μου άρεσε η διαμονή μου στους Αγίους Σαράντα μόνο και μόνο λόγω αυτού του ξενοδοχείου. Τα δωμάτια είναι πολύ καθαρά. Οι ιδιοκτήτες είναι πολύ φιλικοί και πολύ εξυπηρετικοί!", type: "-" },
    { id: 12, author: "Gg Gg", date: "πριν από έναν μήνα", rating: 5, text: "Μια από τις καλύτερες επιφυλάξεις στη ζωή μου...!!!", type: "Διακοπές ❘ Οικογένεια" },
    { id: 13, author: "Cristian Ibaňez", date: "πριν από 11 μήνες", rating: 5, text: "Ένα πολύ μεγάλο και άνετο ξενοδοχείο, με εξαιρετικά καθαρές οδηγίες και εξαιρετική, πολύ καλή και εξατομικευμένη προσοχή από τον ιδιοκτήτη που μας σέρβιρε το μεσημεριανό γεύμα ο ίδιος, χωρίς αμφιβολία ένα μέρος που θα επισκεφτώ ξανά.", type: "-" },
    { id: 14, author: "Thoma Spiro", date: "πριν από 9 μήνες", rating: 5, text: "Αν θέλετε οι διακοπές σας να είναι ασφαλείς και ξεκούραστες, είναι το τέλειο μέρος για να επισκεφθείτε και να νιώσετε σαν το σπίτι σας!!", type: "-" },
    { id: 15, author: "Micka 42", date: "πριν από 9 μήνες", rating: 5, text: "Κοντά στους Αγίους Σαράντα μέσα στο θόρυβο. Πολύ καθαρό και πολύ λειτουργικό δωμάτιο. Πολύ ζεστό και ευχάριστο καλωσόρισμα.", type: "Διακοπές ❘ Οικογένεια" },
    { id: 16, author: "Argirios Kontostolis", date: "πριν από 9 μήνες", rating: 5, text: "Απλά καταπληκτικό. Η φιλοξενία, η τοποθεσία, τα δωμάτια.", type: "Διακοπές ❘ Φίλοι" },
    { id: 17, author: "Ari Sadiku", date: "πριν από έναν χρόνο", rating: 5, text: "Ένα όμορφο και ήσυχο μέρος για να απολαύσετε μερικές μέρες, η καλή επικοινωνία και η αγάπη δίνουν στους ανθρώπους που έχουν αυτό το μέρος το καλύτερο μέρος για να χαλαρώσουν.", type: "-" },
    { id: 18, author: "floema dollani", date: "πριν από 9 μήνες", rating: 5, text: "Ωραία δωμάτια, εξαιρετική εξυπηρέτηση. Εξαιρετική τοποθεσία.", type: "Φίλοι" },
    { id: 19, author: "emanuel hamzaj", date: "πριν από 11 μήνες", rating: 5, text: "Το προσωπικό ήταν πολύ φιλικό, και το δωμάτιο ήταν πέρα από κάθε άνεση.", type: "-" },
    { id: 20, author: "Tomáš Antol", date: "πριν από 10 μήνες", rating: 5, text: "Ωραίο νέο κατάλυμα. Οι φωτογραφίες είναι αληθινές. Οι ιδιοκτήτες είναι καλοί και μιλούν αγγλικά.", type: "-" },
    { id: 21, author: "Evaggelos Roubatis", date: "πριν από έναν χρόνο", rating: 5, text: "Τόσο ήσυχο μέρος με υπέροχη θέα. Το καλύτερο μέρος για επαγγέλματα!! Τόσο χαλαρός και άνετος χώρος.", type: "-" },
    { id: 22, author: "Mmm Sss", date: "πριν από 9 μήνες", rating: 5, text: "Εξαιρετική διαμονή και φιλικοί οικοδεσπότες", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 23, author: "Geraldo Kulla", date: "πριν από έναν χρόνο", rating: 5, text: "Αυτό είναι καταπληκτικό παρακαλώ", type: "-" },
    { id: 24, author: "Sojati Mateo", date: "πριν από 6 μήνες", rating: 5, text: "", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 25, author: "Αριστείδης Δοβλέτης", date: "πριν από 6 μήνες", rating: 5, text: "", type: "-" },
    { id: 26, author: "Romarjo Lamaj", date: "πριν από 6 μήνες", rating: 5, text: "", type: "-" },
    { id: 27, author: "INSPOT SEPOLIA", date: "πριν από 6 μήνες", rating: 5, text: "", type: "-" },
    { id: 28, author: "klejdi harizaj", date: "πριν από 6 μήνες", rating: 5, text: "", type: "-" },
    { id: 29, author: "Δψφω Ωων", date: "πριν από 6 μήνες", rating: 5, text: "", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 30, author: "Klaountio Kerimi", date: "πριν από 6 μήνες", rating: 5, text: "", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 31, author: "Παναγιωτης Παπαδατος", date: "πριν από 6 μήνες", rating: 5, text: "", type: "Διακοπές ❘ Φίλοι" },
    { id: 32, author: "Kevi Reka", date: "πριν από 8 μήνες", rating: 5, text: "", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 33, author: "Enea Pappa", date: "πριν από 10 μήνες", rating: 5, text: "", type: "-" },
    { id: 34, author: "Blerina Doka", date: "πριν από 11 μήνες", rating: 5, text: "", type: "-" },
    { id: 35, author: "Χαρης Βαζος", date: "πριν από 6 μήνες", rating: 5, text: "", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 36, author: "Mugiwara Luffy", date: "πριν από 11 μήνες", rating: 5, text: "", type: "Διακοπές ❘ Ζευγάρι" },
    { id: 37, author: "eni eniu", date: "πριν από 11 μήνες", rating: 5, text: "", type: "-" },
    { id: 38, author: "Angjele Lefteri", date: "πριν από 11 μήνες", rating: 5, text: "", type: "-" },
    { id: 39, author: "Antonio Lefteri", date: "πριν από 11 μήνες", rating: 5, text: "", type: "-" },
    { id: 40, author: "Adelina Hazizi", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 41, author: "Κωνσταντινα Κιορρι", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 42, author: "Erajd Haxhi", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 43, author: "Spartak Spartak", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 44, author: "Aurora Apartment", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 45, author: "lucjano kuci", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 46, author: "Armando Kadri", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 47, author: "Dhimiter Maci", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 48, author: "Tachw Garage", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 49, author: "Aleksander Qorri", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 50, author: "Zana Qorri", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 51, author: "M247", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 52, author: "RISA", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 53, author: "Baggelis Kalatzis", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 54, author: "Στελιος Ταλιμπάν", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 55, author: "Γιαννης Μακριδης", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 56, author: "Tito Manaj", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 57, author: "Παναγιώτης", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 58, author: "Αλέξανδρος", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 59, author: "erion metko", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 60, author: "Ζωη Γαβαλα", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 61, author: "Koridallos Koridallos", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 62, author: "Lutfi Ruhani", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 63, author: "Παναγιώτης Τιμοθεάτος", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 64, author: "Κορυδαλλός ΚΣΚ", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" },
    { id: 65, author: "Anxhelo Sano", date: "πριν από έναν χρόνο", rating: 5, text: "", type: "-" }
  ],
  en: [
    { id: 1, author: "Dimitra Tagka", date: "9 months ago", rating: 5, text: "Excellent stay!!! Family business, very hospitable and everyone willing to help you with anything you need!!! The rooms are large, comfortable and most importantly spotless!!! Breakfast was delicious with savory and sweet options!", type: "Holiday ❘ Couple" },
    { id: 2, author: "Euaggelia Gialama", date: "9 months ago", rating: 5, text: "Highly recommended!!!!! The room was spotless and very nicely decorated, breakfast was also very nice with savory and sweet foods. Service was excellent from the staff, they helped us by suggesting places to go.", type: "Holiday ❘ Friends" },
    { id: 3, author: "PANAGIOTIS KONTARINIS", date: "7 months ago", rating: 5, text: "Amazing experience. Everything was well taken care of and nothing was missing. I recommend it!!! Rooms5.0 Service5.0 Location5.0", type: "-" },
    { id: 4, author: "Foteini Christopoulou", date: "7 months ago", rating: 5, text: "Everything was excellent! In terms of cleanliness and service from the staff, impeccable and very helpful!! Rooms5.0 Service5.0 Location5.0 Top hotel amenities. Amazing view", type: "-" },
    { id: 5, author: "Lefteris Kasimatis", date: "2 months ago", rating: 5, text: "There is nothing negative!!! Rooms5.0 Service5.0 Location5.0 Top hotel amenities. Luxurious · Pamje e mrekullueshme · Romantike · E qetë · E përshtatshme për fëmijë · Çmim i ulët · Teknologji e lartë", type: "Holiday ❘ Couple" },
    { id: 6, author: "mikialiss", date: "1 year ago", rating: 5, text: "Very clean and peaceful environment with very good service and always willing to offer anything", type: "-" },
    { id: 7, author: "Antonios Ettzoglou", date: "11 months ago", rating: 5, text: "Perfect room, view and host!! Just what you need for your holidays to relax. Excellent and spotless room. Rooms5.0 Service5.0 Location5.0", type: "Holiday ❘ Couple" },
    { id: 8, author: "Angelo Tufano", date: "10 months ago", rating: 5, text: "Away from the chaos of the center, quiet location. Everything is new, recently built, spacious, clean rooms with all amenities. The management is family-run, makes you feel at home, available for anything you need.", type: "Holiday ❘ Family" },
    { id: 9, author: "Walter Van Leemputten", date: "9 months ago", rating: 5, text: "Hotel just outside the busy center of Saranda. Nice, spacious rooms, equipped with all amenities.", type: "Holiday ❘ Family" },
    { id: 10, author: "Anna Anna", date: "9 months ago", rating: 5, text: "Very quiet place! The staff was wonderful. I really managed to relax. The food is a different story. Incredibly delicious and very, very rich! I will definitely come back again.", type: "-" },
    { id: 11, author: "Pati Lalaj", date: "9 months ago", rating: 5, text: "I enjoyed my stay in Saranda only because of this hotel. The rooms are very clean. The owners are very friendly and very helpful!", type: "-" },
    { id: 12, author: "Gg Gg", date: "1 month ago", rating: 5, text: "One of the best reservations in my life...!!!", type: "Holiday ❘ Family" },
    { id: 13, author: "Cristian Ibaňez", date: "11 months ago", rating: 5, text: "A very large and comfortable hotel, with extremely clean instructions and excellent, very good and personalized attention from the owner who served us lunch himself, undoubtedly a place I will visit again.", type: "-" },
    { id: 14, author: "Thoma Spiro", date: "9 months ago", rating: 5, text: "If you want your holidays to be safe and relaxing, it's the perfect place to visit and feel at home!!", type: "-" },
    { id: 15, author: "Micka 42", date: "9 months ago", rating: 5, text: "Close to Saranda in the noise. Very clean and very functional room. Very warm and pleasant welcome.", type: "Holiday ❘ Family" },
    { id: 16, author: "Argirios Kontostolis", date: "9 months ago", rating: 5, text: "Simply amazing. The hospitality, the location, the rooms.", type: "Holiday ❘ Friends" },
    { id: 17, author: "Ari Sadiku", date: "1 year ago", rating: 5, text: "A beautiful and quiet place to enjoy a few days, good communication and love give the people who have this place the best place to relax.", type: "-" },
    { id: 18, author: "floema dollani", date: "9 months ago", rating: 5, text: "Nice rooms, excellent service. Excellent location.", type: "Friends" },
    { id: 19, author: "emanuel hamzaj", date: "11 months ago", rating: 5, text: "The staff was very friendly, and the room was beyond comfortable.", type: "-" },
    { id: 20, author: "Tomáš Antol", date: "10 months ago", rating: 5, text: "Nice new accommodation. The photos are real. The owners are nice and speak English.", type: "-" },
    { id: 21, author: "Evaggelos Roubatis", date: "1 year ago", rating: 5, text: "So quiet place with wonderful view. The best place for business!! So relaxed and comfortable space.", type: "-" },
    { id: 22, author: "Mmm Sss", date: "9 months ago", rating: 5, text: "Excellent stay and friendly hosts", type: "Holiday ❘ Couple" },
    { id: 23, author: "Geraldo Kulla", date: "1 year ago", rating: 5, text: "This is amazing please", type: "-" },
    { id: 24, author: "Sojati Mateo", date: "6 months ago", rating: 5, text: "", type: "Holiday ❘ Couple" },
    { id: 25, author: "Aristeidis Dovletis", date: "6 months ago", rating: 5, text: "", type: "-" },
    { id: 26, author: "Romarjo Lamaj", date: "6 months ago", rating: 5, text: "", type: "-" },
    { id: 27, author: "INSPOT SEPOLIA", date: "6 months ago", rating: 5, text: "", type: "-" },
    { id: 28, author: "klejdi harizaj", date: "6 months ago", rating: 5, text: "", type: "-" },
    { id: 29, author: "Dpsfo Oon", date: "6 months ago", rating: 5, text: "", type: "Holiday ❘ Couple" },
    { id: 30, author: "Klaountio Kerimi", date: "6 months ago", rating: 5, text: "", type: "Holiday ❘ Couple" },
    { id: 31, author: "Panagiotis Papadatos", date: "6 months ago", rating: 5, text: "", type: "Holiday ❘ Friends" },
    { id: 32, author: "Kevi Reka", date: "8 months ago", rating: 5, text: "", type: "Holiday ❘ Couple" },
    { id: 33, author: "Enea Pappa", date: "10 months ago", rating: 5, text: "", type: "-" },
    { id: 34, author: "Blerina Doka", date: "11 months ago", rating: 5, text: "", type: "-" },
    { id: 35, author: "Charis Vazos", date: "6 months ago", rating: 5, text: "", type: "Holiday ❘ Couple" },
    { id: 36, author: "Mugiwara Luffy", date: "11 months ago", rating: 5, text: "", type: "Holiday ❘ Couple" },
    { id: 37, author: "eni eniu", date: "11 months ago", rating: 5, text: "", type: "-" },
    { id: 38, author: "Angjele Lefteri", date: "11 months ago", rating: 5, text: "", type: "-" },
    { id: 39, author: "Antonio Lefteri", date: "11 months ago", rating: 5, text: "", type: "-" },
    { id: 40, author: "Adelina Hazizi", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 41, author: "Konstantina Kiorri", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 42, author: "Erajd Haxhi", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 43, author: "Spartak Spartak", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 44, author: "Aurora Apartment", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 45, author: "lucjano kuci", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 46, author: "Armando Kadri", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 47, author: "Dhimiter Maci", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 48, author: "Tachw Garage", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 49, author: "Aleksander Qorri", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 50, author: "Zana Qorri", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 51, author: "M247", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 52, author: "RISA", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 53, author: "Baggelis Kalatzis", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 54, author: "Stelios Taliban", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 55, author: "Giannis Makridis", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 56, author: "Tito Manaj", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 57, author: "Panagiotis", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 58, author: "Alexandros", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 59, author: "erion metko", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 60, author: "Zoi Gavala", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 61, author: "Koridallos Koridallos", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 62, author: "Lutfi Ruhani", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 63, author: "Panagiotis Timotheatos", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 64, author: "Korydallos KSK", date: "1 year ago", rating: 5, text: "", type: "-" },
    { id: 65, author: "Anxhelo Sano", date: "1 year ago", rating: 5, text: "", type: "-" }
  ],
  sq: [
    { id: 1, author: "Dimitra Tagka", date: "9 muaj më parë", rating: 5, text: "Qëndrim i shkëlqyer!!! Biznes familjar, shumë mikpritës dhe të gjithë të gatshëm të ndihmojnë për çdo gjë që ju nevojitet!!! Dhomat janë të mëdha, të rehatshme dhe mbi të gjitha shumë të pastra!!! Mëngjesi ishte i shijshëm me opsione të kripura dhe të ëmbla!", type: "Pushime ❘ Çift" },
    { id: 2, author: "Euaggelia Gialama", date: "9 muaj më parë", rating: 5, text: "E rekomandoj shumë!!!!! Dhoma ishte shumë e pastër dhe e dekoruar bukur, mëngjesi gjithashtu shumë i mirë me ushqime të kripura dhe të ëmbla. Shërbimi i shkëlqyer nga stafi, na ndihmuan duke na sugjeruar vende për të vizituar.", type: "Pushime ❘ Miq" },
    { id: 3, author: "PANAGIOTIS KONTARINIS", date: "7 muaj më parë", rating: 5, text: "Përvojë e mrekullueshme. Gjithçka ishte e përkujdesur dhe nuk mungonte asgjë. E rekomandoj!!! Dhoma5.0 Shërbimi5.0 Vendndodhja5.0", type: "-" },
    { id: 4, author: "Foteini Christopoulou", date: "7 muaj më parë", rating: 5, text: "Gjithçka ishte e shkëlqyer! Për sa i përket pastërtisë dhe shërbimit nga stafi, të përsosur dhe shumë të dobishëm!! Dhoma5.0 Shërbimi5.0 Vendndodhja5.0 Pajisje të nivelit të lartë të hotelit. Pamje e mrekullueshme", type: "-" },
    { id: 5, author: "Kasimatis Lefteris", date: "2 muaj më parë", rating: 5, text: "Nuk ka asgjë negative!!! Dhoma5.0 Shërbimi5.0 Vendndodhja5.0 Pajisje të nivelit të lartë të hotelit. Luks · Pamje e mrekullueshme · Romantike · E qetë · E përshtatshme për fëmijë · Çmim i ulët · Teknologji e lartë", type: "Pushime ❘ Çift" },
    { id: 6, author: "mikialiss", date: "1 vit më parë", rating: 5, text: "Ambient shumë i pastër dhe i qetë me shërbim shumë të mirë dhe gjithmonë të gatshëm të ofrojnë gjithçka", type: "-" },
    { id: 7, author: "Antonios Ettzoglou", date: "11 muaj më parë", rating: 5, text: "Dhomë perfekte, pamje dhe mikpritës!! Pikërisht çfarë ju duhet për pushime relaksuese. Dhomë e shkëlqyer dhe shumë e pastër. Dhoma5.0 Shërbimi5.0 Vendndodhja5.0", type: "Pushime ❘ Çift" },
    { id: 8, author: "Angelo Tufano", date: "10 muaj më parë", rating: 5, text: "Larg nga kaosi i qendrës, vendndodhje e qetë. Gjithçka është e re, e ndërtuar kohët e fundit, e gjerë, dhoma të pastra me të gjitha komoditetet. Menaxhimi është familjar, ju bën të ndiheni si në shtëpinë tuaj, i disponueshëm për çdo gjë që ju nevojitet.", type: "Pushime ❘ Familje" },
    { id: 9, author: "Walter Van Leemputten", date: "9 muaj më parë", rating: 5, text: "Hotel pikërisht jashtë qendrës së zënë të Sarandës. Dhoma të bukura, të gjera, të pajisura me të gjitha komoditetet.", type: "Pushime ❘ Familje" },
    { id: 10, author: "Anna Anna", date: "9 muaj më parë", rating: 5, text: "Vend shumë i qetë! Stafi ishte i mrekullueshëm. Vërtet arrita të relaksohem. Ushqimi është një histori tjetër. Jashtëzakonisht i shijshëm dhe shumë, shumë i pasur! Me siguri do të kthehem përsëri.", type: "-" },
    { id: 11, author: "Pati Lalaj", date: "9 muaj më parë", rating: 5, text: "Më pëlqeu qëndrimi im në Sarandë vetëm për shkak të këtij hoteli. Dhomat janë shumë të pastra. Pronarët janë shumë miqësorë dhe shumë të dobishëm!", type: "-" },
    { id: 12, author: "Gg Gg", date: "1 muaj më parë", rating: 5, text: "Një nga rezervimet më të mira në jetën time...!!!", type: "Pushime ❘ Familje" },
    { id: 13, author: "Cristian Ibaňez", date: "11 muaj më parë", rating: 5, text: "Një hotel shumë i madh dhe i rehatshëm, me udhëzime jashtëzakonisht të pastra dhe vëmendje të shkëlqyer, shumë të mirë dhe të personalizuar nga pronari që na shërbeu vetë drekën, pa dyshim një vend që do ta vizitoj përsëri.", type: "-" },
    { id: 14, author: "Thoma Spiro", date: "9 muaj më parë", rating: 5, text: "Nëse dëshironi që pushimet tuaja të jenë të sigurta dhe relaksuese, është vendi i përkryer për t'u vizituar dhe për t'u ndjerë si në shtëpinë tuaj!!", type: "-" },
    { id: 15, author: "Micka 42", date: "9 muaj më parë", rating: 5, text: "Afër Sarandës në zhurmë. Dhomë shumë e pastër dhe shumë funksionale. Mirëseardhje shumë e ngrohtë dhe e këndshme.", type: "Pushime ❘ Familje" },
    { id: 16, author: "Argirios Kontostolis", date: "9 muaj më parë", rating: 5, text: "Thjesht e mrekullueshme. Mikpritja, vendndodhja, dhomat.", type: "Pushime ❘ Miq" },
    { id: 17, author: "Ari Sadiku", date: "1 vit më parë", rating: 5, text: "Një vend i bukur dhe i qetë për të shijuar disa ditë, komunikimi i mirë dhe dashuria u japin njerëzve që kanë këtë vend vendin më të mirë për të relaksuar.", type: "-" },
    { id: 18, author: "floema dollani", date: "9 muaj më parë", rating: 5, text: "Dhoma të bukura, shërbim i shkëlqyer. Vendndodhje e shkëlqyer.", type: "Miq" },
    { id: 19, author: "emanuel hamzaj", date: "11 muaj më parë", rating: 5, text: "Stafi ishte shumë miqësor, dhe dhoma ishte përtej rehatisë.", type: "-" },
    { id: 20, author: "Tomáš Antol", date: "10 muaj më parë", rating: 5, text: "Akomodim i bukur i ri. Fotot janë të vërteta. Pronarët janë të mirë dhe flasin anglisht.", type: "-" },
    { id: 21, author: "Evaggelos Roubatis", date: "1 vit më parë", rating: 5, text: "Vend aq i qetë me pamje të mrekullueshme. Vendin më të mirë për biznes!! Hapësirë aq e relaksuar dhe e rehatshme.", type: "-" },
    { id: 22, author: "Mmm Sss", date: "9 muaj më parë", rating: 5, text: "Qëndrim i shkëlqyer dhe mikpritës miqësorë", type: "Pushime ❘ Çift" },
    { id: 23, author: "Geraldo Kulla", date: "1 vit më parë", rating: 5, text: "Kjo është e mrekullueshme ju lutem", type: "-" },
    { id: 24, author: "Sojati Mateo", date: "6 muaj më parë", rating: 5, text: "", type: "Pushime ❘ Çift" },
    { id: 25, author: "Aristeidis Dovletis", date: "6 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 26, author: "Romarjo Lamaj", date: "6 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 27, author: "INSPOT SEPOLIA", date: "6 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 28, author: "klejdi harizaj", date: "6 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 29, author: "Dpsfo Oon", date: "6 muaj më parë", rating: 5, text: "", type: "Pushime ❘ Çift" },
    { id: 30, author: "Klaountio Kerimi", date: "6 muaj më parë", rating: 5, text: "", type: "Pushime ❘ Çift" },
    { id: 31, author: "Panagiotis Papadatos", date: "6 muaj më parë", rating: 5, text: "", type: "Pushime ❘ Miq" },
    { id: 32, author: "Kevi Reka", date: "8 muaj më parë", rating: 5, text: "", type: "Pushime ❘ Çift" },
    { id: 33, author: "Enea Pappa", date: "10 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 34, author: "Blerina Doka", date: "11 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 35, author: "Charis Vazos", date: "6 muaj më parë", rating: 5, text: "", type: "Pushime ❘ Çift" },
    { id: 36, author: "Mugiwara Luffy", date: "11 muaj më parë", rating: 5, text: "", type: "Pushime ❘ Çift" },
    { id: 37, author: "eni eniu", date: "11 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 38, author: "Angjele Lefteri", date: "11 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 39, author: "Antonio Lefteri", date: "11 muaj më parë", rating: 5, text: "", type: "-" },
    { id: 40, author: "Adelina Hazizi", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 41, author: "Konstantina Kiorri", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 42, author: "Erajd Haxhi", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 43, author: "Spartak Spartak", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 44, author: "Aurora Apartment", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 45, author: "lucjano kuci", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 46, author: "Armando Kadri", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 47, author: "Dhimiter Maci", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 48, author: "Tachw Garage", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 49, author: "Aleksander Qorri", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 50, author: "Zana Qorri", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 51, author: "M247", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 52, author: "RISA", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 53, author: "Baggelis Kalatzis", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 54, author: "Stelios Taliban", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 55, author: "Giannis Makridis", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 56, author: "Tito Manaj", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 57, author: "Panagiotis", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 58, author: "Alexandros", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 59, author: "erion metko", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 60, author: "Zoi Gavala", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 61, author: "Koridallos Koridallos", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 62, author: "Lutfi Ruhani", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 63, author: "Panagiotis Timotheatos", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 64, author: "Korydallos KSK", date: "1 vit më parë", rating: 5, text: "", type: "-" },
    { id: 65, author: "Anxhelo Sano", date: "1 vit më parë", rating: 5, text: "", type: "-" }
  ]
};

function getAvatarVibrant(idx: number) {
  const colors = [
    "bg-sky-400 text-white",
    "bg-pink-500 text-white",
    "bg-emerald-500 text-white",
    "bg-amber-400 text-white",
    "bg-violet-500 text-white",
    "bg-cyan-500 text-white",
    "bg-orange-400 text-white",
    "bg-red-500 text-white",
    "bg-blue-500 text-white",
    "bg-lime-500 text-white"
  ];
  return colors[idx % colors.length];
}

const GoogleReviews = () => {
  const { t, language } = useTranslation();
  const lang = ["el", "en", "sq"].includes(language) ? language : "en";
  const reviewsToShow = reviews[lang];

  return (
    <section
      id="google-reviews"
      className="py-20 px-2 md:px-0 bg-gradient-to-b from-luxury-black via-luxury-navy to-luxury-black relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" />
      <div className="text-center mb-16">
        <div className="mb-6">
          <Diamond className="h-16 w-16 mx-auto text-luxury-gold drop-shadow-goldGlow animate-fade-in" />
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-goldGlow animate-fade-in">
          {t("google_reviews_title")}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold2 to-luxury-bronze mx-auto mb-6 rounded-full animate-fade-in"></div>
        <p className="max-w-3xl mx-auto text-luxury-gold/90 text-lg md:text-xl font-light animate-fade-in">
          {t("google_reviews_description")}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {reviewsToShow.map((review, idx) => (
          <div
            key={review.id}
            className="bg-luxury-black/80 border border-luxury-gold/20 hover:border-luxury-gold shadow-xl hover:shadow-goldGlow p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 backdrop-blur-md group min-h-[240px] animate-slide-up"
            style={{ minHeight: 240 }}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-2 shadow-md border-2 border-luxury-gold transition-colors duration-300 animate-fade-in ${getAvatarVibrant(idx)}`}
            >
              {review.author[0]}
            </div>
            <div className="mb-1 flex flex-col items-center">
              <span className="text-base font-semibold text-luxury-gold font-playfair">
                {review.author}
              </span>
              <span className="text-luxury-gold/80 text-xs flex items-center gap-1">
                {review.type}
              </span>
              <span className="text-[10px] text-luxury-gold/60">{review.date}</span>
            </div>
            <div className="flex items-center justify-center mb-2 z-10">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className={
                    i < review.rating
                      ? "text-amber-400 fill-amber-400 drop-shadow-goldGlow"
                      : "text-gray-300"
                  }
                  fill={i < review.rating ? "#fbbf24" : "none"}
                />
              ))}
              <span className="ml-2 text-luxury-gold text-xs font-bold">{review.rating} / 5</span>
            </div>
            <blockquote className="text-white text-sm mt-2 font-light animate-fade-in">
              “{review.text}”
            </blockquote>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://www.google.com/maps/place/Villa+Serenity/@39.876,20.005,17z/data=!4m8!3m7!1s0x135b15e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!8m2!3d39.876!4d20.005!9m1!1b1!16s%2Fg%2F11t2t2t2t2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-3 rounded-full border-2 border-luxury-gold text-luxury-gold font-semibold bg-transparent hover:bg-luxury-gold hover:text-luxury-black shadow-goldGlow transition-all text-lg"
        >
          {t("view_on_google")}
        </a>
      </div>
    </section>
  );
};

export default GoogleReviews; 