import mock from './mock'

import './auth/jwt'

import './pages/faq'
import './pages/pricing'
import './pages/knowledge-base'
import './pages/dashboard/stats'
import './pages/user-properties'
import './pages/tenants-data'

mock.onAny().passThrough()
