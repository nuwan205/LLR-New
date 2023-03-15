import { NextRouter } from 'next/router'
import { STAGE } from './constants'

export default function userStageRedirect(stage: string, router: NextRouter): void {
  if (stage === STAGE.PAYMENT) {
    router.replace('/register/payment')
  } else if (stage === STAGE.LANDLORD) {
    router.replace({ pathname: '/register-step2', query: { stage: STAGE.LANDLORD } })
  } else if (stage === STAGE.PROPERTY) {
    router.replace({ pathname: 'register-step2', query: { stage: STAGE.PROPERTY } })
  } else if (stage === STAGE.TENANT) {
    router.replace({ pathname: 'register-step2', query: { stage: STAGE.TENANT } })
  } else if (stage === STAGE.COMPLETE) {
    router.replace('/dashboard')
  } else {
    router.replace('/')
  }
}
