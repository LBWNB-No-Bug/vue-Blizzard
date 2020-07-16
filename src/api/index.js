import { get } from './helpers'

const getHome = get('./data/home.json')
const getGameContent = get('./data/gameContent.json')

export {
    getHome,
    getGameContent
}
