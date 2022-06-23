import { useDispatch } from "react-redux"
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
const result = (bot: number, user: number): string => {
    const possibility = ["ROCK", "PAPER", "SCISSORS"]
    if (bot - user > 0 ||bot-user==-2)
        return "L" + possibility[bot].toLocaleLowerCase()

    if (bot - user < 0)
        return "W" + possibility[bot].toLocaleLowerCase()

    return "P" + possibility[bot].toLocaleLowerCase()

}
const selectReducer = (state = "", action: { type: string }) => {

    let bot = 0;
    switch (action.type) {
        case "PAPER":
            bot = getRandomInt(3)

            return result(bot, 1)


        case "SCISSORS":
            bot = getRandomInt(3)

            return result(bot, 2)
        case "ROCK":
            bot = getRandomInt(3)

            return result(bot, 0)
        default:
            return state
    }
}
export default selectReducer