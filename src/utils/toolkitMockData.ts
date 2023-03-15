const toolkit1 = [
  {
    service: 'Landlord Legal Cover',
    items: [
      'Repossession Fees',
      'Rent Protection',
      'Rent Recovery',
      'Alternative Accommodation',
      'Damage to Property',
      'Nuisance & Trespass',
      'Criminal Prosecution defence',
      'Contract Disputes',
      'Tax Enquiry',
      'Witness Expenses'
    ]
  },
  {
    service: 'Excess Protection',
    items: ['Protects your Excess in the event of a claim']
  },
  {
    service: 'Tax Helpline',
    items: ['Dedicated telephone number']
  },
  {
    service: 'Tenant Credit Check',
    items: ['2 Credit Check PA']
  },
  {
    service: 'Free Legal Documentation',
    items: ['Assured, short-hold tenancy agreement']
  }
]

const toolkit2 = [
  ...toolkit1.map(x => (x.service === 'Tenant Credit Check' ? { ...x, items: ['4 Credit Check PA'] } : x)),
  {
    service: 'Landlord Emergency',
    items: [
      'Heating Breakdown',
      'Electric/Gas/Water Breakdown',
      'Internal Plumbing & Drainage',
      'Toilet, Pest Infestation',
      'Windows/Doors/Locks',
      'Lost or Broken Keys',
      'Roof Damage',
      'Overnight Accommodation'
    ]
  }
]
const toolkit3 = [
  ...toolkit2.map(x => (x.service === 'Tenant Credit Check' ? { ...x, items: ['6 Credit Check PA'] } : x)),
  {
    service: 'Rent Gurantee',
    items: ['Rent Gurantee up to £2500.00 PCM']
  }
]

export const toolkitMockData = { toolkit1, toolkit2, toolkit3 }
