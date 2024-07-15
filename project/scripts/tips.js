const tips = [
    {
        "question": "How should I hold the club?",
        "abbreviation": "Grip it?",
        "answer": ["Secure but not tight. Imagine holding a bird gently."]
    },
    {
        "question": "Where should I start practicing?",
        "abbreviation": "Start short?",
        "answer": ["Master the pitching wedge from short distances (30-50 yards) for confidence."]
    },
    {
        "question": "How should I stand?",
        "abbreviation": "Align myself?",
        "answer": ["Imagine toes and shoulders along your target line for a straight shot."]
    },
    {
        "question": "Should I look up after impact?",
        "abbreviation": "Keep head down?",
        "answer": ["Maintain head position through impact for better swing control."]
    },
    {
        "question": "How fast should I swing?",
        "abbreviation": "Swing tempo?",
        "answer": ["Smooth, controlled swing with good rhythm is more consistent than power."]
    },
    {
        "question": "Should I tense up during the swing?",
        "abbreviation": "Relax shoulders?",
        "answer": ["Tense muscles lead to erratic swings. Maintain loose shoulders for fluidity."]
    },
    {
        "question": "Is breathing important in golf?",
        "abbreviation": "Breathing?",
        "answer": ["Controlled breathing helps maintain balance and rhythm throughout the swing."]
    },
    {
        "question": "How should I stand?",
        "abbreviation": "How should I stand?",
        "answer": ["Maintain good posture with knees slightly bent, back straight, and core engaged."]
    },
    {
        "question": "Are there any golf course rules?",
        "abbreviation": "Golf etiquette?",
        "answer": ["Learn basic etiquette like repairing divots and letting faster players play through."]
    },
    {
        "question": "What should I wear while golfing?",
        "abbreviation": "What to where?",
        "answer": ["Loose-fitting clothes allow for a full range of motion during the swing."]
    },
    {
        "question": "What are divots?",
        "abbreviation": "Divot?",
        "answer": ["Small patches of turf taken up by the club during impact. Repair them properly."]
    },
    {
        "question": "How should I behave on the course?",
        "abbreviation": "Course behavior?",
        "answer": ["Be mindful of pace, avoid damaging the course, replace divots."]
    },
    {
        "question": "What clubs should I use?",
        "abbreviation": "What clubs should I use?",
        "answer": ["Get fitted for clubs with the right length and lie angle for your height and swing."]
    },
    {
        "question": "Should I mark my golf balls?",
        "abbreviation": "Which ball is mine?",
        "answer": ["Marking your balls helps identify them if lost and avoids confusion during play."]
    },
    {
        "question": "What's course management?",
        "abbreviation": "What's the right club?",
        "answer": ["Planning your shots to avoid hazards and score lower."]
    },
    {
        "question": "How can I relax and have fun?",
        "abbreviation": "How can I relax?",
        "answer": ["Focus on the challenge and the outdoors. Don't get discouraged by bad shots."]
    },
    {
        "question": "Should I take golf lessons?",
        "abbreviation": "Take lessons",
        "answer": ["Lessons from a qualified instructor can help develop proper technique and improve your game."]
    },
    {
        "question": "How often should I practice?",
        "abbreviation": "Practice golfing?",
        "answer": ["Regular practice, even if for short periods, helps build muscle memory and improve your swing."]
    },
    {
        "question": "How can I learn from the best?",
        "abbreviation": "Who should I watch?",
        "answer": ["Observe how professional golfers handle situations and emulate their techniques."]
    },
    {
        "question": "What are hazards?",
        "abbreviation": "Hazards?",
        "answer": ["Hazards are areas on the course that can be difficult to play from, like sand traps or water."]
    },
    {
        "question": "What do tee box colors mean?",
        "abbreviation": "Tee box colors?",
        "answer": ["Tee box colors indicate difficulty levels. Red tees are typically the easiest, then white, then blue."]
    },
    {
        "question": "Why do people yell 'Fore'?",
        "abbreviation": "Yelling Fore?",
        "answer": ["Golfers yell 'Fore!' to warn others of a ball hit in their direction to avoid injury."]
    },
    {
        "question": "How do I score in golf?",
        "abbreviation": "Do we keep score?",
        "answer": ["The goal is to complete each hole in the fewest strokes possible. Lower scores win."]
    },
    {
        "question": "What's a par?",
        "abbreviation": "What's par?",
        "answer": ["Par is the expected number of strokes it should take to complete a hole for a skilled golfer."]
    },
    {
        "question": "What are birdies and eagles?",
        "abbreviation": "Birdies & Eagles?",
        "answer": ["Scoring one or two strokes under par on a hole is a birdie or eagle, respectively."]
    },
    {
        "question": "What's a bogey or double bogey?",
        "abbreviation": "Bogies & Dubs?",
        "answer": ["Scoring one or two strokes over par on a hole is a bogey or double bogey, respectively."]
    },
    {
        "question": "How many strokes do I get per hole?",
        "abbreviation": "How many times can I hit?",
        "answer": ["There's no strict limit, but some courses have a maximum score per hole. Focus on finishing and enjoy!"]
    },
    {
        "question": "Can I putt with any club?",
        "abbreviation": "What's a putter?",
        "answer": ["The putter is specifically designed for putting on the green. It has a flat face for rolling the ball."]
    },
    {
        "question": "What's the difference between a chip and a pitch shot?",
        "abbreviation": "Chip vs Pitch?",
        "answer": ["Chip shots are short, low-trajectory shots around the green, while pitch shots go higher and further."]
    },
    {
        "question": "How do I fix a divot?",
        "abbreviation": "Fixing divots",
        "answer": ["Push the dislodged turf back into the hole and gently step on it to help it reattach."]
    },
    {
        "question": "What's a sand trap?",
        "abbreviation": "Sand traps?",
        "answer": ["A sand trap is a hazard filled with sand. It requires a different swing technique to hit the ball cleanly."]
    },
    {
        "question": "Should I rake the sand after my shot?",
        "abbreviation": "Sand trap etiquette?",
        "answer": ["Yes! After hitting out of the sand trap, smooth out the area with the rake for the next player."]
    },
    {
        "question": "What's a penalty stroke?",
        "abbreviation": "Penalty strokes?",
        "answer": ["Penalty strokes are added to your score for breaking a rule, like hitting the ball twice or having an unmarked ball."]
    },
    {
        "question": "How do I keep track of my score?",
        "abbreviation": "What's a scorecard?",
        "answer": ["A scorecard keeps track of your strokes on each hole. There's usually one per player in a group."]
    },
    {
        "question": "What's a golf cart?",
        "abbreviation": "Golf carts are free?",
        "answer": ["Golf carts are motorized vehicles you can rent to ride around the course between shots."]
    },
    {
        "question": "Do I have to use a golf cart?",
        "abbreviation": "Walk the course?",
        "answer": ["Using a cart is optional. Walking is good exercise, but carts can save time on a long course."]
    },
    {
        "question": "How long does a round of golf typically take?",
        "abbreviation": "How many holes?",
        "answer": ["A round of golf can take 4-5 hours for 18 holes. Half that for 9 holes. Be mindful of pace of play and keep things moving."]
    },
    {
        "question": "What's shoes should I wear?",
        "abbreviation": "What's shoes should I wear?",
        "answer": ["Golf shoes provide traction to prevent slipping during your swing. Spikes may not be allowed on all courses."]
    },
    {
        "question":  "Can I bring my phone?",
        "abbreviation": "Can I take a phone call?",
        "answer": ["Yes, but silence it during play. Some courses may have restrictions on phone use near greens."]
    },
    {
        "question": "What if I lose a ball?",
        "abbreviation": "What if I lose a ball?",
        "answer": ["There's a penalty for losing a ball. You can replay the shot from the tee or take a drop near where it was lost with a one-stroke penalty."]
    },
    {
        "question": "When should I arrive at the course?",
        "abbreviation": "Arrival time?",
        "answer": ["Arrive early to warm up and avoid holding up others. Check in at the pro shop."]
    },
    {
        "question": "How should I greet other players?",
        "abbreviation": "Other players?",
        "answer": ["A friendly hello or nod is always appreciated. Introduce yourself if playing with strangers."]
    },
    {
        "question": "What should I do while others are hitting?",
        "abbreviation": "Patience?",
        "answer": ["Stay silent and still. Avoid distractions while others are concentrating on their shots."]
    },
    {
        "question": "What if my ball lands near another player's ball?",
        "abbreviation": "Is that your ball?",
        "answer": ["Identify your ball clearly. If balls are close, the player farther away hits first."]
    },
    {
        "question": "Should I offer help to retrieve balls?",
        "abbreviation": "Can I look for balls?",
        "answer": ["Offer to help find balls in reachable areas, but don't delay the game with extensive searches."]
    },
    {
        "question": "When is it okay to walk in someone's putting line?",
        "abbreviation": "What's a putting line?",
        "answer": ["Depending on the slope of the green, the line is the area of the green between the ball and the hole. Never walk in someone's putting line. Wait until they've finished putting."]
    },
    {
        "question": "How should I fix my ball mark on the green?",
        "abbreviation": "What's a ball mark?",
        "answer": ["Use a divot repair tool to gently lift the edges of the mark and smooth it back into place."]
    },
    {
        "question": "What's proper flag etiquette?",
        "abbreviation": "Flag tending?",
        "answer": ["Ask before tending the flag if playing with strangers. Tend the flag carefully to avoid disturbing the putt."]
    },
    {
        "question": "Should I rake bunkers after my shot?",
        "abbreviation": "What's a bunker?",
        "answer": ["A bunker is a sand pit or a 'hazard' made up of sand. Always rake the bunker after your shot, smoothing the sand for the next player."]
    },
    {
        "question": "What if I hit a ball out of bounds?",
        "abbreviation": "Out of bounds?",
        "answer": ["Inform your group and follow the course rules for out-of-bounds penalties."]
    },
    {
        "question": "How should I handle a slow group in front of me?",
        "abbreviation": "Slow golfers?",
        "answer": ["Maintain patience. If the delay is significant, politely ask the marshall for assistance."]
    },
    {
        "question": "What if I need to leave the course early?",
        "abbreviation": "Can I leave early?",
        "answer": ["Inform your group as soon as possible and apologize for any inconvenience."]
    },
    {
        "question": "Is it okay to celebrate loudly after a good shot?",
        "abbreviation": "Celebrate good times?",
        "answer": ["A courteous clap or fist pump is okay. Avoid excessive celebrations that might distract others."]
    },
    {
        "question": "How should I address course marshals?",
        "abbreviation": "Marshals?",
        "answer": ["Be respectful and address marshals as 'Sir' or 'Madam'. They are there to ensure smooth play."]
    },
    {
        "question": "What if I break a rule unintentionally?",
        "abbreviation": "Cheating?",
        "answer": ["Inform your group and take the appropriate penalty stroke. Honesty is key."]
    },
    {
        "question": "How can I be a good golf course citizen?",
        "abbreviation": "Showing respect?",
        "answer": ["Respect the course by following the rules, repairing divots, and being mindful of the environment."]
    },
    {
        "question": "What if I forget something essential?",
        "abbreviation": "Forgetful?",
        "answer": ["Most courses have pro shops that sell basic golfing essentials. Ask politely if they can help."]
    },
    {
        "question": "How can I have fun and still follow proper etiquette?",
        "abbreviation": "Fun and having etiquette?",
        "answer": ["Maintain a positive attitude, enjoy the challenge, and be considerate of others. A good sense of humor and following the rules go a long way in creating a fun and enjoyable golfing experience for everyone."]
    }
];
