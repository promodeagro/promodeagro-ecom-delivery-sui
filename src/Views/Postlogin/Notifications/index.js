import { Alert, SpaceBetween } from '@cloudscape-design/components'
import React from 'react'

const Notifications = () => {
  return (
    <SpaceBetween size='l' direction='vertical'>

      <Alert
        dismissible
        statusIconAriaLabel="info"
        type="info" header={
          <>
            <span>You have received a new </span>
            <span>Runsheet (5425)</span>
          </>
        }
      >
        30-08-2024  (11:30 Am)
      </Alert>

      <Alert
        dismissible
        statusIconAriaLabel="info"
        type="info" header={
          <>
            <span>You have received a new </span>
            <span>Runsheet (5425)</span>
          </>
        }
      >
        30-08-2024  (11:30 Am)
      </Alert>



    </SpaceBetween>
  )
}

export default Notifications