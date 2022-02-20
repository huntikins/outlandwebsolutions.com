// log the pageview with their URL
export const pageview = (url: string) => {
  window.gtag('config', 'UA-221009183-1', {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }: { action: string, params: any }) => {
  window.gtag('event', action, params)
}


declare global {
    interface Window {
        gtag: (type: string, config: string, data: any) => void
    }
}