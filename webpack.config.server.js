import {serverConfiguration} from 'universal-webpack'
import settings from './universal-webpack-settings'
import configuration from './webpack.dev'

export default serverConfiguration(configuration, settings)
