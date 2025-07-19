import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation()

  // const renderNavLink = (to: string, text: string) => (
  //   <NavLink
  //     to={to}
  //     className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${
  //       isActive ? 'text-orange-500 font-medium' : 'text-gray-700 hover:text-orange-400'
  //     }`}
  //     onClick={() => setMobileMenuOpen(false)}
  //   >
  //     {t(text)}
  //   </NavLink>
  // )


  return (
    <header className="header">
    </header>
  )
}

export default Header
