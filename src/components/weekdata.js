// workoutData.js

export const workoutPlans = {
    Monday: {
      title: "Legs & Shoulders",
      color: "#FF5757", // Red
      duration: "60 min",
      description: "This Monday workout focuses on building lower body strength and developing shoulder definition. Complete all exercises with proper form for maximum benefits.",
      exercises: [
        {
          name: "Dynamic Warm-up",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Light jog/jumping jacks (1 min), arm circles (30 sec), hip rotations (30 sec), bodyweight squats (1 min), lunges (1 min), shoulder rotations (1 min).",
          muscle: "Full Body",
          equipment: "None",
          videoId: "HDfvWrGUkC8" // Dynamic Warm-up video
        },
        {
          name: "Barbell Squats",
          sets: 4,
          reps: "10-12",
          duration: "45 sec",
          rest: "90 sec",
          description: "Stand with feet shoulder-width apart, barbell across upper back. Lower until thighs are parallel to floor, then return to standing position.",
          muscle: "Quads, Glutes, Hamstrings",
          equipment: "Barbell, Squat Rack",
          videoId: "SW_C1A-rejs" // Barbell Squat form video
        },
        {
          name: "Leg Extensions",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Sit on leg extension machine, extend legs until straight, then slowly lower back to starting position.",
          muscle: "Quadriceps",
          equipment: "Leg Extension Machine",
          videoId: "YyvSfVjQeL0" // Leg Extensions video
        },
        {
          name: "Hamstring Curls",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Lie face down on hamstring curl machine, curl legs toward buttocks, then lower with control.",
          muscle: "Hamstrings",
          equipment: "Hamstring Curl Machine",
          videoId: "1Tq3QdYUuHs" // Hamstring Curls video
        },
        {
          name: "Calf Raises",
          sets: 4,
          reps: "15-20",
          duration: "30 sec",
          rest: "45 sec",
          description: "Stand on edge of platform with balls of feet, heels hanging off. Rise up on toes as high as possible, then lower heels below platform level.",
          muscle: "Calves",
          equipment: "Calf Raise Machine or Platform",
          videoId: "HSGjUouQZCQ" // Calf Raises video
        },
        {
          name: "Side Lateral Raises",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand holding dumbbells at sides, raise arms out to sides until parallel with floor, then lower slowly.",
          muscle: "Lateral Deltoids",
          equipment: "Dumbbells",
          videoId: "3VcKaXpzqRo" // Side Lateral Raises video
        },
        {
          name: "Rear Delt Flyes",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Bend at waist with back flat, raise dumbbells out to sides with slight elbow bend, focusing on rear shoulders.",
          muscle: "Rear Deltoids",
          equipment: "Dumbbells or Cable Machine",
          videoId: "EA7u4Q_8HQ0" // Rear Delt Flyes video
        },
        {
          name: "Cool Down Stretching",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Quad stretch (30 sec each leg), hamstring stretch (30 sec each leg), calf stretch (30 sec each leg), shoulder and chest stretch (1 min), neck stretches (1 min).",
          muscle: "Full Body",
          equipment: "None",
          videoId: "Qy3U09CnELI" // Cool Down Stretching video
        }
      ]
    },

    Tuesday: {
      title: "Back, Biceps & Forearms",
      color: "#FF9F57", // Orange
      duration: "55 min",
      description: "This Tuesday workout targets your back and arm muscles for improved pulling strength and arm development. Focus on squeezing target muscles at peak contraction.",
      exercises: [
        {
          name: "Dynamic Warm-up",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Light cardio (1 min), arm circles (30 sec), torso twists (30 sec), cat-cow stretches (1 min), band pull-aparts (1 min), wrist rotations (1 min).",
          muscle: "Full Body, Focus on Back",
          equipment: "Resistance Band (optional)",
          videoId: "HDfvWrGUkC8" // Dynamic Warm-up video
        },
        {
          name: "Lat Pulldowns",
          sets: 4,
          reps: "10-12",
          duration: "45 sec",
          rest: "90 sec",
          description: "Sit at machine, grip bar wider than shoulders, pull down to upper chest while keeping chest up and back slightly arched.",
          muscle: "Latissimus Dorsi, Biceps",
          equipment: "Lat Pulldown Machine",
          videoId: "CAwf7n6Luuc" // Lat Pulldowns video
        },
        {
          name: "Seated Cable Rows",
          sets: 3,
          reps: "10-12",
          duration: "45 sec",
          rest: "75 sec",
          description: "Sit at rowing machine with knees slightly bent, pull handle to lower ribs while keeping back straight, then return to start with arms extended.",
          muscle: "Middle Back, Rhomboids",
          equipment: "Cable Row Machine",
          videoId: "GZbfZ033f74" // Seated Cable Rows video
        },
        {
          name: "Close-Grip Pulldowns",
          sets: 3,
          reps: "12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Use V-handle attachment on lat pulldown, pull down to chest with elbows close to body, focusing on lower lats.",
          muscle: "Lower Lats, Biceps",
          equipment: "Lat Pulldown Machine, V-Handle",
          videoId: "apzFTbsm7HU" // Close-Grip Pulldowns video
        },
        {
          name: "T-Bar Rows",
          sets: 3,
          reps: "10-12",
          duration: "45 sec",
          rest: "75 sec",
          description: "Position chest on pad with feet stable, pull weight up by driving elbows back, squeezing shoulder blades together at top.",
          muscle: "Middle Back, Lats",
          equipment: "T-Bar Row Machine",
          videoId: "j3Igk5nyZE4" // T-Bar Rows video
        },
        {
          name: "Dumbbell Curls",
          sets: 3,
          reps: "12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand with dumbbells at sides, palms forward, curl weights to shoulders while keeping upper arms stationary.",
          muscle: "Biceps",
          equipment: "Dumbbells",
          videoId: "ykJmrZ5v0Oo" // Dumbbell Curls video
        },
        {
          name: "Hammer Curls",
          sets: 3,
          reps: "12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand with dumbbells at sides, palms facing in, curl weights to shoulders while keeping elbows close to body.",
          muscle: "Biceps, Brachialis, Forearms",
          equipment: "Dumbbells",
          videoId: "zC3nLlEvin4" // Hammer Curls video
        },
        {
          name: "Preacher Curls",
          sets: 3,
          reps: "10-12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Sit at preacher bench, extend arms fully on pad, curl weight up, squeezing biceps at top, then lower with control.",
          muscle: "Biceps (Short Head)",
          equipment: "Preacher Curl Bench, EZ Bar or Dumbbells",
          videoId: "fIWP-FRFNU0" // Preacher Curls video
        },
        {
          name: "Cool Down Stretching",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Lat stretches (30 sec each side), bicep stretches (30 sec each arm), forearm stretches (30 sec each arm), upper back stretch (1 min), shoulder stretches (1 min).",
          muscle: "Back, Arms",
          equipment: "None",
          videoId: "Qy3U09CnELI" // Cool Down Stretching video
        }
      ]
    },

    Wednesday: {
      title: "Chest, Triceps & Forearms",
      color: "#FFDE59", // Yellow
      duration: "60 min",
      description: "This Wednesday workout focuses on developing your chest and triceps with compound and isolation movements. Forearm exercises are added to improve grip strength and arm development.",
      exercises: [
        {
          name: "Dynamic Warm-up",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Arm circles (1 min), push-ups (1 min), chest expansions (1 min), triceps stretches (1 min), wrist rotations (1 min).",
          muscle: "Chest, Shoulders, Triceps",
          equipment: "None",
          videoId: "HDfvWrGUkC8" // Dynamic Warm-up video
        },
        {
          name: "Incline Dumbbell Press",
          sets: 4,
          reps: "10-12",
          duration: "45 sec",
          rest: "90 sec",
          description: "Lie on incline bench with dumbbells at shoulder level, press weights up until arms are extended, then lower with control.",
          muscle: "Upper Chest, Triceps, Front Delts",
          equipment: "Dumbbells, Incline Bench",
          videoId: "8iPEnn-ltC8" // Incline Dumbbell Press video
        },
        {
          name: "Flat Dumbbell Press",
          sets: 3,
          reps: "10-12",
          duration: "45 sec",
          rest: "75 sec",
          description: "Lie on flat bench with dumbbells at chest level, press weights up until arms are extended, then lower with control.",
          muscle: "Middle Chest, Triceps",
          equipment: "Dumbbells, Flat Bench",
          videoId: "VmB1G1K7v94" // Flat Dumbbell Press video
        },
        {
          name: "Pec Deck Flyes",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Sit on pec deck machine with forearms on pads, press arms together in front of chest, squeezing pecs at peak contraction.",
          muscle: "Chest",
          equipment: "Pec Deck Machine",
          videoId: "Z57CtFmRMxA" // Pec Deck Flyes video
        },
        {
          name: "Dumbbell Pullovers",
          sets: 3,
          reps: "12",
          duration: "45 sec",
          rest: "60 sec",
          description: "Lie perpendicular on bench with shoulders supported, hold dumbbell with both hands above chest, lower behind head in arc motion, then return.",
          muscle: "Chest, Lats, Serratus",
          equipment: "Dumbbell, Bench",
          videoId: "FK4rHfWKEac" // Dumbbell Pullovers video
        },
        {
          name: "Straight Bar Pushdowns",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand at cable machine with straight bar at chest height, push bar down by extending elbows until arms are straight, then control return.",
          muscle: "Triceps",
          equipment: "Cable Machine, Straight Bar",
          videoId: "2-LAMcpzODU" // Straight Bar Pushdowns video
        },
        {
          name: "Overhead Triceps Extension",
          sets: 3,
          reps: "12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand or sit holding dumbbell/EZ bar overhead, lower weight behind head by bending elbows, then extend arms back up.",
          muscle: "Triceps (Long Head)",
          equipment: "Dumbbell or EZ Bar",
          videoId: "YbX7Wd8jQ-Q" // Overhead Triceps Extension video
        },
        {
          name: "Rope Pushdowns",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand at cable machine with rope attachment at chest height, push rope down and outward at bottom, focusing on peak contraction.",
          muscle: "Triceps (Outer Head)",
          equipment: "Cable Machine, Rope Attachment",
          videoId: "vB5OHsJ3EME" // Rope Pushdowns video
        },
        {
          name: "Wrist Curls",
          sets: 3,
          reps: "15-20",
          duration: "30 sec",
          rest: "45 sec",
          description: "Sit with forearms on knees and wrists extended beyond knees, palms up. Curl weight up by bending wrists, then lower with control.",
          muscle: "Forearm Flexors",
          equipment: "Barbell or Dumbbells",
          videoId: "3VLTzIrnb5g" // Wrist Curls video
        },
        {
          name: "Reverse Wrist Curls",
          sets: 3,
          reps: "15-20",
          duration: "30 sec",
          rest: "45 sec",
          description: "Sit with forearms on knees and wrists extended beyond knees, palms down. Curl weight up by bending wrists, then lower with control.",
          muscle: "Forearm Extensors",
          equipment: "Barbell or Dumbbells",
          videoId: "FW7URAaC-vE" // Reverse Wrist Curls video
        },
        {
          name: "Cool Down Stretching",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Chest stretches (1 min), triceps stretches (1 min), forearm stretches (1 min), shoulder stretches (1 min), neck stretches (1 min).",
          muscle: "Chest, Triceps, Forearms",
          equipment: "None",
          videoId: "Qy3U09CnELI"  // Cool Down Stretching video
        }
      ]
    },

    Thursday: {
      title: "Shoulders, Legs & Abs",
      color: "#4CAF50", // Green
      duration: "65 min",
      description: "This Thursday workout combines shoulder training with leg work and core exercises. This combination creates an effective upper/lower body session that targets multiple muscle groups.",
      exercises: [
        {
          name: "Dynamic Warm-up",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Jumping jacks (1 min), arm circles (30 sec), bodyweight squats (1 min), hip rotations (30 sec), torso twists (1 min), shoulder rotations (1 min).",
          muscle: "Full Body",
          equipment: "None",
          videoId: "HDfvWrGUkC8" // Dynamic Warm-up video
        },
        {
          name: "Dumbbell Shoulder Press",
          sets: 4,
          reps: "10-12",
          duration: "45 sec",
          rest: "90 sec",
          description: "Sit or stand with dumbbells at shoulder height, press weights overhead until arms are extended, then lower with control.",
          muscle: "Shoulders, Upper Traps, Triceps",
          equipment: "Dumbbells",
          videoId: "qEwKCR5JCog" // Dumbbell Shoulder Press video
        },
        {
          name: "Side Lateral Raises",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand holding dumbbells at sides, raise arms out to sides until parallel with floor, then lower slowly.",
          muscle: "Lateral Deltoids",
          equipment: "Dumbbells",
          videoId: "3VcKaXpzqRo" // Side Lateral Raises video
        },
        {
          name: "Face Pulls",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand at cable machine with rope attachment, pull rope toward face with hands wider than shoulders, elbows high and out.",
          muscle: "Rear Deltoids, Upper Back",
          equipment: "Cable Machine, Rope Attachment",
          videoId: "0Po47vvj9g4" // Face Pulls video
        },
        {
          name: "Dumbbell Shrugs",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand holding dumbbells at sides, elevate shoulders straight up toward ears, hold briefly at top, then lower with control.",
          muscle: "Trapezius",
          equipment: "Dumbbells",
          videoId: "xDt6qbKgLkY" // Dumbbell Shrugs video
        },
        {
          name: "Leg Extensions",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Sit on leg extension machine, extend legs until straight, then slowly lower back to starting position.",
          muscle: "Quadriceps",
          equipment: "Leg Extension Machine",
          videoId: "YyvSfVjQeL0" // Leg Extensions video
        },
        {
          name: "Leg Press",
          sets: 4,
          reps: "10-12",
          duration: "45 sec",
          rest: "75 sec",
          description: "Sit on leg press machine with feet shoulder-width apart, lower weight by bending knees, then press back up without locking knees.",
          muscle: "Quadriceps, Glutes, Hamstrings",
          equipment: "Leg Press Machine",
          videoId: "IZxyjW7MPJQ" // Leg Press video
        },
        {
          name: "Crunches",
          sets: 3,
          reps: "15-20",
          duration: "30 sec",
          rest: "45 sec",
          description: "Lie on back with knees bent, hands behind head, curl upper body toward knees by contracting abs, then lower with control.",
          muscle: "Rectus Abdominis (Upper)",
          equipment: "None or Mat",
          videoId: "Xyd_fa5zoEU" // Crunches video
        },
        {
          name: "Plank",
          sets: 3,
          reps: "30-60 sec hold",
          duration: "30-60 sec",
          rest: "45 sec",
          description: "Hold forearm plank position with body in straight line from head to heels, engaging core throughout the hold.",
          muscle: "Core, Shoulders",
          equipment: "None or Mat",
          videoId: "kL_NJAkCQBg&t=113s" // Plank video
        },
        {
          name: "Cool Down Stretching",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Shoulder stretches (1 min), quad stretches (1 min), hamstring stretches (1 min), hip flexor stretches (1 min), spine twist (1 min).",
          muscle: "Full Body",
          equipment: "None",
          videoId: "Qy3U09CnELI"  // Cool Down Stretching video
        }
      ]
    },

    Friday: {
      title: "Back, Biceps & Forearms",
      color: "#2196F3", // Blue
      duration: "60 min",
      description: "This Friday workout focuses on building a strong back and developing arm strength. The workout begins with compound movements and finishes with isolation exercises for complete development.",
      exercises: [
        {
          name: "Dynamic Warm-up",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Light cardio (1 min), arm circles (30 sec), torso twists (30 sec), cat-cow stretches (1 min), band pull-aparts (1 min), wrist rotations (1 min).",
          muscle: "Full Body, Focus on Back",
          equipment: "Resistance Band (optional)",
          videoId: "HDfvWrGUkC8" // Dynamic Warm-up video
        },
        {
          name: "Deadlifts",
          sets: 4,
          reps: "8-10",
          duration: "45 sec",
          rest: "120 sec",
          description: "Stand with feet hip-width apart, bend at hips and knees to grip barbell, drive through heels to stand up straight, then lower with control.",
          muscle: "Lower Back, Hamstrings, Glutes, Traps",
          equipment: "Barbell",
          videoId: "1ZXobu7JvvE" // Deadlifts video
        },
        {
          name: "Dumbbell Rows",
          sets: 3,
          reps: "10-12 each arm",
          duration: "45 sec",
          rest: "60 sec",
          description: "Place one knee and hand on bench, other foot on floor. Pull dumbbell from hanging position to hip by driving elbow back.",
          muscle: "Middle Back, Lats",
          equipment: "Dumbbell, Bench",
          videoId: "roCP6wCXPqo" // Dumbbell Rows video
        },
        {
          name: "Lat Pulldowns",
          sets: 3,
          reps: "10-12",
          duration: "45 sec",
          rest: "75 sec",
          description: "Sit at lat pulldown machine, grip bar wider than shoulders, pull down to upper chest while keeping chest up and back slightly arched.",
          muscle: "Latissimus Dorsi, Biceps",
          equipment: "Lat Pulldown Machine",
          videoId: "CAwf7n6Luuc" // Lat Pulldowns video
        },
        {
          name: "Barbell Curls",
          sets: 3,
          reps: "10-12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand with barbell at thighs, palms forward, curl bar to shoulders while keeping upper arms stationary, then lower with control.",
          muscle: "Biceps",
          equipment: "Barbell",
          videoId: "kwG2ipFRgfo" // Barbell Curls video
        },
        {
          name: "Concentration Curls",
          sets: 3,
          reps: "12 each arm",
          duration: "40 sec",
          rest: "45 sec",
          description: "Sit on bench, arm against inner thigh, curl dumbbell from extended position to shoulder, focusing on peak contraction.",
          muscle: "Biceps (Short Head)",
          equipment: "Dumbbell, Bench",
          videoId: "Jvj2wV0vOYU" // Concentration Curls video
        },
        {
          name: "Spider Curls",
          sets: 3,
          reps: "12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Lie chest-down on incline bench, arms hanging straight down with weights, curl up by bending elbows, keeping upper arms stationary.",
          muscle: "Biceps",
          equipment: "Dumbbells or EZ Bar, Incline Bench",
          videoId: "O_Bm_xvM580" // Spider Curls video
        },
        {
          name: "Plate Pinch Holds",
          sets: 3,
          reps: "30-45 sec hold",
          duration: "30-45 sec",
          rest: "45 sec",
          description: "Pinch weight plates between thumb and fingers, hold for time. Use smooth plates for greater challenge.",
          muscle: "Forearm Grip, Thumb Strength",
          equipment: "Weight Plates",
          videoId: "RX-3OVnPCMg" // Plate Pinch Holds video
        },
        {
          name: "Farmer's Walks",
          sets: 3,
          reps: "40-60 seconds",
          duration: "40-60 sec",
          rest: "60 sec",
          description: "Hold heavy dumbbells or kettlebells at sides, walk with controlled steps for designated time or distance.",
          muscle: "Forearms, Traps, Core",
          equipment: "Heavy Dumbbells or Kettlebells",
          videoId: "Fkzk_RqlYig" // Farmer's Walks video
        },
        {
          name: "Cool Down Stretching",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Lat stretches (1 min), bicep stretches (1 min), forearm stretches (1 min), lower back stretches (1 min), shoulder stretches (1 min).",
          muscle: "Back, Arms",
          equipment: "None",
          videoId: "Qy3U09CnELI"  // Cool Down Stretching video
        }
      ]
    },

    Saturday: {
      title: "Chest, Triceps & Abs",
      color: "#9C27B0", // Purple
      duration: "65 min",
      description: "This Saturday workout combines chest, triceps and abs for a comprehensive upper body pushing session. Different angles and movements ensure complete development of these muscle groups.",
      exercises: [
        {
          name: "Dynamic Warm-up",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Arm circles (1 min), push-ups (1 min), chest expansions (1 min), triceps stretches (1 min), torso rotations (1 min).",
          muscle: "Chest, Shoulders, Triceps",
          equipment: "None",
          videoId: "HDfvWrGUkC8" // Dynamic Warm-up video
        },
        {
          name: "Machine Chest Press",
          sets: 4,
          reps: "10-12",
          duration: "45 sec",
          rest: "90 sec",
          description: "Sit at chest press machine, grasp handles at chest level, press forward until arms are extended (not locked), then return with control.",
          muscle: "Chest, Triceps, Front Deltoids",
          equipment: "Chest Press Machine",
          videoId: "xUm0BiZCWlQ" // Machine Chest Press video
        },
        {
          name: "Cable Flyes",
          sets: 3,
          reps: "12-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Stand between cable stations with cables at upper position, bring handles together in front of chest in arcing motion, focusing on chest contraction.",
          muscle: "Chest, Front Deltoids",
          equipment: "Cable Machine",
          videoId: "Iwe6AmxVf7o" // Cable Flyes video
        },
        {
          name: "Decline Bench Press",
          sets: 3,
          reps: "10-12",
          duration: "45 sec",
          rest: "75 sec",
          description: "Lie on decline bench with bar at chest level, press weight up until arms are extended, then lower with control to chest.",
          muscle: "Lower Chest, Triceps",
          equipment: "Barbell, Decline Bench",
          videoId: "LfyQBUKR8SE" // Decline Bench Press video
        },
        {
          name: "Dips",
          sets: 3,
          reps: "8-12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Using parallel bars, lower body by bending elbows until upper arms are parallel to floor, then push back up to starting position.",
          muscle: "Chest, Triceps, Front Deltoids",
          equipment: "Parallel Bars or Dip Station",
          videoId: "wjUmnZH528Y" // Dips video
        },
        {
          name: "Dumbbell Overhead Extensions",
          sets: 3,
          reps: "10-12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Sit or stand holding dumbbell with both hands overhead, lower weight behind head by bending elbows, then extend arms back up.",
          muscle: "Triceps",
          equipment: "Dumbbell",
          videoId: "YbX7Wd8jQ-Q" // Dumbbell Overhead Extensions video
        },
        {
          name: "Skull Crushers",
          sets: 3,
          reps: "10-12",
          duration: "40 sec",
          rest: "60 sec",
          description: "Lie on bench holding EZ bar or dumbbells with arms extended over chest, bend elbows to lower weight toward forehead, then extend arms.",
          muscle: "Triceps",
          equipment: "EZ Bar or Dumbbells, Bench",
          muscle: "Triceps",
          equipment: "EZ Bar or Dumbbells, Bench",
          videoId: "d_KZxkY_0cM" // Skull Crushers video
        },
        {
          name: "Triceps Kickbacks",
          sets: 3,
          reps: "12 each arm",
          duration: "40 sec",
          rest: "45 sec",
          description: "Bend at waist with arm tucked at side, elbow bent 90 degrees. Extend arm straight back, squeezing triceps at full extension.",
          muscle: "Triceps (Lateral Head)",
          equipment: "Dumbbell",
          videoId: "ZO81bExngMI" // Triceps Kickbacks video
        },
        {
          name: "Hanging Leg Raises",
          sets: 3,
          reps: "10-15",
          duration: "40 sec",
          rest: "60 sec",
          description: "Hang from pull-up bar, raise legs by bending at hips and knees until thighs are parallel to ground, then lower with control.",
          muscle: "Lower Abs, Hip Flexors",
          equipment: "Pull-up Bar",
          videoId: "hdng3Nm1x_E" // Hanging Leg Raises video
        },
        {
          name: "Russian Twists",
          sets: 3,
          reps: "20 total (10 each side)",
          duration: "40 sec",
          rest: "45 sec",
          description: "Sit on floor with knees bent, feet elevated, torso leaned back. Twist torso side to side, touching weight to floor beside hips.",
          muscle: "Obliques, Core",
          equipment: "Dumbbell, Kettlebell, or Medicine Ball",
          videoId: "wkD8rjkodUI" // Russian Twists video
        },
        {
          name: "Cool Down Stretching",
          sets: 1,
          reps: "5 minutes",
          duration: "5 min",
          rest: "0 sec",
          description: "Chest stretches (1 min), triceps stretches (1 min), ab stretches (1 min), shoulder stretches (1 min), spine twists (1 min).",
          muscle: "Chest, Triceps, Abs",
          equipment: "None",
          videoId: "Qy3U09CnELI"  // Cool Down Stretching video
        }
      ]
    },

    Sunday: {
      title: "Active Recovery & Sports",
      color: "#E91E63", // Pink
      duration: "60-90 min",
      description: "This Sunday session focuses on active recovery through sports like cricket or badminton. These activities provide cardiovascular benefits, improve coordination, and allow your muscles to recover while staying active.",
      exercises: [
        {
          name: "Dynamic Warm-up",
          sets: 1,
          reps: "10 minutes",
          duration: "10 min",
          rest: "0 sec",
          description: "Light jogging (2 min), arm circles (1 min), leg swings (1 min), torso twists (1 min), jumping jacks (1 min), sport-specific movements (4 min).",
          muscle: "Full Body",
          equipment: "None",
          videoId: "HDfvWrGUkC8" // Dynamic Warm-up video
        },
        {
          name: "Sport Activity: Cricket or Badminton",
          sets: 1,
          reps: "45-60 minutes",
          duration: "45-60 min",
          rest: "As needed",
          description: "Enjoy a game of cricket or badminton, focusing on technique and having fun rather than maximum intensity. Take breaks as needed.",
          muscle: "Full Body",
          equipment: "Sport-Specific Equipment",
          videoId: "OfS0NYEm-u0" // Basic badminton tutorial video
        },
        {
          name: "Light Stretching",
          sets: 1,
          reps: "10 minutes",
          duration: "10 min",
          rest: "0 sec",
          description: "Full-body stretching routine focusing on any tight muscles from the week's workouts. Hold each stretch for 20-30 seconds.",
          muscle: "Full Body",
          equipment: "None",
          videoId: "H783u0zs2Qs" // Stretching video
        },
        {
          name: "Foam Rolling",
          sets: 1,
          reps: "10 minutes",
          duration: "10 min",
          rest: "0 sec",
          description: "Use foam roller on major muscle groups: quads, hamstrings, calves, back, and lats. Spend extra time on any particularly tight areas.",
          muscle: "Full Body",
          equipment: "Foam Roller",
          videoId: "Bq67iqGrKVg" // Foam Rolling tutorial video
        },
        {
          name: "Hydration and Recovery",
          sets: 1,
          reps: "Throughout Day",
          duration: "All Day",
          rest: "N/A",
          description: "Focus on adequate hydration and nutrition. Aim for proper protein intake to support muscle recovery and growth from the week's training.",
          muscle: "N/A",
          equipment: "None",
          videoId: "OWKgF0oIAQ0" // Hydration and recovery strategies video
        }
      ]
    }
  };


  export const getWorkoutByDay = (day) => {
    return workoutPlans[day] || null;
  };