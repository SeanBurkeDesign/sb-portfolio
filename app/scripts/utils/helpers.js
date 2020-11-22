import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { SET_LOCATION } from '../redux/actions/actionTypes'
import { routes } from '../router/routes'


export const updateLocation = () => {
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