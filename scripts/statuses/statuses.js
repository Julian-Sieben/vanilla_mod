
//poisoned statuses
const poisoned = extend(StatusEffect, "poisoned", {
    healthMultiplier: 0.75,
    color: Pal.gray,
})
const poisoned2 = extend(StatusEffect, "poisoned2", {
    healthMultiplier: 0.6,
    color: Pal.gray,
})
const poisoned3 = extend(StatusEffect, "poisoned3", {
    healthMultiplier: 0.5,
    color: Pal.gray,
})


//drained statuses
const drained = extend(StatusEffect, "drained", {
    damageMultiplier: 0.75,
    color: Pal.gray,
})
const drained2 = extend(StatusEffect, "drained2", {
    damageMultiplier: 0.6,
    color: Pal.gray,
})
const drained3 = extend(StatusEffect, "drained3", {
    damageMultiplier: 0.5,
    color: Pal.gray,
})


//slimed statuses
const slimed = extend(StatusEffect, "slimed", {
    speedMultiplier: 0.75,
    color: Pal.gray,
})
const slimed2 = extend(StatusEffect, "slimed2", {
    speedMultiplier: 0.6,
    color: Pal.gray,
})
const slimed3 = extend(StatusEffect, "slimed3", {
    speedMultiplier: 0.5,
    color: Pal.gray,
})


//glitched statuses
const glitched = extend(StatusEffect, "glitched", {
    speedMultiplier: 0.8,
    healthMultiplier: 0.8,
    color: Pal.gray,
})
const glitched2 = extend(StatusEffect, "glitched2", {
    speedMultiplier: 0.7,
    healthMultiplier: 0.7,
    color: Pal.gray,
})
const glitched3 = extend(StatusEffect, "glitched3", {
    speedMultiplier: 0.6,
    healthMultiplier: 0.6,
    color: Pal.gray,
})


//energized statuses
const energized = extend(StatusEffect, "energized", {
    speedMultiplier: 1.2,
    color: Pal.gray,
})
const energized2 = extend(StatusEffect, "energized", {
    speedMultiplier: 1.5,
    color: Pal.gray,
})
const energized3 = extend(StatusEffect, "energized", {
    speedMultiplier: 2.0,
    color: Pal.gray,
})


//charged
const charged = extend(StatusEffect, "charged", {
    damageMultiplier: 1.2,
    color: Pal.gray,
})
const charged2 = extend(StatusEffect, "charged2", {
    damageMultiplier: 1.3,
    color: Pal.gray,
})
const charged3 = extend(StatusEffect, "charged3", {
    damageMultiplier: 1.4,
    color: Pal.gray,
})