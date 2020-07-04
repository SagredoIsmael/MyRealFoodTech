import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getSettings = get('settings')

export const getPlatform = pipe(
    getSettings,
    get('platform')
)