// import { useState, useRef, useEffect, useCallback } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { useTranslation } from 'react-i18next'
// import { checkAuthState, logout } from '@/store/slices/auth-slice'
//
// export const useHeader = () => {
//
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//
//   const authState = useSelector(state => state.auth)
//   const { isAuthenticated } = useSelector(state => state.auth)
//
//   const [langDropdownOpen, setLangDropdownOpen] = useState(false)
//   const [language, setLanguage] = useState(i18n.language)
//   const [userMenuOpen, setUserMenuOpen] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//
//   const userMenuRef = useRef(null)
//   const langDropdownRef = useRef(null)
//
//   const changeLanguage = useCallback((lng) => {
//     i18n.changeLanguage(lng)
//     localStorage.setItem('language', lng)
//     setLanguage(lng)
//     setLangDropdownOpen(false)
//     setMobileMenuOpen(false)
//   }, [i18n])
//
//   const handleLogout = useCallback(() => {
//     dispatch(logout())
//     navigate('/login')
//     setUserMenuOpen(false)
//     setMobileMenuOpen(false)
//   }, [dispatch, navigate])
//
//   const toggleMobileMenu = useCallback(() => {
//     setMobileMenuOpen(prev => !prev)
//   }, [])
//
//   useEffect(() => {
//     dispatch(checkAuthState())
//   }, [dispatch])
//
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
//         setLangDropdownOpen(false)
//       }
//       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
//         setUserMenuOpen(false)
//       }
//     }
//
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])
//
//   return {
//     t,
//     authState,
//     isAuthenticated,
//     language,
//     langDropdownOpen,
//     userMenuOpen,
//     mobileMenuOpen,
//     userMenuRef,
//     langDropdownRef,
//     changeLanguage,
//     handleLogout,
//     toggleMobileMenu,
//     setLangDropdownOpen,
//     setUserMenuOpen,
//     setMobileMenuOpen
//   }
// }
