export const RECEIVE_PLANTS = 'RECEIVE_PLANTS';

export function receivePlants(plants) {
    return{
        type: RECEIVE_PLANTS,
        plants
    }
}