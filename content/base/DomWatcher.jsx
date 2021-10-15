import React, { useEffect } from 'react'

/**
 * This component watches DOM for any changes and keeps track of all the input
 * fields on the page
 */
function DomWatcher() {
  useEffect(() => {
    const observer = new MutationObserver(function () {
      console.log('Dom Watcher is Working')
    })
    observer.observe(document.getElementsByTagName('body')[0], {
      childList: true,
      subtree: true
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  return <div>Dom Watcher Embedded</div>
}

export default DomWatcher
