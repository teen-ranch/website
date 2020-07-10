import React from 'react'

import './loader.scss'

export default function Loader() {
    return (
        <div className='loaderContainer'>
            <div className='loader'>
                <svg className='foreground' viewBox="0 0 15 17" xmlns="http://www.w3.org/2000/svg"><path d="M7.43971 0L6.14026 2.53663C5.99283 2.8123 5.72865 2.78672 5.46446 2.63274L4.52361 2.12289L5.22484 6.01908C5.37228 6.7309 4.89922 6.7309 4.6657 6.42311L3.02388 4.49944L2.75731 5.47632C2.72659 5.60461 2.59145 5.73935 2.38866 5.70726L0.31252 5.2504L0.857807 7.32532C0.974569 7.78699 1.06559 7.97816 0.739963 8.09991L0 8.46392L3.57392 11.5022C3.71537 11.6171 3.78688 11.8238 3.73649 12.011L3.42369 13.0853C4.65426 12.9368 5.75751 12.804 6.98805 12.6557C7.0974 12.6543 7.2787 12.7515 7.27793 12.8833L7.11492 16.8192H7.71322L7.61903 12.8918C7.61828 12.7599 7.7827 12.6543 7.89205 12.6557C9.12259 12.8039 10.2258 12.9368 11.4564 13.0853L11.1436 12.011C11.0932 11.8238 11.1647 11.6171 11.3062 11.5022L14.8801 8.46392L14.1401 8.09992C13.8145 7.97815 13.9055 7.78699 14.0223 7.32532L14.5676 5.25041L12.4914 5.70727C12.2887 5.73935 12.1535 5.60461 12.1228 5.47633L11.8562 4.49945L10.2144 6.42311C9.98086 6.73089 9.50781 6.73089 9.65525 6.01908L10.3565 2.1229L9.41564 2.63274C9.15145 2.78673 8.88728 2.8123 8.73984 2.53663"/></svg>
                <svg className='background' viewBox="0 0 15 17" xmlns="http://www.w3.org/2000/svg"><path d="M7.43971 0L6.14026 2.53663C5.99283 2.8123 5.72865 2.78672 5.46446 2.63274L4.52361 2.12289L5.22484 6.01908C5.37228 6.7309 4.89922 6.7309 4.6657 6.42311L3.02388 4.49944L2.75731 5.47632C2.72659 5.60461 2.59145 5.73935 2.38866 5.70726L0.31252 5.2504L0.857807 7.32532C0.974569 7.78699 1.06559 7.97816 0.739963 8.09991L0 8.46392L3.57392 11.5022C3.71537 11.6171 3.78688 11.8238 3.73649 12.011L3.42369 13.0853C4.65426 12.9368 5.75751 12.804 6.98805 12.6557C7.0974 12.6543 7.2787 12.7515 7.27793 12.8833L7.11492 16.8192H7.71322L7.61903 12.8918C7.61828 12.7599 7.7827 12.6543 7.89205 12.6557C9.12259 12.8039 10.2258 12.9368 11.4564 13.0853L11.1436 12.011C11.0932 11.8238 11.1647 11.6171 11.3062 11.5022L14.8801 8.46392L14.1401 8.09992C13.8145 7.97815 13.9055 7.78699 14.0223 7.32532L14.5676 5.25041L12.4914 5.70727C12.2887 5.73935 12.1535 5.60461 12.1228 5.47633L11.8562 4.49945L10.2144 6.42311C9.98086 6.73089 9.50781 6.73089 9.65525 6.01908L10.3565 2.1229L9.41564 2.63274C9.15145 2.78673 8.88728 2.8123 8.73984 2.53663"/></svg>
            </div>
        </div>
    )
}