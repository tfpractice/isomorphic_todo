import {clientConfiguration} from 'universal-webpack'
import settings from './universal-webpack-settings'
import configuration from './webpack.prod.config'

export default clientConfiguration(configuration, settings)
