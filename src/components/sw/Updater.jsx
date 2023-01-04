import React from 'react';

import { withServiceWorkerUpdater } from '@3m1/service-worker-updater'

const Updater = (props) => {
    const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props
    return newServiceWorkerDetected ? (
    <div style={{backgroundColor: "red", padding: 25, margin: 25}} >
        New version detected.
        <button onClick={onLoadNewServiceWorkerAccept}>Update!</button>
    </div>
  ) : null // If no update is available, render nothing
}

export default withServiceWorkerUpdater(Updater)
