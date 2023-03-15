import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Collapse from '@mui/material/Collapse'
import CheckIcon from 'src/icons/CheckIcon'
import ChevronIcon from 'src/icons/ChevronIcon'
import { Tooltip } from '@mui/material'

type Props = { services: { service: string; items: string[] }[] }

export default function Services({ services }: Props) {
  const [showItems, setShowItems] = useState('')

  const style = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      color: '#185395'
    },
    mainItem: {
      background: 'white',
      padding: '0.75rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      borderRadius: '0.5rem',
      display: 'flex',
      justifyContent: 'space-between'
    },
    itemWraper: {
      background: 'white',
      padding: '0.75rem',
      marginBottom: '0.5rem',
      borderRadius: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '0.9rem'
    },
    item: {
      display: 'grid',
      gridTemplateColumns: '1rem 1fr',
      alignItems: 'center'
    }
  }

  const renderItems = () => {
    return (
      <>
        {services.map(x => (
          <div key={x.service}>
            <Box
              sx={style.mainItem}
              onMouseEnter={() => setShowItems(x.service)}
              onMouseLeave={() => setShowItems('')}

              // onClick={() => setShowItems(st => (st === `${x.service}` ? '' : `${x.service}`))}
            >
              <div>
                {x.service === 'Rent Gurantee' ? (
                  <div>
                    {x.service}
                    <Tooltip title='Terms and conditions apply'>
                      <span style={{ color: 'red', cursor: 'pointer', padding: '0 5px' }}>*</span>
                    </Tooltip>
                  </div>
                ) : (
                  `${x.service}`
                )}
              </div>
              <div>
                <ChevronIcon />
              </div>
            </Box>

            <Collapse in={showItems === `${x.service}`} timeout='auto' unmountOnExit>
              <Box sx={style.itemWraper}>
                {x.items.map(i => (
                  <Box sx={style.item} key={Math.random()}>
                    <CheckIcon color={'#FED900'} />
                    {i}
                  </Box>
                ))}
              </Box>
            </Collapse>
          </div>
        ))}
      </>
    )
  }

  return <Box sx={style.root}>{renderItems()}</Box>
}
