import { RECEIVE_PLANTS } from '../actions';
import PlantList from '../components/PlantList';

function plants(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PLANTS:
            return {
                ...state,
                ...action.plants
            }
        }
}

export default plants;