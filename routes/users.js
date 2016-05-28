var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    "workout-name": "Workout-1",
  "Routine Type": "Weekly",
  "Monday": {
  	"Target Muscle":"Legs",
  	"Exercises":{
  		"Exercise 1":{
  			"Name":"Leg Press",
  			"Repetitions":15,
  			"Sets": 3
  		},
  		"Exercise 2":{
  			"Name":"Seated Leg Curl",
  			"Repetitions":15,
  			"Sets": 3
  		},
  		"Exercise 3":{
  			"Name":"Lying Leg Curl",
  			"Repetitions":15,
  			"Sets": 3
  		},
  		"Exercise 4":{
  			"Name":"Leg Extensions",
  			"Repetitions":15,
  			"Sets": 3
  		},
  		"Exercise 5":{
  			"Name":"Hack Squat",
  			"Repetitions":20,
  			"Sets": 3
  		}
  	}

  },


"Tuesday": {
  	"Target Muscle":"Chest",
  	"Exercises":{
  		"Exercise 1":{
  			"Name":"Dumbell Flyes",
  			"Repetitions":6,
  			"Sets": 3
  		},
  		"Exercise 2":{
  			"Name":"Inclined Dumbell Flyes",
  			"Repetitions":8,
  			"Sets": 2
  		},
  		"Exercise 3":{
  			"Name":"Straight Arm Dumbell Pullover",
  			"Repetitions":10,
  			"Sets": 3
  		}

  	}
},
"Wednesday": {
	"Exercise Type":"Cardio",
	"Duration":20
  	},



"Thrusday": {
  	"Target Muscle":"Chest",
  	"Exercises":{
  		"Exercise 1":{
  			"Name":"Dumbell Flyes",
  			"Repetitions":6,
  			"Sets": 3
  		},
  		"Exercise 2":{
  			"Name":"Inclined Dumbell Flyes",
  			"Repetitions":8,
  			"Sets": 2
  		},
  		"Exercise 3":{
  			"Name":"Straight Arm Dumbell Pullover",
  			"Repetitions":10,
  			"Sets": 3
  		}
  	}
},



"Friday": {
  	"Target Muscle":"Back",
  	"Exercises":{
  		"Exercise 1":{
  			"Name":"Cable Pulldowns",
  			"Repetitions":8,
  			"Sets": 3
  		},
  		"Exercise 2":{
  			"Name":"Bent Over Rows",
  			"Repetitions":10,
  			"Sets": 3
  		},
  		"Exercise 3":{
  			"Name":"Hyper Extensions",
  			"Repetitions":10,
  			"Sets": 3
  		}
  	}


  },


"Saturday": {
	"Exercise Type":"Cardio",
	"Duration":20
  	}

});
});

module.exports = router;
