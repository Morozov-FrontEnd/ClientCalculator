const initialState = [
    'test_state',
    'test_2'
];
 

export default function playlist(state = initialState, action) {
    if (action.type === 'TEST_STATE') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}