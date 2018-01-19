var RoomArray = [
	{
		text: "Welcome to [INSERT GAME NAME HERE]! This is a text based adventure game. <br/> You play by entering 2 words, usually a Verb and an Object you wish to interact with, for example 'Open Door'. <br/>There may be a few exceptions to this rule however and clues will be in the text you're given if applicable. <br/>After interacting with an object enter 'Go Back' to exit to the scene. <br/>Type and enter 'Start Game' to begin!",
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
		text: "The bookshelf is packed to the brim with books, full of whisical stories and infinite knowledge. <br/>If that wasn't impressive enough every book is the same size and all sit flush against back of the shelf, bar one. <br/>This book is noticeably ajar, sticking out from the rest.",
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
				index: 1
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
				verbs: ['use', 'open', 'climb'],
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
		text: "You embrace death and plummit downwards, into the unknown. You guess you'll never find out where you were or who you are, but maybe you don't really care. <br/>Game Over, you've found the stupid ending. Congrats. <br/>If you want to restart enter 'Restart Game'.",
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
		variableSet: 2,
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
				index: 14,
				indexAlt: 13
			},
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
			},
			{
				command: 'door',
				verbs: ['use'],
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
				index: 18
			}
		]
	},
	{
		text: "You start going down the stairs. 6 steps, round a corner. 6 more steps.",
		textAlt: "You keep going down the stairs. 6 steps, round a corner. 6 more steps.",
		choices: [
			{
				command: 'stairs',
				verbs: ['use', 'go'],
				loop: 2,
				index: 16
			}
		]
	},
	{
		intro: "You keep going down the stairs... but something feels different. <br>A white mist is starting to surround you every second it seems to get thicker, blinding you from your what's around you. Soon enough all you see is white. <br/>Only white. <br/>Just white. <br/>You no longer know where forward is. You try to find the wall that was previously right next to you but it too is gone, replaced by the white nothingness.",
		fade: ['white', 'black'],
		text: "You could keep going, but  something in you is telling to give up and... let go.",
		textAlt: "You keep going, but nothing changes...",
		choices: [
			{
				command: 'going',
				verbs: ['keep'],
				loop: 1,
				index: 17
			},
			{
				command: 'go',
				verbs: ['let'],
				index: 23
			}
		]
	},
	{
		intro: "You see a gap in the nothing, it's something, something worth aiming for. You run towards it, the white weakens... You're out! <br/>It looks like you're back at the top of the stair case. Walking back into the hallway you find that the big door is now open and the way is clear!",
		text: "You walk foward down the hallway, and come up to a corner. That's the only way to go.",
		fade: ['black', 'white'],
		choices: [
			{
				command: 'corner',
				verbs: ['go'],
				index: 18
			}
		]
	},
	{
		text: "Around the corner you find a row of rooms going along your left side, you're not too sure what's in them, but you're more interested in the room ahead. <br/>A sign reading 'CPU-Room' hangs above the room, something tells you this is where you might find some answers...",
		textAlt: "Around the corner you find a row of rooms going along your left side, you presume that they are the same as the other rooms. Maybe they contain people too. <br/>Ahead of you is a room, the sign above it reading 'CPU-Room'. This could be where you might find come answers...",
		variableCheck: 1,
		choices: [
			{
				command: 'cpu-room',
				verbs: ['go', 'look'],
				index: 19
			},
			{
				command: 'room',
				verbs: ['go', 'look'],
				index: 19
			}
		]
	},
	{
		text: "The room hums, the buzzing of computers comes from every direction. Towers of buzzing flashing computers line every wall, what could all these be for? Your eyes are drawn to the center, a big screen with a keyboard reside held up on a large cylindrical spire. Below the keyboard is a hatch reading 'CPU Core - Do Not Remove'. The hatch is held with a small screw... Looking at the screen you see some text.<br/> 'Hello. So another one has woken up. This certainly is foreboding. You must be wondering about, well everything. I am the Guardian. I will give you a short recap. The Earth has died, the planet has become infertile and life for the most part has died. You and the others that rest here are all that remains of humanity. The outside world is not yet safe for you to survive, so we wait for the day when you all may leave. Until that day you must remain in suspended animation, preserved for the future. For that reason, you aren't meant to be awake. <br/>My systems have developed several errors over time, this has resulted in a few subjects waking up. <br/>Now, what happens to you. <br/>You should go back to your room and back into your bed, I will restart the necessary systems to put you back into suspended animation.' <br/>You could accept this offer and go back to sleep until the planet is safe to inhabit. Or you could refuse? You don't know what happens if you refuse the offer...",
		choices: [
			{
				command: 'offer',
				verbs: ['refuse'],
				index: 20
			},
			{
				command: 'offer',
				verbs: ['accept'],
				index: 22
			}
		]
	},
	{
		text: "'You... refuse? The other person refused too. I don't understand why. Why would you refuse? It is agasint my programming to force you but would you reconsider?'",
		choices: [
			{
				command: 'offer',
				verbs: ['refuse'],
				index: 21
			},
			{
				command: 'offer',
				verbs: ['accept'],
				index: 22
			}
		]
	},
	{
		text: "'So be it. In order to maintain the project and saftey of my mission I must ensure you can cause no harm.' Suddenly a hatch on the side of the cylinder opens, a tube with a syringe on the end darts out towards you. You try to open the hatch, but you can't get it to open. You feel the sharp pain of the needle piercing your skin. It immediately takes effect as you start to feel numb and lose control of your body. Falling to the floor and losing consciousness you reflect on what the Guardian told you. Perhaps it isn't killing you, just knocking you out. After all when you woke up you had no recallection of the past, maybe the systems will just wipe your memory and put you back to bed. But now it doesn't matter either way... <br/>You completed the game!<br/>If you want to restart enter 'Restart Game'.",
		textAlt: "'So be it. In order to maintain the project and saftey of my mission I must ensure you can cause no harm.' Suddenly a hatch on the side of the cylinder opens, a tube with a syringe on the end darts out towards you. You quickly pull out the screwdriver from your pocket and open the hatch. You stab the CPU Core. The tube falls to the floor, the room goes dark and starts to flash red and sirens cry out a warning: 'Warning! Life Support Systems offline!'. The room starts to feel different, your head light... and then you realise that breathing is getting harder. The life support systems must supply the building with oxygen. As your body becomes oxygen starved you reflect on what the Guardian told you. It looks like you doomed humanity... not like you can remember anything about it, but judging by your own actions it was doomed anyway...<br/> You completed the game! <br/>If you want to restart enter 'Restart Game'.",
		variableCheck: 2,
		choices: [
			{
				command: 'game',
				verbs: ['restart'],
				index: 0
			}
		]
	},
	{
		text: "'Thank you for your cooperation. Please do not be alarmed but it is necessary to sedate you.' A hatch opens on the side of the cylinder revealing a tube with a syringe attached to the end. You let it inject you. Afterwards you feel yourself slowing down and becoming faint. You reflect on what the Guardian told you. You're one of the last hope for humanity, the system here needs to preserve you and the others. Hopefully once we next awaken you can leave and start to rebuild to create a better future... <br/>You completed the game!<br/>If you want to restart enter 'Restart Game'.",
		choices: [
			{
				command: 'game',
				verbs: ['restart'],
				index: 0
			}
		]
	},
	{
		text: "You let go. The white becomes you and you become the white... It's over. <br/>You completed the game!<br/>If you want to restart enter 'Restart Game'.",
		choices: [
			{
				command: 'game',
				verbs: ['restart'],
				index: 0
			}
		]
	}
]
