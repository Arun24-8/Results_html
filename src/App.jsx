/* Quick Git push cheatsheet for this project:
   1) First-time (local -> new remote):
      git init
      echo node_modules/ > .gitignore
      git add .
      git commit -m "Initial commit"
      # create remote on GitHub (web or `gh repo create <name> --public --source=. --remote=origin --push`)
      git remote add origin git@github.com:USERNAME/REPO.git   # or HTTPS
      git branch -M main
      git push -u origin main

   2) Usual workflow:
      git add .
      git commit -m "short message"
      git push

   3) If remote has new changes:
      git pull --rebase origin main
*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './shoppingfolder/pages/Mainpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainpage/>
    </>
  )
}

export default App
