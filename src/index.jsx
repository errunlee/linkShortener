import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Appprovider} from './components/context'
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Appprovider>
		<App />    
    </Appprovider>
	</React.StrictMode>
)