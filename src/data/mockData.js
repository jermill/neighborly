// Mock rooms data
export const ROOMS = [
  {
    id: 'new-neighbors',
    name: 'New Neighbors',
    description: 'Intros and "just moved here" questions',
    emoji: '👋',
    color: '#4A90E2',
    groups: [
      { id: 'introductions', name: 'Introductions', emoji: '👋' },
      { id: 'local-tips', name: 'Local Tips', emoji: '🏠' },
      { id: 'i-need-stuff', name: 'I Need Stuff', emoji: '🛒' }
    ]
  },
  {
    id: 'families',
    name: 'Families',
    description: 'Parenting, schools, kid activities',
    emoji: '👨‍👩‍👧‍👦',
    color: '#50C878',
    groups: [
      { id: 'schools', name: 'Schools', emoji: '🏫' },
      { id: 'activities-playdates', name: 'Activities & Playdates', emoji: '🎪' },
      { id: 'kids-gear-swap', name: 'Kids Gear Swap', emoji: '♻️' }
    ]
  },
  {
    id: 'singles',
    name: 'Singles',
    description: 'Meeting other single neighbors',
    emoji: '💫',
    color: '#FF6B9D',
    groups: [
      { id: 'happy-hours', name: 'Happy Hours', emoji: '🍻' },
      { id: 'activity-partners', name: 'Activity Partners', emoji: '🎯' },
      { id: 'dating-connections', name: 'Dating & Connections', emoji: '💕' }
    ]
  },
  {
    id: 'game-night',
    name: 'Game Night',
    description: 'Board games, video games, watch parties',
    emoji: '🎮',
    color: '#9B59B6',
    groups: [
      { id: 'board-games', name: 'Board Games', emoji: '🎲' },
      { id: 'video-games', name: 'Video Games', emoji: '🕹️' },
      { id: 'watch-parties', name: 'Watch Parties', emoji: '📺' },
      { id: 'physical-games', name: 'Physical Games', emoji: '⚽', description: 'Kickball, dodgeball, sports' }
    ]
  },
  {
    id: 'arts-crafts',
    name: 'Arts & Crafts',
    description: 'Creative hobbies, makers, DIY',
    emoji: '🎨',
    color: '#E67E22',
    groups: [
      { id: 'creative-projects', name: 'Creative Projects', emoji: '🎨' },
      { id: 'diy-home-projects', name: 'DIY & Home Projects', emoji: '🔨' },
      { id: 'tools-supplies-swap', name: 'Tools & Supplies Swap', emoji: '🧰' }
    ]
  },
  {
    id: 'lgbtq',
    name: 'LGBTQ+ Community',
    description: 'Queer neighbors and allies connecting',
    emoji: '🏳️‍🌈',
    color: '#FF6B6B',
    groups: [
      { id: 'social-events', name: 'Social Events', emoji: '🌈' },
      { id: 'support-resources', name: 'Support & Resources', emoji: '💬' },
      { id: 'trans-nb-space', name: 'Trans & Non-Binary Space', emoji: '🏳️‍⚧️' }
    ]
  },
  {
    id: 'pets',
    name: 'Pet Parents',
    description: 'Pet questions, meetups, recommendations',
    emoji: '🐾',
    color: '#3498DB',
    groups: [
      { id: 'dog-park-walks', name: 'Dog Park & Walks', emoji: '🐶' },
      { id: 'cat-chat', name: 'Cat Chat', emoji: '🐱' },
      { id: 'pet-services-care', name: 'Pet Services & Care', emoji: '🏥' }
    ]
  },
  {
    id: 'book-club',
    name: 'Book Club',
    description: 'Book discussions, reading recommendations',
    emoji: '📚',
    color: '#8B4513',
    groups: [
      { id: 'monthly-picks', name: 'Monthly Book Picks', emoji: '📅' },
      { id: 'book-discussions', name: 'Book Discussions', emoji: '💬' },
      { id: 'book-swap', name: 'Book Swap', emoji: '📚' }
    ]
  },
  {
    id: 'artists-music',
    name: 'Artists & Music',
    description: 'Music lovers, musicians, concerts, jams',
    emoji: '🎵',
    color: '#FF1493',
    groups: [
      { id: 'musicians-jams', name: 'Musicians & Jam Sessions', emoji: '🎸' },
      { id: 'concerts-shows', name: 'Concerts & Shows', emoji: '🎤' },
      { id: 'music-lovers', name: 'Music Lovers', emoji: '🎧' }
    ]
  },
  {
    id: 'foodies',
    name: 'Foodies',
    description: 'Recipes, restaurants, cooking tips, potlucks',
    emoji: '🍽️',
    color: '#FF6347',
    groups: [
      { id: 'recipes-cooking', name: 'Recipes & Cooking', emoji: '🍳' },
      { id: 'restaurant-reviews', name: 'Restaurant Reviews', emoji: '🍕' },
      { id: 'potlucks-food-swaps', name: 'Potlucks & Food Swaps', emoji: '🥘' }
    ]
  }
]

// Mock messages for each room
const generateMockMessages = (roomId) => {
  const messages = {
    'new-neighbors': [
      { id: '1', userId: '1', displayName: 'Sarah Johnson', message: 'Hi everyone! Just moved to the neighborhood last week from Chicago. Excited to meet you all! 👋', timestamp: Date.now() - 3600000, likes: 8, group: 'introductions' },
      { id: '2', userId: '2', displayName: 'Neighbor847', message: 'Welcome Sarah! Been here 5 years - happy to answer any questions!', timestamp: Date.now() - 3000000, likes: 3, group: 'introductions' },
      { id: '3', userId: '3', displayName: 'Alex Thompson', message: 'New to the area too! Moved in 2 weeks ago. Anyone know which day is trash pickup?', timestamp: Date.now() - 2400000, likes: 2, group: 'local-tips' },
      { id: '4', userId: '2', displayName: 'Neighbor847', message: 'Trash is Wednesday mornings, recycling every other week. Put bins out by 7am!', timestamp: Date.now() - 1800000, likes: 5, group: 'local-tips' },
      { id: '51', userId: '1', displayName: 'Sarah Johnson', message: 'Does anyone have a ladder I could borrow? Need to change some light bulbs in high ceilings!', timestamp: Date.now() - 1200000, likes: 1, group: 'i-need-stuff' },
      { id: '52', userId: '42', displayName: 'Mike Helper', message: 'I have a 6ft ladder you can borrow! DM me and you can swing by anytime today.', timestamp: Date.now() - 600000, likes: 4, group: 'i-need-stuff' },
      { id: '53', userId: '3', displayName: 'Alex Thompson', message: 'Anyone selling furniture? Looking for a couch and dining table!', timestamp: Date.now() - 300000, likes: 2, group: 'i-need-stuff' },
      { id: '54', userId: '43', displayName: 'Moving Away', message: 'Perfect timing! I\'m moving next month and selling everything. Have both - great condition. Will send photos!', timestamp: Date.now() - 120000, likes: 3, group: 'i-need-stuff' }
    ],
    'families': [
      { id: '5', userId: '4', displayName: 'Jessica Martinez', message: 'Which elementary school do you all recommend? We\'re moving to the area and need to register our 3rd grader.', timestamp: Date.now() - 7200000, likes: 6, group: 'schools' },
      { id: '6', userId: '5', displayName: 'David Park', message: 'Lincoln Elementary is amazing! Great teachers and strong arts program. My daughter loves it there.', timestamp: Date.now() - 5400000, likes: 8, group: 'schools' },
      { id: '7', userId: '4', displayName: 'Jessica Martinez', message: 'Perfect! That\'s exactly what we\'re looking for. Thanks!', timestamp: Date.now() - 4800000, likes: 2, group: 'schools' },
      { id: '55', userId: '44', displayName: 'Parent Pro', message: 'Anyone have a good pediatrician recommendation? Just moved here with my 2 year old.', timestamp: Date.now() - 3600000, likes: 3, group: 'schools' },
      { id: '56', userId: '45', displayName: 'Mom of Three', message: 'Organizing a playdate at the park this Saturday at 10am! Kids ages 5-10 welcome. Bring snacks to share!', timestamp: Date.now() - 3000000, likes: 12, group: 'activities-playdates' },
      { id: '57', userId: '46', displayName: 'Dad Squad', message: 'Count us in! My twin boys would love that. Should we bring a soccer ball?', timestamp: Date.now() - 2400000, likes: 5, group: 'activities-playdates' },
      { id: '58', userId: '45', displayName: 'Mom of Three', message: 'Yes! And maybe a frisbee too. See you there!', timestamp: Date.now() - 1800000, likes: 3, group: 'activities-playdates' },
      { id: '59', userId: '47', displayName: 'Minimalist Parent', message: 'Free baby gear! We have a crib, stroller, and high chair. All in great condition. Kids outgrew them!', timestamp: Date.now() - 1200000, likes: 15, group: 'kids-gear-swap' },
      { id: '60', userId: '48', displayName: 'New Parent', message: 'Oh wow! We desperately need a crib. Can I DM you?', timestamp: Date.now() - 600000, likes: 2, group: 'kids-gear-swap' },
      { id: '61', userId: '4', displayName: 'Jessica Martinez', message: 'Selling a bike with training wheels - $30. My daughter just learned to ride without them!', timestamp: Date.now() - 300000, likes: 4, group: 'kids-gear-swap' }
    ],
    'singles': [
      { id: '8', userId: '6', displayName: 'Neighbor234', message: 'Happy hour this Friday at The Local Pub, 6pm! Who\'s in? First round on me! 🍻', timestamp: Date.now() - 5400000, likes: 15, group: 'happy-hours' },
      { id: '9', userId: '7', displayName: 'Rachel Green', message: 'I\'m in! Friday evenings are perfect for me.', timestamp: Date.now() - 4200000, likes: 6, group: 'happy-hours' },
      { id: '10', userId: '8', displayName: 'Marcus Williams', message: 'Count me in too! See you there!', timestamp: Date.now() - 3600000, likes: 4, group: 'happy-hours' },
      { id: '62', userId: '49', displayName: 'Gym Buddy', message: 'Looking for someone to go to the gym with! I go M/W/F mornings around 6am. Anyone down?', timestamp: Date.now() - 3000000, likes: 8, group: 'activity-partners' },
      { id: '63', userId: '50', displayName: 'Early Riser', message: 'Yes! I\'ve been wanting to start morning workouts. Which gym?', timestamp: Date.now() - 2400000, likes: 3, group: 'activity-partners' },
      { id: '64', userId: '51', displayName: 'Foodie Solo', message: 'Anyone want to try that new Thai place downtown? I hate eating out alone!', timestamp: Date.now() - 1800000, likes: 12, group: 'activity-partners' },
      { id: '65', userId: '7', displayName: 'Rachel Green', message: 'I\'ve been wanting to try it! Let\'s go this weekend?', timestamp: Date.now() - 1200000, likes: 5, group: 'activity-partners' },
      { id: '66', userId: '52', displayName: 'Coffee Lover', message: 'Okay this might be forward, but is anyone here single and looking to date? Would love to meet someone local 😊', timestamp: Date.now() - 900000, likes: 9, group: 'dating-connections' },
      { id: '67', userId: '53', displayName: 'Hopeful Romantic', message: 'Not forward at all! That\'s literally what this group is for. Coffee sometime?', timestamp: Date.now() - 600000, likes: 7, group: 'dating-connections' },
      { id: '68', userId: '8', displayName: 'Marcus Williams', message: 'Just went on a great first date with someone from the neighborhood! This chat actually works! 😄', timestamp: Date.now() - 300000, likes: 18, group: 'dating-connections' }
    ],
    'game-night': [
      { id: '11', userId: '9', displayName: 'Chris Taylor', message: 'Board game night at my place this Saturday! Bring your favorites. Starting at 7 PM.', timestamp: Date.now() - 10800000, likes: 12, group: 'board-games' },
      { id: '12', userId: '10', displayName: 'Emma Davis', message: 'Awesome! I\'ll bring Catan and Ticket to Ride.', timestamp: Date.now() - 9000000, likes: 4, group: 'board-games' },
      { id: '13', userId: '11', displayName: 'Neighbor567', message: 'Never played before but would love to join! Is that okay?', timestamp: Date.now() - 7200000, likes: 1, group: 'board-games' },
      { id: '14', userId: '9', displayName: 'Chris Taylor', message: 'Absolutely! We love teaching new players. See you Saturday!', timestamp: Date.now() - 6000000, likes: 3, group: 'board-games' },
      { id: '30', userId: '23', displayName: 'Tyler Gaming', message: 'Anyone up for some Mario Kart tonight? Got the Switch set up!', timestamp: Date.now() - 5400000, likes: 7, group: 'video-games' },
      { id: '31', userId: '24', displayName: 'Neighbor678', message: 'I\'m in! What time?', timestamp: Date.now() - 4800000, likes: 2, group: 'video-games' },
      { id: '32', userId: '25', displayName: 'Sophie Chen', message: 'Movie night this Friday! Watching the new Marvel film. Pizza at 7, movie at 8.', timestamp: Date.now() - 4200000, likes: 15, group: 'watch-parties' },
      { id: '33', userId: '26', displayName: 'Jake Wilson', message: 'Perfect! I\'ll bring drinks and snacks.', timestamp: Date.now() - 3600000, likes: 5, group: 'watch-parties' },
      { id: '34', userId: '27', displayName: 'Maria Lopez', message: 'Looking to start a kickball league! Need at least 10 people. Who\'s interested?', timestamp: Date.now() - 3000000, likes: 18, group: 'physical-games' },
      { id: '35', userId: '28', displayName: 'Kevin Park', message: 'I\'m so in! Haven\'t played kickball since elementary school. This will be fun!', timestamp: Date.now() - 2400000, likes: 6, group: 'physical-games' },
      { id: '36', userId: '29', displayName: 'Neighbor890', message: 'Count me in too! Can we do it on Sunday afternoons?', timestamp: Date.now() - 1800000, likes: 4, group: 'physical-games' }
    ],
    'arts-crafts': [
      { id: '15', userId: '12', displayName: 'Olivia Chen', message: 'Starting a weekend painting group! Anyone interested in joining? All skill levels welcome.', timestamp: Date.now() - 14400000, likes: 12, group: 'creative-projects' },
      { id: '16', userId: '13', displayName: 'Noah Anderson', message: 'I\'d love to! I\'ve been wanting to get back into watercolors.', timestamp: Date.now() - 12600000, likes: 5, group: 'creative-projects' },
      { id: '17', userId: '12', displayName: 'Olivia Chen', message: 'Perfect! Let\'s meet at the park pavilion this Sunday at 10 AM.', timestamp: Date.now() - 10800000, likes: 7, group: 'creative-projects' },
      { id: '69', userId: '54', displayName: 'Pottery Pro', message: 'Just finished a ceramic bowl set! So happy with how they turned out. Anyone else working on pottery?', timestamp: Date.now() - 9000000, likes: 15, group: 'creative-projects' },
      { id: '70', userId: '55', displayName: 'Knit Happens', message: 'Working on a baby blanket for my niece. Knitting is so therapeutic!', timestamp: Date.now() - 7200000, likes: 8, group: 'creative-projects' },
      { id: '71', userId: '56', displayName: 'Handy Homeowner', message: 'Building a deck this weekend! Anyone have experience with permits? First time doing this.', timestamp: Date.now() - 5400000, likes: 9, group: 'diy-home-projects' },
      { id: '72', userId: '57', displayName: 'DIY Dad', message: 'Just finished one last month! You need a permit for sure. DM me, happy to share what I learned.', timestamp: Date.now() - 3600000, likes: 11, group: 'diy-home-projects' },
      { id: '73', userId: '13', displayName: 'Noah Anderson', message: 'Refinished my dining table this week. Turned out amazing! Before/after pics in my profile.', timestamp: Date.now() - 2400000, likes: 18, group: 'diy-home-projects' },
      { id: '74', userId: '58', displayName: 'Tool Time', message: 'Anyone have a table saw I could borrow for a weekend project? Will return cleaned and in perfect condition!', timestamp: Date.now() - 1800000, likes: 4, group: 'tools-supplies-swap' },
      { id: '75', userId: '56', displayName: 'Handy Homeowner', message: 'I have one! You can borrow it. I\'m at 123 Oak Street.', timestamp: Date.now() - 1200000, likes: 8, group: 'tools-supplies-swap' },
      { id: '76', userId: '12', displayName: 'Olivia Chen', message: 'Free acrylic paints! Bought too many colors and need to clear space. About 20 tubes, barely used.', timestamp: Date.now() - 600000, likes: 14, group: 'tools-supplies-swap' }
    ],
    'lgbtq': [
      { id: '18', userId: '14', displayName: 'Jordan Lee', message: 'Hey neighbors! Looking to organize a pride month celebration for our neighborhood. Who\'s interested in helping? 🏳️‍🌈', timestamp: Date.now() - 18000000, likes: 22, group: 'social-events' },
      { id: '19', userId: '15', displayName: 'Sam Rivera', message: 'I\'m totally in! We could do a potluck and movie screening?', timestamp: Date.now() - 16200000, likes: 14, group: 'social-events' },
      { id: '20', userId: '16', displayName: 'Neighbor789', message: 'Love this idea! I can help with organizing and decorations.', timestamp: Date.now() - 14400000, likes: 9, group: 'social-events' },
      { id: '21', userId: '14', displayName: 'Jordan Lee', message: 'Amazing! Let\'s set up a planning meeting. DM me your availability!', timestamp: Date.now() - 12600000, likes: 7, group: 'social-events' },
      { id: '77', userId: '59', displayName: 'Queer Brunch', message: 'Hosting a queer brunch this Sunday, 11am at my place! Bring a dish if you can. All welcome!', timestamp: Date.now() - 9000000, likes: 18, group: 'social-events' },
      { id: '78', userId: '60', displayName: 'Ally Friend', message: 'Does anyone have recommendations for LGBTQ+ friendly hair salons? Want to support queer-owned businesses.', timestamp: Date.now() - 7200000, likes: 11, group: 'support-resources' },
      { id: '79', userId: '15', displayName: 'Sam Rivera', message: 'Stardust Salon on 5th Ave! Owner is queer and they\'re amazing. Also, Dr. Patel at the community health center is super affirming.', timestamp: Date.now() - 5400000, likes: 16, group: 'support-resources' },
      { id: '80', userId: '61', displayName: 'Rainbow Parent', message: 'Looking for LGBTQ+ friendly family therapist recommendations for my teenager who just came out. Want to make sure they feel supported.', timestamp: Date.now() - 3600000, likes: 13, group: 'support-resources' },
      { id: '81', userId: '62', displayName: 'They/Them', message: 'Just moved here! Any other trans/NB folks in the neighborhood? Would love to connect.', timestamp: Date.now() - 2400000, likes: 19, group: 'trans-nb-space' },
      { id: '82', userId: '63', displayName: 'TransJoy', message: 'Welcome! Yes! A few of us grab coffee every other Saturday. Would love to have you join us! 💙💗🤍💗💙', timestamp: Date.now() - 1200000, likes: 15, group: 'trans-nb-space' },
      { id: '83', userId: '62', displayName: 'They/Them', message: 'That sounds perfect! Thank you so much, this community is already making me feel at home 🥹', timestamp: Date.now() - 600000, likes: 12, group: 'trans-nb-space' }
    ],
    'pets': [
      { id: '22', userId: '19', displayName: 'Golden Parent', message: 'Dog park meetup this Saturday at 9am! Riverside Dog Park. Bring water and poop bags. Let\'s get our pups socializing! 🐕', timestamp: Date.now() - 21600000, likes: 16, group: 'dog-park-walks' },
      { id: '23', userId: '17', displayName: 'Luna Walker', message: 'We\'re in! My puppy needs to learn how to play with other dogs.', timestamp: Date.now() - 19800000, likes: 8, group: 'dog-park-walks' },
      { id: '24', userId: '64', displayName: 'Walks Daily', message: 'Looking for a morning walking buddy! I walk my lab every day at 7am. Anyone want to join?', timestamp: Date.now() - 18000000, likes: 12, group: 'dog-park-walks' },
      { id: '25', userId: '65', displayName: 'Early Dog', message: 'Yes! My beagle and I would love that. Which route do you usually take?', timestamp: Date.now() - 16200000, likes: 5, group: 'dog-park-walks' },
      { id: '84', userId: '66', displayName: 'Cat Mom', message: 'My cat has been hiding under the bed for 2 days. Is this normal? Just moved to a new apartment.', timestamp: Date.now() - 14400000, likes: 7, group: 'cat-chat' },
      { id: '85', userId: '67', displayName: 'Feline Friend', message: 'Totally normal! Give them time and space. Set up food/water/litter nearby. They\'ll come out when ready. Could take a week.', timestamp: Date.now() - 12600000, likes: 11, group: 'cat-chat' },
      { id: '86', userId: '68', displayName: 'Three Cats', message: 'Anyone else have indoor-only cats? Looking for tips on keeping them entertained and active!', timestamp: Date.now() - 10800000, likes: 9, group: 'cat-chat' },
      { id: '87', userId: '17', displayName: 'Luna Walker', message: 'Anyone have recommendations for a good vet in the area? Just adopted a puppy! 🐶', timestamp: Date.now() - 9000000, likes: 6, group: 'pet-services-care' },
      { id: '88', userId: '18', displayName: 'Dr. Bailey Foster', message: 'Congrats on the new pup! Riverside Animal Hospital is excellent. Dr. Kim is wonderful and so patient.', timestamp: Date.now() - 7200000, likes: 10, group: 'pet-services-care' },
      { id: '89', userId: '69', displayName: 'Pet Sitter Pro', message: 'Going out of town next month - any trusted pet sitters in the area? Need someone for my two dogs.', timestamp: Date.now() - 5400000, likes: 5, group: 'pet-services-care' },
      { id: '90', userId: '70', displayName: 'Neighbor Helper', message: 'I pet sit! Been doing it for 3 years. Have references. DM me!', timestamp: Date.now() - 3600000, likes: 8, group: 'pet-services-care' }
    ],
    'book-club': [
      { id: '26', userId: '20', displayName: 'Emily Harper', message: 'Time to vote on next month\'s book! Options: "The Midnight Library", "Project Hail Mary", or "Demon Copperhead". Drop your vote! 📚', timestamp: Date.now() - 10800000, likes: 14, group: 'monthly-picks' },
      { id: '27', userId: '21', displayName: 'Michael Stone', message: 'Project Hail Mary gets my vote! Such a fun read.', timestamp: Date.now() - 9000000, likes: 10, group: 'monthly-picks' },
      { id: '28', userId: '22', displayName: 'Neighbor456', message: 'I\'m voting for The Midnight Library! Heard amazing things.', timestamp: Date.now() - 7200000, likes: 8, group: 'monthly-picks' },
      { id: '29', userId: '20', displayName: 'Emily Harper', message: 'Project Hail Mary wins! Meeting at the library community room next Thursday at 7 PM!', timestamp: Date.now() - 5400000, likes: 12, group: 'monthly-picks' },
      { id: '91', userId: '71', displayName: 'Book Worm', message: 'Just finished "Tomorrow, and Tomorrow, and Tomorrow" and I\'m DEVASTATED (in the best way). Anyone else read it?', timestamp: Date.now() - 3600000, likes: 16, group: 'book-discussions' },
      { id: '92', userId: '72', displayName: 'Page Turner', message: 'YES! That book destroyed me. The friendship between Sam and Sadie was so real and complicated.', timestamp: Date.now() - 2400000, likes: 11, group: 'book-discussions' },
      { id: '93', userId: '21', displayName: 'Michael Stone', message: 'Adding to my list now! You both sold me on it.', timestamp: Date.now() - 1800000, likes: 5, group: 'book-discussions' },
      { id: '94', userId: '73', displayName: 'Bookshelf Full', message: 'Clearing out my shelves! Have about 30 books to trade/give away. Mostly fiction. Let me know what you\'re looking for!', timestamp: Date.now() - 1200000, likes: 18, group: 'book-swap' },
      { id: '95', userId: '22', displayName: 'Neighbor456', message: 'Do you have any cozy mysteries? I\'m obsessed with that genre right now!', timestamp: Date.now() - 600000, likes: 6, group: 'book-swap' },
      { id: '96', userId: '73', displayName: 'Bookshelf Full', message: 'Yes! I have the whole "Thursday Murder Club" series. They\'re yours if you want them!', timestamp: Date.now() - 300000, likes: 9, group: 'book-swap' }
    ],
    'artists-music': [
      { id: '37', userId: '30', displayName: 'Jazz Hernandez', message: 'Any musicians in the neighborhood? Would love to start a casual jam session group!', timestamp: Date.now() - 14400000, likes: 18, group: 'musicians-jams' },
      { id: '38', userId: '31', displayName: 'Dylan Reed', message: 'I play guitar! Been looking for people to jam with. What kind of music?', timestamp: Date.now() - 12600000, likes: 10, group: 'musicians-jams' },
      { id: '39', userId: '30', displayName: 'Jazz Hernandez', message: 'I\'m a drummer, open to anything - rock, jazz, blues, indie. Just want to make some music!', timestamp: Date.now() - 10800000, likes: 12, group: 'musicians-jams' },
      { id: '40', userId: '32', displayName: 'Neighbor321', message: 'I sing and play keys. Count me in! When and where?', timestamp: Date.now() - 9000000, likes: 8, group: 'musicians-jams' },
      { id: '41', userId: '33', displayName: 'Marcus Thompson', message: 'Anyone going to the concert at the amphitheater this weekend? The Indie Collective is playing!', timestamp: Date.now() - 7200000, likes: 15, group: 'concerts-shows' },
      { id: '42', userId: '34', displayName: 'Aria Chen', message: 'Yes! Got my tickets already. So excited!', timestamp: Date.now() - 5400000, likes: 7, group: 'concerts-shows' },
      { id: '97', userId: '74', displayName: 'Concert Buddy', message: 'Looking for someone to go to the jazz festival next month! None of my friends are into jazz 🎺', timestamp: Date.now() - 3600000, likes: 9, group: 'concerts-shows' },
      { id: '98', userId: '30', displayName: 'Jazz Hernandez', message: 'I\'m DOWN! Love jazz. Let\'s do it!', timestamp: Date.now() - 2400000, likes: 6, group: 'concerts-shows' },
      { id: '45', userId: '37', displayName: 'Vinyl Victor', message: 'Just picked up an original pressing of Dark Side of the Moon! The sound quality is incredible 🎵', timestamp: Date.now() - 14400000, likes: 22, group: 'music-lovers' },
      { id: '46', userId: '38', displayName: 'Record Rachel', message: 'Jealous! That\'s a grail record. Where did you find it?', timestamp: Date.now() - 12600000, likes: 11, group: 'music-lovers' },
      { id: '48', userId: '39', displayName: 'DJ Spinner', message: 'Made a chill Sunday morning playlist - perfect for coffee and relaxation. Spotify link in my profile!', timestamp: Date.now() - 9000000, likes: 16, group: 'music-lovers' },
      { id: '49', userId: '40', displayName: 'Melody Mix', message: 'Love it! Adding to my collection. Anyone have good workout playlists?', timestamp: Date.now() - 7200000, likes: 8, group: 'music-lovers' },
      { id: '50', userId: '41', displayName: 'Beat Master', message: 'I got you! Just shared my high-energy running mix. 160+ BPM all the way 🏃‍♂️', timestamp: Date.now() - 5400000, likes: 13, group: 'music-lovers' }
    ],
    'foodies': [
      { id: '99', userId: '75', displayName: 'Chef at Home', message: 'Just made homemade pasta from scratch! Game changer. Happy to share the recipe if anyone wants it! 🍝', timestamp: Date.now() - 14400000, likes: 18, group: 'recipes-cooking' },
      { id: '100', userId: '76', displayName: 'Baking Queen', message: 'YES PLEASE! I\'ve been wanting to try making pasta. Is it hard?', timestamp: Date.now() - 12600000, likes: 7, group: 'recipes-cooking' },
      { id: '101', userId: '75', displayName: 'Chef at Home', message: 'Not at all! Just flour, eggs, and patience. I\'ll DM you the recipe!', timestamp: Date.now() - 10800000, likes: 9, group: 'recipes-cooking' },
      { id: '102', userId: '77', displayName: 'Meal Prepper', message: 'Anyone else meal prep on Sundays? Looking for easy healthy recipes that freeze well!', timestamp: Date.now() - 9000000, likes: 12, group: 'recipes-cooking' },
      { id: '103', userId: '78', displayName: 'Foodie Explorer', message: 'Just tried the new Vietnamese place on Oak Street - AMAZING. Best pho I\'ve had in years!', timestamp: Date.now() - 7200000, likes: 16, group: 'restaurant-reviews' },
      { id: '104', userId: '79', displayName: 'Pizza Fanatic', message: 'Adding to my list! Anyone been to Mario\'s Pizzeria downtown? Worth the hype?', timestamp: Date.now() - 5400000, likes: 8, group: 'restaurant-reviews' },
      { id: '105', userId: '80', displayName: 'Local Eats', message: '100% yes! Get the margherita pizza. Simple but perfection.', timestamp: Date.now() - 3600000, likes: 11, group: 'restaurant-reviews' },
      { id: '106', userId: '81', displayName: 'Potluck Pro', message: 'Organizing a neighborhood potluck next Saturday at 6pm in the community center! Everyone bring a dish to share 🥘', timestamp: Date.now() - 2400000, likes: 22, group: 'potlucks-food-swaps' },
      { id: '107', userId: '82', displayName: 'Home Cook', message: 'I\'m in! I\'ll bring my famous mac and cheese!', timestamp: Date.now() - 1800000, likes: 10, group: 'potlucks-food-swaps' },
      { id: '108', userId: '83', displayName: 'Garden Chef', message: 'My tomato harvest was HUGE this year. Anyone want fresh tomatoes? I have way too many!', timestamp: Date.now() - 1200000, likes: 15, group: 'potlucks-food-swaps' },
      { id: '109', userId: '78', displayName: 'Foodie Explorer', message: 'Oh yes please! I\'ll trade you for my homemade sourdough bread!', timestamp: Date.now() - 600000, likes: 12, group: 'potlucks-food-swaps' }
    ]
  }

  return messages[roomId] || []
}

// Mock blocked users and reported messages (per user)
const userBlocks = {}
const reportedMessages = []

// Mock group invitations - tracks which users have access to which groups
const groupInvitations = {
  // All groups are now public - this is kept for future invite-only features
  'current-user': {}
}

// Kudos (reputation) system - tracks user respect/reputation in each room
const userReputation = {
  'new-neighbors': {
    '1': { kudos: 22, displayName: 'Sarah Johnson' },
    '2': { kudos: 35, displayName: 'Neighbor847' },
    '3': { kudos: 18, displayName: 'Alex Thompson' },
    '42': { kudos: 28, displayName: 'Mike Helper' },
    '43': { kudos: 12, displayName: 'Moving Away' }
  },
  'game-night': {
    '9': { kudos: 67, displayName: 'Chris Taylor' },
    '10': { kudos: 34, displayName: 'Emma Davis' },
    '11': { kudos: 18, displayName: 'Neighbor567' },
    '23': { kudos: 29, displayName: 'Tyler Gaming' },
    '25': { kudos: 41, displayName: 'Sophie Chen' },
    '27': { kudos: 48, displayName: 'Maria Lopez' }
  },
  'families': {
    '4': { kudos: 52, displayName: 'Jessica Martinez' },
    '5': { kudos: 45, displayName: 'David Park' },
    '44': { kudos: 18, displayName: 'Parent Pro' },
    '45': { kudos: 38, displayName: 'Mom of Three' },
    '46': { kudos: 25, displayName: 'Dad Squad' },
    '47': { kudos: 31, displayName: 'Minimalist Parent' },
    '48': { kudos: 12, displayName: 'New Parent' }
  },
  'singles': {
    '6': { kudos: 48, displayName: 'Neighbor234' },
    '7': { kudos: 35, displayName: 'Rachel Green' },
    '8': { kudos: 42, displayName: 'Marcus Williams' },
    '49': { kudos: 29, displayName: 'Gym Buddy' },
    '50': { kudos: 15, displayName: 'Early Riser' },
    '51': { kudos: 31, displayName: 'Foodie Solo' },
    '52': { kudos: 22, displayName: 'Coffee Lover' },
    '53': { kudos: 18, displayName: 'Hopeful Romantic' }
  },
  'artists-music': {
    '30': { kudos: 58, displayName: 'Jazz Hernandez' },
    '31': { kudos: 42, displayName: 'Dylan Reed' },
    '32': { kudos: 28, displayName: 'Neighbor321' },
    '33': { kudos: 38, displayName: 'Marcus Thompson' },
    '34': { kudos: 25, displayName: 'Aria Chen' },
    '37': { kudos: 65, displayName: 'Vinyl Victor' },
    '38': { kudos: 48, displayName: 'Record Rachel' },
    '39': { kudos: 52, displayName: 'DJ Spinner' },
    '40': { kudos: 31, displayName: 'Melody Mix' },
    '41': { kudos: 35, displayName: 'Beat Master' },
    '74': { kudos: 29, displayName: 'Concert Buddy' }
  },
  'arts-crafts': {
    '12': { kudos: 58, displayName: 'Olivia Chen' },
    '13': { kudos: 45, displayName: 'Noah Anderson' },
    '54': { kudos: 35, displayName: 'Pottery Pro' },
    '55': { kudos: 22, displayName: 'Knit Happens' },
    '56': { kudos: 41, displayName: 'Handy Homeowner' },
    '57': { kudos: 38, displayName: 'DIY Dad' },
    '58': { kudos: 19, displayName: 'Tool Time' }
  },
  'lgbtq': {
    '14': { kudos: 71, displayName: 'Jordan Lee' },
    '15': { kudos: 52, displayName: 'Sam Rivera' },
    '16': { kudos: 33, displayName: 'Neighbor789' },
    '59': { kudos: 44, displayName: 'Queer Brunch' },
    '60': { kudos: 28, displayName: 'Ally Friend' },
    '61': { kudos: 31, displayName: 'Rainbow Parent' },
    '62': { kudos: 25, displayName: 'They/Them' },
    '63': { kudos: 38, displayName: 'TransJoy' }
  },
  'pets': {
    '17': { kudos: 39, displayName: 'Luna Walker' },
    '18': { kudos: 54, displayName: 'Dr. Bailey Foster' },
    '19': { kudos: 48, displayName: 'Golden Parent' },
    '64': { kudos: 35, displayName: 'Walks Daily' },
    '65': { kudos: 22, displayName: 'Early Dog' },
    '66': { kudos: 28, displayName: 'Cat Mom' },
    '67': { kudos: 42, displayName: 'Feline Friend' },
    '68': { kudos: 31, displayName: 'Three Cats' },
    '69': { kudos: 19, displayName: 'Pet Sitter Pro' },
    '70': { kudos: 26, displayName: 'Neighbor Helper' }
  },
  'book-club': {
    '20': { kudos: 52, displayName: 'Emily Harper' },
    '21': { kudos: 38, displayName: 'Michael Stone' },
    '22': { kudos: 25, displayName: 'Neighbor456' },
    '71': { kudos: 41, displayName: 'Book Worm' },
    '72': { kudos: 33, displayName: 'Page Turner' },
    '73': { kudos: 45, displayName: 'Bookshelf Full' }
  },
  'foodies': {
    '75': { kudos: 56, displayName: 'Chef at Home' },
    '76': { kudos: 32, displayName: 'Baking Queen' },
    '77': { kudos: 28, displayName: 'Meal Prepper' },
    '78': { kudos: 48, displayName: 'Foodie Explorer' },
    '79': { kudos: 22, displayName: 'Pizza Fanatic' },
    '80': { kudos: 35, displayName: 'Local Eats' },
    '81': { kudos: 51, displayName: 'Potluck Pro' },
    '82': { kudos: 29, displayName: 'Home Cook' },
    '83': { kudos: 41, displayName: 'Garden Chef' }
  }
}

// Track who gave kudos to whom (to prevent spam)
const kudosGiven = {
  'current-user': {
    '30': true,
    '37': true
  }
}

// User Profiles (opt-in, privacy-first)
const userProfiles = {
  '1': {
    userId: '1',
    isAnonymous: false,
    displayName: 'Sarah J.',
    fullName: 'Sarah Johnson', // Only shown to neighbor bonds
    photo: null,
    bio: 'Love connecting with neighbors over board games!',
    totalKudos: 15,
    badges: ['trusted-neighbor', 'event-host'],
    activeRooms: ['new-neighbors', 'game-night'],
    privacy: {
      showRealName: false,
      showActiveRooms: true,
      acceptBondRequests: 'with-kudos' // 'anyone', 'with-kudos', 'none'
    },
    joinedAt: Date.now() - 30 * 24 * 60 * 60 * 1000 // 30 days ago
  },
  '9': {
    userId: '9',
    isAnonymous: false,
    displayName: 'Chris T.',
    fullName: 'Chris Taylor',
    photo: null,
    bio: 'Board game enthusiast! Host weekly game nights.',
    totalKudos: 67,
    badges: ['community-leader', 'event-host', 'super-helper'],
    activeRooms: ['game-night', 'new-neighbors'],
    privacy: {
      showRealName: true,
      showActiveRooms: true,
      acceptBondRequests: 'anyone'
    },
    joinedAt: Date.now() - 90 * 24 * 60 * 60 * 1000 // 90 days ago
  },
  '30': {
    userId: '30',
    isAnonymous: false,
    displayName: 'Jazz H.',
    fullName: 'Jazz Hernandez',
    photo: null,
    bio: 'Drummer looking for jam buddies!',
    totalKudos: 58,
    badges: ['community-leader', 'music-maker'],
    activeRooms: ['artists-music'],
    privacy: {
      showRealName: false,
      showActiveRooms: true,
      acceptBondRequests: 'with-kudos'
    },
    joinedAt: Date.now() - 60 * 24 * 60 * 60 * 1000
  },
  '37': {
    userId: '37',
    isAnonymous: false,
    displayName: 'Vinyl Victor',
    fullName: 'Victor Martinez',
    photo: null,
    bio: 'Vinyl collector & audiophile. Always looking for rare records!',
    totalKudos: 65,
    badges: ['community-leader', 'music-maker', 'super-helper'],
    activeRooms: ['artists-music'],
    privacy: {
      showRealName: false,
      showActiveRooms: true,
      acceptBondRequests: 'with-kudos'
    },
    joinedAt: Date.now() - 75 * 24 * 60 * 60 * 1000
  }
}

// Neighbor Bonds (earned connections, not friend requests)
const neighborBonds = {
  'current-user': {
    bonds: [
      {
        bondId: 'bond-1',
        userId: '30',
        bondedAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
        mutualKudos: 5, // How many times you've given kudos to each other
        sharedRooms: ['artists-music'],
        lastInteraction: Date.now() - 2 * 60 * 60 * 1000,
        status: 'active'
      },
      {
        bondId: 'bond-2',
        userId: '37',
        bondedAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
        mutualKudos: 8,
        sharedRooms: ['artists-music'],
        lastInteraction: Date.now() - 24 * 60 * 60 * 1000,
        status: 'active'
      }
    ],
    pendingRequests: [
      {
        requestId: 'req-1',
        from: '9',
        message: 'Hey! Would love to connect - we both enjoy board games!',
        context: 'game-night',
        sentAt: Date.now() - 2 * 24 * 60 * 60 * 1000
      }
    ],
    sentRequests: [
      {
        requestId: 'req-2',
        to: '1',
        message: 'Let\'s coordinate for the next game night!',
        context: 'game-night',
        sentAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
        status: 'pending'
      }
    ]
  },
  '9': {
    bonds: [
      {
        bondId: 'bond-3',
        userId: '10',
        bondedAt: Date.now() - 20 * 24 * 60 * 60 * 1000,
        mutualKudos: 12,
        sharedRooms: ['game-night'],
        lastInteraction: Date.now() - 3 * 60 * 60 * 1000,
        status: 'active'
      }
    ],
    pendingRequests: [],
    sentRequests: [
      {
        requestId: 'req-1',
        to: 'current-user',
        message: 'Hey! Would love to connect - we both enjoy board games!',
        context: 'game-night',
        sentAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
        status: 'pending'
      }
    ]
  }
}

// Events (IRL meetups - the core differentiator!)
const events = {
  'event-1': {
    eventId: 'event-1',
    roomId: 'game-night',
    createdBy: '9',
    creatorName: 'Chris T.',
    title: 'Saturday Game Night',
    description: 'Bring your favorite board game! All skill levels welcome. We\'ll have snacks and drinks.',
    location: 'Miller Park Pavilion',
    datetime: Date.now() + 3 * 24 * 60 * 60 * 1000, // 3 days from now
    duration: '3 hours',
    maxAttendees: 20,
    rsvps: [
      { userId: '1', displayName: 'Sarah J.', status: 'going', rsvpedAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { userId: '10', displayName: 'Emma Davis', status: 'going', rsvpedAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },
      { userId: '11', displayName: 'Neighbor567', status: 'maybe', rsvpedAt: Date.now() - 1 * 24 * 60 * 60 * 1000 },
      { userId: 'current-user', displayName: 'You', status: 'going', rsvpedAt: Date.now() - 12 * 60 * 60 * 1000 }
    ],
    attendees: [], // Filled after event when people check in
    isPublic: true,
    category: 'games',
    tags: ['board-games', 'social', 'outdoor']
  },
  'event-2': {
    eventId: 'event-2',
    roomId: 'artists-music',
    createdBy: '30',
    creatorName: 'Jazz H.',
    title: 'Open Jam Session',
    description: 'Bring your instrument! All genres welcome. We have drums, amps, and PA system.',
    location: 'Community Center - Room 3',
    datetime: Date.now() + 5 * 24 * 60 * 60 * 1000,
    duration: '2 hours',
    maxAttendees: 15,
    rsvps: [
      { userId: '31', displayName: 'Dylan Reed', status: 'going', rsvpedAt: Date.now() - 3 * 24 * 60 * 60 * 1000 },
      { userId: '32', displayName: 'Neighbor321', status: 'going', rsvpedAt: Date.now() - 2 * 24 * 60 * 60 * 1000 },
      { userId: 'current-user', displayName: 'You', status: 'maybe', rsvpedAt: Date.now() - 1 * 24 * 60 * 60 * 1000 }
    ],
    attendees: [],
    isPublic: true,
    category: 'music',
    tags: ['jam-session', 'music', 'indoor']
  },
  'event-3': {
    eventId: 'event-3',
    roomId: 'pets',
    createdBy: '19',
    creatorName: 'Neighbor912',
    title: 'Dog Park Meetup',
    description: 'Let\'s get our dogs together for some playtime! Small and large dogs welcome.',
    location: 'Riverside Dog Park',
    datetime: Date.now() - 2 * 24 * 60 * 60 * 1000, // Past event
    duration: '1 hour',
    maxAttendees: null,
    rsvps: [
      { userId: '17', displayName: 'Luna Walker', status: 'going', rsvpedAt: Date.now() - 4 * 24 * 60 * 60 * 1000 },
      { userId: '18', displayName: 'Dr. Bailey Foster', status: 'going', rsvpedAt: Date.now() - 3 * 24 * 60 * 60 * 1000 }
    ],
    attendees: ['17', '18', '19'], // Who actually showed up
    isPublic: true,
    category: 'pets',
    tags: ['dogs', 'outdoor', 'social']
  }
}

// Badges/Recognition system
const badgeDefinitions = {
  'trusted-neighbor': {
    id: 'trusted-neighbor',
    name: 'Trusted Neighbor',
    icon: '🤝',
    description: 'Earned 10+ kudos',
    requirement: 10
  },
  'known-neighbor': {
    id: 'known-neighbor',
    name: 'Known Neighbor',
    icon: '⭐',
    description: 'Earned 25+ kudos',
    requirement: 25
  },
  'community-leader': {
    id: 'community-leader',
    name: 'Community Leader',
    icon: '👑',
    description: 'Earned 50+ kudos',
    requirement: 50
  },
  'event-host': {
    id: 'event-host',
    name: 'Event Host',
    icon: '🎉',
    description: 'Hosted an event',
    requirement: 'host-event'
  },
  'event-goer': {
    id: 'event-goer',
    name: 'Event Goer',
    icon: '🎪',
    description: 'Attended 3+ events',
    requirement: 'attend-3-events'
  },
  'super-helper': {
    id: 'super-helper',
    name: 'Super Helper',
    icon: '💪',
    description: 'Received kudos from 20+ different neighbors',
    requirement: 'kudos-from-20'
  },
  'first-bond': {
    id: 'first-bond',
    name: 'First Bond',
    icon: '🌟',
    description: 'Made your first neighbor bond',
    requirement: 'first-bond'
  },
  'connector': {
    id: 'connector',
    name: 'Connector',
    icon: '🌐',
    description: '5+ neighbor bonds',
    requirement: '5-bonds'
  },
  'music-maker': {
    id: 'music-maker',
    name: 'Music Maker',
    icon: '🎵',
    description: 'Active in music community',
    requirement: 'music-active'
  }
}

// Group admins based on kudos and first message
const groupAdmins = {
  'introductions': {
    creator: '2', // Neighbor847 - helpful welcoming neighbor
    admins: ['2', '1'],
    pendingRequests: []
  },
  'local-tips': {
    creator: '2', // Neighbor847 - knows the neighborhood well
    admins: ['2', '42'],
    pendingRequests: []
  },
  'i-need-stuff': {
    creator: '42', // Mike Helper - helpful with lending
    admins: ['42', '2'],
    pendingRequests: []
  },
  'schools': {
    creator: '4', // Jessica Martinez - highest kudos in families
    admins: ['4', '5'],
    pendingRequests: []
  },
  'activities-playdates': {
    creator: '45', // Mom of Three - organizes playdates
    admins: ['45', '46'],
    pendingRequests: []
  },
  'kids-gear-swap': {
    creator: '47', // Minimalist Parent - active in gear swapping
    admins: ['47', '4'],
    pendingRequests: []
  },
  'happy-hours': {
    creator: '6', // Neighbor234 - highest kudos in singles, organizes events
    admins: ['6', '7'],
    pendingRequests: []
  },
  'activity-partners': {
    creator: '51', // Foodie Solo - active in organizing activities
    admins: ['51', '49'],
    pendingRequests: []
  },
  'dating-connections': {
    creator: '8', // Marcus Williams - positive dating experience
    admins: ['8', '52'],
    pendingRequests: []
  },
  'creative-projects': {
    creator: '12', // Olivia Chen - highest kudos, organizes painting group
    admins: ['12', '54'],
    pendingRequests: []
  },
  'diy-home-projects': {
    creator: '13', // Noah Anderson - active in DIY projects
    admins: ['13', '56'],
    pendingRequests: []
  },
  'tools-supplies-swap': {
    creator: '56', // Handy Homeowner - lends tools
    admins: ['56', '12'],
    pendingRequests: []
  },
  'social-events': {
    creator: '14', // Jordan Lee - highest kudos, organizes pride events
    admins: ['14', '59'],
    pendingRequests: []
  },
  'support-resources': {
    creator: '15', // Sam Rivera - shares resources and recommendations
    admins: ['15', '61'],
    pendingRequests: []
  },
  'trans-nb-space': {
    creator: '63', // TransJoy - organizes trans/NB meetups
    admins: ['63', '62'],
    pendingRequests: []
  },
  'dog-park-walks': {
    creator: '19', // Golden Parent - organizes dog meetups
    admins: ['19', '64'],
    pendingRequests: []
  },
  'cat-chat': {
    creator: '67', // Feline Friend - helpful with cat advice
    admins: ['67', '68'],
    pendingRequests: []
  },
  'pet-services-care': {
    creator: '18', // Dr. Bailey Foster - highest kudos, vet recommendations
    admins: ['18', '70'],
    pendingRequests: []
  },
  'monthly-picks': {
    creator: '20', // Emily Harper - highest kudos, organizes book club
    admins: ['20', '73'],
    pendingRequests: []
  },
  'book-discussions': {
    creator: '71', // Book Worm - active in discussions
    admins: ['71', '72'],
    pendingRequests: []
  },
  'book-swap': {
    creator: '73', // Bookshelf Full - shares books
    admins: ['73', '20'],
    pendingRequests: []
  },
  'musicians-jams': {
    creator: '30', // Jazz Hernandez - highest kudos in music, organizes jams
    admins: ['30', '31'],
    pendingRequests: []
  },
  'concerts-shows': {
    creator: '33', // Marcus Thompson - organizes concert outings
    admins: ['33', '74'],
    pendingRequests: []
  },
  'music-lovers': {
    creator: '37', // Vinyl Victor - highest kudos, music enthusiast
    admins: ['37', '39'],
    pendingRequests: []
  },
  'recipes-cooking': {
    creator: '75', // Chef at Home - highest kudos in foodies, shares recipes
    admins: ['75', '76'],
    pendingRequests: []
  },
  'restaurant-reviews': {
    creator: '78', // Foodie Explorer - active restaurant reviewer
    admins: ['78', '80'],
    pendingRequests: []
  },
  'potlucks-food-swaps': {
    creator: '81', // Potluck Pro - organizes potlucks
    admins: ['81', '83'],
    pendingRequests: []
  },
  'board-games': {
    creator: '9', // Chris Taylor - highest kudos in game-night
    admins: ['9', '10'],
    pendingRequests: []
  },
  'video-games': {
    creator: '23',
    admins: ['23'],
    pendingRequests: []
  },
  'watch-parties': {
    creator: '25',
    admins: ['25', '27'],
    pendingRequests: []
  },
  'physical-games': {
    creator: '27',
    admins: ['27'],
    pendingRequests: []
  }
}

export const giveKudos = (fromUserId, toUserId, roomId) => {
  // Can't give kudos to yourself
  if (fromUserId === toUserId) {
    return { success: false, message: "Can't give kudos to yourself" }
  }
  
  // Check if already gave kudos to this user in this room
  const key = `${fromUserId}-${toUserId}-${roomId}`
  if (kudosGiven[fromUserId]?.[toUserId]) {
    return { success: false, message: "You already gave kudos to this neighbor" }
  }
  
  // Initialize room reputation if needed
  if (!userReputation[roomId]) userReputation[roomId] = {}
  if (!userReputation[roomId][toUserId]) {
    userReputation[roomId][toUserId] = { kudos: 0, displayName: 'Unknown' }
  }
  
  // Add kudos
  userReputation[roomId][toUserId].kudos += 1
  
  // Track that kudos was given
  if (!kudosGiven[fromUserId]) kudosGiven[fromUserId] = {}
  kudosGiven[fromUserId][toUserId] = true
  
  return { success: true, message: "Kudos given! 🌟" }
}

export const getUserKudos = (userId, roomId) => {
  return userReputation[roomId]?.[userId]?.kudos || 0
}

export const hasGivenKudos = (fromUserId, toUserId) => {
  return kudosGiven[fromUserId]?.[toUserId] || false
}

export const getTopUsersInRoom = (roomId, limit = 5) => {
  const roomRep = userReputation[roomId] || {}
  return Object.entries(roomRep)
    .map(([userId, data]) => ({ userId, ...data }))
    .sort((a, b) => b.kudos - a.kudos)
    .slice(0, limit)
}

export const hasKudosThreshold = (userId, roomId, threshold = 20) => {
  const kudos = getUserKudos(userId, roomId)
  return kudos >= threshold
}

export const canBecomeGroupAdmin = (userId, roomId) => {
  // Top 5 most-respected users in a room can become group admins
  const topUsers = getTopUsersInRoom(roomId, 5)
  return topUsers.some(user => user.userId === userId)
}

export const isGroupAdmin = (userId, groupId) => {
  return groupAdmins[groupId]?.admins?.includes(userId) || false
}

export const getPendingRequests = (groupId) => {
  return groupAdmins[groupId]?.pendingRequests || []
}

export const approveGroupInvite = (adminUserId, groupId, requestUserId) => {
  // Check if requester is an admin
  if (!isGroupAdmin(adminUserId, groupId)) {
    return { success: false, message: 'Not authorized to approve invites' }
  }
  
  // Add user to group
  if (!groupInvitations[requestUserId]) {
    groupInvitations[requestUserId] = {}
  }
  groupInvitations[requestUserId][groupId] = true
  
  // Remove from pending requests
  const group = groupAdmins[groupId]
  if (group) {
    group.pendingRequests = group.pendingRequests.filter(
      req => req.userId !== requestUserId
    )
  }
  
  return { success: true, message: 'User approved!' }
}

export const denyGroupInvite = (adminUserId, groupId, requestUserId) => {
  if (!isGroupAdmin(adminUserId, groupId)) {
    return { success: false, message: 'Not authorized' }
  }
  
  const group = groupAdmins[groupId]
  if (group) {
    group.pendingRequests = group.pendingRequests.filter(
      req => req.userId !== requestUserId
    )
  }
  
  return { success: true, message: 'Request denied' }
}

export const isUserInvitedToGroup = (userId, groupId) => {
  return groupInvitations[userId]?.[groupId] || false
}

export const requestGroupInvite = (userId, groupId, roomId) => {
  // Check if already has a pending request
  const group = groupAdmins[groupId]
  if (group?.pendingRequests.some(req => req.userId === userId)) {
    return { success: false, message: 'You already have a pending request' }
  }
  
  // Add to pending requests
  if (group) {
    const displayName = Object.values(userReputation).reduce((found, room) => {
      return found || room[userId]?.displayName
    }, null) || 'Unknown User'
    
    group.pendingRequests.push({
      userId,
      requestedAt: Date.now(),
      displayName
    })
  }
  
  return { success: true, message: 'Request sent! Group admin will review.' }
}

// ========================================
// USER PROFILE FUNCTIONS
// ========================================

export const getUserProfile = (userId) => {
  return userProfiles[userId] || null
}

export const updateUserProfile = (userId, updates) => {
  if (!userProfiles[userId]) {
    userProfiles[userId] = {
      userId,
      isAnonymous: true,
      displayName: `Neighbor${Math.floor(Math.random() * 1000)}`,
      fullName: '',
      photo: null,
      bio: '',
      totalKudos: 0,
      badges: [],
      activeRooms: [],
      privacy: {
        showRealName: false,
        showActiveRooms: true,
        acceptBondRequests: 'with-kudos'
      },
      joinedAt: Date.now()
    }
  }
  
  userProfiles[userId] = {
    ...userProfiles[userId],
    ...updates
  }
  
  return { success: true, profile: userProfiles[userId] }
}

export const getUserBadges = (userId) => {
  const profile = userProfiles[userId]
  if (!profile) return []
  
  return profile.badges.map(badgeId => badgeDefinitions[badgeId]).filter(Boolean)
}

export const getAllUsers = () => {
  return Object.values(userProfiles)
}

// ========================================
// NEIGHBOR BONDS FUNCTIONS
// ========================================

export const getNeighborBonds = (userId) => {
  return neighborBonds[userId]?.bonds || []
}

export const isNeighborBond = (userId1, userId2) => {
  const bonds = neighborBonds[userId1]?.bonds || []
  return bonds.some(bond => bond.userId === userId2)
}

export const sendBondRequest = (fromUserId, toUserId, message, context) => {
  // Check if already bonded
  if (isNeighborBond(fromUserId, toUserId)) {
    return { success: false, message: 'You are already neighbor bonds!' }
  }
  
  // Check if request already exists
  const existingRequest = neighborBonds[toUserId]?.pendingRequests?.find(
    req => req.from === fromUserId
  )
  if (existingRequest) {
    return { success: false, message: 'You already sent a bond request to this neighbor' }
  }
  
  // Initialize if needed
  if (!neighborBonds[toUserId]) {
    neighborBonds[toUserId] = { bonds: [], pendingRequests: [], sentRequests: [] }
  }
  if (!neighborBonds[fromUserId]) {
    neighborBonds[fromUserId] = { bonds: [], pendingRequests: [], sentRequests: [] }
  }
  
  const requestId = `req-${Date.now()}`
  
  // Add to recipient's pending
  neighborBonds[toUserId].pendingRequests.push({
    requestId,
    from: fromUserId,
    message,
    context,
    sentAt: Date.now()
  })
  
  // Add to sender's sent
  neighborBonds[fromUserId].sentRequests.push({
    requestId,
    to: toUserId,
    message,
    context,
    sentAt: Date.now(),
    status: 'pending'
  })
  
  return { success: true, message: 'Bond request sent! 🤝' }
}

export const acceptBondRequest = (userId, requestId) => {
  const request = neighborBonds[userId]?.pendingRequests?.find(req => req.requestId === requestId)
  
  if (!request) {
    return { success: false, message: 'Request not found' }
  }
  
  const fromUserId = request.from
  const bondId = `bond-${Date.now()}`
  
  // Create bond for both users
  const newBond = {
    bondId,
    bondedAt: Date.now(),
    mutualKudos: 0,
    sharedRooms: [],
    lastInteraction: Date.now(),
    status: 'active'
  }
  
  // Add bond to current user
  if (!neighborBonds[userId].bonds) neighborBonds[userId].bonds = []
  neighborBonds[userId].bonds.push({ ...newBond, userId: fromUserId })
  
  // Add bond to requester
  if (!neighborBonds[fromUserId].bonds) neighborBonds[fromUserId].bonds = []
  neighborBonds[fromUserId].bonds.push({ ...newBond, userId })
  
  // Remove from pending
  neighborBonds[userId].pendingRequests = neighborBonds[userId].pendingRequests.filter(
    req => req.requestId !== requestId
  )
  
  // Update sender's sent requests
  const sentRequest = neighborBonds[fromUserId]?.sentRequests?.find(req => req.requestId === requestId)
  if (sentRequest) {
    sentRequest.status = 'accepted'
  }
  
  // Award "First Bond" badge if it's their first
  if (neighborBonds[userId].bonds.length === 1 && userProfiles[userId]) {
    if (!userProfiles[userId].badges.includes('first-bond')) {
      userProfiles[userId].badges.push('first-bond')
    }
  }
  if (neighborBonds[fromUserId].bonds.length === 1 && userProfiles[fromUserId]) {
    if (!userProfiles[fromUserId].badges.includes('first-bond')) {
      userProfiles[fromUserId].badges.push('first-bond')
    }
  }
  
  return { success: true, message: 'You are now neighbor bonds! 🎉' }
}

export const declineBondRequest = (userId, requestId) => {
  const request = neighborBonds[userId]?.pendingRequests?.find(req => req.requestId === requestId)
  
  if (!request) {
    return { success: false, message: 'Request not found' }
  }
  
  // Remove from pending
  neighborBonds[userId].pendingRequests = neighborBonds[userId].pendingRequests.filter(
    req => req.requestId !== requestId
  )
  
  // Update sender's sent requests
  const fromUserId = request.from
  const sentRequest = neighborBonds[fromUserId]?.sentRequests?.find(req => req.requestId === requestId)
  if (sentRequest) {
    sentRequest.status = 'declined'
  }
  
  return { success: true, message: 'Bond request declined' }
}

export const getPendingBondRequests = (userId) => {
  return neighborBonds[userId]?.pendingRequests || []
}

export const getBondCount = (userId) => {
  return neighborBonds[userId]?.bonds?.length || 0
}

// ========================================
// EVENTS FUNCTIONS
// ========================================

export const getAllEvents = () => {
  return Object.values(events).sort((a, b) => a.datetime - b.datetime)
}

export const getEventsByRoom = (roomId) => {
  return Object.values(events)
    .filter(event => event.roomId === roomId)
    .sort((a, b) => a.datetime - b.datetime)
}

export const getUpcomingEvents = (roomId = null) => {
  const now = Date.now()
  let eventList = Object.values(events)
  
  if (roomId) {
    eventList = eventList.filter(event => event.roomId === roomId)
  }
  
  return eventList
    .filter(event => event.datetime > now)
    .sort((a, b) => a.datetime - b.datetime)
}

export const getEvent = (eventId) => {
  return events[eventId] || null
}

export const createEvent = (eventData) => {
  const eventId = `event-${Date.now()}`
  
  events[eventId] = {
    eventId,
    ...eventData,
    rsvps: [],
    attendees: [],
    createdAt: Date.now()
  }
  
  // Award "Event Host" badge
  if (userProfiles[eventData.createdBy] && !userProfiles[eventData.createdBy].badges.includes('event-host')) {
    userProfiles[eventData.createdBy].badges.push('event-host')
  }
  
  return { success: true, event: events[eventId] }
}

export const rsvpToEvent = (eventId, userId, displayName, status) => {
  const event = events[eventId]
  
  if (!event) {
    return { success: false, message: 'Event not found' }
  }
  
  // Remove existing RSVP if any
  event.rsvps = event.rsvps.filter(rsvp => rsvp.userId !== userId)
  
  // Add new RSVP if not "pass"
  if (status !== 'pass') {
    event.rsvps.push({
      userId,
      displayName,
      status,
      rsvpedAt: Date.now()
    })
  }
  
  return { success: true, message: `RSVP updated to: ${status}` }
}

export const checkInToEvent = (eventId, userId) => {
  const event = events[eventId]
  
  if (!event) {
    return { success: false, message: 'Event not found' }
  }
  
  if (!event.attendees.includes(userId)) {
    event.attendees.push(userId)
  }
  
  // Award "Event Goer" badge after 3 events
  const userEvents = Object.values(events).filter(e => e.attendees.includes(userId))
  if (userEvents.length >= 3 && userProfiles[userId] && !userProfiles[userId].badges.includes('event-goer')) {
    userProfiles[userId].badges.push('event-goer')
  }
  
  return { success: true, message: 'Checked in! 🎉' }
}

export const getEventRSVPs = (eventId) => {
  const event = events[eventId]
  return event?.rsvps || []
}

export const getUserEvents = (userId) => {
  return Object.values(events).filter(event =>
    event.createdBy === userId ||
    event.rsvps.some(rsvp => rsvp.userId === userId) ||
    event.attendees.includes(userId)
  )
}

// ========================================
// DISCOVERY FUNCTIONS
// ========================================

export const getActiveNeighborsInRoom = (roomId, limit = 10) => {
  // Get users active in this room based on reputation
  const roomRep = userReputation[roomId] || {}
  
  return Object.entries(roomRep)
    .map(([userId, data]) => ({
      userId,
      displayName: data.displayName,
      kudos: data.kudos,
      profile: userProfiles[userId]
    }))
    .sort((a, b) => b.kudos - a.kudos)
    .slice(0, limit)
}

export const suggestNeighborsToConnect = (userId, roomId) => {
  // Suggest users in the same room who you've given kudos to multiple times
  const givenKudos = kudosGiven[userId] || {}
  const roomUsers = getActiveNeighborsInRoom(roomId, 20)
  
  return roomUsers
    .filter(user => 
      user.userId !== userId && 
      givenKudos[user.userId] && 
      !isNeighborBond(userId, user.userId)
    )
    .slice(0, 5)
}

export const getChatMessages = (roomId) => {
  return generateMockMessages(roomId)
}

// Track daily photo uploads per user
const dailyPhotoUploads = {}

export const sendMessage = (roomId, userId, displayName, message, group = null, replyTo = null, photo = null) => {
  const newMessage = {
    id: Date.now().toString(),
    userId,
    displayName,
    message,
    timestamp: Date.now(),
    likes: 0,
    group,
    replyTo,
    photo
  }
  
  // Track photo upload if present
  if (photo) {
    const today = new Date().toDateString()
    const key = `${userId}-${today}`
    if (!dailyPhotoUploads[key]) {
      dailyPhotoUploads[key] = 0
    }
    dailyPhotoUploads[key] += 1
  }
  
  // In a real app, this would persist to a database
  return newMessage
}

export const likeMessage = (messageId) => {
  // In a real app, this would update in database
  return true
}

// Photo upload eligibility and tracking
export const canUploadPhoto = (userId, roomId) => {
  const kudos = getUserKudos(userId, roomId)
  return kudos >= 10
}

export const getUserDailyPhotoCount = (userId) => {
  const today = new Date().toDateString()
  const key = `${userId}-${today}`
  return dailyPhotoUploads[key] || 0
}

export const canUploadMorePhotos = (userId) => {
  return getUserDailyPhotoCount(userId) < 3
}

export const getPhotoUploadStatus = (userId, roomId) => {
  const kudos = getUserKudos(userId, roomId)
  const hasPermission = kudos >= 10
  const dailyCount = getUserDailyPhotoCount(userId)
  const canUploadMore = dailyCount < 3
  
  return {
    hasPermission,
    kudosNeeded: Math.max(0, 10 - kudos),
    dailyCount,
    dailyLimit: 3,
    canUploadMore,
    canUpload: hasPermission && canUploadMore
  }
}

export const blockUser = (currentUserId, blockedUserId) => {
  if (!userBlocks[currentUserId]) {
    userBlocks[currentUserId] = []
  }
  if (!userBlocks[currentUserId].includes(blockedUserId)) {
    userBlocks[currentUserId].push(blockedUserId)
  }
  return true
}

export const isUserBlocked = (currentUserId, otherUserId) => {
  return userBlocks[currentUserId]?.includes(otherUserId) || false
}

export const reportMessage = (messageId, reportedBy, reason) => {
  reportedMessages.push({
    messageId,
    reportedBy,
    reason,
    timestamp: Date.now()
  })
  return true
}

export const getUnreadCount = (roomId) => {
  // Mock unread counts
  const unreadCounts = {
    'new-neighbors': 2,
    'families': 0,
    'singles': 1,
    'game-night': 5,
    'arts-crafts': 0,
    'lgbtq': 3,
    'pets': 1,
    'book-club': 2,
    'artists-music': 4,
    'foodies': 3
  }
  return unreadCounts[roomId] || 0
}

