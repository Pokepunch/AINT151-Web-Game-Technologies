var RoomArray = [
	{
		text: "Welcome to [INSERT GAME NAME HERE]! This is a text based adventure game. <br/> You play by entering a Verb and an object you wish to interact with, for example 'Open Door'. <br/>After interacting with an object enter 'Go Back' to exit to the scene. <br/>Type and enter 'Start Game' to begin!",
		choices: [
			{
				command: 'game',
				verbs: ['start'],
				index: 1
			}
		]
	},
	{
		intro: "You wake up. You find yourself laying in a bed, one that you don't recall. Sitting up, your eyes dart around the room, taking in what's around you.",
		text: "In this blank white room a few things are of interest. <br/>Opposite the bed is a bookshelf filled with books, none of it's contents can be made out from here. <br/>To your right is a door, at least it appears to be one. It doesn't have a handle, perhaps the small panel near opens it. <br/>To your left is curtain, light pours out from behind it.",
		choices: [
			{
				command: 'bookshelf',
				verbs: ['look', 'use', 'go'],
				index: 2
			},
			{
				command: 'curtain',
				verbs: ['look', 'use', 'go', 'open'],
				index: 4
			},
			{
				command: 'door',
				verbs: ['look', 'use', 'go'],
				index: 11
			}
		]
	},
	{
		text: "The bookshelf is packed to the brim with books, full of whisical stories and infinite knowledge. If that wasn't impressive enough every book is the same size and all sit flush against back of the shelf, bar one. This book is noticeably ajar, sticking out in an aggravating matter.",
		choices: [
			{
				command: 'back',
				verbs: ['go'],
				index: 1
			},
			{
				command: 'book',
				verbs: ['look', 'use', 'open', 'get', 'read'],
				index: 3
			}
		]
	},
	{
		text: "The book is covered in a small layer of dust which you blow off, revealing 'The Meaning of Life' as the book's title. You open the book to find the center the book hollow, the middle of every page missing. Inside the gap is a slip of paper reading '" + doorCode + "'. Not much else you can get from the book, so you put it back.",
		onceOnly: 0,
		variableSet: 0,
		choices: [
			{
				command: 'back',
				verbs: ['go'],
				index: 'previousRoom'
			}
		]
	},
	{
		text: "You pull back the curtain, flooding the room with light. The outside world is covered by thick fog which is blocking anything that may be outside from view. <br/>The windows are big enough to climb through and there is a ledge at the bottom that goes across the side of the building. This could be an exit if you have to use it...",
		choices: [
			{
				command: 'back',
				verbs: ['go'],
				index: 'previousRoom'
			},
			{
				command: 'window',
				verbs: ['use', 'open'],
				index: 5
			}
		]
	},
	{
		text: "You push the window open, instantly a chill hits you. It's pretty cold outside. Maybe it isn't the best idea to exit the room this way?",
		choices: [
			{
				command: 'back',
				verbs: ['go'],
				index: 'previousRoom'
			},
			{
				command: 'room',
				verbs: ['exit'],
				index: 6
			},
			{
				command: 'window',
				verbs: ['use', 'open'],
				index: 6
			}
		]
	},
	{
		text: "You carefully climb through the window. Your whole body is engulfed by the freezing air, suddenly the window shuts close by itself and you can't go back now. <br/>Slowly and carefully you edge along the wall... this must be pretty high up, with the fog you can't actually be sure of that but something tells you that if you ...fall off... the building that it could be the end. <br/>You should keep moving along the ledge",
		variableSet: 1,
		choices: [
			{
				command: 'ledge',
				verbs: ['go'],
				index: 7
			},
			{
				command: 'off',
				verbs: ['fall'],
				index: 8
			}
		]
	},
	{
		intro: "The ledge keeps going and going as you keep getting colder and colder. <br/>Your every movement seems slower than the last, you don't know if you're actually moving slower or time is slowing down around you. <br/>Finally a window! Which is... open! You make it to the window and climb in frantically. You're in the room, it's over.",
		text: "You find yourself in a white room. And a strong feeling of deja vu. This room looks identical to the previous room. White room, bookshelf with one out of place book, door with no handle a small panel... <br/>The bed is empty, but the cover is folded over, maybe somebody left this room as you did yours?",
		choices: [
			{
				command: 'bed',
				verbs: ['look', 'use', 'go'],
				index: 9
			},
			{
				command: 'bookshelf',
				verbs: ['look', 'use', 'go'],
				index: 10
			},
			{
				command: 'door',
				verbs: ['look', 'use', 'go'],
				index: 11
			}
		]
	},
	{
		text: "You embrace death and plummit downwards, into the unknown. I guess you'll never find out where you were or who you are, but maybe you don't really care. <br/>Game Over, you've found the stupid ending. Congrats. <br/>If you want to restart enter 'Restart Game'.",
		choices: [
			{
				command: 'game',
				verbs: ['restart'],
				index: 0
			}
		]
	},
	{
		text: "Investigating the bed, you find that it's cold: whoever was here didn't leave recently. You notice something slightly poking out from underneath the pillow, you find a screwdriver. That could come in handy.",
		onceOnly: 0,
		choices: [
			{
				command: 'back',
				verbs: ['go'],
				index: 'previousRoom'
			}
		]
	},
	{
		text: "This bookshelf appears exactly as the one in the previous room. However one book is on the floor open, you can see that the center of every page is hollow. A slip of paper sits on the ground next to the book. Picking up the slip you see written on it '" + doorCode + "'. Looking at the cover of the book you find the title 'The Meaning of Life' but you can't get anything else from this book.",
		textAlt: "This bookshelf appears exactly as the one in the previous room. However 'The Meaning of Life' book is on the floor open, and a slip of paper is sat next to it. Picking up the slip reveals the same code from before.",
		onceOnly: 0,
		variableCheck: 0,
		choices: [
			{
				command: 'back',
				verbs: ['go'],
				index: 'previousRoom'
			}
		]
	},
	{
		text: "The door, like the rest of the room, is white. Looking closer at the panel it's a number pad with a small bulb. Do you want to enter a code?",
		choices: [
			{
				command: 'back',
				verbs: ['go'],
				index: 'previousRoom'
			},
			{
				command: 'panel',
				verbs: ['use'],
				index: 12
			},
			{
				command: 'code',
				verbs: ['enter'],
				index: 12
			}
		]
	},
	{
		text: "Enter a code",
		choices: [
			{
				index: 14,
				indexAlt: 13
			}
		]
	},
	{
		intro: "The bulb lights up green followed by a short buzz. Suddenly the door slides open. You walk through with the door shutting behind you.",
		text: "You find yourself in a hallway. To your left is a massive door, like the previous doors it doesn't have a handle. But this door also doesn't seem to have a keypad next to it, so doesn't seem like you can go this way. The only choice is the set of downward stairs to your right.",
		choices: [
			{
				command: 'stairs',
				verbs: ['use', 'go'],
				index: 15
			}
		]	
	},
	{
		intro: "The bulb lights up green followed by a short buzz. Suddenly the door slides open. You walk through with the door shutting behind you.",
		text: "You find yourself in a hallway. To your right is a massive door, like the previous doors it doesn't have a handle. But this door also doesn't seem to have a keypad next to it, so doesn't seem like you can go this way. There's a corner on your left, guess you'll have to see what's that way.",
		choices: [
			{
				command: 'corner',
				verbs: ['go'],
				index: 0
			}
		]
	},
	{
		text: "You start going down the stairs. 6 steps, round a corner. 6 more steps.",
		textAlt: "You keep going down the stairs. 6 steps, round a corner. 6 more steps.",
		loop: 0,
		choices: [
			{
				command: 'stairs',
				verbs: ['use', 'go'],
				index: 16
			}
		]
	}
]
