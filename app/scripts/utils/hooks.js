import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { SET_LOCATION } from '../redux/actions/actionTypes'
import { routes } from '../router/routes'

export const useCurrentLocation = () => {
  const location = useLocation()
  const route = routes.find((route) => route.path === location.pathname)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: SET_LOCATION,
      location: {
        path: route.path,
        name: route.name
      }
    })
  })

}

export const useLoadingStatus = () => {
  const [state, setState] = useState({ loaded: false }) 

  useEffect(() => {
    setState({ loaded: true })
  }, [state.loaded])

  return state

}

export const useKeyboardStatus = () => {
  const [state, setState] = useState({ keyboard: false })
  
  const handleKeyDown = (event) => {
    if (event.key === 'Tab' || event.key === 'Enter' && !state.keyboard) {
      setState({ keyboard: true })
      document.querySelector('body').classList.add('keyboard-active')
    }
  }

  const handleClick = () => {
    if (state.keyboard) {
      setState({ keyboard: false })
      document.querySelector('body').classList.remove('keyboard-active')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleClick)
  }, [state.keyboard])

  return state
}