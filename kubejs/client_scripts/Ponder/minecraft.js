Ponder.tags((e) => {
	e.createTag("compression:minecraft", "minecraft:crafting_table", "Minecraft Basics.", "The Basics of Basics!",
	["minecraft:cobblestone", "minecraft:glass",
	]);
});
//------------------------------------------------------------------
Ponder.registry((e) => {
//------------------------------------------------------------------
    //Glass
        e.create("minecraft:glass").scene("Glass", "Blasted Sand", (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            scene.world.setBlock([2,1,2], "minecraft:glass", false);
            scene.world.showSection([2,1,2], Facing.down);
            scene.idle(10);
            scene.text(40, "You can see through this...", [2.5,1,2.5]);
            scene.idle(20);
        });
//------------------------------------------------------------------
	//Cobblestone
    e.create("minecraft:cobblestone") //creates scene for the item
        .scene("Cobblestone_Generator", "I want more cobble!", "kubejs:botania_7x7",(scene, util) => {
            scene.showBasePlate();
            scene.idle(20);
            scene.text(80, "Upon gathering some materials, you might want to think of making a Cobblestone Generator.");
        	scene.idle(70);
        	scene.addKeyframe();
        	//first layer of the cobble gen-----------------------------------
            scene.world.setBlock([3,1,2], "botania:mana_glass", false);
            scene.world.showSection([3,1,2], Facing.down);
        	scene.world.setBlock([4,1,3], "botania:mana_glass", false);
        	scene.world.showSection([4,1,3], Facing.down);
        	scene.world.setBlock([3,1,4], "botania:mana_glass", false);
        	scene.world.showSection([3,1,4], Facing.down);
        	scene.world.setBlock([2,1,3], "botania:mana_glass", false);
        	scene.world.showSection([2,1,3], Facing.down);
        	scene.world.setBlock([1,1,3], "botania:mana_glass", false);
        	scene.world.showSection([1,1,3], Facing.down);
        	scene.idle(10);
        	//second layer and i already want to fucking die
        	scene.world.setBlock([5,2,3], "botania:mana_glass", false);
        	scene.world.showSection([5,2,3], Facing.down);
        	scene.world.setBlock([4,2,2], "botania:mana_glass", false);
        	scene.world.showSection([4,2,2], Facing.down);
        	scene.world.setBlock([4,2,4], "botania:mana_glass", false);
        	scene.world.showSection([4,2,4], Facing.down);
        	scene.world.setBlock([3,2,2], "botania:mana_glass", false);
        	scene.world.showSection([3,2,2], Facing.down);
        	scene.world.setBlock([1,2,2], "botania:mana_glass", false);
        	scene.world.showSection([1,2,2], Facing.down);
        	scene.world.setBlock([3,2,4], "botania:mana_glass", false);
        	scene.world.showSection([3,2,4], Facing.down);
        	scene.world.setBlock([1,2,4], "botania:mana_glass", false);
        	scene.world.showSection([1,2,4], Facing.down);
        	scene.world.setBlock([0,2,3], "botania:mana_glass", false);
        	scene.world.showSection([0,2,3], Facing.down);
        	scene.idle(10);
        	//how do i make liquid "flow" in fucking ponders
        	scene.showControls(30, [4.5,3,3.5], "down")
                .rightClick()
        		.withItem("water_bucket")
        	scene.world.showSection([3,2,3], Facing.down);
        	scene.world.showSection([3,1,3], Facing.down);
        	scene.idle(20);
        	scene.world.setBlock([4,2,3], "minecraft:water", false);
        	scene.world.showSection([4,2,3], Facing.down);
        	scene.idle(20);
        	scene.idle(5);
        	//here comes the flowing water
        	scene.world.setBlock([3,2,3], "minecraft:water", false);
        	scene.world.modifyBlock([3,2,3], (water) => water.with("level", "3"), false)
        	scene.idle(5);
        	//the other water
        	scene.world.setBlock([3,1,3], "minecraft:water", false);
        	scene.idle(10);
        	//and here comes the lava
        	scene.showControls(30, [1.5,3,3.5], "down")
                .rightClick()
        		.withItem("lava_bucket")
        	scene.world.showSection([2,2,3], Facing.down);
        	scene.idle(20);
        	scene.world.setBlock([1,2,3], "minecraft:lava", false);
        	scene.world.showSection([1,2,3], Facing.down);
        	scene.idle(40);
        	//AH FUCK ME I NOW I GOTTA MAKE SMOKE PARTICLES FOR THE COBBLE GENERATOR AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        	scene.world.setBlock([2,2,3], "minecraft:cobblestone", true);
        	for(let i = 0; i<5;i++){
        		scene.particles.simple(2, "large_smoke", [Math.random()+2,3,Math.random()+3]).density(1);  //first variable is how long it goes for
        	}
        	scene.idle(40);
        	scene.addKeyframe();
        	scene.text(80, "A Cobblestone Generator works by infinitely flowing lava into contacting water, generating cobblestone as a result.");
        	scene.idle(90);
        	scene.text(50, "If you break the cobbblestone block...", [2.5,2.5,3.5]);
        	scene.idle(60);
        	scene.world.setBlock([2,2,3], "minecraft:air", true);
        	scene.idle(30);
        	scene.world.setBlock([2,2,3], "minecraft:cobblestone", true);
        	for(let i = 0; i<5;i++){
        		scene.particles.simple(2, "large_smoke", [Math.random()+2,3,Math.random()+3]).density(1);  //first variable is how long it goes for
        	}
        	scene.idle(10);
        	scene.text(60, "...another one will take its place.", [2.5,2.5,3.5]);
        	scene.idle(70);
        	scene.addKeyframe();
        	scene.text(80, "It's important to limit the water flow so it doesn't reach the lava source.", [3.5,1.5,3.5]);
        	scene.idle(90);
        	scene.text(80, "If you're not careful, your lava will become Obsidian, thus ruining your Cobblestone Generator.", [1.5,2.5,3.5]);
        	scene.idle(90);
        	scene.addKeyframe();
        	scene.text(80, "The process is very simple, but it can become very monotonous to break cobblestone by hand...");
        	scene.idle(90);
        	scene.text(80, "You might want to find a more §ccreative§r solution to this problem...");
        	scene.idle(30);
        });
//Stone-------------------------------------------------------------------------------------
	e.create("minecraft:stone")
        .scene("stone_generator", "A Stone Generator?", "kubejs:botania_7x7",(scene, util) => {
            scene.showBasePlate();
            scene.idle(20);
            scene.text(70, "Although more intricate, you may also want to build a Stone Generator.");
            scene.idle(80);
    		scene.addKeyframe();
			//first layer of the gen----------------------------
			scene.world.setBlock([3,1,2], "botania:mana_glass", false);
			scene.world.showSection([3,1,2], Facing.down);
			scene.world.setBlock([4,1,3], "botania:mana_glass", false);
			scene.world.showSection([4,1,3], Facing.down);
			scene.world.setBlock([3,1,4], "botania:mana_glass", false);
			scene.world.showSection([3,1,4], Facing.down);
			scene.world.setBlock([2,1,3], "botania:mana_glass", false);
			scene.world.showSection([2,1,3], Facing.down);
			scene.idle(10);
			//second layer of the gen---------------------------
			scene.world.setBlock([5,2,3], "botania:mana_glass", false);
			scene.world.showSection([5,2,3], Facing.down);
			scene.world.setBlock([4,2,2], "botania:mana_glass", false);
			scene.world.showSection([4,2,2], Facing.down);
			scene.world.setBlock([4,2,4], "botania:mana_glass", false);
			scene.world.showSection([4,2,4], Facing.down);
			scene.idle(10);
			//third layer of the gen lmao it's a copy paste from layer 1
			scene.world.setBlock([3,3,2], "botania:mana_glass", false);
			scene.world.showSection([3,3,2], Facing.down);
			scene.world.setBlock([4,3,3], "botania:mana_glass", false);
			scene.world.showSection([4,3,3], Facing.down);
			scene.world.setBlock([3,3,4], "botania:mana_glass", false);
			scene.world.showSection([3,3,4], Facing.down);
			scene.world.setBlock([2,3,3], "botania:mana_glass", false);
			scene.world.showSection([2,3,3], Facing.down);
			scene.idle(10);
			//time to ADD WATER AGAIN YIPEEEEEEE
			scene.showControls(30, [4.5,3,3.5], "down")
                .rightClick()
				.withItem("water_bucket")
			scene.world.showSection([3,2,3], Facing.down);
			scene.world.showSection([3,1,3], Facing.down);
			scene.idle(20);
			scene.world.setBlock([4,2,3], "minecraft:water", false);
			scene.world.showSection([4,2,3], Facing.down);
			scene.idle(20);
			scene.idle(5);
			//water flow part 1
			scene.world.setBlock([3,2,3], "minecraft:water", false);
			scene.world.modifyBlock([3,2,3], (water) => water.with("level", "2"), false)
			scene.idle(5);
			//water flow part 2
			scene.world.setBlock([3,1,3], "minecraft:water", false);
			scene.idle(10);
			//lava time
			scene.showControls(30, [3.5,4,3.5], "down")
                .rightClick()
				.withItem("lava_bucket")
			scene.idle(20);
			scene.world.setBlock([3,3,3], "minecraft:lava", false);
			scene.world.showSection([3,3,3], Facing.down);
			scene.idle(40);
			//stone.
			scene.world.setBlock([3,2,3], "minecraft:stone", true);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(5);
			scene.world.setBlock([3,1,3], "minecraft:air", true);
			scene.idle(20);
			scene.addKeyframe();
			//time to explain to these normies how this one works
			scene.text(60, "While a Cobblestone Generator works by flowing lava next to water...");
    		scene.idle(70);
			scene.world.setBlock([3,2,3], "minecraft:air", true);
			scene.idle(5);
			scene.world.setBlock([3,2,3], "minecraft:water", false);
			scene.world.modifyBlock([3,2,3], (water) => water.with("level", "2"), false)
			scene.idle(5);
			scene.world.setBlock([3,1,3], "minecraft:water", false);
			scene.idle(10);
			scene.text(80, "A Stone Generator works by flowing lava ON TOP of water.", [3.5,2.5,3.5]);
			scene.idle(60);
			scene.world.setBlock([3,2,3], "minecraft:stone", true);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(5);
			scene.world.setBlock([3,1,3], "minecraft:air", true);
			scene.idle(45);
			scene.addKeyframe();
			scene.text(80, "Something else to note is that, once placed, lava doesn't flow upon neccesity. It ALWAYS tries to flow whenever possible.");
			scene.idle(90);
			scene.text(60, "This is known as the \"Global Timer\".");
			scene.idle(70);
			scene.text(60, "\"Why is this important?\" you may ask.");
			scene.idle(70);
			scene.text(80, "If you break the stone block at the wrong time...");
			scene.idle(60);
			scene.world.setBlock([3,2,3], "minecraft:air", true);
			scene.idle(30);
			scene.world.setBlock([3,2,3], "minecraft:lava", false);
			scene.world.modifyBlock([3,2,3], (lava) => lava.with("level", "1"), false)
			scene.text(60, "...lava will flow BEFORE the water...", [3.5,2.5,3.5]);
			scene.idle(70);
			scene.world.setBlock([3,2,3], "minecraft:cobblestone", true);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(20);
			scene.text(80, "...resulting in the creation of cobblestone instead.");
			scene.idle(100);
			scene.text(80, "Oh, and stone can be mined faster than cobblestone.\n§cDo keep this in mind.§r");
			scene.idle(70);
			scene.markAsFinished();
        });
	//Basalt-------------------------------------------------------
    e.create("minecraft:basalt")
		.scene("basalt_generator", "Wait, you can make basalt?", "kubejs:botania_7x7",(scene, util) => {
			scene.showBasePlate();
			scene.idle(20);
			scene.text(70, "Another neat function of vanilla minecraft is the Basalt Generator!");
			scene.idle(80);
			scene.addKeyframe();
			//alright ramblers lets get rambling--------------------
			scene.world.setBlock([3,1,3], "minecraft:soul_soil", false);
			scene.world.showSection([3,1,3], Facing.down);
			scene.world.setBlock([4,1,3], "botania:mana_glass", false);
			scene.world.showSection([4,1,3], Facing.down);
			scene.idle(10);
			scene.world.setBlock([4,2,2], "botania:mana_glass", false);
			scene.world.showSection([4,2,2], Facing.down);
			scene.world.setBlock([4,2,4], "botania:mana_glass", false);
			scene.world.showSection([4,2,4], Facing.down);
			scene.world.setBlock([5,2,3], "botania:mana_glass", false);
			scene.world.showSection([5,2,3], Facing.down);
    		scene.idle(10);
			scene.world.setBlock([2,2,3], "minecraft:blue_ice", false);
			scene.world.showSection([2,2,3], Facing.down);
			scene.idle(20);
			scene.showControls(30, [4.5,3,3.5], "down")
                .rightClick()
				.withItem("lava_bucket")
			scene.idle(20);
			scene.world.showSection([3,2,3], Facing.down);
			scene.world.setBlock([4,2,3], "minecraft:lava", false);
			scene.world.showSection([4,2,3], Facing.down);
			scene.idle(40);
			scene.world.setBlock([3,2,3], "minecraft:basalt", false);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(20);
			scene.addKeyframe();
			scene.text(60, "This generator works under some special conditions:");
			scene.idle(70);
			scene.world.setBlock([3,2,3], "minecraft:air", true);
			scene.idle(30);
			scene.world.setBlock([3,2,3], "minecraft:lava", false);
			scene.world.modifyBlock([3,2,3], (lava) => lava.with("level", "1"), false)
			scene.idle(20);
			scene.text(60, "Condition 1: Soul Soil must be present beneath lava.", [3.5,1,3.5]);
			scene.idle(70);
			scene.text(60, "Condition 2: Blue Ice must be adjacent to lava.", [2.5,2,3.5]);
			scene.idle(70);
			scene.text(60, "If both conditions are met...");
			scene.idle(70);
			scene.world.setBlock([3,2,3], "minecraft:basalt", false);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(20);
			scene.text(60, "...basalt will be generated!", [3.5,2,3.5]);
			scene.idle(50);
			scene.markAsFinished();
        });
});