
interface ITest {
    testNum: number,
    testStr: string,
}

const initialState: ITest = {
    testNum: 0,
    testStr: '',
}

export const TestReducer = (state = initialState, action: any): ITest => {
    switch (action.type) {
        case 'Test': {
            return {...state, testStr: '123', testNum: 123}
        }

        default: {
            return state;
        }
    }
}