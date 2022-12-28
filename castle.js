player.onChat("run", function () {
function walls() {
    builder.teleportTo(pos(40, 0, 0))
    for (let i = 0; i < 10; i++) {
        builder.mark()
        builder.shift(30, 0, 0)
        builder.fill(COBBLESTONE)
        builder.mark()
        builder.shift(0, 0, 30)
        builder.fill(COBBLESTONE)
        builder.mark()
        builder.shift(-30, 0, 0)
        builder.fill(COBBLESTONE)
        builder.mark()
        builder.shift(0, 0, -30)
        builder.fill(COBBLESTONE)
        builder.move(UP, 1)
    }
    builder.move(DOWN, 10)
    builder.move(LEFT, 13)
    for (let i = 0; i < 5; i++) {
        builder.mark()
        builder.shift(0, 0, 4)
        builder.fill(AIR)
        builder.move(UP, 1)
        builder.move(RIGHT, 4)

    }
    builder.move(DOWN, 5)
    builder.move(LEFT, 15)
}
function towers() {
    for (let i = 0; i < 15; i++) {
        builder.mark()
        builder.shift(-5, 0, 0)
        builder.fill(STONE)
        builder.mark()
        builder.shift(0, 0, 5)
        builder.fill(STONE)
        builder.mark()
        builder.shift(5, 0, 0)
        builder.fill(STONE)
        builder.mark()
        builder.shift(0, 0, -5)
        builder.fill(STONE)
        builder.move(UP, 1)
    }
    builder.setOrigin()
    builder.move(BACK,4)
    builder.move(LEFT,4)
    for (let i = 0; i < 2; i++){
        builder.mark()
        builder.move(FORWARD,3-2*i)
        builder.fill(BRICKS)
        builder.mark()
        builder.move(RIGHT,3-2*i)
        builder.fill(BRICKS)
        builder.mark()
        builder.move(BACK, 3 - 2 * i)
        builder.fill(BRICKS)
        builder.mark()
        builder.move(LEFT, 3 - 2 * i)
        builder.fill(BRICKS)
        builder.move(UP,1)
        builder.move(FORWARD,1)
        builder.move(RIGHT,1)
    }
    builder.teleportToOrigin()
    builder.move(DOWN, 15)
}
function floor() {
    builder.move(LEFT, 4)
    builder.move(FORWARD,1)
    builder.mark()
    builder.shift(28,0,28)
    builder.fill(STRIPPED_OAK_WOOD)


}
function trench(){
    builder.move(LEFT, 8)
    builder.move(FORWARD, 9)
    builder.move(DOWN,1)
    builder.mark()
    builder.move(RIGHT, 48)
    builder.move(FORWARD, 3)
    builder.move(DOWN,2)
    builder.fill(WATER)
    builder.move(UP, 2)
    builder.mark()
    builder.move(BACK, 55)
    builder.move(RIGHT, 3)
    builder.move(DOWN, 2)
    builder.fill(WATER)
    builder.move(UP, 2)
    builder.mark()
    builder.move(LEFT, 52)
    builder.move(BACK, 3)
    builder.move(DOWN, 2)
    builder.fill(WATER)
    builder.move(UP, 2)
    builder.mark()
    builder.move(FORWARD, 58)
    builder.move(LEFT, 3)
    builder.move(DOWN, 2)
    builder.fill(WATER)
    builder.move(UP,2)
}

function bridge() {
    builder.move(BACK, 58)
    builder.move(RIGHT, 24)
    builder.move(UP,1)
    builder.mark()
    builder.move(FORWARD, 17)
    builder.move(RIGHT, 4)
    builder.fill(OAK_WOOD_SLAB)

}
function chain_door() {
    builder.mark()
    builder.move(UP, 4)
    builder.fill(CHAIN)
    builder.move(UP,1)
    builder.mark()
    builder.move(LEFT,4)
    builder.fill(IRON_BARS)
    builder.move(DOWN,1)
    builder.mark()
    builder.move(DOWN,4)
    builder.fill(CHAIN)

}
function bridge_fence() {
    builder.move(BACK,1)
    builder.move(LEFT,1)
    builder.mark()
    builder.move(BACK,16)
    builder.fill(ACACIA_FENCE)
    builder.move(RIGHT,6)
    builder.mark()
    builder.move(FORWARD,16)
    builder.fill(ACACIA_FENCE)
}
function roof() {
    builder.move(FORWARD,2)
    builder.move(UP,10)
    builder.move(RIGHT,11)
    for (let i = 0; i < 15; i++) {
        builder.mark()
        builder.turn(TurnDirection.Left)
        builder.move(RIGHT,28-2*i)
        builder.line(BRICKS)
        builder.mark()
        builder.turn(TurnDirection.Left)
        builder.move(RIGHT,28-2*i)
        builder.line(BRICKS)
        builder.mark()
        builder.turn(TurnDirection.Left)
        builder.move(RIGHT,28-2*i)
        builder.line(BRICKS)
        builder.mark()
        builder.turn(TurnDirection.Left)
        builder.move(RIGHT,28-2*i)
        builder.line(BRICKS)
        builder.move(UP,1)
        builder.move(FORWARD,1)
        builder.move(LEFT,1)

    }

}
function windows() {
    builder.move(FORWARD,14)
    builder.move(DOWN,18)
    builder.move(RIGHT,6)
    builder.mark()
    builder.move(DOWN,3)
    builder.move(RIGHT,3)
    builder.fill(GLASS_PANE)
    builder.move(LEFT,12)
    builder.move(UP,3)
    builder.mark()
    builder.move(DOWN, 3)
    builder.move(RIGHT, 3)
    builder.fill(GLASS_PANE)
    builder.move(LEFT, 14)
    builder.move(BACK,9)
    builder.move(UP, 3)
    builder.mark()
    builder.move(DOWN, 3)
    builder.move(BACK, 3)
    builder.fill(GLASS_PANE)
    builder.move(BACK, 9)
    builder.move(UP, 3)
    builder.mark()
    builder.move(DOWN, 3)
    builder.move(BACK, 3)
    builder.fill(GLASS_PANE)
    builder.move(RIGHT,30)
    builder.move(UP, 3)
    builder.mark()
    builder.move(DOWN, 3)
    builder.move(FORWARD, 3)
    builder.fill(GLASS_PANE)
    builder.move(UP, 3)
    builder.move(FORWARD,5)
    builder.mark()
    builder.move(DOWN, 3)
    builder.move(FORWARD, 3)
    builder.fill(GLASS_PANE)


}
function light() {
    builder.move(DOWN,3)
    builder.move(LEFT,9)
    builder.move(FORWARD,4)
    builder.place(CAMPFIRE)
    builder.move(LEFT,8)
    builder.place(CAMPFIRE)
    builder.move(BACK,8)
    builder.place(CAMPFIRE)
    builder.move(RIGHT,8)
    builder.place(CAMPFIRE)
    builder.move(LEFT,15)
    builder.place(CAMPFIRE)
    builder.move(FORWARD,8)
    builder.place(CAMPFIRE)
    builder.move(FORWARD,8)
    builder.place(CAMPFIRE)
    builder.move(BACK,23)
    builder.place(CAMPFIRE)
    builder.move(RIGHT,18)
    builder.place(CAMPFIRE)
    builder.move(FORWARD,23)
    builder.place(CAMPFIRE)

}
walls()
towers()
builder.move(FORWARD, 35)
towers()
builder.move(RIGHT, 31)
towers()
builder.move(BACK, 35)
towers()
floor()
trench()
bridge()
chain_door()
bridge_fence()
roof()
windows()
light()
})
